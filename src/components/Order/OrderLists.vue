<template>
	<section>
		<Title title="주문목록"/>
		<Spinner v-if="!isLoaded" class="spinner"/>
		<ul class="order">
			<OrderList
				v-for="(list, i) in orderLists" :key="i"
				:list="list" @numItems="numItems"
			/>
		</ul>
		<br>
	</section> 
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Title from '@/components/Title/Title'
import OrderList from '@/components/Order/OrderList'
import Spinner from '@/components/UI/Spinner/Spinner'

export default {
	components: {
		Title,
		OrderList,
		Spinner
	},
	props: {
		numItems: {
			type: Array, 
			default: function () { return [] }
		}
	},
	computed: {
		...mapState({
			orderLists(state) { 
				return state.lists;
			}
		})
	},
	created() {
		this.$http
		.get('https://shopping-goods.firebaseio.com/order.json')
		.then(res => {
			let count = 1;
			for(let key in res.data) {
				res.data[key].key = count++;
				res.data[key].hashedKey = key;
				this.lists.push(res.data[key]);
			}
			this.setLists(this.lists);
			this.isLoaded = true;
		});
	},
	data() {
		return {
			lists: [],
			isLoaded: false
		}
	},
	methods: {
		...mapActions({
			setLists: 'setLists'
		})
	}
}
</script>

<style lang="scss" scoped>
	.spinner {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>

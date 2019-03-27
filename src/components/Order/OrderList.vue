<template>
	<div class="container">
		<div class="col-1">
			<p>주문자명: {{ list.name }}</p>
			<p>연락처: {{ list.phone }}</p>
			<p>이메일: {{ list.email }}</p>
      <p>수령장소: {{ list.reception }} </p>
      <div class="total">합계: {{ list.price.toLocaleString() }} 원</div>
		</div>
		<div class="col-2">
			<v-icon @click.native="(e) => deleteItem(e, item)" name="trash-alt" class="btn-delete"/>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Input from '@/components/UI/Input/Input';

export default {
	components: {
		Input
	},
	props: {
		list: {
			type: Object,
			default: {}
		}
	},
	computed: {
		...mapState({
			orderLists(state) { 
				return state.lists;
			},
			totalPrice(state) { 
				return state.price;
			}
		})
	},
	data() {
		return {
			lists: []
		}
	},
	methods: {
		...mapActions({
			setLists: 'setLists',
			setPrice: 'setPrice'
		}),
		deleteItem(e, value) {
			this.$http.delete(`https://shopping-goods.firebaseio.com/order/${value.hashedKey}.json`)
		.then(res => { 
			console.log(res);
			if(res.status === 200) {
				this.lists = this.orderLists.filter(item => item.key !== value.key);
				this.setLists(this.lists);
			}
		});
		}
	}
}
</script>

<style lang="scss" scoped>
	.container {
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
		border-radius: 10px;
		margin: 30px;
		padding: 20px;
		display: flex;
		justify-content: space-around;

		img {
			height: 200px;
		}

		.shipping-price, .inventory-check {
			color: #808080;
			font-size: 0.9rem;
		}

		.col-2 {
			display: flex;
			justify-content: center;
			align-items: center;

			.btn-delete {
				margin-left: 20px;
			}
		}
	}
</style>


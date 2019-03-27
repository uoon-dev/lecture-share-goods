<template>
	<section>
		<Title title="장바구니"/>
		<Spinner v-if="!isLoaded" class="spinner"/>
		<ul class="item">
			<CartItem
				v-for="(item, i) in cartItems" :key="i"
				:item="item" @numItems="numItems"
			/>
		</ul>
		<div class="total">합계 {{ totalPrice.toLocaleString() }} 원</div>
		<br>
		<Contact class="contact"/>
	</section> 
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Title from '@/components/Title/Title'
import CartItem from '@/components/Cart/CartItem'
import Contact from '@/components/Contact/Contact'
import Spinner from '@/components/UI/Spinner/Spinner'

export default {
	components: {
		Title,
		CartItem,
		Contact,
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
			cartItems(state) { 
				return state.items;
			},
			totalPrice(state) { 
				return state.price;
			}
		})
	},
	created() {
		this.$http
		.get('https://shopping-goods.firebaseio.com/cart.json')
		.then(res => {
			let count = 1;
			for(let key in res.data) {
				res.data[key].key = count++;
				res.data[key].hashedKey = key;
				this.items.push(res.data[key]);
			}
			this.setItems(this.items);
			this.items.forEach(item => {
				this.setPrice(this.totalPrice + (item.price * item.order));
			});
			this.isLoaded = true;
		});
	},
	data() {
		return {
			items: [],
			isLoaded: false
		}
	},
	methods: {
		...mapActions({
			setItems: 'setItems',
			setPrice: 'setPrice'
		})
	}
}
</script>

<style lang="scss" scoped>
	.total {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		margin-right: 50px;
	}

	.spinner {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	.contact {
		text-align: center;
		margin: 0 auto;
	}
</style>

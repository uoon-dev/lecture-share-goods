<template>
	<div class="container">
		<img :src="item.options.img" alt="">
		<div class="col-1">
			<p>상품명: {{ item.name }}</p>
			<p>색깔: {{ item.options.color }} / 사이즈: {{ item.options.size }}</p>
			<p>가격: {{ item.price.toLocaleString() }}원</p>
			<p class="shipping-price">+ 배송료 {{ item.shipping.price.toLocaleString() }}원</p>
			<div class="inventory">
				<p class="inventory-check" v-if="item.options.stock > 10"></p>
				<p class="inventory-check" v-else-if="item.options.stock <= 10 && item.options.stock > 0">재고가 얼마 남지 않았습니다.</p>
				<p class="inventory-check" v-else>재고 없음</p>
			</div>
		</div>
		<!-- const arr = []; -->
		<!-- typeof arr -->
		<!-- toString.call(arr); -->
		<div class="col-2">
			<Input element-type="input" 
			type="number"
			:value="item.order.toString()" 
			:changed="(e) => updateItemAmount(e, item)"
			/>
			<v-icon @click.native="(e) => deleteItem(e, item)" name="trash-alt" class="btn-delete"/>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Input from '@/components/UI/Input/Input';
import ItemImage from '@/components/UI/ItemImage/ItemImage'

export default {
	components: {
		Input,
		ItemImage
	},
	props: {
		item: {
			type: Object,
			default: {}
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
	data() {
		return {
			items: []
		}
	},
	methods: {
		...mapActions({
			setItems: 'setItems',
			setPrice: 'setPrice'
		}),
		updateItemAmount(e, value) {
			this.setPrice(0);
			let firebaseRef = `https://shopping-goods.firebaseio.com/cart/${value.hashedKey}/order.json`;
			this.setItems = this.cartItems.map(item => {
				if(item.key === value.key) {
					console.log(item.order);
					console.log(e.target.value);
					item.order = parseInt(e.target.value);
					this.$http.put(firebaseRef, item.order);
				}
				return item;
			});
			this.cartItems.forEach(item => {
				this.setPrice(this.totalPrice + (item.price * item.order));
			});
		},
		deleteItem(e, value) {
			this.$http.delete(`https://shopping-goods.firebaseio.com/cart/${value.hashedKey}.json`)
		.then(res => { 
			console.log(res);
			if(res.status === 200) {
				this.items = this.cartItems.filter(item => item.key !== value.key);
				this.setItems(this.items);
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


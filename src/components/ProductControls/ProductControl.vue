<template>
<ul class="item">
	<li v-for="(product, i) in products" :key="i">
		<ItemImage 
			:src="product.options[0].img"
		/>
		<p class="name">{{ product.name }}</p>
		<Input
			element-type="select"
			:options="product.options"
			:changed="(e) => updateValue(e, product)"
		/>
		<p class="provider">{{ product.provider }}</p>
		<div class="bottom-price">
			<p class="price">{{ product.price }}원</p>
			<button class="cart-button" @click="addToCart(product)">
				<!-- @click="$emit('addToCart', { product, options })" -->
				<v-icon name="cart-plus"/>
			</button>
		</div>
		<p class="shipping-price">+ 배송료 {{ product.shipping.price }}원</p>
	</li>
	</ul>
</template>

<script>
import { mapState } from 'vuex'
import Input from '@/components/UI/Input/Input'
import ItemImage from '@/components/UI/ItemImage/ItemImage'

export default {
	props: {
	},
	components: {
		Input,
		ItemImage
	},
	data() {
		return { 
			selectedItem: '',
			options: ''
		}
	},
	computed: {
		...mapState({
			products(state) {
				return state.products
			} 
			// products() {
			// 	return this.$store.state.products
			// }
		})
	},
	created() {
		// this.selectedItem = new String(this.product.options[0].id);
		// this.selectedItem = this.product.options[0].id;
		// this.options = this.product.options[0];
		// console.log(this.selectedItem);
	},
	methods: {
		updateValue(event, product) {
			console.log(event);
			this.options = product.options.filter(option => option.id == event.target.value)[0];
		}, 
		addToCart(product) {
			const data = { ...product };
			// console.log(data);
			// console.log(data.options);
			if(!this.options) {
				data.options = data.options[0];
			} else {
				data.options = this.options;
			}
			this.$http.post('https://shopping-goods.firebaseio.com/cart.json', data);
			this.notified();
		},
		notified() {
			this.$notify({
				group: 'foo',
				title: '성공',
				text: '장바구니에 추가되었습니다!'
			});
		}
	}
}
</script>

<style lang="scss" scoped>
.item {
	display: flex;
	justify-content: start;
	flex-wrap: wrap;

li {
	list-style: none;
	margin-right: 40px;
	p {
		margin: 5px;
	}
	.name {
		font-size: 1.2rem; 
		font-weight: 500;
	}
	.provider {
		font-size: 1.15rem; 
	}
}

.bottom-price {
	display: flex;
	justify-content: space-between;
	align-items: center;
	.price {
		font-size: 1.15rem; 
	}
	.cart-button {
		border: none;
	}
}
}
</style>
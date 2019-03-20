<template>
	<section>
		<Title title="장바구니"/>
		<Spinner v-if="!isLoaded" class="spinner"/>
		<ul class="item">
			<CartItem
				v-for="(item, i) in items" :key="i"
				:item="item" @numItems="numItems"
				:update-item-amount="updateItemAmount"
				:delete-item="deleteItem"
			/>
		</ul>
		<div class="total">합계 {{ totalPrice }} 원</div>
		<br>
		<Contact class="contact"/>
	</section> 
</template>

<script>
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
	created() {
		this.$http
		.get('https://shopping-goods.firebaseio.com/cart.json')
		.then(res => {
			let count = 1;
			for(let key in res.data) {
				res.data[key].key = count++;
				res.data[key].hashedKey = key;
				// res.data[key].amount = 1;
				this.items.push(res.data[key]);
			}
			this.items.forEach(item => {
				this.totalPrice = this.totalPrice + (item.price * item.order)
			});
			this.isLoaded = true;
		});
	},
	data() {
		return {
			items: [],
			totalPrice: 0,
			isLoaded: false
		}
	},
	methods: {
		updateItemAmount(e, value) {
			this.totalPrice = 0;
			let firebaseRef = `https://shopping-goods.firebaseio.com/cart/${value.hashedKey}/order.json`;
			this.items = this.items.map(item => {
				if(item.key === value.key) {
					console.log(item.order);
					console.log(e.target.value);
					item.order = parseInt(e.target.value);
					this.$http.put(firebaseRef, item.order);
				}
				return item;
			});
			this.items.forEach(item => {
				this.totalPrice = this.totalPrice + (item.price * item.order);
			});
		},
		deleteItem(e, value) {
			this.$http.delete(`https://shopping-goods.firebaseio.com/cart/${value.hashedKey}.json`)
		.then(res => { console.log(res);
			if(res.status === 200) {
				this.items = this.items.filter(item => item.key !== value.key);
			}
		});
			console.log(value.key);
		}
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

<template>
	<section class="products">
		<Spinner v-if="!isLoaded" class="spinner"/>
		<Title title="상품목록"/>
		<ul class="item">
			<ProductControl
				v-for="(product, i) in products" :key="i"
				:product="product"
				@addToCart="addToCart"
			/>
		</ul>
	</section>
</template>

<script>
import Title from '@/components/Title/Title'
import ProductControl from './ProductControl';
import Spinner from '@/components/UI/Spinner/Spinner'

export default {
	components: {
		Title,
		ProductControl,
		Spinner
	},
	created() {
		this.$http
		.get('https://shopping-goods.firebaseio.com/goods.json')
		.then(res => {
			this.products = res.data
			this.isLoaded = true;
		}); 
		console.log('created..', this.products);
	},
	data() {
		return {
			items: 5,
			products: [],
			isLoaded: false
		};
	},
	methods: {
		notified() {
			this.$notify({
				group: 'foo',
				title: '성공',
				text: '장바구니에 추가되었습니다!'
			});
		},
		addToCart({product, options}) {
			const data = { ...product };
			data.options = data.options[0];
			console.log(data);
			console.log(data.options);
			this.$http.post('https://shopping-goods.firebaseio.com/cart.json', data);
			this.notified();
		}
	}
}
</script>

<style lang="scss" scoped>
.item {
	display: flex;
	justify-content: start;
	flex-wrap: wrap;
}
.spinner {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
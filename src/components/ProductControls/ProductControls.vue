<template>
	<section class="products">
		<Spinner v-if="!isLoaded" class="spinner"/>
		<Title title="상품목록"/>
		<!-- <ul class="item"> -->
			<ProductControl
			/>
		<!-- </ul> -->
	</section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
			// this.products = res.data
			this.setProducts(res.data);
			// this.$store.state.products = res.data;
			this.isLoaded = true;
		}); 
		console.log('created..', this.products);
	},
	data() {
		return {
			items: 5,
			isLoaded: false
		};
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
	methods: {
		...mapActions({
			setProducts: 'setProducts'
		})
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
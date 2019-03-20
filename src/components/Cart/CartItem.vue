<template>
	<div class="container">
		<img :src="item.options.img" alt="">
		<div class="col-1">
			<p>상품명: {{ item.name }}</p>
			<p>색깔: {{ item.options.color }} / 사이즈: {{ item.options.size }}</p>
			<p>가격: {{ item.price }}원</p>
			<p class="shipping-price">+ 배송료 {{ item.shipping.price }}원</p>
			<div class="inventory">
				<p class="inventory-check" v-if="item.options.stock > 10"></p>
				<p class="inventory-check" v-else-if="item.options.stock <= 10 && item.options.stock > 0">재고가 얼마 남지 않았습니다.</p>
				<p class="inventory-check" v-else>재고 없음</p>
			</div>
		</div>
		<div class="col-2">
			<Input element-type="input" 
			type="number"
			:value="item.order" 
			:changed="(e) => updateItemAmount(e, item)"
			/>
			<v-icon @click.native="(e) => deleteItem(e, item)" name="trash-alt" class="btn-delete"/>
		</div>
	</div>
</template>

<script>
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
		},
		updateItemAmount: {
			type: Function,
			default: () => {}
		},
		deleteItem: {
			type: Function,
			default: () => {}
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


<template>
	<section>
		<Title title="장바구니"/>
		<ul class="item">
			<CartItem
				v-for="(item, i) in items" :key="i"
				:item="item" 
			/>
		</ul>
		<div class="total">합계 {{ totalPrice }} 원</div>
		<Contact />
		
	</section> 
</template>

<script>
import Title from '@/components/Title/Title'
import CartItem from '@/components/Cart/CartItem'
import Contact from '@/components/Cart/Contact'

export default {
    components: {
        Title,
				CartItem,
				Contact
    },
    created() {
        this.$http
        .get('https://share-goods-2a8f1.firebaseio.com/cart.json')
        .then(res => {
            for(let key in res.data) {
                this.items.push(res.data[key]);
            }

            this.items.forEach(item => {
                this.totalPrice = this.totalPrice + item.price
            });
            // console.log(this.totalPrice);
        });
    },
    data() {
        return {
            items: [],
            totalPrice: 0
        }
    }
}
</script>

<style lang="scss" scoped>
	.total {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		// align-items: left;
	}
</style>

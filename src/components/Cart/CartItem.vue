<template>
    <div class="container">
        <img src="https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-270,h-350" alt="">
        <div>
            <p>상품명: {{ item.name }}</p>
            <p>색깔: {{ item.options.color }} / 사이즈: {{ item.options.size }}</p>
            <p>가격: {{ item.price }}원</p>
            <p class="shipping-price">+ 배송료 {{ item.shipping.price }}원</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: {}
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
        justify-content: flex-start;
        img {
            height: 200px;
            margin-right: 20px; 
        }
        .shipping-price {
            color: #808080;
            font-size: 0.9rem;
        }
    }
</style>


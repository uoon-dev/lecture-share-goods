<template>
    <select>
        <option v-for="(option, i) in product" :key="i">
            {{ option.color }} {{ option.size }} 재고: {{ option.stock }}
        </option>
    </select>
</template>

<script>
export default {
    props: {
        product: Array,
        default: {}
    }
}
</script>

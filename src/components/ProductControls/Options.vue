<template>
    <select>
        <option v-for="(option, i) in options" :key="i">
            {{ option.color }} {{ option.size }} 재고: {{ option.stock }}
        </option>
    </select>
</template>

<script>
export default {
    props: {
        options: Array,
        default: {}
    }
}
</script>

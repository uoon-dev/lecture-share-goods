<template>
<div> 
    <input v-if="type === 'input'" type="text" :value="value" @change="updateValue">
    <select v-if="type === 'select'" :value="value" @change="updateValue">
        <option :value="option.id" v-for="(option, i) in options" :key="i" >
            {{ option.color }} {{ option.size }} 재고: {{ option.stock }}
        </option>
    </select>
</div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            default: []
        },
        updateValue: {
            type: Function,
            default: () => {}
        }
    }
}
</script>

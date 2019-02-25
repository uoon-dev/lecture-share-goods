<template>
  <div>
    <input v-if="type === 'input'" type="text">
    <select v-else>
      <option
        v-for="(option, i) in options"
        :key="i"
      >{{ option.color }} {{ option.size }} 재고: {{ option.stock }}</option>
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
    options: {
      type: Array,
      default: []
    }
  }
};
</script>

<template>
	<div> 
		<img :src="src" alt="">
	</div>
</template>

<script>
// spread operator as attributes 
export default {
	props: {
		src: {
			type: String,
			default: ''
		},
		options: {
			type: Array,
			default: function () { return [] }
		}
	}
}
</script>

<style lang="scss" scoped>
img {
  width: 270px;
}
</style>

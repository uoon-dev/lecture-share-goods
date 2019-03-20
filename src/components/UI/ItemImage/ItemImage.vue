<template>
	<div> 
		<img :src="options[0].img" alt="">
	</div>
</template>

<script>
// Spread operator as attributes 
export default {
	props: {
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

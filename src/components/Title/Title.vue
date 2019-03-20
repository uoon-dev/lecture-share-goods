<template>
	<div class="title">{{ title }}</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.title {
	text-align: center;
	font-size: 32px;
	font-weight: 600;
	margin: 40px;
}
</style>

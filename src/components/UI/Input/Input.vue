<template>
	<div> 
		<input v-if="elementType === 'input'" 
		:type="type" :value="value" 
		:min="min" :max="max"
		@input="changed">

		<select v-if="elementType === 'select'" :value="value" @input="changed">
			<option :value="option.id" v-for="(option, i) in options" :key="i" >
				{{ option.color }} {{ option.size }} 재고: {{ option.stock }}
			</option>
		</select>
	</div>
</template>

<script>
// Spread operator as attributes 
export default {
	props: {
		elementType: {
			type: String,
			required: true
		},
		type: {
			type: String,
			default: "text"
		},
		value: {
			type: Number, 
			required: true
		},
		min: {
			type: String,
			default: "1"
		},
		max: {
			type: String,
			default: "100"
		},
		options: {
			type: Array,
			default: function () { return [] }
		},
		changed: {
			type: Function,
			default: () => {}
		}
	}
}
</script>

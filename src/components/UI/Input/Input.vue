<template>
	<div> 
		<!-- v-bind: ==> : 
		v-on: ==> @
		-->
		<input v-if="elementType === 'input'" 
		:type="type" :value="value" 
		:min="min" :max="max"
		@input="changed">

		<input v-if="elementType === 'text'" 
		:type="type" :placeholder="placeholder" 
		>

		<select v-if="elementType === 'select'" @input="changed">
			<option :value="option.id" v-for="(option, i) in options" :key="i" >
				{{ option.color }} {{ option.size }} 재고: {{ option.stock }}
			</option>
		</select>
	</div>
</template>

<script>
// spread operator as attributes 
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
			type: String, 
			default: '0'
		},
		placeholder: {
			type: String,
			default: ''
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

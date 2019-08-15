<template>
	<div class="a9-container">
		<test-info></test-info>
		<toolTab :focusIn="tooltabSwitch" @input="navSelect"></toolTab>
		<div class="homepage">
			<homepage :refocus="homePageFocus" @input="toLeft"></homepage>
		</div>
	</div>
</template>
<script lang="js">
import toolTab from './tooltabs.vue'
import _ from 'lodash'
import homepage from './homepage';
import testInfo from '@/components/common/comps/testInfo.vue'
export default {
	name: 'Template-A9',
	components: {
		toolTab,
		homepage,
		testInfo
	},
	watch: {
	},
	methods: {
		toLeft: function (val) {
			if (val === 'toLeft') {
				this.tooltabSwitch = !this.tooltabSwitch;
			}
		},
		navSelect: function (_v) {
			this.homePageFocus = !this.homePageFocus;
		}
	},
	data: function () {
		return {
			tooltabSwitch: false,
			homePageFocus: false,
		}
	},
}
</script>
<style lang="scss" scoped>
.a9-container {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #000;
	.homepage {
		margin-left: 180px;
		width: calc(100% - 180px);
		height: 100%;
		overflow: hidden;
		background-color: #000;
		position: relative;
		z-index: 100;
	}
}
</style>



<template>
	<div @keydown="keyDown" id="home-page">
		<!-- <div v-if="showFixedTag" class="genre-tags">
			<gener-tag id="tag" ref="tag" @input="getGenerTag"></gener-tag>
		</div> -->
		<div class="home-page">
			<section class="hot-pickers" id="genre-0">
				<div class="logo">
					<i class="iconfont icon605_74"></i>
				</div>
				<div class="hot-pickers-wrapper">
					<template v-if="keyVisualProgram">
						<div class="hot-pickers-info">
							<div class="hot-pickers-drama-detail">
								<div>
									<label class="live-label">LIVE</label>
									<label class="season-exclusive"><i class="iconfont icon605_74"></i> EXCLUSIVE</label>
								</div>
								<div>
									<h1 class="series-title">
										{{ keyVisualProgram.titleType === '01' ? keyVisualProgram.title : keyVisualProgram.titleEng }}
									</h1>
								</div>
								<div>
									<label class="series-imdb"></label>
									<label class="season-info"></label>
									<label class="season-info"></label>
								</div>
								<div class="series-info">
									<label v-if="keyVisualProgram.programType !== 'Video'" class="season"></label>
									<label class="high-light">{{ keyVisualProgram.highlightMessage }}</label>
								</div>
								<div>
									<p class="season-synopsis">
										{{ keyVisualProgram.synopsis }}
									</p>
									<p v-if="keyVisualProgram.editorPick" class="note">
										<label>Editor's Note </label>
										{{ keyVisualProgram.editorPickNote | comma }}
									</p>
								</div>
								<div class="watch-button"></div>
							</div>
						</div>
					</template>
				</div>
				<div class="hot-pickers-bar">
					<slide-bar ref="genre-0" :title="'Hot Picks'" @input="getKeyVisualProgram" :noQuickview="true" :slideId="0"></slide-bar>	
				</div>
				<div v-if="keyVisualProgram" class="hot-pickers-back">
					<div class="mask"></div>
					<img class="series-poster" :src="keyVisualProgram.artWorksList[0][0].fileURL" alt=""/>
				</div>
			</section>
			<section style="padding-bottom: 60px;">
				<div class="genre-tags">
					<gener-tag id="tag" ref="tag" @input="getGenerTag"></gener-tag>
				</div>
				<section class="bar">
					<slide-bar @input="getKeyVisualProgram" :title="'Most Popular'" ref="genre-1" id="genre-1" :slideId="1"></slide-bar>
				</section>
				<section class="bar">
					<slide-bar @input="getKeyVisualProgram" :title="'New Arrival'" ref="only-1" id="only-1" :slideId="2"></slide-bar>
				</section>
				<section class="bar">
					<slide-bar @input="getKeyVisualProgram" :title="'Kids'" ref="genre-2"  id="genre-2" :slideId="3"></slide-bar>
				</section>
				<section class="bar">
					<slide-bar @input="getKeyVisualProgram" :title="'Movie List'" ref="genre-3" id="genre-3" :slideId="4"></slide-bar>
				</section>
				<section class="bar">
					<slide-bar @input="getKeyVisualProgram" :title="'Most Popular'" ref="genre-4" id="genre-4" :slideId="5"></slide-bar>
				</section>
			</section>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Provide, Inject } from 'vue-property-decorator'
// import Vue from 'vue'
import slideBar from './focus-slide-bar.vue';
import BScroll from 'better-scroll';
import GenerTag from './genreTag.vue';
import * as Program from './programInterface';
import _ from 'lodash';
@Component({
  components: {
		slideBar,
		GenerTag
	}
})
export default class HomePage extends Vue {
	@Prop({ default: false }) refocus?: boolean;
	nowFocusBar: any = null;
	nowFocusBarIndex: number = 0;
	barLength: number = 0;
	bscroll: BScroll | null = null;
	scrollList: Array<string> = ['genre-0', 'tag', 'genre-1', 'only-1', 'genre-2', 'genre-3', 'genre-4'];
	keyVisualProgram: Program.SeasonProgram | Program.SeriesProgram | Program.VideoProgram | Program.Program | null = null;
	nowGenerType: string = '';
	showFixedTag: boolean = false;
	getGenerTag (val: string) {
		if (val !== 'toLeft' && val !== 'toRight') {
			this.nowGenerType = val;
		} else if (val === 'toLeft') {
			this.commonEmit(val);
		}
	}
	async getKeyVisualProgram (val: any) {
		if (val === 'toLeft') {
			this.commonEmit(val);
		} else if (val === 'toTop') {
			(this.bscroll as any).scrollTo(0, 0, 600);
			this.nowFocusBarIndex = 0;
			this.nowFocusBar = this.$refs[this.scrollList[this.nowFocusBarIndex]];
			await this.$nextTick();
			this.nowFocusBar.setFocus();
			this.showFixedTag = false;
		} else {
			if (this.scrollList[this.nowFocusBarIndex] === 'genre-0') this.keyVisualProgram = _.cloneDeep(val);
		}
	}
	commonEmit (val: any) {
		this.$emit('input', val);
	}
	@Watch('refocus')
	setFocus () {
		this.nowFocusBar.setFocus();
	}
	get getTagHeight () {
		let { top } = (document.querySelector('.home-page') as HTMLElement).getBoundingClientRect();
		console.log(top)
		return Math.abs(top) + 110 + 'px';
	}
  	async keyDown (_evt: any) {
		_evt.stopPropagation();
		_evt.preventDefault();
		switch (_evt.keyCode) {
			case 37:
			case 39:
			case 13:
			case 8:
				this.nowFocusBar.onKeydown(_evt);
				break;
			case 38:
				if (this.nowFocusBarIndex === 0) break;
				this.nowFocusBarIndex--;
				this.nowFocusBar = this.$refs[this.scrollList[this.nowFocusBarIndex]];
				await this.$nextTick();
				this.scrollToEle(document.querySelector('#'+this.scrollList[this.nowFocusBarIndex]), _evt.keyCode);
				this.nowFocusBar.setFocus();
				break;
			case 40:
				if (this.nowFocusBarIndex === this.barLength - 1) break;
				this.nowFocusBarIndex++;
				this.nowFocusBar = this.$refs[this.scrollList[this.nowFocusBarIndex]];
				await this.$nextTick();
				this.scrollToEle(document.querySelector('#'+this.scrollList[this.nowFocusBarIndex]), _evt.keyCode);
				this.nowFocusBar.setFocus();
				break;
		}
	}
	_initCompScroll () {
		this.bscroll = new BScroll('#home-page', {
			scrollX: false,
			scrollY: true,
			bounce: false,
			momentum: false
		});
	}
	scrollToEle (el: HTMLElement | null, keyCode: number) {
		if (this.bscroll && el) {
			switch (this.nowFocusBarIndex) {
				case 0:
					this.bscroll.scrollTo(0, 0, 500);
					break;
				case 1:
					switch (keyCode) {
						case 38:
							this.showFixedTag = false;
							// (document.querySelector('.genre-tags') as HTMLElement).classList.remove('tagfixed');
							// (document.querySelector('#' + this.scrollList[2]) as HTMLElement).classList.remove('ontop-gener');
							break;
						case 40:
							this.bscroll.scrollTo(0, -1000, 500);
							break;
					}
					break;
				case this.barLength - 1:
					this.bscroll.scrollToElement(el, 600, 0, -800);
					break;
				default:
					switch (keyCode) {
						case 38:
							if (this.nowFocusBarIndex > 2) this.bscroll.scrollToElement(el, 600, 0, -600);
							break;
						case 40:
							if (this.nowFocusBarIndex === 2) {
								this.showFixedTag = true;
								// (document.querySelector('.genre-tags') as HTMLElement).classList.add('tagfixed');
								// (document.querySelector('#' + this.scrollList[2]) as HTMLElement).classList.add('ontop-gener');
							}
							if (this.nowFocusBarIndex > 3) this.bscroll.scrollToElement(el, 600, 0, -600);
							break;
					}
					break;
					
			}
		}
	}
	mounted () {
		this.nowFocusBar = this.$refs[this.scrollList[this.nowFocusBarIndex]];
		// this.nowFocusBar.setFocus();
		this.barLength = this.scrollList.length;
		// Object.keys(this.$refs).filter(ele => ele.indexOf('bar'))
		// .length;
		this._initCompScroll();
	}
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
#home-page {
	width: 100%;
	height: 100%;
	overflow-x: unset;
	overflow-y: hidden;
	font-family: 'myFont';
}
.home-page {
	position: relative;
}
.logo {
	width: 261px;
	height: 32px;
	position: absolute;
	left: 0;
	top: 40px;
	z-index: 1000;
	color: #F26F21;
	.iconfont {
		font-size: 32px;
	}
}
.hot-pickers {
	min-height: 1000px;
	position: relative;
	.hot-pickers-back {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 996;
		img {
			height: 100%;
			z-index: 996;
			position: relative;
		}
		.mask {
			position: absolute;
			background: linear-gradient(90deg, rgba(0,0,0,1), rgba(0,0,0,1), rgba(0,0,0,0),  rgba(0,0,0,0));
			left: 0;
			top: 0;
			bottom: 0;
			right: 0;
			z-index: 997;
		}
	}
	&-wrapper {
		display: flex;
		align-items: center;
		min-height: 700px;
		width: 100%;
		position: relative;
		.hot-pickers-info {
			position: relative;
			z-index: 998;
			width: 45%;
			text-align: left;
			.live-label {
				height: 30px;
				color: #fff;
				font-size: 21px;
				line-height: 30px;
				margin-right: 20px;
				background-color: #D0021B;
				padding: 4px 9px;
				border-radius: 3px;
			}
			.season-exclusive {
				font-size: 32px;
				color: #fff;
				font-weight: 200;
				.iconfont {
					font-size: 28px;
					color: #F26F21;
				}
			}
			.series-info {
				margin-bottom: 15px;
				.high-light,
				.season {
					font-size: 30px;
					line-height: 37px;
					color: #fff;
				}
				.high-light {
					color: #F26F21;
				}
			}
			.season-synopsis,
			.note {
				font-size: 30px;
				color: #fff;
				line-height: 38px;
				overflow: hidden;
				max-height: 107px;
				margin-bottom: 20px;
				label {
					font-size: 30px;
					font-weight: bold;
				}
			}
			.series-title {
				font-size: 60px;
				line-height: 72px;
				color: #fff;
				font-weight: bold;
				margin-bottom: 5px;
			}
		}
	}
}
.tagfixed {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1100;
}
.bar,
.hot-pickers-bar {
	// position: relative;
	height: 340px;
}
.ontop-gener {
	margin-top: 120px;
}
// .hot-pickers-bar {
// 	position: absolute;
// 	bottom: 0;
// }
</style>




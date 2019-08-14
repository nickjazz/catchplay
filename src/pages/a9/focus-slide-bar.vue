<template>
	<div class="slide-bar" :ref="`slide-bar-${ localSlideId }`">
		<div class="title">{{ title }}</div>
		<div :ref="`slide-bar-wrapper-${ localSlideId }`" class="slide-bar-wrapper" :id="`slide-bar-wrapper-${ localSlideId }`">
			<ul :ref="`slide-bar-wrapper-${ localSlideId }-ul`" style="display: inline-block;">
				<li
					:ref="`slide-${ localSlideId }-${ index }`"
					v-for="(item, index) in dataNew" 
					@click="itemClick(index)"
					@blur="blurMounted" 
					@focus="focusMounted"
					:key="index" 
					tabindex="1">
					<template v-if="nowFocusIndex === index && quickViewMode">
						<div class="quick-view">
							<div class="quick-view-poster">
								<img onerror="this.src=require('@/assets/img/a9/catchplay.png');this.onerror=null;" :src="item.artWorksList[0][0].fileURL"/>
							</div>
							<div class="quick-view-info">
								<h2 style="margin-bottom: ">{{ nowSelectData.titleType === '01' ? nowSelectData.title : nowSelectData.titleEng }}</h2>
								<div>
									<label v-if="nowSelectData.programType === 'Series'" class="seasons">
										{{ nowSelectData.totalSeasons }}Seasons
									</label>
									<label class="high-light">
										{{ nowSelectData.highlightMessage }}
									</label>
								</div>
								<div class="other">
									<template></template>
								</div>
								<ul class="cast">
									<li v-for="(item1, index1) in nowSelectCasts" :key="index1">
										<label>{{ item1[0] }}</label>
										<label>{{ item1[1] }}</label>
									</li>
								</ul>
								<div></div>
								<div>
									<p>{{ nowSelectData.synopsis }}</p>
								</div>
							</div>
						</div>
					</template>
					<template v-else>
						<div class="slide-bar-artwork">
							<img onerror="this.src=require('@/assets/img/a9/catchplay.png');this.onerror=null;" :src="item.artWorksList[0][0].fileURL"/>
						</div>
						<div class="slide-bar-title">
							<h2>{{ item.titleType === '01' ? item.title : item.titleEng }}</h2>
						</div>
					</template>
				</li>
				<li style="vertical-align: top;display: inline-flex;justify-content: center;align-items: center;font-size: 35px;" v-if="!noQuickview" :ref="`slide-${ localSlideId }-${ dataNew.length }`" tabindex="1">
					SEE ALL
				</li>
			</ul>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Provide, Inject } from 'vue-property-decorator';
import _ from 'lodash';
import BScroll from 'better-scroll';
import * as Program from './programInterface';
@Component({
  components: {
	}
})
export default class SlideBar extends Vue {
	@Prop({ default: -1 }) slideId?: number;
	@Prop({ default: () => { return [] } }) data?: Array<Program.SeriesProgram | Program.VideoProgram>;
	@Prop({ default: false }) noQuickview?: boolean;
	@Prop({ default: '' }) title?: string;
	// title: string = 'Hot Pickers';
	localSlideId: number = -1;
	bscroll: any = null;
	nowFocusEle: any = null;
	nowFocusIndex: number = 0;
	quickviewTiomeout: any = null;
	scrollCount: number = 0;
	dataNew: Array<Program.SeriesProgram | Program.VideoProgram> = [
		new Program.ProgramExp(),
		new Program.ProgramExp(),
		new Program.ProgramExp(),
		new Program.ProgramExp(),
		new Program.ProgramExp(),
		new Program.ProgramExp(),
		new Program.ProgramExp(),
		new Program.ProgramExp(),
		new Program.ProgramExp(),
		new Program.ProgramExp(),
		new Program.ProgramExp(),
		new Program.ProgramExp(),
		new Program.ProgramExp(),
		new Program.ProgramExp(),
		new Program.ProgramExp(),
		new Program.ProgramExp(),
		new Program.ProgramExp(),
		new Program.ProgramExp(),
		new Program.ProgramExp(),
		new Program.ProgramExp(),
	];
	quickViewMode: boolean = false;
	async mounted () {
		this.watchSlideId();
		await this.$nextTick();
		if (this.localSlideId > -1) this._initCompScroll();
		this.nowFocusEle = (this.$refs[`slide-${ this.localSlideId }-0`] as any)[0];
		if (this.localSlideId === 0) this.setFocus();
	}
	get nowSelectCasts () {
		let type = _.uniq(this.nowSelectData.castAndCrewList.map(ele => ele[0].roleName));
		return Array.from(type, (ele: string) => {
			let temp: string = 
			this.nowSelectData.castAndCrewList
				.filter(item => item[0].roleName === ele)
				.map(item1 => item1[0].actorName)
				.join(',')
			return [ ele, temp ];
		 })
	}
	get nowSelectData () {
		return this.dataNew[this.nowFocusIndex];
	}
	_initCompScroll () {
		this.bscroll = new BScroll(`#slide-bar-wrapper-${ this.localSlideId }`, {
			scrollX: true,
			scrollY: false,
			bounce: false,
			momentum: false
		})
	}
	onKeydown (_evt: any) {
		switch (_evt.keyCode) {
			case 37:
				if (this.nowFocusIndex === 0) {
					this.commonEmit('toLeft');
					// this.$emit('toLeft')
					return;
				}
				this.nowFocusIndex--;
				break;
			case 39:
				if (this.nowFocusIndex === this.dataNew.length) {
					this.commonEmit('toRight');
					// this.$emit('toRight')
					return;
				}
				this.nowFocusIndex++;
				break;
			case 8:
				if (this.nowFocusIndex === 0) {
					this.commonEmit('toTop');
				} else {
					this.bscroll.scrollTo(0, 0 ,500);
					this.nowFocusIndex = 0;
				}
		}
		this.nowFocusEle = Array.isArray(this.$refs[`slide-${ this.localSlideId }-${ this.nowFocusIndex }`]) ? 
			(this.$refs[`slide-${ this.localSlideId }-${ this.nowFocusIndex }`] as Array<any>)[0] :
			this.$refs[`slide-${ this.localSlideId }-${ this.nowFocusIndex }`];
		this.setFocus();
	}
	setFocus () {
		let { left, right } = this.nowFocusEle.getBoundingClientRect();
		right = document.body.clientWidth - right;
		if (right < 0 || left < 180) this.scrollToEle(this.nowFocusEle);
		this.nowFocusEle.focus();
		this.commonEmit( _.cloneDeep(this.dataNew[this.nowFocusIndex]));
	}
	focusMounted () {
		(this.$refs[`slide-bar-${ this.localSlideId }`] as HTMLElement).classList.add('ontop');
		if (!this.noQuickview) {
			this.quickviewTiomeout = setTimeout(() => {
				this.quickViewMode = true;
			}, 2000);
		}
	}
	blurMounted () {
		(this.$refs[`slide-bar-${ this.localSlideId }`] as HTMLElement).classList.remove('ontop');
		if (!this.noQuickview) {
			this.quickViewMode = false;
			clearTimeout(this.quickviewTiomeout);
		}
	}
	scrollToEle (el: HTMLElement) {
		if (this.bscroll) this.bscroll.scrollToElement(el, 600, -700);
	}
	itemClick (index: number) {
		this.nowFocusIndex = index;
		this.nowFocusEle = Array.isArray(this.$refs[`slide-${ this.localSlideId }-${ this.nowFocusIndex }`]) ? 
			(this.$refs[`slide-${ this.localSlideId }-${ this.nowFocusIndex }`] as Array<any>)[0] :
			this.$refs[`slide-${ this.localSlideId }-${ this.nowFocusIndex }`];
		this.setFocus();
	}
	@Watch('slideId')
	watchSlideId () {
		if (typeof this.slideId === 'number' && this.slideId > -1) this.localSlideId = this.slideId;
	}
	@Watch('data')
	watchData () {
		// if (this.data !== undefined) this.dataNew = _.cloneDeep(this.data);
	}
	commonEmit (value: any) {
		this.$emit('input', value);
	}
}
</script>
<style lang="scss" scoped>
.ontop {
	z-index: 1000!important;
}
.slide-bar {
	width: 100%;
	margin-top: 15px;
	z-index: 999;
	position: relative;
	.title {
		font-size: 34px;
		color: #F26F21;
		line-height: 41px;
		font-weight: bold;
		text-align: left;
		line-height: 41px;
		margin-bottom: 20px;
	}
	&-wrapper {
		position: relative;
		>ul {
			// height: 272px;
			position: relative;
			white-space: nowrap;
			z-index: 998;
			>li {
				display: inline-block;
				width: 384px;
				height: 272px;
				transition: transform ease .2s;
				background-color: #3A3A3A;
				margin: 0 6px;
				position: relative;
				z-index: 998;
				box-shadow: 0px 0px 16px rgba(0,0,0,1);
				.slide-bar-title {
					height: 56px;
					white-space: nowrap;
					height: 50px;
					padding-left: 12px;
					text-align: left; 
					h2 {
						overflow: hidden;
						text-overflow: ellipsis;
						display: block;
						height: 100%;
						color: #fff;
						line-height: 50px;
						font-size: 26px;
					}
				}
				.slide-bar-artwork {
					height: 216px;
					img {
						height: 100%;
						width: 100%;
					}
				}
				.quick-view {
					display: block;
					width: 600px;
					height: 650px;
					background-color: #000;
					position: absolute;
					top: -180px;
					left: -30%;
					z-index: 1115;
					transform: scale(.83);
					box-shadow: 0px 0px 16px rgba(0,0,0,1);
					&-poster {
						height: 337px;
						img {
							height: 100%;
							width: 100%;
						}
					}
					&-info {
						padding: 20px 30px;
						height: 317px;
						h2 {
							color: #fff;
							font-size: 38px;
							display: block;
							overflow-x: hidden;
							overflow-y: unset;
							text-overflow: ellipsis;
							white-space: nowrap;
							text-align: left;
							line-height: 42px;
							height: 42px;
							margin-bottom: 7px;
						}
						.seasons {
							font-size: 24px;
							color: #fff;
							overflow-x: hidden;
							text-overflow: ellipsis;
						}
						.high-light {
							font-size: 24px;
							color: #f26f21;
							overflow-x: hidden;
							text-overflow: ellipsis;
						}
						.other {
							height: 56px;
							display: flex;
							align-items: center;
							flex-wrap: wrap;
						}
						.cast {
							margin-bottom: 15px;
							li {
								display: flex;
								justify-content: space-between;
								background-color: #000;
								height: 23px;
								line-height: 23px;
								width: 100%;
								label {
									text-align: left;
									color: #999999;
									font-size: 20px;
									overflow-x: hidden;
									text-overflow: ellipsis;
									&:nth-of-type(1) {
										flex: 3;
									}
									&:nth-of-type(2) {
										flex: 7;
									}
								}
							}
						}
						p {
							overflow: hidden;
							text-overflow: ellipsis;
							font-size: 24px;
							word-break: break-all;
							white-space: pre-wrap;
							height: 74px;
							text-align: left;
							color: #fff;
							line-height: 24px;
						}
					}
				}
				&:focus {
					transform: scale(1.2);
					transition: transform ease .2s;
					z-index: 1001!important;
					.quick-view {
						z-index: 1002!important;	
					}
				}
				&:nth-of-type(1) {
					margin: 0 6px 0 0;
					.quick-view {
						left: -14%;
					}
					&:focus {
						transform: scale(1.2) translateX(9%);
						transition: transform ease .2s;
					}
				}
				&:nth-last-of-type() {
					margin: 0;
					&:focus {
						transform: scale(1.2) translateX(-9%);
						transition: transform ease .2s;
					}
				}
			}
		}
	}
}
</style>


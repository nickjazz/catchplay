<template>
    <div class="genre-tags">
        <ul>
            <li 
                :ref="`genre-tags-${ index }`"
                v-for="(item, index) in tags" 
                :key="index" 
                tabindex="1">
                <div class="genre-tags-item">
                    {{ item }}
                </div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Provide, Inject } from 'vue-property-decorator'
// import Vue from 'vue'
import BScroll from 'better-scroll';
import * as Program from './programInterface';
@Component({
    components: {
		
    }
})
export default class GenerTag extends Vue {
    tags: Array<string> = ['All', 'FREE', 'SINGLE RENTAL', 'MOVIES LOVERS UNLIMTED'];
    // nowSelectTag: string = '';
    nowFocusIndex: number = 0;
    nowFocusEle: HTMLElement | null = null;
    nowSelectTagIndex: number = 0;
    commonEmit (val: string) {
        this.$emit('input', val);
    }
    get nowSelectTag (): string {
        return this.tags[this.nowSelectTagIndex];
    }
    onKeydown (_evt: any) {
        switch (_evt.keyCode) {
            case 37:
                if (this.nowFocusIndex === 0) {
                    this.commonEmit('toLeft');
                    return;
                }
                this.nowFocusIndex--;
                break;
            case 39:
                if (this.nowFocusIndex === this.tags.length - 1) {
                    this.commonEmit('toRight');
                    return;
                }
                this.nowFocusIndex++;
                break;
            case 13:
                this.nowSelectTagIndex = this.nowFocusIndex;
                this.commonEmit(this.nowSelectTag);
                this.setActive(this.nowSelectTagIndex);
                break;
        }
		this.nowFocusEle = Array.isArray(this.$refs[`genre-tags-${ this.nowFocusIndex }`]) ? 
			(this.$refs[`genre-tags-${ this.nowFocusIndex }`] as Array<any>)[0] :
            this.$refs[`genre-tags-${ this.nowFocusIndex }`];
        this.setFocus();
    }
    setActive (selectIndex: number) {
        this.tags.forEach((ele, index) => {
		    let temp = Array.isArray(this.$refs[`genre-tags-${ index }`]) ? 
			(this.$refs[`genre-tags-${ index }`] as Array<any>)[0] :
            this.$refs[`genre-tags-${ index }`];
            temp.classList.remove('active');
        });
        let selected = Array.isArray(this.$refs[`genre-tags-${ selectIndex }`]) ? 
        (this.$refs[`genre-tags-${ selectIndex }`] as Array<any>)[0] :
        this.$refs[`genre-tags-${ selectIndex }`];  
        selected.classList.add('active');
    }
    setFocus () {
        if (this.nowFocusEle) this.nowFocusEle.focus();
    }
    mounted () {
        this.nowFocusEle = Array.isArray(this.$refs[`genre-tags-${ this.nowFocusIndex }`]) ? 
            (this.$refs[`genre-tags-${ this.nowFocusIndex }`] as Array<any>)[0] :
            this.$refs[`genre-tags-${ this.nowFocusIndex }`];
        this.setActive(0);
    }
}
</script>
<style lang="scss" scoped>
    .genre-tags {
        width: 100%;
        background-color: #3A3A3A;
        color: #CDCDCD;
        margin-top: 20px;
        margin-bottom: 25px;
        ul {
            display: flex;
        }
        &-item {
            font-size: 30px;
            padding: 0 45px;
            line-height: 62px;
            font-weight: bold;
        }
        li.active {
            .genre-tags-item {
                color: #f26f21;
            }
        }
        li {
            &:focus {
                background-color: #000000;
                color: #f26f21;
                border-top: 5px solid #ddd;
                border-bottom: 5px solid #ddd; 
                border-image: linear-gradient(to right, #4cf26f21, #f26f21, #f26f21, #4cf26f21) 14 14;
                box-sizing: border-box;
                .genre-tags-item {
                    line-height: 52px;
                }
            }
        }
    }
</style>




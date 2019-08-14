// import Velocity from 'velocity-animate' // 在组件中引入
// import 'velocity-animate/velocity.ui.js'
import BScroll from "better-scroll";
import { Vue, Component, Prop } from "vue-property-decorator";
// import VueResource from 'vue-resource'
export default {
  directives: {
    focus: {
      // Cannot read property 'focus' of undefined
      // inserted
      update: function(el, { value }) {
        // // // // // // console.log('set focus')
        // // // // // // console.log(el, {value})
        // // // // // // console.log(el)
        // // // // // // console.log(value)
        el.focus();
        // if (value) {
        //   el.focus()
        // }
      }
    }
  },
  methods: {
    getModName: function(_key) {
      let strArr = [];
      if (_key && _key !== "") strArr = _key.split("-");
      return strArr;
    },
    setItemSignup: function() {
      // // // // // // console.log('setItemSignup fun')
    },
    setItemSignin: function(_param) {
      // // // // // // console.log('setItemSignin fun')
      if (!_param) return;
      let Vue = this;
      let refsEl;
      switch (Vue.nav.itemFocus) {
        case "compBtnSigninMobile-compModSignin0":
          // // // // // // console.log('aha')
          Vue.$set(Vue.signin, "step", "SigninWelcome"); // signinMobileStep1
          // Vue.$set(Vue.nav, 'item')
          break;
        case "compBtnSigninFacebook-compModSignin0":
          break;
      }
      // // // // // // console.log('_refsElName')
      // // // // // // console.log(_refsElName)
      refsEl = Vue.$refs[_param.refsElName];
      // // // // // // console.log('refsEl setItemSignin')
      // // // // // // console.log(refsEl)
      // refsEl.setItemFocusComps(_param)
      refsEl.setItemFocusComps({
        itemFocus: Vue.nav.itemFocus,
        itemLast: _param.itemLast,
        refsElName: _param.refsElName, // refsElName
        keyCode: 13
      });
    },
    setItemAccount: function(_param) {
      // // // // // // console.log('setItemAccount fun _refsElName')
      // // // // // // console.log(_param)
      if (!_param) return;
      let Vue = this;
      let refsEl = {};
      let refsElName = _param._refsElName ? _param.refsElName : "";
      if (Vue.nav.itemFocus.indexOf("compBtnSign") >= 0) {
        // // // // // // console.log('if btnSign')
        // // // // // // console.log('Vue.page.pageCurr')
        // // // // // // console.log(Vue.page.pageCurr)
        Vue.$nextTick(() => {
          // // // // // // console.log('setItemAccount next')
          // // // // // // console.log('Vue.page.pageCurr: ' + Vue.page.pageCurr)
          // // // // // // console.log(Vue.$refs.pageSignup)
          switch (Vue.page.pageCurr) {
            case "index":
              // // // // // // console.log('case index')
              if (Vue.nav.itemFocus.indexOf("compModAccount0") >= 0) {
                refsEl = Vue.$refs["compModAccount0"];
                refsElName = "compModAccount0";
              } else if (
                Vue.nav.itemFocus.indexOf("compModAccountModSignup") >= 0
              ) {
                refsEl = Vue.$refs["compModAccountModSignup"];
                refsElName = "compModAccountModSignup";
              }

              // refsEl = Vue.$refs['compModSignup']
              break;
            case "signup":
              // // // // // // console.log('case signup')
              // refsEl = Vue.$refs['compModSignup']
              refsEl = Vue.$refs["compModSignup0"];
              refsElName = "compModSignup0";
              break;
            case "Signin":
              // // // // // // console.log('case signin')
              // // // // // // console.log('case signup signin')
              refsEl = Vue.$refs["compModSignin0"];
              refsElName = "compModSignin0";
              break;
          }
          // // // // // // console.log('refsEl setItemAccount')
          if (refsEl) {
            refsEl.setItemFocusComps({
              itemFocus: Vue.nav.itemFocus,
              itemLast: _param.itemLast,
              refsElName: refsElName,
              keyCode: _param.keyCode
            });
          }
        });
      }
    },
    stackFocusFun: function(_param) {
      // // // // // // console.log('stackFocusFun fun')
      // // // // // // console.log(_param)
      let Vue = this;
      let stackL = 0;
      let itemFocusReturn = {};
      let itemLastReturn = {};
      let itemFocus = {};
      let itemLast = {};
      // Vue.stackFocus.pop()
      if (_param.type === "pop") {
        // return
        stackL = _param.stackFocus.length;
        itemFocusReturn = _param.stackFocus[stackL - 1];
        itemLastReturn = _param.stackFocus[stackL - 2];
        _param.stackFocus.pop();
        if (Vue.nav.stackFocus)
          Vue.$set(Vue.nav, "stackFocus", _param.stackFocus);
        return {
          stack: _param.stackFocus,
          // stepSignup: Vue.nav && Vue.nav.signup && Vue.nav.signup.step ? Vue.nav.signup.step : Vue.dataNew.nav.signup.step,
          // stepSignin: Vue.nav && Vue.nav.signin && Vue.nav.signin.step ? Vue.nav.signin.step : Vue.dataNew.nav.signin.step,
          itemFocus: itemFocusReturn,
          itemLast: itemLastReturn
        };
      } else if (_param.type === "push") {
        stackL = _param.stackFocus.length;
        itemLast = _param.stackFocus[stackL - 1];
        itemFocus = _param.itemPush;
        _param.stackFocus.push(_param.itemPush);
        if (Vue.nav.stackFocus)
          Vue.$set(Vue.nav, "stackFocus", _param.stackFocus);
        return {
          stack: _param.stackFocus,
          // stepSignup: Vue.nav && Vue.nav.signup && Vue.nav.signup.step ? Vue.nav.signup.step : Vue.dataNew.nav.signup.step,
          // stepSignin: Vue.nav && Vue.nav.signin && Vue.nav.signin.step ? Vue.nav.signin.step : Vue.dataNew.nav.signin.step,
          itemFocus: itemFocus,
          itemLast: itemLast
        };
      }
    },
    linkNextTickFun: function(_param) {
      // // // // console.log('linkNextTickFun fun')
      // // // // console.log(_param)
      let Vue = this;
      Vue.$set(Vue.nav, "itemLast", _param.itemLast);
      Vue.$nextTick(() => {
        switch (_param.keyCode) {
          case 13:
            Vue.$set(
              Vue.nav,
              "stackRes",
              Vue.stackFocusFun({
                type: "push",
                itemPush: {
                  // item: Vue.nav.itemFocus,
                  item: _param.itemLast, // Vue.nav.itemLast,
                  refsElName: _param.refsElName
                  // stepSignup: Vue.nav && Vue.nav.signup && Vue.nav.signup.step ? Vue.nav.signup.step : Vue.dataNew.nav.signup.step,
                  // stepSignin: Vue.nav && Vue.nav.signin && Vue.nav.signin.step ? Vue.nav.signin.step : Vue.dataNew.nav.signin.step
                },
                stackFocus: Vue.nav.stackFocus
              })
            );
            break;
        }
        Vue.setItemFocusIndex(_param);
        let detailsCon = Vue.$refs["detailsCon"];
        if (detailsCon) Vue.page.pageScrollMax = detailsCon.scrollHeight;
      });
    },
    getItemFocus: async function(_param) {
      // console.log('getItemFocus fun *******************', _param)
      // // console.log(_param.quickview)
      // _param.itemFocus
      if (!_param) return;
      let Vue = this;
      // // console.log('move need to set page.quickview false', Vue.page)
      if (Vue.page) Vue.$set(Vue.page, 'quickview', false)
      if (_param.itemFocus === "compNavItem_4-compModNavMain0") return;
      Vue.$set(Vue.nav, "param", _param);
      Vue.$set(Vue.nav, "itemFocus", _param.itemFocus);
      Vue.$set(Vue.nav, "keyCode", _param.keyCode);
      let link = _param.link;
      
      if (_param.quickview) {
        Vue.countEnterTime(_param)
      } 
      if (_param.keyvisual) {
        // // console.log('keyvisual: ' + _param.keyvisual)
      }

      if (_param.keyCode === 8 || _param.keyCode === 461) {
        Vue.keyCodeCase(_param);
        return;
      }
      if (!link || link === "") {
        if (
          Vue.compListVideo &&
          _param.itemFocus.indexOf(Vue.compListVideo.itemName) >= 0 &&
          _param.itemLast === "compModLanguage0-compModLanguage0"
        ) {
          // // // // // // console.log('if language')
          _param.itemFocus =
            Vue.compListVideo.itemName + Vue.nav.compListVideoFocus;
        }
        if (
          Vue.nav.param !== undefined &&
          Vue.nav.param !== null &&
          Vue.nav.param.itemFocus &&
          Vue.nav.param.itemFocus !== ""
        ) {
          // // // // // // console.log('has param aaa')
          // // // // // // console.log(_param)
          Vue.$set(Vue.nav, "itemFocus", _param.itemFocus);
          Vue.$set(Vue.nav, "itemLast", _param.itemLast);
          let itemFocus = Vue.nav.itemFocus;
          await Vue.navTabs(_param);
          // // // // // // console.log('here test funcommon 1')
          if (_param.itemFocus.indexOf("compBtnSignup-compModAccount") >= 0)
            return;
          if (Vue.nav.param.focusOut) {
            // // // // console.log('if focusout')
            Vue.setItemFocusIndex(_param);
            Vue.setItemId("old");
            // Vue.$set(Vue.nav, 'itemLast', Vue.nav.param.itemLast)
          } else {
            // // // // // // console.log('if not focusout')
            if (itemFocus.indexOf(Vue.nav.compLangItem) >= 0) {
              // // // // // // console.log('language changed ??')
              if (
                _param.itemLast.indexOf(Vue.language.itemName) >= 0 &&
                Vue.language.data[_param.itemLastId].key !==
                  Vue.language.languageSelected.key
              ) {
                // // // // // // console.log('language changed????????')
                // // // // // // console.log(Vue.language.data[_param.itemLastId].key)
                Vue.page.loading = true;
                Vue.setLanguage(Vue.language.data[_param.itemLastId].key);
                Vue.navTabChange("language");
                // // // // // // console.log('itemFocus: ' + itemFocus)
                _param.itemFocus = `${Vue.nav.compModNavItem}_${
                  Vue.nav.compModNavFocus
                }-compModNavMain0`;
                _param.refsElName = "index";
                Vue.setItemFocusIndex(_param); // Vue.nav.param
                Vue.setItemId("old");
                // Vue.setItemId('curr')
              }

              Vue.$nextTick(() => {
                // // // // // // console.log('language nexttick')
              });
            } else {
              // // // // // // console.log('not lang')
              Vue.setItemFocusIndex(_param); // Vue.nav.param
              Vue.setItemId("curr");
            }
          }
        }
      } else {
        Vue.getItemFocusNext(_param);
      }
    },
    getItemFocusNext: function(_param) {
      let Vue = this;
      let link = _param.link;
      if (
        link.indexOf("video.html?video=") >= 0 ||
        link.indexOf("linkVideoPlay_") >= 0 ||
        link.indexOf("linkCategoryLvl0Id_") >= 0 ||
        link.indexOf("linkCategoryLvl1Id_") >= 0 ||
        link.indexOf("linkActorId_") >= 0
      ) {
        // Vue.$nextTick(() => {
        //   Vue.showPageDetails(link)
        // })
        Vue.keyCodeCase({
          keyCode: _param.keyCode,
          // itemFocus: Vue.nav.itemFocus,
          itemFocus: _param.itemFocus,
          itemLast: _param.itemLast,
          refsElName: "index",
          link: link
        });
      } else {
        // // // // // // console.log('before showFunSwitch fun')
        // // // // // // console.log(_param)
        Vue.showFunSwitch(_param);
      }
    },
    setItemLayer: function(_param) {
      // // // // // // console.log('setItemLayer fun')
      let Vue = this;
      let refsEl = {};
      let refsElName = "";
      if (Vue.page.dialog) {
        let conf = {};
        switch (Vue.page.dialogCurr) {
          case "exit":
            conf = {
              type: "layer-dialog",
              dialog: Vue.page.dialogCurr,
              dialogFocus: "Do you want to exit Watanflix?",
              nav: Vue.nav
            };
            break;
          case "contactus":
            conf = {
              type: "layer-dialog",
              dialog: Vue.page.dialogCurr,
              dialogTit: "Contact us<br>",
              dialogTxt:
                "For more support,<br>please email to Watanflix.support@zeasn.com",
              nav: Vue.nav
            };
            break;
        }
        Vue.$set(Vue, "dialogConf", conf);
        refsEl = Vue.$refs["layerDialog"];
        refsElName = "layerDialog";
      } else if (Vue.page.loading) {
        refsEl = Vue.$refs["layerLoading"];
        refsElName = "layerLoading";
      } else if (Vue.page.welcome) {
        refsEl = Vue.$refs["layerWelcome"];
        refsElName = "layerWelcome";
      }
      refsEl.setItemFocusComps({
        itemFocus: Vue.nav.itemFocus,
        itemLast: _param.itemLast,
        keyCode: _param.keyCode,
        refsElName: refsElName
      });
    },
    setItemList: function() {
      let Vue = this;
      let refsEl = {};
      let refsElName = "";
      if (Vue.nav.itemFocus.indexOf(Vue.nav.compListSeason0Item) >= 0) {
        Vue.getListMoveFun("compListSeason0");
        refsEl = Vue.$refs["compListSeason0"];
        refsElName = "compListSeason0";
      } else if (Vue.nav.itemFocus.indexOf(Vue.nav.compListSeason1Item) >= 0) {
        Vue.getListMoveFun("compListSeason1");
        refsEl = Vue.$refs["compListSeason1"];
        refsElName = "compListSeason1";
      } else if (Vue.nav.itemFocus.indexOf(Vue.nav.compListSeason2Item) >= 0) {
        Vue.getListMoveFun("compListSeason2");
        refsEl = Vue.$refs["compListSeason2"];
        refsElName = "compListSeason2";
      }
      refsEl.setItemFocusComps({
        itemFocus: Vue.nav.itemFocus,
        refsElName: refsElName
      });
    },
    modCheck: async function(_param) {
      let Vue = this;
      let key = _param.itemFocus ? _param.itemFocus : "";
      if (!key) return;
      let refsElName = _param.refsElName ? _param.refsElName : "";
      let modNameArr = Vue.getModName(key);
      // // // console.log("modNameArr=>", modNameArr);
      let modName = modNameArr[1]; // 0 为模块+内部子模块名 1为模块名
      if (_param.itemFocus === "btnDetailsPlay")
        Vue.page.showRelatedCon = false;
      // // // console.log("Vue.page =>", Vue.page);
      let ifDialog =
        Vue.page &&
        (Vue.page.dialog || Vue.page.loading || Vue.page.welcome) &&
        (!modName || modName.indexOf("layer") < 0);
      // 退格
      if (_param.itemFocus === 'func-0-comp') {
        // // // console.log('need nav')
        Vue.$set(Vue.nav, 'itemFocus', _param.itemFocus)
        Vue.keyCodeCase({
          keyCode: _param.keyCode,
          itemFocus: _param.itemFocus,
          itemLast: _param.itemLast,
          refsElName: "index"
        })
        return
      } else if ((_param.keyCode === 8 || _param.keyCode === 461) && ifDialog) {
        Vue.setItemLayer(_param);
      } else if (modNameArr.length === 1) {
        // 不存在子模块
        ifDialog ? Vue.setItemLayer(_param) : Vue.setItemBasic(_param);
      } else if (
        modNameArr.length === 2 &&
        (modName === "index" || modName === "")
      ) {
        Vue.setItemBasic(_param);
      } else {
        if (refsElName !== modName) {
          // modNameLast
          Vue.pageCheck(_param);
          await Vue.$nextTick();
          if (modName.toLowerCase().indexOf("list") >= 0)
            await Vue.getListMoveFun(modName);
          let refsEl = null;
          refsEl = Vue.$refs[modName];
          refsEl.setItemFocusComps({
            itemFocus: _param.itemFocus,
            itemLast: _param.itemLast,
            refsElName: modName, // refsElName
            keyCode: _param.keyCode
          });
        } else {
          Vue.setItemBasic(_param);
        }
      }
    },
    setItemFocusIndex: async function(_param) {
      if (!_param) return;
      let Vue = this;
      await Vue.$nextTick();
      Vue.modCheck(_param);
    },
    setItemBasic: function(_param) {
      if (!_param) return;
      let Vue = this;
      let key = _param.itemFocus;
      if (_param.type === "push") {
        Vue.$set(
          Vue.nav,
          "stackRes",
          Vue.stackFocusFun({
            type: "push",
            itemPush: {
              item: _param.itemLast,
              refsElName: _param.refsElName
            },
            stackFocus: Vue.nav.stackFocus
          })
        );
      } else if (_param.type === "pop") {
        Vue.$set(
          Vue.nav,
          "stackRes",
          Vue.stackFocusFun({
            type: "pop",
            stackFocus: Vue.nav.stackFocus
          })
        );
      }
      if (key && key !== "") {
        let itemFocus = Vue.getItemFocusCurr(_param);
        $(itemFocus).focus();
        if (Vue.nav && Vue.nav.itemFocus) {
          Vue.$set(Vue.nav, "itemFocus", key);
          Vue.$set(Vue.nav, "itemLast", _param.itemLast);
        } else if (Vue.data.nav && Vue.data.nav.itemFocus) {
          Vue.$set(Vue.data.nav, "itemFocus", key);
          Vue.$set(Vue.data.nav, "itemLast", _param.itemLast);
        }
      }
    },
    formSubmit: function() {},
    formCancel: function() {},
    setAppInfo: async function(_param) {
      let Vue = this;
      if (!Vue.$route.params.app || Vue.$route.params.app === "")
        Vue.$route.params.app = _param.appId;
      Vue.appInfo = await Vue._global.getAppInfo(Vue.$route.params.app);
      if (Vue.appInfo.iconStr && Vue.appInfo.iconStr !== "") {
        Vue.iconStr = require(`@/assets/img/appicons/${Vue.appInfo.iconStr}`);
      }
      if (Vue.appInfo.playType && Vue.appInfo.playType !== "") {
        Vue.playType = Vue.appInfo.playType;
      }
      if (Vue.appInfo.app && Vue.appInfo.app !== "") {
        Vue.titleStr = Vue.appInfo.titleStr;
      }
      Vue.pathFrom = Vue.$store.state.pathFrom;
      if (_param && _param.templateNumber) {
        Vue._global.templateNumber = _param.templateNumber;
        Vue._global.templateId = "Template-" + Vue._global.templateNumber;
      }
      Vue._global.productId = Vue.appInfo.app; // 'national_geographic_app ' // bbc_news_app shoutcast_app
      Vue._global.ajaxParams.params.maxResults = 100;
      // templateNumber
    },
    cKeydown: async function(_event) {
      // console.log('cKeydown fun')
      _event.stopPropagation();
      let Vue = this;
      if (Vue.nav.itemFocus.indexOf("comp") >= 0 && _event.keyCode !== 13) {
        return;
      }
      // // // console.log("Vue.nav", Vue.nav);
      let itemLast = Vue.nav.itemFocus;
      Vue.setItemFocusOut();
      if (_event.keyCode < 48 && _event.keyCode > 192) _event.preventDefault();
      switch (_event.keyCode) {
        case 37:
        case 39:
        case 38:
        case 40:
          if (Vue.nav) {
            Vue.$set(Vue.nav, "keyCode", _event.keyCode);
          } else if (Vue.dataNew.nav) {
            Vue.$set(Vue.dataNew.nav, "keyCode", _event.keyCode);
          }
          if (Vue.nav.param && Vue.nav.param.focusOut) {
            Vue.setItemFocusIndex({
              keyCode: _event.keyCode,
              itemFocus: Vue.nav.itemFocus,
              itemLast: Vue.nav.itemLast,
              refsElName: "index"
            });
          } else {
            if (Vue.nav.itemFocus.indexOf("comp") < 0) {
              Vue.keyCodeCase({
                keyCode: _event.keyCode,
                itemFocus: Vue.nav.itemFocus,
                itemLast: itemLast,
                refsElName: "index"
              });
            }
          }
          break;
        case 13:
        case 8:
        case 461: // backspace
        let modNameArr = Vue.getModName(Vue.nav.itemFocus)
        let modName = modNameArr[modNameArr.length - 1]
        if (modName.indexOf("mod") >= 0) {
          switch (modName) {
            case "compModSignin0":
              Vue.setItemSignin({
                keyCode: _event.keyCode,
                itemFocus: Vue.nav.itemFocus,
                itemLast: itemLast,
                refsElName: "index"
              });
              break;
            case "compModSignup0":
              // // // // // // console.log('case signup')
              Vue.setItemSignup({
                keyCode: _event.keyCode,
                itemFocus: Vue.nav.itemFocus,
                itemLast: itemLast,
                refsElName: "index"
              });
              break;
          }
        } else {
          let param = {
            keyCode: _event.keyCode,
            itemFocus: Vue.nav.itemFocus,
            itemLast: itemLast,
            refsElName: "index"
          };
          Vue.keyCodeCase(param);
        }
        break;
      }
    },
    testClick: function(_type) {
      let Vue = this;
      Vue.setLanguage(_type);
    },
    appClose: function() {
      window.opener = null;
      window.open("", "_self", "");
      window.close(); // 以上三行IE可关闭
      window.open("", "_top");
      window.top.close();
      window.location.href = "about:blank ";
      window.close(); // 上面两次关闭适用于FireFox等其他浏览器
    },
    getItemFocusNew: async function(_param) {
      let Vue = this;
      let $itemFocus = {};
      $itemFocus = Vue.$refs[_param.itemFocus];
      return $itemFocus;
    },
    getItemFocusCurr: function(_param) {
      // // console.log('getItemFocusCurr fun')
      let Vue = this;
      let $itemFocus = {};
      let key = _param.itemFocus
      if (Vue.$refs[key] && Vue.$refs[key][0]) {
        $itemFocus = Vue.$refs[key][0];
      } else if (Vue.$refs[key]) {
        $itemFocus = Vue.$refs[key];
      }
      return $itemFocus;
    },
    countEnterTime: function (_param) {
      // console.log('countEnterTime fun a9', _param) // , _param.itemFocusObj
      let Vue = this
      let key = _param.itemFocus
      // // console.log('key', key)
      // // console.log('Vue.$refs[key]', Vue.$refs[key])
      // // console.log('_$itemFocus')
      // // console.log(_$itemFocus)
      // // // console.log('itemFocus aaa', itemFocus)
      // // // console.log('$(itemFocus)', $(itemFocus))
      // Vue.showQuickView(_param)
      Vue.showQuickView(_param)
      // Vue.showKeyVisual(_param)
    },
    showKeyVisual: function (_param) {
      let Vue = this
      if (!_param ||
        !_param.keyvisual ||
        _param.keyvisual.index === false ||
        _param.keyvisual.index === undefined ||
        _param.keyvisual.index === null) return
    },
    showQuickView: function (_param) {
      let Vue = this
      console.log('showQuickView fun', _param)
      // // // console.log('Vue.page', Vue.page)
      // // // console.log('quickviewT')
      if (!_param ||
        !_param.quickview ||
        _param.quickview.index === false ||
        _param.quickview.index === undefined ||
        _param.quickview.index === null) return
      // if (_param && _param.quickview && _param.quickview.index === false &&
      //   _param.quickview.index === undefined &&
      //   _param.quickview.index === null) {
      //   console.log('_param.quickview.index: ', _param.quickview.index)
      // }
      if (Vue.page) {
        // console.log('starting set')
        // // // console.log('Vue.page', Vue.page)
        // // // console.log('posValue', posValue)
        let param = {
          width: '600px',
          height: '450px',
          left: `${_param.quickview.layerX - 95}px`,
          top: `${_param.quickview.layerY}px`
        }
        // console.log(param)
        Vue.$set(Vue.page, 'quickviewStyleObj', param)
        Vue.page.quickviewT = setTimeout(function () {
          Vue.$set(Vue.page, 'quickview', true)
          // console.log('after set')
          clearTimeout(Vue.page.quickviewT)
        }, 1000)
      }
    },
    setItemId: function(_type) {
      let Vue = this;
      if (Vue.nav.param.itemLast.indexOf(Vue.nav.compModNavItem) >= 0) {
        switch (_type) {
          case "old":
            Vue.nav.compModNavFocus = Vue.nav.param.itemLastId;
            Vue.navData.itemFocus = Vue.nav.param.itemLastId;
            break;
          case "curr":
            Vue.nav.compModNavFocus = Vue.nav.param.itemFocusId;
            Vue.navData.itemFocus = Vue.nav.param.itemFocusId;
            break;
        }
      } else if (
        Vue.nav.param.itemLast.indexOf(Vue.nav.compModNavSeasonItem) >= 0
      ) {
        switch (_type) {
          case "old":
            Vue.nav.compModNavSeasonFocus = Vue.nav.param.itemLastId;
            Vue.compModNavSeasonData.itemFocus = Vue.nav.param.itemLastId;
            break;
          case "curr":
            Vue.nav.compModNavSeasonFocus = Vue.nav.param.itemFocusId;
            Vue.compModNavSeasonData.itemFocus = Vue.nav.param.itemFocusId;
            break;
        }
      } else if (
        Vue.nav.param.itemLast.indexOf(Vue.nav.compListVideoItem) >= 0
      ) {
        switch (_type) {
          case "old":
            Vue.nav.compListVideoFocus = Vue.nav.param.itemLastId;
            Vue.compListVideo.itemFocus = Vue.nav.param.itemLastId;
            break;
          case "curr":
            Vue.nav.compListVideoFocus = Vue.nav.param.itemFocusId;
            Vue.compListVideo.itemFocus = Vue.nav.param.itemFocusId;
            break;
        }
      } else if (
        Vue.nav.param.itemLast.indexOf(Vue.nav.compListSeasonItem) >= 0
      ) {
        switch (_type) {
          case "old":
            Vue.nav.compListSeasonFocus = Vue.nav.param.itemLastId;
            Vue.compListSeason.itemFocus = Vue.nav.param.itemLastId;
            break;
          case "curr":
            Vue.nav.compListSeasonFocus = Vue.nav.param.itemFocusId;
            Vue.compListSeason.itemFocus = Vue.nav.param.itemFocusId;
            break;
        }
      } else if (
        Vue.nav.param.itemLast.indexOf(Vue.nav.compListLikeItem) >= 0
      ) {
        switch (_type) {
          case "old":
            Vue.nav.compListLikeFocus = Vue.nav.param.itemLastId;
            Vue.compListLike.itemFocus = Vue.nav.param.itemLastId;
            break;
          case "curr":
            Vue.nav.compListLikeFocus = Vue.nav.param.itemFocusId;
            Vue.compListLike.itemFocus = Vue.nav.param.itemFocusId;
            break;
        }
        // new
      } else if (
        Vue.nav.param.itemLast.indexOf(Vue.nav.compListSeason0Item) >= 0
      ) {
        switch (_type) {
          case "old":
            Vue.nav.compListSeason0Focus = Vue.nav.param.itemLastId;
            Vue.compListSeason0.itemFocus = Vue.nav.param.itemLastId;
            break;
          case "curr":
            Vue.nav.compListSeason0Focus = Vue.nav.param.itemFocusId;
            Vue.compListSeason0.itemFocus = Vue.nav.param.itemFocusId;
            break;
        }
      } else if (
        Vue.nav.param.itemLast.indexOf(Vue.nav.compListSeason1Item) >= 0
      ) {
        switch (_type) {
          case "old":
            Vue.nav.compListSeason1Focus = Vue.nav.param.itemLastId;
            Vue.compListSeason1.itemFocus = Vue.nav.param.itemLastId;
            break;
          case "curr":
            Vue.nav.compListSeason1Focus = Vue.nav.param.itemFocusId;
            Vue.compListSeason1.itemFocus = Vue.nav.param.itemFocusId;
            break;
        }
      } else if (
        Vue.nav.param.itemLast.indexOf(Vue.nav.compListSeason2Item) >= 0
      ) {
        switch (_type) {
          case "old":
            Vue.nav.compListSeason2Focus = Vue.nav.param.itemLastId;
            Vue.compListSeason2.itemFocus = Vue.nav.param.itemLastId;
            break;
          case "curr":
            Vue.nav.compListSeason2Focus = Vue.nav.param.itemFocusId;
            Vue.compListSeason2.itemFocus = Vue.nav.param.itemFocusId;
            break;
        }
      }
      // else {}
      // // // // // // console.log('Vue.navData.itemFocus')
      // // // // // // console.log(Vue.navData.itemFocus)
      // // // // // // console.log('Vue.nav.compModNavFocus')
      // // // // // // console.log(Vue.nav.compModNavFocus)
    },
    setNewKey: function() {
      let Vue = this;
      if (Vue.nav.param.itemFocus.indexOf(Vue.nav.compModNavItem) >= 0) {
        Vue.nav.compModNavFocus = Number(
          Vue.nav.param.itemFocus.split("-")[0].split("_")[1]
        );
        // Number(Vue.nav.param.itemFocus.slice(Vue.nav.compModNavItem.length))
      } else if (
        Vue.nav.param.itemFocus.indexOf(Vue.nav.compModNavSeasonItem) >= 0
      ) {
        Vue.nav.compModNavSeasonFocus = Number(
          Vue.nav.param.itemFocus.split("-")[0].split("_")[1]
        );
        // Number(Vue.nav.param.itemFocus.slice(Vue.nav.compModNavSeasonItem.length))
      } else if (Vue.nav.param.itemFocusOf(Vue.nav.compListVideoItem) >= 0) {
        Vue.nav.compListVideoFocus = Number(
          Vue.nav.param.itemFocus.split("-")[0].split("_")[1]
        );
        // Number(Vue.nav.param.itemFocus.slice(Vue.nav.compListVideoItem.length))
      } else if (
        Vue.nav.param.itemFocus.indexOf(Vue.nav.compListSeasonItem) >= 0
      ) {
        Vue.nav.compListSeasonFocus = Number(
          Vue.nav.param.itemFocus.split("-")[0].split("_")[1]
        );
        // Number(Vue.nav.param.itemFocus.slice(Vue.nav.compListSeasonItem.length))
      } else if (
        Vue.nav.param.itemFocus.indexOf(Vue.nav.compListLikeItem) >= 0
      ) {
        Vue.nav.compListLikeFocus = Number(
          Vue.nav.param.itemFocus.split("-")[0].split("_")[1]
        );
        // Number(Vue.nav.param.itemFocus.slice(Vue.nav.compListLikeItem.length))
      }
    },
    _initScroll: function(_refsElName) {
      this.scroll = new BScroll(_refsElName, {
        scrollX: false,
        scrollY: true,
        listenFlick: false,
        bounce: false,
        momentum: false
      });
      // this.scroll.on('scrollEnd', (evt) => this.$emit('scrollEnd', evt))
      // // // console.log(this.scroll);
    },
    scrollBy: function(width) {
      if (typeof width === "number") this.scroll.scrollBy(0, width, 500);
    },
    scrollNext: function(width, func) {
      if (typeof width === "number") this.scroll.scrollBy(0, -width, 500);
    },
    scrollToElement: function(el) {
      this.scroll.scrollToElement(el, 500);
    },
    scrollFun: async function(_param) {
      // _$itemCurrFocus
      // // // console.log("scrollFun fun aaa");
      let Vue = this;
      let { _type, _container, _con1, _con2, _offset } = _param;
      // let { _type } = _param
      if (!_offset) _offset = 0;
      if (Vue.page.scrollPage) return;
      // Vue.page.scrollPage = true
      // // // console.log("_type: ", _type);
      // // // // console.log('_con1: ', _con1)
      // // // // console.log('_con2: ', _con2)
      // // // // console.log('_container: ', _container)
      // let scrollLeftTarget = Vue.nav.colW * Vue.nav.scrollCount
      // if (scrollLeftTarget > 0) scrollLeftTarget = 0
      // if (scrollLeftTarget < -Vue.nav.scrollMax) scrollLeftTarget = -Vue.nav.scrollMax
      // let con1 = Vue.$refs[_con1] // toDetails
      // let con2 = Vue.$refs[_con2] // toRelated
      // let container = Vue.$refs[_container]
      // let toElement = {}
      let scrollH = Vue.$refs[_con1].offsetHeight - 30;
      // // // // console.log('scrollH', scrollH)
      if (_type === "up") {
        this.scrollBy(scrollH);
        // toElement = con1
      } else if (_type === "down") {
        this.scrollBy(-scrollH);
        // toElement = con2
      } else {
        this.scrollBy(scrollH);
      }
      // let el = document.querySelector(`div[datakey='${Vue.itemFocus}']`)
      // if (_type === 'left') {

      //   // this.$refs.scroll.scrollNext(-Vue.dataNew.data.colW * Vue.centerPos)
      // } else if (_type === 'right') {

      //   // this.$refs.scroll.scrollNext(Vue.dataNew.data.colW * Vue.centerPos)
      // }

      // Vue.page.pageScrollMax
      // // // // // // console.log('start scroll')
      // Velocity(toElement, 'scroll', {
      //   // axis: 'x',
      //   container: container,
      //   duration: 500,
      //   offset: _offset, // -60,
      //   easing: 'ease-out',
      //   complete: function () {
      //     // // // console.log('complete aaa')
      //     // // // // // // console.log('complete')
      //     Vue.page.scrollPage = false
      //   },
      //   error: function (res) {
      //     // // // // // // console.log('error')
      //     // // // // // // console.log(res)
      //   }
      // })
    }
  }
};

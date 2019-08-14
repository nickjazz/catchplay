import Vue from "vue"
import Vuex from "vuex"

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
// 需要维护的状态
const store = new Vuex.Store({
  state: {
    // 放置初始状态 app启动的时候的全局的初始值
    bankInf: {
      "name": "我是vuex的第一个数据",
      "id": 100,
      "bankName": "中国银行"
    },
    dataBackup: {},
    pathFrom: "",
    a1: {
      videoIndex: 1,
      getTop: 0
    },
    a2: {
      navIndex: 0, // navIndex
      videoIndex: 0,
      getTop: 0,
      cont: 0,
      search: false,
      navTop: 0 // ?
    },
    a3: {
      videoIndex: 0,
      scrollLeft: 0,
      cont: 0
    },
    a4: {
      x: 1,
      y: 0,
      scrollLeft: 0,
      count: 0
    },
    a5: {
      x: 1,
      y: 0
    },
    a7: {
      data: [],
      videoIndex: {
        line: 0,
        index: 0
      },
      typeindex: 0
    },
    a6: {
      videoIndex: 0,
      scrollLeft: 0
    },
    a8: {
      page: {},
      nav: {},
      compListVideo: {},
      compListSeason: {},
      compListLike: {}
    },
    a9: {
      page: {},
      nav: {}
    }
  },
  mutations: {
    a8Reset: function (_state) {
      _state.a8 = {
        page: {
          loading: false,
          welcome: true,
          timeWait: 1,
          timeCountDown: 0,
          pageCurr: "index",
          dialog: false,
          dialogCurr: "contactus",
          scrollPage: false,
          pageScrollMax: 0,
          showRelatedCon: false
          // msg: true,
          // contactus:
        },
        nav: {
          itemFocus: "",
          itemLast: "",
          // param
          param: {},
          // language
          compLangItem: "compModLanguage",
          // mail
          itemMail: "itemMail",
          // nav
          compModNavItem: "compModNavItem",
          compModNavFocus: 0,
          // video
          compListVideoItem: "compListVideoItem",
          compListVideoFocus: 0,
          compListVideoMove: {},
          // compModNavSeason
          compModNavSeasonItem: "compModNavSeasonItem",
          compModNavSeasonFocus: 0,
          // season
          compListSeasonItem: "compListSeasonItem",
          compListSeasonFocus: 0,
          compListSeasonMove: {},
          // like
          compListLikeItem: "compListLikeItem",
          compListLikeFocus: 0,
          compListLikeMove: {}
        },
        compListVideo: {
          data: [],
          itemName: "compListVideoItem",
          itemFocus: 0,
          listWidth: 1280,
          col: 2,
          centerPos: 3,

          scrollCount: 0,
          scrollItem: false,
          scrollMax: 0,
          // scrollLeftBase: 8,
          // scrollRightBase: 2,
          colCurr: 0,
          colShowCurr: 0,
          colW: 0,
          colH: 0
          // listColCount: 0
          // compListVideoItem: "compListVideoItem",
          // compListVideoFocus: 0,
        },
        compListSeason: {
          data: [],
          itemName: "compListSeasonItem",
          itemFocus: 0,
          listWidth: 1280,
          col: 1,
          centerPos: 2,

          scrollCount: 0,
          scrollItem: false,
          scrollMax: 0,
          // scrollLeftBase: 8,
          // scrollRightBase: 2,
          colCurr: 0,
          colShowCurr: 0,
          colW: 0,
          colH: 0
        },
        compListLike: {
          data: [],
          itemName: "compListLikeItem",
          itemFocus: 0,
          listWidth: 1280,
          col: 1,
          centerPos: 3,

          scrollCount: 0,
          scrollItem: false,
          scrollMax: 0,
          // scrollLeftBase: 8,
          // scrollRightBase: 2,
          colCurr: 0,
          colShowCurr: 0,
          colW: 0,
          colH: 0
        }
      }
    },
    a8Focus: function (_state, _focus) {
      _state.a8.page = _focus.page
      _state.a8.nav = _focus.nav
    },
    a9Reset: function (_state) {
      _state.a8 = {
        page: {
          loading: false,
          welcome: true,
          timeWait: 1,
          timeCountDown: 0,
          pageCurr: "index",
          dialog: false,
          dialogCurr: "contactus",
          scrollPage: false,
          pageScrollMax: 0,
          showRelatedCon: false
          // msg: true,
          // contactus:
        },
        nav: {
          itemFocus: "",
          itemLast: "",
          // param
          param: {},
          // language
          compLangItem: "compModLanguage",
          // mail
          itemMail: "itemMail",
          // nav
          compModNavItem: "compModNavItem",
          compModNavFocus: 0,
          // video
          compListVideoItem: "compListVideoItem",
          compListVideoFocus: 0,
          compListVideoMove: {},
          // compModNavSeason
          compModNavSeasonItem: "compModNavSeasonItem",
          compModNavSeasonFocus: 0,
          // season
          compListSeasonItem: "compListSeasonItem",
          compListSeasonFocus: 0,
          compListSeasonMove: {},
          // like
          compListLikeItem: "compListLikeItem",
          compListLikeFocus: 0,
          compListLikeMove: {}
        },
        compListVideo: {
          data: [],
          itemName: "compListVideoItem",
          itemFocus: 0,
          listWidth: 1280,
          col: 2,
          centerPos: 3,

          scrollCount: 0,
          scrollItem: false,
          scrollMax: 0,
          // scrollLeftBase: 8,
          // scrollRightBase: 2,
          colCurr: 0,
          colShowCurr: 0,
          colW: 0,
          colH: 0
          // listColCount: 0
          // compListVideoItem: "compListVideoItem",
          // compListVideoFocus: 0,
        },
        compListSeason: {
          data: [],
          itemName: "compListSeasonItem",
          itemFocus: 0,
          listWidth: 1280,
          col: 1,
          centerPos: 2,

          scrollCount: 0,
          scrollItem: false,
          scrollMax: 0,
          // scrollLeftBase: 8,
          // scrollRightBase: 2,
          colCurr: 0,
          colShowCurr: 0,
          colW: 0,
          colH: 0
        },
        compListLike: {
          data: [],
          itemName: "compListLikeItem",
          itemFocus: 0,
          listWidth: 1280,
          col: 1,
          centerPos: 3,

          scrollCount: 0,
          scrollItem: false,
          scrollMax: 0,
          // scrollLeftBase: 8,
          // scrollRightBase: 2,
          colCurr: 0,
          colShowCurr: 0,
          colW: 0,
          colH: 0
        }
      }
    },
    a9Focus: function (_state, _focus) {
      _state.a9.page = _focus.page
      _state.a9.nav = _focus.nav
    },
    newBankName: function (_state, _msg) {
      _state.bankInf.bankName = _msg
    },
    dataBackup: function (_state, _data) {
      _state.dataBackup = _data
    },
    pathFrom: function (_state, _path) {
      _state.pathFrom = _path
    },
    a1Reset: function (_state) {
      _state.a1 = {
        videoIndex: 1,
        getTop: 0
      }
    },
    a1Focus: function (_state, _focus) {
      _state.a1.videoIndex = _focus.videoIndex
      _state.a1.getTop = _focus.getTop
    },
    a2Reset: function (_state) {
      _state.a2 = {
        navIndex: 0, // navIndex
        videoIndex: 0,
        getTop: 0,
        cont: 0,
        search: false,
        navTop: 0 // ?
      }
    },
    a2Focus: function (_state, _focus) {
      _state.a2.videoIndex = _focus.videoIndex
    },
    a2SetNavTop: function (_state, _focus) {
      _state.a2.navTop = _focus.navTop
    },
    a2SetNavIndex: function (_state, _focus) {
      _state.a2.navIndex = _focus.navIndex
    },
    a2SetTop: function (_state, _focus) {
      _state.a2.getTop = _focus.getTop
    },
    a2SetCont: function (_state, _focus) {
      _state.a2.cont = _focus.cont
    },
    a2SetSearch: function (_state, _focus) {
      _state.a2.search = _focus.search
    },
    a3Reset: function (_state) {
      _state.a3 = {
        videoIndex: 0,
        scrollLeft: 0,
        cont: 0
      }
    },
    a3Focus: function (_state, _focus) {
      _state.a3.videoIndex = _focus.videoIndex
      _state.a3.scrollLeft = _focus.scrollLeft
      _state.a3.cont = _focus.cont
    },
    a4Reset: function (_state) {
      _state.a4 = {
        x: 1,
        y: 0,
        scrollLeft: 0,
        count: 0
      }
    },
    a4Focus: function (_state, _focus) {
      _state.a4.x = _focus.x
      _state.a4.y = _focus.y
      _state.a4.scrollLeft = _focus.scrollLeft
      _state.a4.count = _focus.count
    },
    a5Reset: function (_state) {
      _state.a5 = {
        x: 1,
        y: 0
      }
    },
    a5Focus: function (_state, _focus) {
      _state.a5.x = _focus.x
      _state.a5.y = _focus.y
    },
    a6Reset: function (_state) {
      _state.a6 = {
        videoIndex: 0,
        scrollLeft: 0
      }
    },
    a6Focus: function (_state, _focus) {
      _state.a6.videoIndex = _focus.videoIndex
      _state.a6.scrollLeft = _focus.scrollLeft
      // _state.a6.cont = _focus.cont
    },
    a7Reset: function (_state) {
      _state.a7 = {
        data: [],
        videoIndex: {
          line: 0,
          index: 0
        },
        typeindex: 0
      }
    },
    a7Focus: function (_state, _focus) {
      _state.a7.data = _focus.data
      _state.a7.videoIndex.line = _focus.videoIndex.line
      _state.a7.videoIndex.index = _focus.videoIndex.index
      _state.a7.typeindex = _focus.typeindex
    }
  }
})
// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default store

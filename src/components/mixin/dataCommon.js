export default {
  data: function () {
    return {
      dddTest: {
        'config': {
          'noCancel': true
        },
        'validCode': {
          'value': '22',
          'title': false,
          'titleHidden': true,
          'type': 'text',
          'valid': {
            'required': true
          },
          'validTip': ''
        }
      },
      appInfo: {},
      iconStr: '',
      titleStr: '',
      iconWidth: 245,
      iconHeight: 60,
      page: {
        loading: false,
        welcome: true,
        timeWait: 1, // 5
        timeCountDown: 0,
        pageCurr: 'index',
        dialog: false,
        dialogCurr: 'contactus',
        scrollPage: false,
        pageScrollMax: 0,
        showRelatedCon: false
        // msg: true,
        // contactus:
      },
      signup: {
        step: 'SignupWelcome',
        steps: {
          'SignupStep1': {
            formname: 'FormSignupValidCode',
            data: {
              'config': {
                // 'noSubmit': false,
                'noCancel': true
              },
              'validCode': {
                'value': '',
                'title': false,
                'titleHidden': true,
                'type': 'text',
                'valid': {
                  'required': true
                },
                'validTip': ''
              }
            }
          }
        }
      },
      signin: {
        step: 'SigninWelcome',
        steps: {
          'SigninMobileStep1': {
            formname: 'FormSigninMobile',
            data: {
              'config': {
                // 'noSubmit': false,
                'noCancel': true
              },
              'mobileNumber': {
                'value': '',
                'title': false,
                'titleHidden': true,
                'type': 'text',
                'valid': {
                  'required': true
                },
                'validTip': ''
              },
              'password': {
                'value': '',
                'title': false,
                'titleHidden': true,
                'type': 'text',
                'valid': {
                  'required': true
                },
                'validTip': ''
              }
            }
          }
        }
      },
      dialogConf: {
        type: 'layer-dialog',
        dialog: '',
        dialogTit: '',
        dialogFocus: '',
        dialogTxt: '',
        nav: {}
      },
      videoObj1: {
        image: 'https://i.ytimg.com/vi/GPspOSHrRDg/maxresdefault.jpg',
        timeLength: '0:00',
        url: 'MEcc8e7WwXg',
        videoTitle: '1Doubt',
        link: 'http://apps.store.zeasn.com/BBC/video.html?video=MEcc8e7WwXg',
        focus: false
      },
      videoObj2: {
        image: 'https://i.ytimg.com/vi/GPspOSHrRDg/maxresdefault.jpg',
        timeLength: '0:00',
        url: 'MEcc8e7WwXg',
        videoTitle: '2Doubt',
        link: 'http://apps.store.zeasn.com/BBC/video.html?video=MEcc8e7WwXg',
        focus: false
      }
      // a9
      // languageForEdit: {}
    }
  }
}

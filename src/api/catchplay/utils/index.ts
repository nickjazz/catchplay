export const BrowserMatch = {
  init: function () {  
    // this.browser = this.getBrowser().browser || '未知浏览器';  //获取浏览器名
    // this.version = this.getBrowser().version || '未知浏览器版本号';  //获取浏览器版本
    // this.OS = this.getOS()+' '+this.getDigits() || '未知操作系统'; //系统版本号
    // return {
    //   browser: (this.getBrowser() && this.getBrowser().browser) ? this.getBrowser().browser : '未知浏览器',  //获取浏览器名
    //   version: (this.getBrowser() && this.getBrowser().version) ? this.getBrowser().version : '未知浏览器版本号',  //获取浏览器版本
    //   OS: (this.getOS() && this.getDigits()) ? this.getOS()+' '+this.getDigits() : '未知操作系统' //系统版本号
    // }
    console.log('this.getBrowerInfo()')
    console.log(this.getBrowerInfo())
    return {
      browser: this.getBrowerInfo() ? this.getBrowerInfo() : '未知浏览器',
      OS: (this.getOS() && this.getDigits()) ? this.getOS()+' '+this.getDigits() : '未知操作系统',
      screen: this.getScreenInfo()
    }
  },
  getOS: function() {  //判断所处操作系统
    var sUserAgent = navigator.platform.toLowerCase();   
  
    return sUserAgent // navigator.platform
    var isWin = (navigator.platform == 'Win32') || (navigator.platform == 'Win64')|| (navigator.platform == 'wow64');   
    
    var isMac = (navigator.platform == 'Mac68K') || (navigator.platform == 'MacPPC') || (navigator.platform == 'Macintosh') || (navigator.platform == 'MacIntel');   
    if (isMac) return 'Mac';   
    var isUnix = (navigator.platform == 'X11') && !isWin && !isMac;   
    if (isUnix) return 'Unix';   
    var isLinux = (String(navigator.platform).indexOf('Linux') > -1);   
    var bIsAndroid = sUserAgent.toLowerCase().match(/android/i)? 'android': false;  
    if (isLinux) {  
      if(bIsAndroid) return 'Android';  
      else return 'Linux';   
    }  
    if (isWin) {   
    
      var isWin2K = sUserAgent.indexOf('Windows nt 5.0') > -1 || sUserAgent.indexOf('Windows 2000') > -1;   
      if (isWin2K) return 'Win2000';   
      var isWinXP = sUserAgent.indexOf('Windows nt 5.1') > -1 || sUserAgent.indexOf('Windows XP') > -1  
      sUserAgent.indexOf('Windows XP') > -1;   
      if (isWinXP) return 'WinXP';   
      var isWin2003 = sUserAgent.indexOf('Windows nt 5.2') > -1 || sUserAgent.indexOf('Windows 2003') > -1;   
      if (isWin2003) return 'Win2003';   
      var isWinVista= sUserAgent.indexOf('Windows nt 6.0') > -1 || sUserAgent.indexOf('Windows Vista') > -1;   
      if (isWinVista) return 'WinVista';   
      var isWin7 = sUserAgent.indexOf('Windows nt 6.1') > -1 || sUserAgent.indexOf('Windows 7') > -1;   
      if (isWin7) return 'Win7';   
      var isWin8 = sUserAgent.indexOf('windows nt 6.2') > -1 || sUserAgent.indexOf('Windows 8') > -1;  
      if (isWin8) return 'Win8'; 
      var isWin10 = sUserAgent.indexOf('windows nt 10.0')>-1||sUserAgent.indexOf('Windows 10')>-1;	
      if(isWin10)return 'Win10';				
    }  
    return '其他';
  },
  getDigits:function(){ //判断当前操作系统的版本号 
    var sUserAgent = navigator.userAgent.toLowerCase();   
    var is64 = sUserAgent.indexOf('win64') > -1||sUserAgent.indexOf('wow64') > -1;  
    if (is64) {  
      return '64位';  
    }else{  
       return '32位';    
    }
  },
  /*
  * 判断是否为360浏览器
  */ 
 validate360: function (option: any, value: any) {
    let mimeTypes = window.navigator.mimeTypes
    for (let mt in mimeTypes) {
      console.log(mimeTypes[mt][option])
      if (mimeTypes[mt][option] == value) {
        return true;
      }
    }
  return false;
  },
  /*
  * 获取IE浏览器版本
  */
 getIeVersion: function () {
    let IEMode = document.DOCUMENT_NODE
      let rMsie  = /(msie\s|trident.*rv:)([\w.]+)/;
      let ma = window.navigator.userAgent.toLowerCase()
      let  match  = rMsie.exec(ma);
      try {
        return match && match.length > 2 ? match[2] : '?';
      } catch (e) {
        return IEMode;
      }
  },
  /*
  * 获取oper浏览器版本
  */ 
  getOperaVersion(userAgent: any) {
    try {
        // if (window && window.opera) {
        //   return userAgent.match(/opera.([\d.]+)/)[1];
        // } else
        if (userAgent.indexOf("opr") > 0) {
          return userAgent.match(/opr\/([\d.]+)/)[1];
        }
      } catch (e) {
        return 0;
      }
  },
  getBrowerInfo: function () {
    let userAgent = window.navigator.userAgent.toLowerCase()
    let browserType = ''
    let browserVersion: string | number | boolean = ''
    let isIE = userAgent.match(/msie/) != null || userAgent.match(/trident/) != null
    // 浏览器类型-IE
    if (userAgent.match(/msie/) != null || userAgent.match(/trident/) != null) {
      browserType = 'IE'
      browserVersion = this.getIeVersion()
    }
    // 欧朋
    else if ((userAgent.indexOf("opr") > 0)) { // window.opera || 
      browserType = '欧朋'
      browserVersion =  this.getOperaVersion(userAgent)
    }
    // UC
    else if (userAgent.indexOf("ubrowser") > 0) {
      browserType = 'UC'
      browserVersion = /ubrowser\/([\d.]+)/.test(userAgent) // userAgent.match(/ubrowser\/([\d.]+)/)[1]
    }
    // 百度
    else if (userAgent.indexOf("bidubrowser") > 0) {
      browserType = '百度'
      browserVersion = /bidubrowser\/([\d.]+)/.test(userAgent) // userAgent.match(/bidubrowser\/([\d.]+)/)[1]
    }
    // 搜狗
    else if (userAgent.indexOf("metasr") > 0 || userAgent.indexOf( "se 2.x" ) > 0 ) {
      browserType = '搜狗'
      // browserVersion =  userAgent.match(/metasr\/([\d.]+)/)[1]
    }
    // QQ
    else if (userAgent.indexOf("tencenttraveler") > 0) {
      browserType = 'QQ'
      browserVersion = /tencenttraveler\/([\d.]+)/.test(userAgent) // userAgent.match(/tencenttraveler\/([\d.]+)/)[1]
    }
    // QQ
    else if (userAgent.indexOf("qqbrowser") > 0) {
      browserType = 'QQ'
      browserVersion = /qqbrowser\/([\d.]+)/.test(userAgent) // userAgent.match(/qqbrowser\/([\d.]+)/)[1]
    }
    // 遨游
    else if (userAgent.indexOf("maxthon") > 0) {
      browserType = '遨游'
      browserVersion = /maxthon\/([\d.]+)/.test(userAgent) // userAgent.match(/maxthon\/([\d.]+)/)[1]
    }
    // 火狐
    else if (userAgent.indexOf("firefox") > 0) {
      browserType = '火狐'
      browserVersion = /firefox\/([\d.]+)/.test(userAgent) // userAgent.match(/firefox\/([\d.]+)/)[1]
    }
    // edge
    else if (userAgent.indexOf("edge") > 0) {
      browserType = 'Edge'
      browserVersion = /edge\/([\d.]+)/.test(userAgent) // userAgent.match(/edge\/([\d.]+)/)[1]
    }
    // 谷歌/360
    else if (userAgent.indexOf("chrome") > 0) {
      if (this.validate360('type', 'application/x360mmplugin')) {
        browserType = '360'
        // browserVersion =  userAgent.match(/chrome\/([\d.]+)/)[1]
      } else {
        browserType = '谷歌'
        browserVersion = /chrome\/([\d.]+)/.test(userAgent) // userAgent.match(/chrome\/([\d.]+)/)[1]
      }
    }
    // 苹果
    else if (userAgent.indexOf("Safari") > -1) {
      browserType = 'Safari'
      browserVersion = /version\/([\d.]+)/.test(userAgent) // userAgent.match(/version\/([\d.]+)/)[1]
    }
    return {
      userAgent: userAgent,
      browserType: browserType
    }
  },
  // getBrowser: function() {  // 获取浏览器名
  //   var rMsie = /(msie\s|trident\/7)([\w\.]+)/;  
  //   var rTrident = /(trident)\/([\w.]+)/;  
  //   var rEdge = /(chrome)\/([\w.]+)/;//IE
    
  //   var rFirefox = /(firefox)\/([\w.]+)/;  //火狐
  //   var rOpera = /(opera).+version\/([\w.]+)/;  //旧Opera
  //   var rNewOpera = /(opr)\/(.+)/;  //新Opera 基于谷歌
  //   var rChrome = /(chrome)\/([\w.]+)/; //谷歌 
  //   var rUC = /(chrome)\/([\w.]+)/;//UC
  //   var rMaxthon = /(chrome)\/([\w.]+)/;//遨游
  //   var r2345 =  /(chrome)\/([\w.]+)/;//2345
  //   var rQQ =  /(chrome)\/([\w.]+)/;//QQ
  //   //var rMetasr =  /(metasr)\/([\w.]+)/;//搜狗
  //   var rSafari = /version\/([\w.]+).*(safari)/;
    
  //   var ua = navigator.userAgent.toLowerCase();  


  //   var matchBS, matchBS2;  
    
  //   //IE 低版
  //   matchBS = rMsie.exec(ua);  
  //   if (matchBS != null) {  
  //     matchBS2 = rTrident.exec(ua);  
  //     if (matchBS2 != null) {  
  //       switch (matchBS2[2]) {  
  //       case '4.0':  
  //         return {  
  //           browser:  
  //           'Microsoft IE',  
  //           version: 'IE: 8'  //内核版本号
  //         };  
  //         break;  
  //       case '5.0':  
  //         return {  
  //           browser:  
  //           'Microsoft IE',  
  //           version: 'IE: 9'  
  //         };  
  //         break;  
  //       case '6.0':  
  //         return {  
  //           browser:  
  //           'Microsoft IE',  
  //           version: 'IE: 10'  
  //         };  
  //         break;  
  //       case '7.0':  
  //         return {  
  //           browser:  
  //           'Microsoft IE',  
  //           version: 'IE: 11'  
  //         };  
  //         break;  
  //       default:  
  //         return {  
  //           browser:  
  //           'Microsoft IE',  
  //           version: 'Undefined'  
  //         };  
  //       }  
  //     } else {  
  //       return {  
  //         browser: 'Microsoft IE',  
  //         version: 'IE:'+matchBS[2] || '0'  
  //       };  
  //     }  
  //   }  
  //   //IE最新版
  //    matchBS = rEdge.exec(ua);  	 				   
  //   if ((matchBS != null)) { // && (!(window.attachEvent))) {  
  //     return {  
  //       browser: 'Microsoft Edge',  
  //       version: 'Chrome/'+matchBS[2] || '0'  
  //     };  
  //   }  
  //                                 //UC浏览器					  
  //   matchBS = rUC.exec(ua);                         		   
  //   if ((matchBS != null)) { // && (!(window.attachEvent))) {  
  //     return {  
  //       browser: 'UC',  
  //       version: 'Chrome/'+matchBS[2] || '0'  
  //     };  
  //   }  
  //   //火狐浏览器
  //   matchBS = rFirefox.exec(ua);  
  //   if ((matchBS != null)) { // && (!(window.attachEvent))) {  
  //     return {  
  //       browser: '火狐',  
  //       version: 'Firefox/'+matchBS[2] || '0'  
  //     };  
  //   }  
  //                                //Oper浏览器					 
  //  matchBS = rOpera.exec(ua);  
  //   if ((matchBS != null)) { // && (!(window.attachEvent))) {  
  //     return {  
  //       browser: 'Opera',  
  //       version: 'Chrome/'+matchBS[2] || '0'  
  //     };  
  //   }  
  //   //遨游
  //    matchBS = rMaxthon.exec(ua);  	 				   
  //   if ((matchBS != null)) { // && (!(window.attachEvent))) {  
  //     return {  
  //       browser: '遨游',  
  //       version: 'Chrome/'+matchBS[2] || '0'  
  //     };  
  //   }  
  //                                 //2345浏览器					  
  //    matchBS = r2345.exec(ua);  	 				   
  //   if ((matchBS != null)) { // && (!(window.attachEvent))) {  
  //     return {  
  //       browser: '2345',  
  //       version: 'Chrome/ '+matchBS[2] || '0'  
  //     };  
  //   }  
  //                                 //QQ浏览器					  
  //   matchBS = rQQ.exec(ua);  	 				   
  //   if ((matchBS != null)) { // && (!(window.attachEvent))) {  
  //     return {  
  //       browser: 'QQ',  
  //       version: 'Chrome/'+matchBS[2] || '0'  
  //     };  
  //   }  
  //   //Safari（苹果）浏览器
  //   matchBS = rSafari.exec(ua);  
  //   if ((matchBS != null)) { // && (!(window.attachEvent)) && (!(window.chrome)) && (!(window.opera))) {  
  //     return {  
  //       browser: 'Safari',  
  //       version: 'Safari/'+matchBS[1] || '0'  
  //     };  
  //   }  
  //   //谷歌浏览器
  //    matchBS = rChrome.exec(ua);  
  //   if ((matchBS != null)) { // && (!(window.attachEvent))) {  
  //     matchBS2 = rNewOpera.exec(ua);  
  //     if (matchBS2 == null) {  
  //       return {  
  //         browser: '谷歌',  
  //         version: 'Chrome/'+matchBS[2] || '0'  
  //       };  
  //     } else {  
  //       return {  
  //         browser: 'Opera',  
  //         version: 'opr/'+matchBS2[2] || '0'  
  //       };  
  //     }  
  //   }  
  // },
  js_getDPI: function () {
    var arrDPI = new Array;
    // if (window && window.screen && window.screen.deviceXDPI && window.screen.deviceYDPI) {
    //   arrDPI[0] = window.screen.deviceXDPI;
    //   arrDPI[1] = window.screen.deviceYDPI;
    // } else {
      var tmpNode = document.createElement("DIV");
      tmpNode.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
      document.body.appendChild(tmpNode);
      arrDPI[0] = parseInt(tmpNode.offsetWidth.toString());
      arrDPI[1] = parseInt(tmpNode.offsetHeight.toString());
      if (tmpNode && tmpNode.parentNode) tmpNode.parentNode.removeChild(tmpNode);
    // }
    return arrDPI;
  },
  getScreenInfo: function () {
    let dpiInfo = this.js_getDPI()
    // var s = "";
    let screen = []
    screen.push(" 网页可见区域宽："+ document.body.clientWidth)
    screen.push(" 网页可见区域高："+ document.body.clientHeight)
    screen.push(" 网页可见区域宽："+ document.body.offsetWidth + " (包括边线和滚动条的宽)")
    screen.push(" 网页可见区域高："+ document.body.offsetHeight + " (包括边线的宽)")
    // screen.push(" 网页正文全文宽："+ document.body.scrollWidth)

    // screen.push(" 网页正文全文高："+ document.body.scrollHeight)
    // screen.push(" 网页被卷去的高(ff)："+ document.body.scrollTop)
    // screen.push(" 网页被卷去的高(ie)："+ document.documentElement.scrollTop)
    // screen.push(" 网页被卷去的左："+ document.body.scrollLeft)
    // screen.push(" 网页正文部分上："+ window.screenTop)

    // screen.push(" 网页正文部分左："+ window.screenLeft)
    // screen.push(" 屏幕分辨率的高："+ window.screen.height)
    // screen.push(" 屏幕分辨率的宽："+ window.screen.width)
    screen.push(" 屏幕可用工作区高度："+ window.screen.availHeight)
    screen.push(" 屏幕可用工作区宽度："+ window.screen.availWidth)

    screen.push(" 你的屏幕设置是： "+ window.screen.colorDepth +" 位彩色")
    screen.push("你的屏幕设置：" + dpiInfo +" 像素/英寸")
 
    // s += " 你的屏幕设置 "+ window.screen.deviceXDPI +" 像素/英寸"+"\n";

    return screen;
  }
}


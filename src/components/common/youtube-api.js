
var tag = document.createElement('script')
// console.log('bb');

tag.src = 'https://www.youtube.com/iframe_api'
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

// var ifPlaying = false;
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player
function onYouTubeIframeAPIReady () {
  player = new YT.Player('player', {
    height: '100%', // 360
    width: '100%', // 640
    videoId: url, // 9ePlKCmI8Dg  M7lc1UVf-VE
    events: {
      'onReady': onPlayerReady
      // 'onStateChange': onPlayerStateChange
    }
  })
}
var ifReady = false
var playerStatus = 0 // player.getPlayerState();
var videoDuration = 0
var currTime = 0 // player.getCurrentTime();

// 4. The API will call this function when the video player is ready.
function onPlayerReady (event) {
  event.target.playVideo()
  videoDuration = player.getDuration()
  // // console.log(`videoDuration: ${videoDuration}`);
  ifReady = true
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false
function onPlayerStateChange (event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000)
    done = true
  }
}
function stopVideo () {
  player.stopVideo()
}

document.addEventListener('keydown', function (event) {
  // console.log('addEventListener event.keyCode');
  // console.log(event.keyCode);
  switch (event.keyCode) {
    case 13:
      // 回车
      // console.log('key 13');
      if (ifReady) {
        playerStatus = player.getPlayerState()
        switch (playerStatus) {
          case 1:
            player.pauseVideo()
            break
          case 2:
          case -1:
          case 0:
            player.playVideo()
            break
        }
      }
      event.preventDefault()
      break
    case 37:
      // 左
      // console.log('left');
      currTime = player.getCurrentTime()
      currTime -= 5
      if (currTime < 0) {
        currTime = 0
      }
      player.seekTo(currTime)
      event.preventDefault()
      break
    case 39:
      // 右
      // console.log('right');
      currTime = player.getCurrentTime()
      currTime += 5
      if (currTime < 0) {
        currTime = 0
      }
      player.seekTo(currTime)
      // player.seekTo(5, true);
      event.preventDefault()
      break
    case 8:
      // 返回
      event.preventDefault()
      window.history.go(-1)
      break
    case 461:
      // 返回
      event.preventDefault()
      window.history.go(-1)
      break
    case 38:
      event.preventDefault()
      break
    case 40:
      event.preventDefault()
      break
  }
})

var ytData = [
	{
		id: '9vY1MWyUg5Y?vq=hd720&controls=0&autohide=1&rel=0&showinfo=0&autoplay=1&loop=1&?wmode=transparent',
    area: 'player01',
		ytWidth: 640,
		ytHeight: 390,
		allowfullscreen: 'true'
    },

];

var ytPlayer = [];
var ytPlaying, ytStop, ytPlay;

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    for(var i = 0; i < ytData.length; i++) {


        ytPlayer[i] = new YT.Player(ytData[i]['area'], {

            height: ytData[i]['ytHeight'],
            width: ytData[i]['ytWidth'],
            videoId: ytData[i]['id'],
            events: {
				//'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
			},
			playerVars: {
				//rel: 0,
				//autoplay: 1,
				controls: 0,
				//loop: 1,
				showinfo: 0,
				//playlist: wcFIidPmid4
				wmode : "transparent"
			}

        });
    }

}


//初期音量調整
/*function onPlayerReady(event) {
event.target.setVolume(12);
}*/

// プレーヤーの状態に変化があった時に実行
function onPlayerStateChange(event) {
    // 各プレーヤーの状態を確認
    for(var i = 0; i < ytData.length; i++) {
        var thisState = ytPlayer[i].getPlayerState();
        if( thisState == 1 && ytPlaying == undefined) {
            ytPlaying = i;
        } else if(thisState == 1 && ytPlaying != i) {
            ytStop = ytPlaying;
            ytPlay = i;
        } else {
        }
    }
    // 同時再生があった場合、元々再生していた方を停止する
    if(ytStop != undefined) {
        ytPlayer[ytStop].pauseVideo();
        ytStop = undefined;
    }
    // 現在再生中のプレーヤー番号を保存しておく
    if(ytPlay != undefined) {
        ytPlaying = ytPlay;
        ytPlay = undefined;
    }
}



$(function() {
    // ミュート
    $('.mute').click(function() {
        // ミュートされているかどうか
        if(ytPlayer[0].isMuted()) {
            // ミュートの解除
           ytPlayer[0].unMute();
        } else {
            // ミュート
           ytPlayer[0].mute();
        }
    });
});

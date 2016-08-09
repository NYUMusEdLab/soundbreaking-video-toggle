var videoPlayer;

(function() {
  var VideoPlayer = function(canvasID, videoID) {
    var canvas = document.getElementById(canvasID);
    var ctx    = canvas.getContext('2d');
    var video  = document.getElementById(videoID);

    // video.addEventListener('play', function (e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    // }, 0);
    var paused = true;

    video.addEventListener('seeked', function() {
        ctx.drawImage(video, 0, 0, 720/2, 480/2);
        if (!paused) {
            // 
            loop();
        }
    });

    function loop() {
        if (video.duration) {
            video.currentTime = audioPlayer.currentTime % video.duration;
        } else if (!paused) {
            // only use setTimeout if we are not ready to play,
            // otherwise loop after seeking
            setTimeout(loop, 1000 / 16); // drawing at 16fps
        }
    }

    return {
        get paused() {
            return paused;
        },
        play: function() {
            video.load();
            paused = false;
            loop();
        },
        pause: function() {
            paused = true;
            clearTimeout(loop);
        }
    };
  };

  videoPlayer = VideoPlayer('canvas', 'video');
})();
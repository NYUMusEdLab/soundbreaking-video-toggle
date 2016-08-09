var videoPlayer;

(function() {
  var VideoPlayer = function(canvasID, videoID) {
    var canvas = document.getElementById(canvasID);
    var ctx    = canvas.getContext('2d');
    var video  = document.getElementById(videoID);

    video.addEventListener('play', function () {
        var $this = this; //cache
        (function loop() {
            if (!$this.paused && !$this.ended) {
                ctx.drawImage($this, 0, 0, 720/2, 480/2);
                setTimeout(loop, 1000 / 30); // drawing at 30fps
            }
        })();
    }, 0);

    return video;
  };

  videoPlayer = VideoPlayer('canvas', 'video');
})();
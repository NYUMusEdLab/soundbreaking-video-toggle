var audioPlayer;

(function() {
  var AudioPlayer = function(audioID) {

    var audioElt  = document.getElementById(audioID);

    audioElt.addEventListener('timeupdate', handleTimeUpdate);

    return audioElt;
  };

  audioPlayer = AudioPlayer('audio');
})();


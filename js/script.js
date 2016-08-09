'use strict';
console.log('use strict');

document.addEventListener('DOMContentLoaded', init);

var circle;
var _audioTracks = [
  "audio/Ukrainska_Orchestra_Michala_Thomasa_-_01_-_Kolomyjka_Buczaka.mp3",
  "audio/Mnage_Quad_-_04_-_Play_Dat_Soul (from FreeMusicArchive).mp3",
  "audio/047111255-string-quartet-no-10-e-flat-op.mp3"
];


function init() {
  console.log('init');


  circle = new ProgressBar.Circle('#play-pause', {
    color: '#FF0432',
    duration: 1,
    strokeWidth: 6,
    trailColor: '#ccc',
    easing: 'easeInOut'
  });

  initUI();
}

function animatePlayback(amount) {
  circle.animate( Number(amount) );
}

function handleTimeUpdate(e) {
  var percentComplete = e.target.currentTime / e.target.duration;
  animatePlayback(percentComplete);
}

function initUI() {
  var clickEvent = ((document.ontouchstart!==null)?'click':'touchstart');
  document.getElementById('play-pause').addEventListener(clickEvent, togglePlayPause);

  var audioToggles = document.getElementsByClassName('circle');
  for (let i = 0; i < audioToggles.length; i++) {
    elt = audioToggles[i];
    elt.addEventListener(clickEvent, toggleAudioTrack);
  }
}

function togglePlayPause(e) {
  if (videoPlayer.paused) {
    audioPlayer.play();
    videoPlayer.play();
    this.classList.add('playing');
  } else {
    audioPlayer.pause();
    videoPlayer.pause();
    this.classList.remove('playing');
  }
  e.preventDefault();
  e.stopPropagation();
}

function toggleAudioTrack(e) {
  var whichTrack = _audioTracks[this.dataset.src];
  audioPlayer.src = whichTrack;
  if (!videoPlayer.paused) {
    audioPlayer.play();
  }
  document.getElementsByClassName('selected')[0].classList.toggle('selected');
  this.classList.add('selected');

  e.preventDefault();
  e.stopPropagation();
}
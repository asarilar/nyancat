const audioPlayer = document.getElementById('nyan-cat-song');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.innerHTML = 'Pause Nyan Cat Song';
  } else {
    audioPlayer.pause();
    playButton.innerHTML = 'Play Nyan Cat Song';
  }
});

// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const audio = document.querySelector('#expose audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');

  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;

    if (selectedHorn === 'air-horn') {
      hornImage.src = './assets/images/air-horn.svg';
      audio.src = './assets/audio/air-horn.mp3';
    } else if (selectedHorn === 'car-horn') {
      hornImage.src = './assets/images/car-horn.svg';
      audio.src = './assets/audio/car-horn.mp3';
    } else if (selectedHorn === 'party-horn') {
      hornImage.src = './assets/images/party-horn.svg';
      audio.src = './assets/audio/party-horn.mp3';
    }
  });

  volumeSlider.addEventListener('input', () => {
    const volume = Number(volumeSlider.value);
    audio.volume = volume / 100;

    if (volume === 0) {
      volumeIcon.src = './assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = './assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = './assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = './assets/icons/volume-level-3.svg';
    }
  });

  playButton.addEventListener('click', (event) => {
    event.preventDefault();

    audio.currentTime = 0;
    audio.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
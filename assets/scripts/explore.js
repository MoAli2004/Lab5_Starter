// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.querySelector('textarea');
  const talkButton = document.querySelector('#explore button');
  const faceImage = document.querySelector('#explore img');

  let voices = [];

  function loadVoices() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();

  speechSynthesis.addEventListener('voiceschanged', loadVoices);

  talkButton.addEventListener('click', () => {
    const text = textArea.value;
    const selectedVoice = voices[voiceSelect.value];

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice;

    utterance.onstart = () => {
      faceImage.src = './assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      faceImage.src = './assets/images/smiling.png';
    };

    speechSynthesis.speak(utterance);
  });
}
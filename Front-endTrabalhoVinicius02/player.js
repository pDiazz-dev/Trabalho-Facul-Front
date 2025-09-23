const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volume');

// Play / Pause
playBtn.addEventListener('click', () => {
  if(audio.paused){
    audio.play();
    playBtn.textContent = '⏸';
  } else {
    audio.pause();
    playBtn.textContent = '▶';
  }
});

// Atualizar barra de progresso e tempo
audio.addEventListener('timeupdate', () => {
  const current = audio.currentTime;
  const duration = audio.duration;
  const percent = (current / duration) * 100;
  progress.value = percent;

  const curMin = Math.floor(current / 60);
  const curSec = Math.floor(current % 60);
  currentTimeEl.textContent = `${curMin.toString().padStart(2,'0')}:${curSec.toString().padStart(2,'0')}`;

  const durMin = Math.floor(duration / 60);
  const durSec = Math.floor(duration % 60);
  durationEl.textContent = `${durMin.toString().padStart(2,'0')}:${durSec.toString().padStart(2,'0')}`;
});

// Atualizar posição quando usuário muda a barra
progress.addEventListener('input', () => {
  const duration = audio.duration;
  audio.currentTime = (progress.value / 100) * duration;
});

// Controle de volume
volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value; // 0 a 1
});
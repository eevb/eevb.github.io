let count = 2020;

function updateURL() {
  window.history.pushState(null, null, '/' + count++);
  setTimeout(updateURL, 50);
}

updateURL();

/* Autoplay warning*/

const video = document.getElementById('bg-video');
const canAutoPlay = video.autoplay || (video.currentTime !== 0 && !video.paused && !video.ended && video.readyState > 2);

if (!canAutoPlay) {
  const warningElement = document.querySelector('.auto-play-warning');
  warningElement.style.display = 'block';
}



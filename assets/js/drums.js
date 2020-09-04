function playSound(e) {

  const audio = document.querySelector(`audio[data-key="${e.keyCode || this.dataset.key}"]`);
  const key   = document.querySelector(`.key[data-key="${e.keyCode || this.dataset.key}"]`);


  // Stop function from running
  if (!audio) return;

  // Rewind audio to the start
  audio.currentTime = 0;
  audio.play();

  // Highlight current key being played
  key.classList.add('playing');
};

function removeTransition(e) {
  // Skip if it's not a transform
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
};

// Loop over each key and attach an eventListener
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition)
  key.addEventListener('click', playSound)
});

// Play sound on key press
window.addEventListener('keydown', playSound);

// Play sound for the given key (A to L)
function playSound(key) {
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  const keyDiv = document.querySelector(`.key[data-key="${key}"]`);

  if (!audio || !keyDiv) return;

  audio.currentTime = 0;
  audio.play();
  keyDiv.classList.add("playing");

  // Remove animation after 150ms
  setTimeout(() => {
    keyDiv.classList.remove("playing");
  }, 150);
}

// Handle keyboard press
window.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  playSound(key);
});

// Handle mouse click on virtual keys
const allKeys = document.querySelectorAll(".key");
allKeys.forEach((keyDiv) => {
  keyDiv.addEventListener("click", () => {
    const key = keyDiv.getAttribute("data-key");
    playSound(key);
  });
});

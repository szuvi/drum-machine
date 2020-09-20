document.addEventListener("keydown", playSound);
document.addEventListener("keyup", removeStyling);
const keys = document.querySelectorAll(".key");

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) return;
  audio.play();
  key.classList.add('playing');
}

function removeStyling(event) {
    const keyCode = event.keyCode;
    keys.forEach(key => {
        if (key.dataset.key == keyCode) {
            key.classList.remove("playing");
        }
    })
}


const letters = document.getElementsByClassName('box');
[...letters].forEach(letter => {
  letter.addEventListener('mousedown', function() {
    this.style.border = '2px solid orange';
    const audio = new Audio();
    audio.src = `sounds/${letter.id}.mp3`;
    audio.play();
  });
});
[...letters].forEach(letter => {
  letter.addEventListener('mouseup', function() {
    this.style.border = '2px solid black';
  });
});

document.addEventListener('keydown', event => {
  const a = document.getElementById(`${event.keyCode}`);
  if (a) {
    a.style.border = '2px solid orange';
    const audio = new Audio();
    audio.src = `sounds/${a.id}.mp3`;
    audio.play();
  }
});

document.addEventListener('keyup', event => {
  const a = document.getElementById(`${event.keyCode}`);
  if (a) {
    a.style.border = '2px solid black';
  }
});

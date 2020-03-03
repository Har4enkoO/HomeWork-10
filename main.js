const letters = document.getElementsByClassName('box');
[...letters].forEach(letter => {
  letter.addEventListener('mousedown', function() {
    this.style.border = '2px solid orange';
  });
});
[...letters].forEach(letter => {
  letter.addEventListener('mouseup', function() {
    this.style.border = '2px solid black';
  });
});
[...letters].forEach(letter => {
  letter.addEventListener ('mousedown', function() {
    const audio = new Audio(); 
    audio.src = `sounds/${letter.id}.mp3`; 
    audio.autoplay = true;
  })
})


// document.addEventListener('keypress', (event) => {
//   console.log('нажата клавиша: ' + event.key);
// });
// letter.addEventListener('keyup', function(event) {
//   console.log(event.code);  
// })




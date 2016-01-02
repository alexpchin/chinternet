var Typing = Typing || {};

Typing.placeLetterInterval = 500;

Typing.randomLetter = function(){
  return String.fromCharCode(97 + Math.floor(Math.random() * 26));
};

Typing.placeLetter = function() {
  var letter            = Typing.randomLetter();
  var newLetter         = document.createElement("div");
  var height            = Typing.box.clientHeight;
  var width             = Typing.box.clientWidth;
  newLetter.innerHTML   = letter;
  newLetter.className   = letter;
  newLetter.style.top   = Math.random() * (height-50) + "px";
  newLetter.style.right = width - (Math.random() * width/2) + "px";
  return Typing.box.appendChild(newLetter);
};

Typing.moveLetters = function() {
  var boxes = document.querySelectorAll("#box > div");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.right = parseInt(boxes[i].style.right) - 10 + "px";
    if (parseInt(boxes[i].style.right) <= -10) {
      Typing.endGame();
    }
  }
};

Typing.decreaseLetterSpeed = function(score) {
  if (parseInt(score.innerHTML) % 20 === 0) {
    clearInterval(Typing.placeLetterTimer);
    Typing.placeLetterInterval = Typing.placeLetterInterval * 1.1;
    Typing.placeLetterTimer = setInterval(Typing.placeLetter,  Typing.placeLetterInterval);
  }
};

Typing.endGame = function() {
  clearInterval(Typing.moveLettersTimer);
  clearInterval(Typing.placeLetterTimer);
  document.removeEventListener('keydown', Typing.keyboardInput);
  Typing.message.classList.remove("hidden");
  Typing.resetButton.classList.remove("disabled");
};

Typing.resetGame = function() {
  Typing.message.classList.add("hidden");
  Typing.resetButton.classList.add("disabled");
  Typing.score.innerHTML = 0;
  Typing.placeLetterInterval = 500;

  var boxes = document.querySelectorAll("#box > div");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].remove();
  }
  return Typing.startGame();
};

Typing.keyboardInput = function() {
  if (event.keyCode === 27) return Typing.endGame();

  var key = String.fromCharCode(event.keyCode).toLowerCase();
  var boxes = document.getElementsByClassName(key);

  if (boxes[0]) {
    boxes[0].remove();
    Typing.score.innerHTML = parseInt(score.innerHTML) + 1;
    Typing.decreaseLetterSpeed(Typing.score);
  } else {
    Typing.score.innerHTML = parseInt(Typing.score.innerHTML) - 1;
  }
};

Typing.startGame = function() {
  Typing.placeLetterTimer = setInterval(Typing.placeLetter, Typing.placeLetterInterval);
  Typing.moveLettersTimer = setInterval(Typing.moveLetters, 100);
  Typing.startButton.classList.add("disabled");
  document.addEventListener('keydown', Typing.keyboardInput);
};

document.addEventListener("DOMContentLoaded", function(event) {
  Typing.box                 = document.getElementById("box");
  if (Typing.box) {
    Typing.message             = document.getElementById("message");
    Typing.score               = document.getElementById("score");
    Typing.startButton         = document.getElementById("start");
    Typing.resetButton         = document.getElementById("reset");
    Typing.startButton.onclick = Typing.startGame;
    Typing.resetButton.onclick = Typing.resetGame;
  }
});

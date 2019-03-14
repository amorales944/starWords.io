var pushWguess = [];
var underscores = "";
var wordBank = [
  "BATTLESHIP",
  "ALDERAAN",
  "ANAKIN",
  "C3PO",
  "CHEWBACCA",
  "DROID",
  "EMPIRE",
  "FORCE",
  "JEDI",
  "LEIA",
  "LUCAS",
  "LUKE",
  "PALPATINE",
  "R2D2",
  "SKYWALKER",
  "STORMTROOPER",
  "WOOKIEE",
  "YODA",
];

var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(randWord)
for (i = 0; i < randWord.length; i++) {
  underscores = underscores + " _ "
};
document.getElementById("underScores").innerHTML = underscores

document.onkeyup = function (event) {
  var userGuess = event.key;
  pushWguess.push(userGuess);
  console.log(pushWguess);
  var wgLen = pushWguess.length;
  for (var i = 0; i < wgLen; i++) {


  }
  document.getElementById("wrongGuess").innerHTML = pushWguess.join(", ");
  document.getElementById("tries-text").innerHTML = wgLen;
};
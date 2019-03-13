  var wins, losses = 0;
  var pushWguess = [];
  var underscores = "";
  var wordBank = ["BATTLESHIP", 
                  "ALDERAAN", 
                  "ANAKIN", 
                  "C3PO", 
                  "CHEWBACCA", 
                  "DARTH VADER", 
                  "DEATH STAR", 
                  "DROID", 
                  "EMPIRE",
                  "FORCE",
                  "HAN SOLO",
                  "JEDI",
                  "LEIA",
                  "LUCAS",
                  "LUKE",
                  "OBI-ONE",
                  "PALPATINE",
                  "R2D2",
                  "SKYWALKER",
                  "STORMTROOPER",
                  "WOOKIEE",
                  "YODA",
                ];
 
  var rand = wordBank[Math.floor(Math.random() * wordBank.length)];
                console.log(rand)
  for(i = 0; i < rand.length; i++) {
   underscores = underscores + "_ "
  };
  document.getElementById("underScores").innerHTML = underscores

  document.onkeyup = function(event) {
    var userGuess = event.key;
    pushWguess.push(userGuess);
    console.log(pushWguess);
    var wgLen = pushWguess.length;
    for (var i = 0; i < wgLen; i++) {
      
    }
   
   document.getElementById("wrongGuess").innerHTML = pushWguess.join(", ");


 };
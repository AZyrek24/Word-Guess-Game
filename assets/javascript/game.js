//Global Variables
//================================================================================
//Arrays
var wordArray = ["mario", "samos", "yoshi", "luigi", "bowser"];
var lettersInWord = [];
var wordDisplay = [];
var wrongLetters = [];

//Variables to store data
var randomWord = "";
var numLettersInWord = 0;

//Variables as Counters
var wins = 0;
var guessesRemaining = 5;



//Functions
//================================================================================
function gameStart() {
  randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  lettersInWord = randomWord.split("");
  numLettersInWord = lettersInWord.length;

  //Reset Counters When Game Restarts With New Word
  guessesRemaining = 6;
  wrongLetters = [];
  wordDisplay = [];

  //Display Correct Letters and Change Counters
  for (i = 0; i < numLettersInWord; i++) {
    wordDisplay.push("_");
    document.getElementById("wordDisplay").innerHTML = wordDisplay.join(" ");
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    document.getElementById("wins").innerHTML = wins;
  }

  
  
  //Display Correct Letters and Change Counters
  // for (i = 0; i < numLettersInWord; i++) {
    //   if (key === lettersInWord[i]) {
      //     wordDisplay = wordDisplay.push(lettersInWord[i]);
      //   } else {
        //     document.getElementById("lettersGuessed").innerHTML = ("key");
        //   }        
         
        //Testing/debug
        console.log(randomWord);
        console.log(lettersInWord);
        console.log(numLettersInWord);
        console.log(wordDisplay);
}

function letterCheck (letter) {
  for (i = 0; i < numLettersInWord; i++) {
    if (letter !== lettersInWord[i]) {
      document.getElementById("wrongLetters").innerHTML = (letter.toUpperCase() + " ");
    }
  }
}
//Main Process
//================================================================================
gameStart();

//Get Key Input From Player

document.onkeyup = function(event) {
  var guessedLetter = event.key.toLowerCase();
  letterCheck(guessedLetter);
  
  //Testing/debug
  console.log(guessedLetter);
}
      
      
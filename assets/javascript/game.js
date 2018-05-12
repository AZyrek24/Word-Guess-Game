//Global Variables
//================================================================================
//Arrays
var wordArray = ["super mario bros", "metroid", "castlevania", "contra", "punch out", "the legend of zelda", "mega man", "final fantasy", "kung fu", "ninja gaiden"];
var lettersInWord = [];
var wordDisplay = [];
var wrongLetters = [];

//Variables to store data
var randomWord = "";
var numLettersInWord = 0;
var guessedLetter = "";
//Variables as Counters
var wins = 0;
var guessesRemaining = 6;



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
    if (lettersInWord[i] === " ") {
      wordDisplay.push("&nbsp;");
    } else {
      wordDisplay.push("_");
    }
  }
  document.getElementById("wordDisplay").innerHTML = wordDisplay.join(" ");
  document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
  document.getElementById("wins").innerHTML = wins;

  //Testing/debug
  console.log(randomWord);
  console.log(lettersInWord);
  console.log(numLettersInWord);
  console.log(wordDisplay);
}
//Checks Key Pressed to Letters in Random Word
function letterCheck(letter) {
  var letterIsInWord = false;
  for (i = 0; i < numLettersInWord; i++) {
    if (randomWord[i] === letter) {
      letterIsInWord = true;
    }
  }
  //Checks where in the word the letter is and displays it
  if (letterIsInWord) {
    for (i = 0; i < numLettersInWord; i++) {
      if (randomWord[i] === letter) {
        wordDisplay[i] = letter;
      }
      //Letters that are not found
      else {
        letter.toUpperCase();
        wrongLetters.push(letter.join(" "));
        guessesRemaining--;
        console.log(guessesRemaining);
      }
    }
  }
}
//With each guess, checks if player won/lost, changes counters
function updateCounter() {
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("wordDisplay").innerHTML = wordDisplay.join(" ");
  document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");
  if (wordDisplay.toString() == lettersInWord.toString()) {
    wins++;
    gameStart();
  }
  else if (guessesRemaining = 0) {
    alert("Try Again!");
    gameStart();
  }

}
//Main Process
//================================================================================
gameStart();

//Get Key Input From Player

document.onkeyup = function (event) {
  guessedLetter = event.key.toLowerCase();
  letterCheck(guessedLetter);
  updateCounter();
}
//Global Variables
//================================================================================
//Arrays
var wordArray = ["super mario bros", "metroid", "castlevania", "contra", "punch out", "the legend of zelda", "mega man", "final fantasy", "kung fu", "ninja gaiden", "rad racer", "excitebike", "kid icarus", "double dragon", "gradius", "ice climber"];
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
  finalDisplay = [];

  //Display Correct Letters and Change Counters
  for (i = 0; i < numLettersInWord; i++) {
    if (lettersInWord[i] === " ") {
      wordDisplay.push(" ");

    } else {
      wordDisplay.push("_");
    }
  }
  var finalDisplay = [];
  for (j = 0; j < numLettersInWord; j++) {
    finalDisplay[j] = wordDisplay[j];
    if (finalDisplay[j] == " ") {
      finalDisplay[j] = "&nbsp;"
    }
  }
  document.getElementById("wordDisplay").innerHTML = finalDisplay.join(" ");
  document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("wrongLetters").innerHTML = wrongLetters;
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
  if (wordDisplay.indexOf(letter) > -1 || wrongLetters.indexOf(letter) > -1) {
    //Letter already pressed
  }
  else if (letterIsInWord) {
    for (i = 0; i < numLettersInWord; i++) {
      if (randomWord[i] === letter) {
        wordDisplay[i] = letter;
      }
    }
  }
  //Letters that are not found
  else {
    wrongLetters.push(letter);
    guessesRemaining--;
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
  }



}
//With each guess, checks if player won/lost, changes counters
function updateCounter() {
  document.getElementById("wins").innerHTML = wins;
  var finalDisplay = [];
  for (j = 0; j < numLettersInWord; j++) {
    finalDisplay[j] = wordDisplay[j]
    if (finalDisplay[j] == " ") {
      finalDisplay[j] = "&nbsp;"
    }
  }

  document.getElementById("wordDisplay").innerHTML = finalDisplay.join(" ");
  document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");
  if (wordDisplay.toString() == lettersInWord.toString()) {
    alert(randomWord.toUpperCase() + " is correct! NICE WIN!")
    wins++;
    gameStart();
  }
  else if (guessesRemaining == 0) {
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
  if (event.which <= 90 && event.which >= 48) {
    letterCheck(guessedLetter);
    updateCounter();
  }
}
//Global Variables
//================================================================================
//Arrays
var wordArray = ["mega_man", "super_mario_bros", "castlevania", "metroid", "bionic_commando"];
var lettersInWord = [];
var wordDisplay = [];
var wrongLetters = [];

//Variables to store data
var randomWord = "";
var numLettersInWord = 0;

//Variables as Counters
var wins = 0;
var guessesRemaining = 6;



//Functions
//================================================================================
function gameStart() {
  randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  lettersInWord = randomWord.split("");
  numLettersInWord = lettersInWord.length;

  //Reset Counters when game restarts with new word
  guessesRemaining = 6;
  wrongLetters = [];
  wordDisplay = [];

  //Displays spaces and letters correctly guessed
  for (i = 0; i < numLettersInWord; i++) {
    wordDisplay.push("_");
    document.getElementById("wordDisplay").innerHTML = wordDisplay.join(" ");
  }

  //Testing/debug
  console.log(randomWord);
  console.log(lettersInWord);
  console.log(numLettersInWord);
  console.log(wordDisplay);
  // for (var i = 0; i < numLettersInWord; i++) {    
  //     wordDisplay.push(" ");
  // }

  
  //   document.getElementById("wordToGuess").innerHTML = wordDisplay.join(" ");
  
  // document.onkeyup = function(event) {
    //   var key = event.key;
    //   for (var i = 0; i < numSpaces.length; i++) {
      //     if 
      //   }
      // }
      
      
}
//Main Process
//================================================================================
gameStart();



//Test Object
// var game {
//   wordArray: ["mega man", "super mario bros", "castlevania", "metroid", "bionic commando"],
//   lettersGuessed: [],
//   lettersInWord: [],
//   numSpaces: 
// }
//Global Variables
//================================================================================
//Arrays
var wordArray = ["mega man", "super mario bros", "castlevania", "metroid", "bionic commando"];
var lettersGuessed = [];
var lettersInWord = [];
var numSpaces = 0;
var wordDisplay = [];

//Variables
var randomWord = "";
var wins = 0;
var guessesRemaining = 6;



//Functions
//================================================================================
function gameStart() {
  randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
}

lettersInWord = randomWord.split("");
  
document.onkeyup = function(event) {
  var key = event.key;
  if (key === lettersInWord[]
}

//Main Process
//================================================================================
gameStart();
console.log(randomWord)


//Test Object
var game {
  wordArray: ["mega man", "super mario bros", "castlevania", "metroid", "bionic commando"],
  lettersGuessed: [],
  lettersInWord: [],
  numSpaces: 
}
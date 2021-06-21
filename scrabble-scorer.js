// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = "";

  for (let i = 0; i < word.length; i++) {

    for (const pointValue in oldPointStructure) {

      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      }

    }
  }
  return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.log("Let's play some scrabble!");

  wordEntered = input.question("Enter a word to score: ");
};



function simpleScore(word) {
  let addedScore = word.length;

  return addedScore;
}

function vowelBonusScore(word) {
  let vowelPoints = 0;
  let consonantPoints = 0;
  let combinedPoints = 0;
  let wordArray = [];

  word = word.toLowerCase();

  wordArray = word.split("");

  for (let i = 0; i < word.length; i++){
    
    let vowelLetters = ["a", "e", "i", "o", "u"];

    for (let x = 0; x < 5; x++){

      if (wordArray[i] == vowelLetters[x]) {
      vowelPoints = vowelPoints + 3;
      }
    }
  }

  for (let z = 0; z < word.length; z++){
    
    let consonantLetters = ["b", "c", "d", "f", "g", "h", "j", "k", "l","m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    
    for (let y = 0; y < 21; y++){

      if (wordArray[z] == consonantLetters[y]){
        consonantPoints = consonantPoints + 1;
      }
    }

  }
  

  combinedPoints = vowelPoints + consonantPoints;

  return combinedPoints;
}

let scrabbleScore;

const scoringAlgorithms = {
  0: {name: "Simple Score", description: "Each letter is worth 1 point", scorerFunction: simpleScore},
  1 : {name: "Bonus Vowels", description: "Vowels are 3pt, consonants are 1pt", scorerFunction: vowelBonusScore},
  2 : {name: "Scrabble", description: "The traditional scoring algorithm", scorerFunction: oldScrabbleScorer}
};

function scorerPrompt() {
  console.log(scoringAlgorithms);
  let scorerChosen = input.question ("Input the corresponding number to select that scoring method: ");

 if (scorerChosen == 0){
   console.log("Scoring algorithm: " + scoringAlgorithms[0].name);
   console.log("Score given: " + scoringAlgorithms[0].scorerFunction(wordEntered))
 } else if (scorerChosen == 1){
   console.log("Scoring algorithm: " + scoringAlgorithms[1].name);
   console.log("Score given: " + scoringAlgorithms[1].scorerFunction(wordEntered))
 } else if (scorerChosen == 2){
    console.log("Scoring algorithm: " + scoringAlgorithms[2].name);
   console.log("Score given: " + scoringAlgorithms[2].scorerFunction(wordEntered))
 } else {
   console.log("Invalid option!")
 }
}

function transform() { };

let newPointStructure;

function runProgram() {;
  let wordEntered;
  initialPrompt();
  scorerPrompt();

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScore: simpleScore,
  vowelBonusScore: vowelBonusScore,
  scrabbleScore: scrabbleScore,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt
};


const input = require('readline-sync');

let word = input.question(" Enter word ");

console.log("Great! " + word + " Is your word.");



let indexNumber = input.question(" Now pick an index number in your word. ");

console.log(word[indexNumber]);



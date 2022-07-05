let catName = "Oliver";
let catSound = "Meow!";

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

const sum = 10 + 10;
const difference = 45 - 33;
const product = 8 * 10;
const quotient = 66 / 33;


let myVar = 87;

// Only change code below this line
myVar++;

let myVar = 11;

// Only change code below this line
myVar--;

const myDecimal = 5.7;
const product = 5.0 * 0.0;
const product = 2.5 * 2.0;
const quotient = 4.0 / 2.0; // Change this line
const quotient = 4.4 / 2.0; // Change this line
const remainder = 11 % 3;

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9 ;
c += 7;

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3 ;
c *= 10;

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /=  4;
c /=  11;


const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

const myStr = "This is the start. "+"This is the end."; // Change this line


let ourStr = "I come first. ";
ourStr += "I come second.";

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
// Change code below this line
const someAdjective = "hi";
let myStr = "Learning to code is ";
myStr += someAdjective ;


// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;


function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
 
  console.log('Function scope i is: ', i);
  return i;
}

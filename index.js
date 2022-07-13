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


// Open console to view output
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line

  Object.freeze(MATH_CONSTANTS);

  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// Should show [object Error] {}

const magic = () =>  new Date();

const increment = (number, value = 1) => number + value;

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6


let a = 8, b = 6;
// change code below this line
[a, b] = [b, a];
// change code above this line
console.log(a); // should be 6
console.log(b); // should be 8


const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);



const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max,min})=> (max + min) / 2.0 ;
// Only change code above this line


const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
 const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);


const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
};


class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

 import { uppercaseString, lowercaseString} from './string_functions.js';
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

const makeServerRequest = new Promise((resolve, reject) => {

})


const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");// Change this line
  } else {  
    reject("Data not received");// Change this line
  }
});


function quickCheck(arr, elem) {
  // change code below this line
  if (arr.indexOf(elem) >= 0) {
    return true;
  } else {
    return false;
  }
  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


function filteredArray(arr, elem) {
let newArr = [];
// Only change code below this line
for(let i=0;i<arr.length;i++){
  if(arr[i].indexOf(elem) ==-1){
    newArr.push(arr[i])
  }
}
// Only change code above this line
return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array',["deep"]],
  ['mutate', 1327.98, 'splice', 'slice', 'push',[["deeper"]]],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary',[[["deepest"]]]]
  // Only change code above this line
];


let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods["bananas"] = 13 ;
foods["grapes"] = 35 ;
foods["strawberries"] = 27 ;

// Only change code above this line

console.log(foods);


let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
   userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);


let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem];
  // Only change code above this line
}

console.log(checkInventory("apples"));



let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods.oranges;
delete foods. plums;
delete foods. strawberries;
// Only change code above this line

console.log(foods);


let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};



function isEveryoneHere(userObj) {
  // Only change code below this line
return["Alan", "Jeff", "Sarah" , "Ryan"].every(name =>
    userObj.hasOwnProperty(name)
  );
  // Only change code above this line
}

console.log(isEveryoneHere(users));



const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
  // Only change code above this line
}

console.log(countOnline(users));



let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));


function convertToF(celsius) {
  let fahrenheit = celsius*(9 / 5) + 32;
  return fahrenheit;
}

convertToF(30);


function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}



function factorialize(num) {
  return num < 0 ? 1 :
    new Array(num)
      .fill(undefined)
      .reduce((product, _, index) => product * (index + 1), 1);
}
factorialize(5);



function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}



function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}



function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

repeatStringNumTimes("abc", 3);


et dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();




function Dog(){
  this.name = "fwef";
  this.color = "wef";
  this.numLegs = 4;
}


function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

let hound = new Dog();
// Only change code below this line



function Dog(name, color){
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Dog("ef", "color");



function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(5);
myHouse instanceof House;
// Only change code below this line


function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}


function Dog(name) {
  this.name = name;

}

Dog.prototype.numLegs = 2;

// Only change code above this line
let beagle = new Dog("Snoopy");


function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let property in beagle ){
  if(beagle.hasOwnProperty(property)){
    ownProps.push(property);
  }else{
    prototypeProps.push(property);
  }
}


function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
    } else {
    return false;
 }
}



function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
 numLegs:4,
 eat: function(){
   console.log("nom nom nom");
 },
 describe: function(){
   console.log("My name is " + this.name);
 }
};



function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
 constructor:Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line

Dog.prototype.isPrototypeOf(beagle);




function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);


function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
   eat: function() {
    console.log("nom nom nom");
  }
};


const arr = [
    { id: 'item1', name: 'TV', price: 13500 },
    { id: 'item2', name: 'washing machine', price: 8200 },
    { id: 'item3', name: 'laptop', price: 25000 },
];
arr.forEach((element, index) => {
  console.log(element.name);
});


const arr = [
    { id: 'item1', name: 'TV', price: 13500 },
    { id: 'item2', name: 'washing machine', price: 8200 },
    { id: 'item3', name: 'laptop', price: 25000 },
];
arr.forEach((element, index) => {
  if (element.price < 10000) {
      return;
  }
  // 只會印出大於 10000 元的東西
  console.log(element.name);
});

const arr = [
    { id: 'item1', name: 'TV', price: 13500 },
    { id: 'item2', name: 'washing machine' },
    { id: 'item3', name: 'laptop', price: 25000 }
];

arr.forEach(item => {
    const discountPrice = item.price * 0.8;
    console.log(`${item.name}：${discountPrice}`);
});


const arr = [
    { id: 'item1', name: 'TV', price: 13500, vip: false },
    { id: 'item2', name: 'washing machine', price: 8200, vip: false },
    { id: 'item3', name: 'laptop', price: 25000, vip: false },
    { id: 'item4', name: 'vip product', price: 99999, vip: true },
];
const isUserVip = false;

// ...

return arr
        .filter(item => isUserVip || !item.vip)
        .map(item => (
            <div key={item.id} >
                <div>{item.name}</div>
                <div>{item.price}</div>
            </div>
        ));

function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;

  str
    .split("")
    .forEach(letter => {
      if (letter.charCodeAt(0) === currCharCode) {
        currCharCode++;
      } else {
        missing = String.fromCharCode(currCharCode);
      }
    });

  return missing;
}

// test here
fearNotLetter("abce");


function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");


function fearNotLetter(str) {
  var allChars = "";
  var notChars = new RegExp("[^" + str + "]", "g");

  for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars)
    ? allChars.match(notChars).join("")
    : undefined;
}

// test here
fearNotLetter("abce");


var arr = [1, 2, 3];
arr.forEach(function(element) {
  console.log(element);    // 1 2 3
});

var arr = [1, 2, 3];
var arr2 = arr.map(function(element) {
  return element * 2;
});
console.log(arr);    // [1, 2, 3]
console.log(arr2);   // [2, 4, 6]

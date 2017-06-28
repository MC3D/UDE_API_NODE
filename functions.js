// functions let you group a series of statements together to perform some task
// once a function is created, it can be reused over and over in your code
// if you find yourself repeating statements in your code, then a function my be the answer
// DRY - don't repeat yourself

// functions in js are first class objects
// they can have properties and methods just like any other object
// where they differ, is in the fact that fucntions can be called and objects can't

// function declaration; named function
// when interpreter runs, in goes through and looks at all your code
// function declarations are hoisted
// you can call the function before you declare it
function sayHi() {
  console.log('Hi!');
}

function sayHiWithName(name) {
  console.log(`Hi, ${name}`);
}

function addThreeNumbers(a, b, c) {
  return a + b + c;
}

// to execute function(s)
sayHi();
sayHiWithName('Mady');


let result = addThreeNumbers(1,2,4);
console.log(result);

function sayHello(firstName, lastName) {
  return `Well, hello, ${firstName} ${lastName}`
}

let greeting = sayHello('James', 'Morris');
console.log(greeting);

// anonymous functions are not hoisted
// fucntion expressions are not hoisted
// function expressions - assign anonymours (unnamed) function to a variable
let sayGreeting = function() {
  return 'Well, hello there!'
}

console.log(sayGreeting());

// IIFE - Immediately Invoked Function expressions
let sayGoodbye = (function() {
  return 'See you later!'
}());

console.log(sayGoodbye);

let firstName = 'Mady';
let lastName = 'Chapman';

let newGreeting = (function(firstName, lastName) {
  return `Hi again, ${firstName} ${lastName}`
}(firstName, lastName));

console.log(newGreeting);

// with es6, we have a new syntax for functions
// they are called arrow functions or fat arrow functions
// arrow functions do not bind 'this' =>

// let speakNames = function(firstName, secondName) {
//   return `The names are ${firstName} and ${secondName}`;
// }

// goal is to eliminate repetitive typing and make syntax a little cleaner
// let speakNames = (firstName, secondName) => {
//   return `The names are ${firstName} and ${secondName}.`;
// }

// with a single return statement you can simplify and get rid of code block
//let speakNames = (firstName, secondName) => `The names are ${firstName} and ${secondName}.`;

// if you only have one parameter, you can omit the ()
let speakNames = firstName => `The first name is ${firstName}.`;

console.log(speakNames('Jack', 'Jill'));

// this keyword
// a regular function binds this and a fat arrow function does not

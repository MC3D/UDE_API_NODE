// loops and conditionals
// with conditionals we evaulate a condition and take a code path
// path depends on the value of the condition

let a = 9;
let b = 32;

if (a > b) { // false
  console.log('a is greater than b');
} else if (a === b) { // false
  console.log('a is equal to b');
} else { // if everything else fails
  console.log(('a is less than b'));
}

// anything that returns a boolean value can be the condition

// multiple conditions can be 'chained' together
// && = 'AND'
// || = 'OR'
if((true) && (true)) { // true
  console.log('true');
} else {
  console.log('false');
}

if((true) || (false)) { // true
  console.log('true');
} else {
  console.log('false');
}

let isDarkOutside = true;

if(isDarkOutside) {
  console.log('It is dark outside.');
} else {
  console.log('It is daylight.');
}

// switch statement
let color = 'red';

switch(color) {
  case 'yellow':
    console.log('Yellow');
    break; // w/o break it will fall through to the next case
  case 'green':
    console.log('Green');
    break;
  default:
    console.log('We couldn\'t determine the color!');
}

// loops - with loops, we run some block of code over and over until a given condition is met

// while loop
console.log('While loop');
let counter = 5;
while(counter <= 10) {
  console.log(`The value is ${counter++}`);
}

// do while loop
console.log('Do while loop');
counter = 5;
do {
  console.log(`The value is ${counter}`);
  counter++;
} while (counter <= 10);

// for loop
console.log('For loop');
for (let i = 5; i <= 10; i++) {
  console.log(`The value is ${i}`);
}

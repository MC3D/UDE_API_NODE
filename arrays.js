// arrays are like a list
// they are multiple values stored inside a single variables
// arrays are declared with square brackerts
let grades = [92, 98, 87, 84, 93];

// array index is zero based
console.log(`My first grade was ${grades[0]}`);
console.log(`My second grade was ${grades[1]}`);

// you can mix and match types in an arrays
let myStuff = ['dogs', 32, true, 'unicorns'];
console.log('myStuff', myStuff);

// access the length of an array; length is a property
console.log('myStuff length', myStuff.length);

// array methods
// pop; takes the value on the end and pops it off the array and returns that value
let poppedValue = myStuff.pop();
console.log('poppedValue', poppedValue);
console.log('myStuff', myStuff);

// push
myStuff.push(poppedValue);
console.log('myStuff', myStuff);

grades.push(79, 92, 84);
console.log('grades', grades);

// shift
let shiftedValue = myStuff.shift();
console.log('shiftedValue', shiftedValue);
console.log('myStuff', myStuff);

myStuff.unshift(shiftedValue);
console.log('myStuff', myStuff);

// concat; short for concatenate
let arrayOne = [1,2,3];
let arrayTwo = [4,5,6];

let concatArray = arrayOne.concat(arrayTwo);
console.log('concatArray', concatArray);

let arrayThree = [7,8,9];
let concatArrayTwo = arrayOne.concat(arrayTwo, arrayThree);
console.log('concatArrayTwo', concatArrayTwo);

// reverse
let reversedArray = concatArrayTwo.reverse();
console.log('reversedArray', reversedArray);


// sort
let statesArray = ['Missouri', 'Arkansas', 'Arizona', 'Montana', 'South Carolina']
let sortedStatesArray = statesArray.sort();

console.log('statesArray', statesArray);
console.log('sortedStatesArray', sortedStatesArray);

let numericArray = [233, 3, 83, 2399, 23, 5, 8];
// a function that defines an alternate sort order; uses optional compare function
let sortedNumericArray = numericArray.sort((a, b) => a - b);
console.log('sortedNumericArray', sortedNumericArray);

// the compare function has the following form
// function compare(a, b) {
//   if (a is less than b by some ordering criterion) {
//     sort function will sort a as a value lower than b
//     return -1;
//   }
//   if (a is greater than b by the ordering criterion) {
//     sort function will sort a as a value higher than b
//     return 1;
//   }
//   // a must be equal to b
//   sort function will sort a as a value equal to b
//   return 0;
// }

// slice
// slice allows you to 'pull out' a part of an array
// it takes two values, the start index and the end index
// the method will return all values from the start index up to, but NOT INCLUDING, the end index
let slicedStates = sortedStatesArray.slice(2, 5);
console.log('slicedStates', slicedStates);

slicedStates = sortedStatesArray.slice(2) // it will start at index you pass in and go up to the end of the array
console.log('slicedStates', slicedStates);

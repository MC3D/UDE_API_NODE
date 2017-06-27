// strings are a data type and they are used to represent text
// wrapped in either single or double quotes

// example
// single quotes
let name = "Jack";
console.log(name);

name = 'Jill';
console.log(name);

// pick one and stick with it
// default to team style guide if there is one

// you cannot mix sigle and double quotes
// name = "Penny' throws an error

let message = "It's nice to see you!"
console.log('message1', message);
// throws an error
// message = 'It's nice to see you!'
// you can use an escape character; \
message = 'It\'s nice to see you!'
console.log('message2', message);

console.log(typeof 942); // Number
console.log(typeof '942'); // String
console.log(typeof true); // Boolean
console.log(typeof 'true'); // String

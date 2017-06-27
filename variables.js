// variables are named containers used for storing data
// preferred style is camelCase; names should be descriptive

var firstName = 'Mady';
var lastName = 'Chapman';

var fullName = `${firstName} ${lastName}`;
console.log(fullName);

// ES6 has added two more keywords for declaring variables - 'const' and 'let'
// let is similar to var with the exception that the variable can not be redeclared after declaration
// var is also scoped to the near 'function block' while let is scoped to the nearest 'enclosing block' - which can be a smaller scope than a function block.
// Both are global if not in a block.
// In general, it is good practice to use let instead of var unless you need to use var for a specific reason.


// use const if the variable value is never going to change e.g. birthday

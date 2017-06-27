// operators are used to assign values, compare values, perform arithmetic operations and more

// one ternary oeprator
// condition ? expr1 : expr2 // expr1 will be evaluated if condition is true, else expr2 will be evaluated

// binary operators require two operands
// 1 + 2;
// a + b;

// unary operators
// requires one operand before or after the operators
// a++ // postfix increment oeprator
// ++a // prefix increment operator

let a = 1;
console.log('prefix', a++); // prints '1' and THEN increments by 1
console.log('prefix', a); // prints 2
console.log('postfix', ++a); // increments and THEN prints the value

// arithmetic oeprators = '+, -, *, /, %' - take numerical values or variables
// return one numberical value
let total = 32 + 46 - 13; // 65
let product = 5 * 5 // 25
// modulus
console.log(25 % 5); // no remainder
console.log(23 % 4); // remainder 3

// equlaity and strict equality
// always return a boolean value

console.log(3 == '3'); // checks for equal value
console.log(3 === '3'); // checks for equal value and type

// concatenation
let firstName = 'Mady';
let lastName = 'Chapman'
console.log(firstName + ' ' + lastName);

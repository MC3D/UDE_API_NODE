// everything in js that isn't a primitive type is an object
// string, number, boolean, undefined, null, symbol

// objects are key value pairs inside curly braces; keys are also known as properties
// when variables are used inside objects, they are called properties
// when functions are used inside objects, they are called methods

// object literal
var truck = {
  make: 'Dodge',
  wheels: 4
};

// two ways to access properties

// bracket notation
console.log(`I have a ${truck['make']} that has ${truck['wheels']} wheels.`);

// dot notation
console.log(`I have a ${truck.make} that has ${truck.wheels} wheels.`);

// object literal is where you create a variable and assign it an object right THEN
var employee = {
  // properties
  firstName: 'Joe',
  lastName: 'Hendrix',
  // methods
  fullName: function() {
    // this refers to the object that owns the function
    return `${this.firstName} ${this.lastName}`
  }
};

// call a property
console.log(`Our IT Director is ${employee.firstName}`);

// call a method
console.log(`Our IT Director is ${employee.fullName()}`);

// object constructor function
// convention is to start with capital letter e.g. capital V in Vehicle
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.getFullDescription = function(){
    return `${this.year} ${this.make} ${this.model}`;
  };
}

// create new instances with the new keyword
let myVehicle = new Vehicle('Dodge', 'Ram 1500', '2011');
let myDadsVehicle = new Vehicle('Subaru', 'Outback', '2016');

console.log(myVehicle.year, myVehicle.make, myVehicle.model);
console.log(myDadsVehicle.getFullDescription());

// function createVehicle(make, model, year) {
//   return {
//     make: make,
//     model: model,
//     year: year,
//     getFullDescription: function() {
//       return `${year} ${make} ${model}`;
//     }
//   };
// }

// es6 enhanced object literal syntax
function createVehicle(make, model, year) {
  // if parameter is equal to key, you don't have to type the right side of the :
  return {
    make,
    model,
    year,
    getFullDescription() {
      return `${year} ${make} ${model}`;
    }
  };
}

let myCar = createVehicle('Hyundai', 'Subaru', '2012');

console.log(myCar.getFullDescription());

//var, let, const

var name = "謝德興";
console.log(name);
name = '德興謝';
console.log(name);
name = '2019';

var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// letter, numbers, _, $,
// annot start with number

// Multi word vars
var firstName = 'Dehsing';      // Camel case, preferred
var first_name = 'John';    // Underscore
var FirstName = 'Sara';     // Pascal case
var firstname;

// let 

let name2 = "謝德興";
console.log(name2);
name2 = '德興謝';
console.log(name2);
name2 = '2019';

//const

// var name3 = "謝德興";
// console.log(name3);
// name3 = '德興謝';
// console.log(name3);
// name3 = '2019';

const person = {
    name : 'john',
    age : 18
}
person.name = 'Sara';
person.age = 19;
console.log(person);

const numbers = [6,5,4,3,2];
numbers.push(1);
console.log(numbers);
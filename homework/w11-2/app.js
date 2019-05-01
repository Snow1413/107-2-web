// String

const name1 = 'Jeff';
const name2 = new String('Jeff');

// name2.foo = 'bar';
// console.log(name2);

console.log(typeof name2);

if(name2 === 'Jeff'){
    console.log('YES');
} else {
    console.log('NO');
}

// Number

const num1 = 5;
const num2 = new Number(5);
const num3 = Number(5);

// Boolean

const bool1 = true;
const bool2 = new Boolean(true);

// Function

const getSun1 = function(x, y){
    return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');

// Object

const john1 = {name: "John"};
const john2 = new Object({name: "John"});
console.log(john2);

// Arrays

const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

// Regular Expression

const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);

var person = {
    name : ['Bob', 'Smith'],
    age : 32,
    gender : 'male',
    interests : ['music', 'skiing'],
    bio : function() {
        alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0])
    },
    greeting: function() {
        alert('Hi! I\'m ' + this.name[0] + '.');
    }
};

// preson.name[0]
// person.age
// person.interests[1]
// person.bio()
// person.greetiong()
// Person constructor


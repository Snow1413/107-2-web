const firstName = 'DeHsing';
const lastName = 'Hsieh';
const age = 19;
const str = 'Hello there my name is Henry';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;
console.log(val);

// Append
val = 'DeHsing ';
val += 'Hsieh';
console.log(val);

val = 'Hello, my name is ' + firstName + ' and I am ' + age;
console.log(val);

// Escaping
val =  'That\'s awesome, I can\'t wait';
console.log(val);

// Length
val = firstName.length;
console.log(val);

// concat()
val = firstName.concat(' ', lastName);
console.log(val);

// Change case
val = firstName.toUpperCase();
console.log(val);
val = firstName.toLowerCase();
console.log(val);

val = firstName[0];
console.log(val);

// indexOf()
val = firstName.indexOf('e');
console.log(val);
val = firstName.lastIndexOf('i');
console.log(val);

// charAt()
val = firstName.charAt('5');
console.log(val);

// Get last char
val = firstName.charAt(firstName.length-1);
console.log(val);

// substring()
val = firstName.substring(2,7);
console.log(val);

// slice()
val = firstName.slice(0,2);
console.log(val);
val = firstName.slice(-5);
console.log(val);

// split()
val = str.split(' ');
console.log(val);
val = tags.split(',');
console.log(val);

// replace()
val = str.replace('Henry', 'Steve');
console.log(val);

// includes()
val = str.includes('Henry');
console.log(val);
// Create some arrays
const numbers = [43,56,33,23,44,36,5,9527,30678];
const numbers2 = new Array(22,45,33,76,54,48763,87);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear', 'Melon'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;
console.log(val);
// Check if is array
val = Array.isArray(numbers);
console.log(val);
// Get single value
val = numbers[8];
console.log(val);
// Insert into array
numbers[7] = 777;
console.log(numbers); 
// Find index of value
val = numbers.indexOf(36);
console.log(val);
// MUTATING ARRAYS
// Add on to end
val = numbers.push(666);
console.log(numbers);
// Add on to front
val = numbers.unshift(444);
console.log(numbers);
// Take off from end
val = numbers.pop();
console.log(numbers);
// Take off from front
val = numbers.shift();
console.log(numbers);
// Splice values
val = numbers.splice(0,7);
console.log(numbers);
// Reverse
val = numbers.reverse();
console.log(numbers);
// Concatenate array
val = numbers.concat(numbers2);
console.log(val);
// Sorting arrays
val = fruit.sort();
console.log(val);
// Use the "compare function"
val = numbers2.sort(function(a,b){return a-b});
console.log(val);
// // Reverse sort
val = numbers2.sort(function(a,b){return b-a});
console.log(val);
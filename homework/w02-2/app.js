const man = 'man';
const man_age = 30;

const woman = 'woman';
const woman_age = 15;

let val;

val = 'man age is ' + man_age + ' ' + (man_age <= 18 ? 'kid' : 'adult');
console.log(val);

val = 'woman age is ' + woman_age + ' ' + (woman_age <= 18 ? 'kid' : 'adult');
console.log(val);
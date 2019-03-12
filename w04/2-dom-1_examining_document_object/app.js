let val;

val = document;
console.log(val);

val = document.all;
console.log(val);

val = document.all.length;
console.log(val);

val = document.all[1];
console.log(val);

val = document.head;
console.log(val);

val = document.body;
console.log(val);

val = document.URL;
console.log(val);

val = document.forms;
console.log(val);

val = document.forms[0];
console.log(val);

val = document.forms[0].id;
console.log(val);

val = document.forms[0].method;
console.log(val);

val = document.forms[0].action;
console.log(val);

val = document.links;
console.log(val);

val = document.links[0];
console.log(val);

val = document.links[0].id;
console.log(val);

val = document.links[0].className;
console.log(val);

val = document.links[0].classList;
console.log(val);

val = document.links[0].classList[0];
console.log(val);

val = document.images;
console.log(val);

val = document.scripts;
console.log(val);

val = document.scripts[1].src;
console.log(val);

let script = document.scripts;

let scriptArray = Array.from(script);

console.log(scriptArray);

scriptArray.forEach(function(script){
    console.log(script.getAttribute('src'));
})
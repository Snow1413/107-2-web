// document.querySelector('.clear-tasks').addEventListener('click', function(e){

// console.log('Hello World');

// //e.preventDefault();

// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){

//在consol log 印出Clicked

let val;

//印出所有e event

val = e;

// Event target element(id, className, classlist)
val = e.target;
val = e.target.id;
val = e.target.className;
val = e.target.classList;

// Event type
val = e.type;

// Timestamp/(1000*60)
val = e.timeStamp/(1000);

// // Coords event relative to the window
val = e.clientY;
//val = e.clientX;

// Coords event relative to the element
val = e.offsetY;
//val = e.offsetX;

console.log(val);

}
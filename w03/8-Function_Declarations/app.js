// FUNCTION DECLARATIONS
function greet(firstName = 'Jhon', lastName = 'Doe'){
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet());
console.log(greet('Hsieh', 'DeHsing'));
// FUNCTION EXPRESIONS
const square = function(x=0)
{
    return x*x;
}
console.log(square(5));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
(function greeting()
{
    console.log('IIFE Ran.')
})();

(function greet(firstName = 'Jhon', lastName = 'Doe'){
    console.log('Hello ' + firstName + ' ' + lastName)
})('Hsieh', 'DeHsing');

// PROPERTY METHODS
const todo = {
    add: function(){
        console.log('add to ...');
    },
    edit: function(id){
        console.log(`edit todo ${id}`);
    }
}
todo.delete = function(id){
    console.log(`delete todo id ${id}`);
}

todo.add();
todo.edit(666);
todo.delete(777);
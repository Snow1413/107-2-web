// FOR LOOP
for (let i=1;i<=10;i+=2){
    console.log('Number '+i);
}
// WHILE LOOP
let i=1;
while (i<=10){
    console.log('Number '+i);
    i+=2;
}

// DO WHILE
let j=1;
do{
    console.log('Number '+j);
    j+=2;
}while(j<=10);

// LOOP THROUGH ARRAY
const game = ['Apex', 'Rainbow6', 'MHW', 'CSGO'];
for (let i=0;i<game.length;i++){
    console.log(game[i]);
}

// FOREACH
game.forEach(function(game, index, array){
    console.log(`${index}: ${game}`);
    console.log(array);
})

// MAP
const users = [
    {
        id: 1,
        name: 'Jhon'
    },
    {
        id: 2,
        name: 'Sara'
    },
    {
        id: 3,
        name: 'Steve'
    }
];

const ids = users.map(function(user){
    return user.id;
});
console.log(ids);

// FOR IN LOOP

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for (let x in user){
    console.log(`${x}: ${user[x]}`);
}

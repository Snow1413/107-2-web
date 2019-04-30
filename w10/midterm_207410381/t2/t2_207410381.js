

/*
Before Sorting
Lotto: 24,40,14,30,45,34

After Sorting
Lotto: 14,24,30,34,40,45
*/

let lotto = []

for(let i=0; i<6; i++)
{
    lotto.push(Math.floor(Math.random() * 50));
}

console.log(lotto);

lotto.sort(function(a, b){return a-b});

console.log(lotto);
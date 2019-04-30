

/*
Before Sorting
Lotto: 24,40,14,30,45,34

After Sorting
Lotto: 14,24,30,34,40,45
*/

let lotto = [];
let num;

function f(num,x){
    for(let i=0;i<x;i++)
        if(lotto[i]==num)   return true;
    return false;
}

for(let i=0; i<6; i++)
{
    do{
        num = Math.floor(Math.random() * 50);
    }while(f(num,i));

    lotto.push(num);
}

console.log('Before Sorting\nLotto: ' + lotto);

lotto.sort(function(a, b){return a-b});

console.log('After Sorting\nLotto: ' + lotto);
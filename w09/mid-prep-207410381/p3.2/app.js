let n = Number(prompt('Input an integer: '));

let score = new Array(n);

for(let i=0; i<n; i++)
{
    score[i] = parseInt((Math.random())*100);
}
console.log(score);
score.sort(function(a, b){return b-a});
console.log(`max: ${score[0]}`);
score.sort(function(a, b){return a-b});
console.log(`min: ${score[0]}`);

let sum=0;
for(let i=0; i<n; i++)
{
    sum += score[i];
}
console.log(`sum: ${sum}`);
let avg=0;
avg = sum / n;
console.log(`average: ${avg}`);

const lottoInfo = [{
        id: 1,
        date: '2019-4-1',
        num: new Array(10, 13, 23, 34, 39, 43),
        winner: 'John Smith',
        money: 20000
    },
    {
        id: 2,
        date: '2019-4-8',
        num: [9, 15, 18, 22, 34, 40],
    },
    {
        id: 3,
        date: '2019-4-15',
        num: [18, 21, 28, 33, 39, 49],
        winner: 'Amy Mary',
        money: 3000,
    },
    {
        winner: 'Steve Cash',
        money: 25000,
    },
    {
        winner: 'Helen Kinster',
        money: 87000
    }

]

lottoInfo.forEach(function (x) {
    if (x.id) {
        console.log(`id: ${x.id}`);
        console.log(`date: ${x.date}`);
        console.log(`num: ${x.num}`);
    }
    if (x.winner) {
        console.log(`winner: ${x.winner}`);
        console.log(`money: ${x.money}`);
    }
})

lottoInfo.push({
    id: 4,
    date: '2019-4-22',
    num: [5, 15,18 ,22, 32 ,48],
    winner: 'George Dole',
    money: 50000
})

console.log('After adding a lotto info');

lottoInfo.forEach(function (x) {
    if (x.id) {
        console.log(`id: ${x.id}`);
        console.log(`date: ${x.date}`);
        console.log(`num: ${x.num}`);
    }
    if (x.winner) {
        console.log(`winner: ${x.winner}`);
        console.log(`money: ${x.money}`);
    }
})
const lottoInfo = [{
        id: 1,
        date: '2019-4-1',
        num: new Array(10, 13, 23, 34, 39, 43),
        winner: 'John Smith',
        money: [20000]
    },
    {
        id: 2,
        date: '2019-4-8',
        num: [9, 15, 18, 22, 34, 40]
    },
    {
        id: 3,
        date: '2019-4-15',
        num: [18, 21, 28, 33, 39, 49],
        winner: ['Amy Mary', 'Steve Cash', 'Helen Kinster'],
        money: [3000, 25000, 87000]
    }

]

lottoInfo.forEach(function (x) {
    if (x.id == 3) {
        console.log(`id: ${x.id}
date: ${x.date}
num: ${x.num}
winner: ${x.winner[0]}
money: ${x.money[0]}
winner: ${x.winner[1]}
money: ${x.money[1]}
winner: ${x.winner[2]}
money: ${x.money[2]}`)
    }else if (x.id && x.winner) {
        console.log(`id: ${x.id}
date: ${x.date}
num: ${x.num}
winner: ${x.winner}
money: ${x.money}`)
    }  else if (x.id) {
        console.log(`id: ${x.id}
date: ${x.date}
num: ${x.num}`)
    }
});

lottoInfo.push({
    id: 4,
    date: '2019-4-22',
    num: [5, 15, 18, 22, 32, 48],
    winner: 'George Dole',
    money: 50000
})

console.log('After adding a lotto info');

lottoInfo.forEach(function (x) {
    if (x.id == 3) {
        console.log(`id: ${x.id}
date: ${x.date}
num: ${x.num}
winner: ${x.winner[0]}
money: ${x.money[0]}
winner: ${x.winner[1]}
money: ${x.money[1]}
winner: ${x.winner[2]}
money: ${x.money[2]}`)
    }else if (x.id && x.winner) {
        console.log(`id: ${x.id}
date: ${x.date}
num: ${x.num}
winner: ${x.winner}
money: ${x.money}`)
    }  else if (x.id) {
        console.log(`id: ${x.id}
date: ${x.date}
num: ${x.num}`)
    }
});
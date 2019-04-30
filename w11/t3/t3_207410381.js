const lottoInfo = [{
        id: 1,
        date: new Date('4/1/2019'),
        num: [10, 13, 23, 34, 39, 43],
        winners: [{
            name: 'John Smith',
            money: 20000
        }]
    },
    {
        id: 2,
        date: new Date('4/8/2019'),
        num: [9, 15, 18, 22, 34, 40],
        winners: []
    },
    {
        id: 3,
        date: new Date('4/15/2019'),
        num: [18, 21, 28, 33, 39, 49],
        winners: [{
                name: 'Amy Mary',
                money: 3000
            },
            {
                name: 'Steve Cash',
                money: 25000
            },
            {
                name: 'Helen Kinster',
                money: 87000
            }
        ]
    }
]

function printLottoInfo() {
    lottoInfo.forEach(function (p) {
        console.log('id: ' + p.id);
        let date = p.date.getFullYear() + '-' + (p.date.getMonth() + 1) + '-' + p.date.getDay();
        console.log('date: ' + date);
        console.log('num: ' + p.num);
        p.winners.forEach(function(w){
            console.log('winner: ',w.name);
            console.log("money: ",w.money);
        })
    })
}

printLottoInfo();

lottoInfo.push({
    id: 4,
    date: new Date('4/22/2019'),
    num: [5, 15, 18, 22, 32, 48],
    winners: [{
        name: 'George Dole',
        money: 50000
    }]
})

console.log('After adding a lotto info');

printLottoInfo();
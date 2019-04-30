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
}]


function printLottoInfo() {
    let htmlcode = `<ul style="list-style: none">`;
    lottoInfo.forEach(function (p) {
        let date = p.date.getFullYear() + '-' + (p.date.getMonth() + 1) + '-' + p.date.getDay();
        htmlcode +=`
            <li>id: ${p.id}</li>
            <li>date: ${date}</li>
            <li>num: ${p.num}</li>
            `;
        p.winners.forEach(function(w){
            htmlcode += `
                <li>winner: ${w.name}</li>
                <li>money: ${w.money}</li>
            `;
        });
        htmlcode += `<br>`;
    })
    htmlcode += `</ul>`;
    document.body.innerHTML = htmlcode;
}

lottoInfo.push({
    id: 4,
    date: new Date('4/22/2019'),
    num: [5, 15, 18, 22, 32, 48],
    winners: [{
        name: 'George Dole',
        money: 50000
    }]
})

printLottoInfo();
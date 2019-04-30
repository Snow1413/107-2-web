function play(index) {
    let p = document.getElementById('player');
    switch (index) {
        case 1:
            p.innerHTML = '<img src="./images/TKU1.png">';
            break;
        case 2:
            p.innerHTML = '<img src="./images/TKU2.png">';
            break;
        case 3:
            p.innerHTML = '<img src="./images/TKU3.png">';
            break;
        case 4:
            p.innerHTML = '<img src="./images/TKU4.png">';
            break;
        case 5:
            p.innerHTML = '<img src="./images/TKU5.png">';
            break;
    }
}

function goPage(i) {
    let container1 = document.querySelector(".container1");
    let container2 = document.querySelector(".container2");
    let aside = document.querySelector("aside");
    let btn = document.querySelectorAll("ul button");
    switch (i) {
        case 1:
            aside.className = "ch1";
            container2.className = "container1";
            btn.forEach(function(x){
                x.classList.remove("btn");
            })
            break;

        case 2:
            aside.className = "ch2";
            container1.className = "container2";
            btn.forEach(function(x){
                x.classList.add("btn");
            })
            break;
    }
}
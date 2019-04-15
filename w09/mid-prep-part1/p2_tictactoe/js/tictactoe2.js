const o = 'o';
const x = 'x';
let turn = 0;

let p = document.getElementsByTagName("li");

function checkWin(player) {
    if(p[0].classList.contains(player) && p[1].classList.contains(player) && p[2].classList.contains(player) ||
    p[3].classList.contains(player) && p[4].classList.contains(player) && p[5].classList.contains(player) ||
    p[6].classList.contains(player) && p[7].classList.contains(player) && p[8].classList.contains(player) ||
    p[0].classList.contains(player) && p[3].classList.contains(player) && p[6].classList.contains(player) ||
    p[1].classList.contains(player) && p[4].classList.contains(player) && p[7].classList.contains(player) ||
    p[2].classList.contains(player) && p[5].classList.contains(player) && p[8].classList.contains(player) ||
    p[0].classList.contains(player) && p[4].classList.contains(player) && p[8].classList.contains(player) ||
    p[2].classList.contains(player) && p[4].classList.contains(player) && p[6].classList.contains(player)){
        return true;
    } else {
        return false;
    }
}

function play(i) {
    if (p[i].classList.contains("disable")) {
        alert('Already filled');    
    } else if (turn % 2 == 0) {
        p[i].innerText = o;
        p[i].classList.add("disable", "o");  
        turn++;
        if (checkWin(o)) {
            alert("Winner: O");
            reset();
        }
    } else if(turn%2==1){
        p[i].innerHTML = x;
        p[i].classList.add("disable", "x");
        turn ++;
        if(checkWin(x)){
            alert("Winner: X");
            reset();
        }
    }

    if(turn==9){
        alert("Tie Game");
        reset();
    }
}

function reset() {
    for (i = 0; i < p.length; i++) {
        p[i].innerHTML = "+";
        p[i].classList.remove("o", "x", "disable");
    }
    turn = 0;
}
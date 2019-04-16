const data1 = {
    id: 1,
    midterm: 80,
    final: 90,
    grade: 0,
    letterGrade: null
}

const data2 = {
    id: 2,
    midterm: 40,
    final: 60,
    grade: 0,
    letterGrade: null
}

const data3 = {
    id: 3,
    midterm: 70,
    final: 80,
    grade: 0,
    letterGrade: null
}

const data4 = {
    id: 4,
    midterm: 50,
    final: 60,
    grade: 0,
    letterGrade: null
}

const data5 = {
    id: 5,
    midterm: 90,
    final: 95,
    grade: 0,
    letterGrade: null
}
console.log("id midterm final grade letterGrade");

function avg(li) {
    li.grade = (li.midterm + li.final) / 2;
}
avg(data1);
avg(data2);
avg(data3);
avg(data4);
avg(data5);

function f(li) {
    if (li.grade >= 90)
        li.letterGrade = "A";
    else if (li.grade >= 80)
        li.letterGrade = "B";
    else if (li.grade >= 70)
        li.letterGrade = "C";
    else if (li.grade >= 60)
        li.letterGrade = "D";
    else if (li.grade < 60)
        li.letterGrade = "F";
}

f(data1);
f(data2);
f(data3);
f(data4);
f(data5);

function g(li) {
    console.log(`${li.id}     ${li.midterm}     ${li.final}    ${li.grade}     ${li.letterGrade}`);
}

g(data1);
g(data2);
g(data3);
g(data4);
g(data5);
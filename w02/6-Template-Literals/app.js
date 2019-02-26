const name = 'DeHsing';
const age = 19;
const job = 'Web Developer';
const city = 'NewTaipei';
let html;

// Without template strings (es5)
html =  '<ul>' +
        '<li> Name: ' + name + '</li>' +
        '<li> Age: ' + age + '</li>' +
        '<li> Job: ' + job + '</li>' +
        '<li> City: ' + city + '</li>' +
        '</ul>';

document.body.innerHTML = html;
// With template strings (es6)

function hello(){
    return 'hello';
}

html = `
        <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li> ${age>=20 ?'Over20':'Under20'}</li>
        <li> ${hello()}</li>
        </ul>
`;
document.body.innerHTML = html;
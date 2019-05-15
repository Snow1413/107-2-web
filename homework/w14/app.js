document.getElementById('loan-form').addEventListener('submit', function (e) {
    document.getElementById('loading').style.display = "block";
    document.querySelector('#results p').style.display = "none";
    document.getElementById('results').style.display = "none";
    setTimeout(calculateResults, 500);
    e.preventDefault();
});

function calculateResults() {
    console.log('calculating ...');
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    height /= 100;
    let BMI = (weight / (height * height)).toFixed(1);


    console.log(height);
    console.log(weight);
    console.log(BMI);


    if (BMI < 18.5) {
        gap = (18.5 - BMI).toFixed(1);
        showAlert(`您的BMI為${BMI}，距離標準的BMI還差${gap}`);
    } else if (BMI > 24) {
        gap = (BMI - 24).toFixed(1);
        showAlert(`您的BMI為${BMI}，距離標準的BMI還差${gap}`);
    } else {
        showAlert(`您的BMI為${BMI}，已在標準的範圍內`);
    }

    function showAlert(msg) {
        document.querySelector('#results p').innerHTML = `<h5>${msg}</h5>`;
    }






    let p = document.querySelectorAll("tr");

    p.forEach(function (e) {
        e.className = '';
    });

    if (BMI < 18.5) {
        p[1].className = 'bg-secondary';
    } else if (BMI < 24) {
        p[2].className = 'bg-secondary';
    } else if (BMI < 27) {
        p[3].className = 'bg-secondary';
    } else if (BMI < 30) {
        p[4].className = 'bg-secondary';
    } else if (BMI < 35) {
        p[5].className = 'bg-secondary';
    } else {
        p[6].className = 'bg-secondary';
    }


    // UI Vars
    document.querySelector('#results p').style.display = "block";
    document.getElementById('loading').style.display = "none";
    document.getElementById('results').style.display = "block";
}
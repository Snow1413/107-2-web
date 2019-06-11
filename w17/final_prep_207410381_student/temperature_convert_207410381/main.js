document.querySelector('#form1 #convert').addEventListener('click', function(e){
    let celsius = document.querySelector('#form1 #celsius').value;
    let fahrenheit = celsius * 9/5 + 32;
    if (celsius !== ''){
        document.querySelector("#form1 #fahrenheit").value = fahrenheit;
        document.querySelector('#form2 #celsius').value = celsius;
        document.querySelector('#form2 #fahrenheit').value = fahrenheit;
    }
    e.preventDefault();
})

document.querySelector('#form1 #reset').addEventListener('click', function(e){
    document.querySelector('#form1 #celsius').value = '';
    document.querySelector("#form1 #fahrenheit").value = '';
    
    document.querySelector('#form2 #celsius').value = '';
    document.querySelector("#form2 #fahrenheit").value = '';
    
    e.preventDefault();
})

document.querySelector('#form1 #swap').addEventListener('click', function(e){
        document.querySelector('#form1').style.display = "none";
        document.querySelector('#form2').style.display = "block";
    e.preventDefault();
})

document.querySelector('#form2 #convert').addEventListener('click', function(e){
    let celsius = document.querySelector('#form2 #celsius').value;
    let fahrenheit = celsius * 9/5 + 32;
    if (celsius !== ''){
        document.querySelector("#form2 #fahrenheit").value = fahrenheit;
        document.querySelector('#form1 #celsius').value = celsius;
        document.querySelector('#form1 #fahrenheit').value = fahrenheit;
    }
    e.preventDefault();
})

document.querySelector('#form2 #reset').addEventListener('click', function(e){
    document.querySelector('#form2 #celsius').value = '';
    document.querySelector("#form2 #fahrenheit").value = '';
    
    document.querySelector('#form1 #celsius').value = '';
    document.querySelector("#form1 #fahrenheit").value = '';
    
    e.preventDefault();
})

document.querySelector('#form2 #swap').addEventListener('click', function(e){
        document.querySelector('#form1').style.display = "block";
        document.querySelector('#form2').style.display = "none";
    e.preventDefault();
})
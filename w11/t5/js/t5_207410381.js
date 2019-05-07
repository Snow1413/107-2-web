function goPage (index) {
    let rp = document.querySelector('.row .player');
    let cp = document.querySelector('.col .player');

    switch(index) {
        case 1:
            rp.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/RechrtUxfQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            cp.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/RechrtUxfQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        break;
        case 2:
            rp.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/MRWX49Furew" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            cp.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/MRWX49Furew" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        break;
        case 3:
            rp.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/METhdbL_iMw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            cp.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/METhdbL_iMw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        break;
        case 4:
            rp.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZyDbq-lEKTo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            cp.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZyDbq-lEKTo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        break;
        case 5:
            rp.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/NlsrJbVvjaA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            cp.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/NlsrJbVvjaA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        break;
    }
}


function display(index) {
    let r = document.querySelector('.row');
    let c = document.querySelector('.col');

    switch(index) {
        case 1:
            r.style.display = "block";
            c.style.display = "none";
        break;
        case 2:
            c.style.display = "block";
            r.style.display = "none";
        break;
    }
}
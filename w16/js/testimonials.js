fetch('./js/testimonials.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let output = `
            <div class="container">
                <header class="section-header">
                    <h3>Testimonials</h3>
                </header>
                <div class="owl-carousel testimonials-carousel">
        `
        data.forEach(p => {
            output += `
            <div class="testimonial-item">
                <img src="img/${p.pic}" class="testimonial-img" alt="">
                <h3>${p.name}</h3>
                <h4>${p.title}</h4>
                <p>
                    <img src="img/quote-sign-left.png" class="quote-sign-left" alt="">                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                    ${p.intro}
                    <img src="img/quote-sign-right.png" class="quote-sign-right" alt="">
                </p>
            </div>
            `
        });
        output += `

            </div>

        </div>
        `
        document.getElementById('testimonials').innerHTML = output
    })
    .catch(err => console.log(err))

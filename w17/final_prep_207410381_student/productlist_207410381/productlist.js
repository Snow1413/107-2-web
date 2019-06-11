class Product {
    constructor(pname, retailPrice, category, pic) {
        this.pname = pname;
        this.retailPrice = retailPrice;
        this.category = category;
        this.pic = pic;
    }
}

class UI {
    addProductToList(product) {
        const list = document.getElementById('product-list');
        // create an element
        const row = document.createElement('tr');
        // insert cols
        row.innerHTML = `
            <td>${product.pname}</td>
            <td>$${product.retailPrice}</td>
            <td>${product.category}</td>
            <td>${product.pic}</td>
            <td><a herf="#" class="delete">X</a><td>
        `;
        list.appendChild(row);
    }

    deleteProduct(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();

            const ui = new UI();
            ui.showAlert('Product removed!', 'success');
        }
    }

    clearField() {
        document.getElementById('pname').value = '';
        document.getElementById('retail_price').value = '';
        document.getElementById('category').value = '';
        document.getElementById('pic').value = '';
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.getElementById('product-form');
        container.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

document.getElementById('product-form').addEventListener('submit', function (e) {
    // get form values
    const pname = document.getElementById('pname').value;
    const retailPrice = document.getElementById('retail_price').value;
    const category = document.getElementById('category').value;
    const pic = document.getElementById('pic').value;

    // Instantiate a product
    const product = new Product(pname, retailPrice, category, pic);

    // Istantiate UI
    const ui = new UI();

    if (pname === '' || retailPrice === '' || category === '' || pic === '') {

        ui.showAlert('Please fill in all field!', 'error');
    } else {

        ui.addProductToList(product);

        ui.clearField();

        ui.showAlert('Product added!', 'success');

    }



    e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function (e) {

    const ui = new UI();

    ui.deleteProduct(e.target);

    e.preventDefault();
})
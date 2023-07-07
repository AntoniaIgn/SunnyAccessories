// REMOVE BUTTON
var removeButtons = document.getElementsByClassName('remove-button');

for (var i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeCartItem);
}

function removeCartItem(event) {
    var row = event.target.closest('tr');
    row.parentNode.removeChild(row);
    updateCartTotal();
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;

    for(var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('item-price')[0];
        var qtyElement = cartRow.getElementsByClassName('cart-qty')[0];
        var price = parseFloat(priceElement.innerText.replace(' lv', '').replace('Price: ', ''));
        var qty = parseInt(qtyElement.value);

        console.log(priceElement);

        total += price * qty;

        console.log(total);
    }

    document.getElementById('total-price').innerText = total.toFixed(2) + ' lv';
}

// QUANTITY SECTION
var qtyContainers = document.getElementsByClassName('qty');

for (var i = 0; i < qtyContainers.length; i++) {
    var prevButton = qtyContainers[i].querySelector('.prev');
    var nextButton = qtyContainers[i].querySelector('.next');
    var qtyInput = qtyContainers[i].querySelector('.cart-qty');

    prevButton.addEventListener('click', decrementQuantity);
    nextButton.addEventListener('click', incrementQuantity);
    qtyInput.addEventListener('input', updateCartTotal);
}

function decrementQuantity(event) {
    var qtyInput = event.target.parentNode.querySelector('.cart-qty');
    var currentValue = parseInt(qtyInput.value);
    if (currentValue > 1) {
        qtyInput.value = currentValue - 1;
       updateCartTotal(event);
    }
}

function incrementQuantity(event) {
    var qtyInput = event.target.parentNode.querySelector('.cart-qty');
    var currentValue = parseInt(qtyInput.value);
    if (currentValue < 10) {
        qtyInput.value = currentValue + 1;
        updateCartTotal(event);
    }
}
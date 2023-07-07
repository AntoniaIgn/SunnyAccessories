var slider = document.getElementById('price-slider');
var amountLabel = document.getElementById('slider-range');
var items = document.getElementsByClassName('product');

slider.addEventListener('input', function() {
var minValue = parseInt(slider.min);
var maxValue = parseInt(slider.value);
amountLabel.textContent = 'lv ' + minValue + ' - lv ' + maxValue;

filterItems(minValue, maxValue);
});

function filterItems(minPrice, maxPrice) {
    for (var i = 0; i < items.length; i++) {
        var itemPrice = parseInt(items[i].dataset.price);
        if (itemPrice >= minPrice && itemPrice <= maxPrice) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }
}
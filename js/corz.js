let quantity = 1;
let quantities = { burger1: 1, burger2: 1 };
const prices = { burger1: 3600, burger2: 2500 };

document.getElementById('cartButton').addEventListener('click', function() {
    var rectangle = document.getElementById('rectangle');
    let isRectangleVisible = getComputedStyle(rectangle).display !== 'none';

    if (isRectangleVisible) {
        hideRectangle(rectangle);
    } else {
        showRectangle(rectangle);
    }
});

function showRectangle(rectangle) {
    rectangle.style.display = 'block';
    
    // Добавляем класс "show" для применения анимации по прозрачности
    rectangle.classList.add('show');

    setTimeout(function () {
        rectangle.style.transform = 'scaleY(1)';
    }, 10);
    updateQuantityDisplay();
}

function hideRectangle(rectangle) {
    rectangle.style.transform = 'scaleY(0)';
    
    // Удаляем класс "show" для применения анимации по прозрачности
    rectangle.classList.remove('show');

    setTimeout(function () {
        rectangle.style.display = 'none';
    }, 300);
}

function increaseQuantity(burgerId) {
    quantities[burgerId]++;
    updateQuantityDisplay(burgerId);
}

function decreaseQuantity(burgerId) {
    if (quantities[burgerId] > 1) {
        quantities[burgerId]--;
        updateQuantityDisplay(burgerId);
    }
}

function updateQuantityDisplay(burgerId) {
    const quantityElement = document.getElementById('quantity' + burgerId.charAt(burgerId.length - 1));
    const totalElement = document.querySelector('.rectoplxt2');

    quantityElement.innerText = quantities[burgerId];

    const totalPrice = calculateTotalPrice();
    totalElement.innerText = totalPrice + ' ₸';
}

function calculateTotalPrice() {
    let totalPrice = 0;
    for (const burgerId in quantities) {
        totalPrice += quantities[burgerId] * prices[burgerId];
    }
    return totalPrice;
}


function increaseQuantity(burgerId) {
    quantities[burgerId]++;
    updateQuantityDisplay(burgerId);
}

function decreaseQuantity(burgerId) {
    if (quantities[burgerId] > 1) {
        quantities[burgerId]--;
        updateQuantityDisplay(burgerId);
    }
}

function updateQuantityDisplay(burgerId) {
    const quantityElement = document.getElementById('quantity' + burgerId.charAt(burgerId.length - 1));
    const totalElement = document.querySelector('.rectoplxt2');

    quantityElement.innerText = quantities[burgerId];

    const totalPrice = calculateTotalPrice();
    totalElement.innerText = totalPrice + ' ₸';
}

function calculateTotalPrice() {
    let totalPrice = 0;
    for (const burgerId in quantities) {
        totalPrice += quantities[burgerId] * prices[burgerId];
    }
    return totalPrice;
}

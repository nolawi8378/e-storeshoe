let cart = [];

function addToCart(productId) {
    const product = getProductById(productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';
    
    let totalPrice = 0;

    cart.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
        totalPrice += product.price;
    });

    // Adding tax of $1.99 per item
    const tax = 1.99 * cart.length;
    totalPrice += tax;

    document.getElementById('cart-total').textContent = `$${totalPrice.toFixed(2)} (includes $${tax.toFixed(2)} tax)`;
}

function getProductById(productId) {
    const products = [
        { id: 1, name: 'The Blades', price: 79.99 },
        { id: 2, name: 'One Size Socks', price: 12.99 },
        { id: 3, name: 'Speedy Shoe', price: 89.99 },
        { id: 4, name: 'Skate Shoe', price: 69.99 },
        { id: 5, name: 'Hot Wheels Shoe', price: 59.99 },
        { id: 6, name: 'Pluffy Shoe', price: 49.99 },
        // Add more products as needed
    ];

    return products.find(product => product.id === productId);
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Add some items before checking out.');
    } else {
        alert('Checkout process simulated. Thank you for shopping!😀🛍️');
        cart = [];
        updateCart();
    }
}

// Initialize prices when the page loads
window.onload = updateCart;

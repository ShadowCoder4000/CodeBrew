document.addEventListener("DOMContentLoaded", function() {
    // Retrieve cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if cart is empty
    if (cart.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = "Your cart is empty.";
        document.querySelector('.container').appendChild(emptyMessage);
    } else {
        // Display cart items
        const cartContainer = document.querySelector('.menu-container');
        cartContainer.innerHTML = ''; // Clear any existing items

        cart.forEach(item => {
            // Ensure price and quantity are numbers
            item.price = parseFloat(item.price) || 0;  // Ensure price is a number
            item.quantity = parseInt(item.quantity) || 1; // Ensure quantity is an integer

            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'menu-item';
            cartItemDiv.innerHTML = `
                <img src="${item.img}" alt="${item.name}" />
                <div class="menu-item-content">
                    <h3>${item.name}</h3>
                    <div class="flavor-price">
                        <span>P ${item.price.toFixed(2)}</span>
                    </div>
                    <div class="size">Size: ${item.size}</div>
                    <div class="quantity-control">
                        <button class="decrease-quantity">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase-quantity">+</button>
                        <button class="remove-item">Remove</button>
                    </div>
                </div>
            `;
            cartContainer.appendChild(cartItemDiv);

            // Handle quantity change
            const decreaseButton = cartItemDiv.querySelector('.decrease-quantity');
            const increaseButton = cartItemDiv.querySelector('.increase-quantity');
            const quantitySpan = cartItemDiv.querySelector('span');

            decreaseButton.addEventListener('click', () => {
                if (item.quantity > 1) {
                    item.quantity--;
                    quantitySpan.textContent = item.quantity;
                    updateCart();
                    updateTotalPrice();
                }
            });

            increaseButton.addEventListener('click', () => {
                item.quantity++;
                quantitySpan.textContent = item.quantity;
                updateCart();
                updateTotalPrice();
            });

            // Handle item removal
            const removeButton = cartItemDiv.querySelector('.remove-item');
            removeButton.addEventListener('click', () => {
                const index = cart.indexOf(item);
                if (index > -1) {
                    cart.splice(index, 1);  // Remove item from cart
                    updateCart();
                    cartItemDiv.remove();  // Remove item from UI
                    updateTotalPrice();
                }
            });
        });
    }

    // Function to update the cart in localStorage
    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Calculate the total price and update it
    function updateTotalPrice() {
        const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const totalPriceElement = document.querySelector('.total-price h3');
        totalPriceElement.textContent = `Total: P ${totalPrice.toFixed(2)}`;
    }

    // Initially update the total price
    updateTotalPrice();

    // Checkout button functionality
    const checkoutButton = document.querySelector('.checkout-button');
    checkoutButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert("Your cart is empty! Add items to your cart before checking out.");
        } else {
            alert("Proceeding to checkout...");
            // You can redirect to the checkout page or perform other actions
        }
    });
});

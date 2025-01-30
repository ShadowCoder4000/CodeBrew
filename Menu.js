function showMenu(category, button) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = ''; // Clear the product grid before populating it with the new category

    // Define the products for each category with all 10 products
    const products = {
        milkTea: [
            { name: 'Mango', img: 'images/Mango.png', price: 50 },
            { name: 'Vanilla', img: 'images/Vanilla.png', price: 45 },
            { name: 'Matcha', img: 'images/Matcha.png', price: 55 },
            { name: 'Coffee-Jelly', img: 'images/Coffee-Jelly.png', price: 50 },
            { name: 'Strawberry', img: 'images/Strawberry.png', price: 50 },
            { name: 'Black-Forest', img: 'images/Black-Forest.png', price: 50 },
            { name: 'Winter-Melon', img: 'images/Winter-Melon.png', price: 45 },
            { name: 'Double-Dutch', img: 'images/Double-Dutch.png', price: 55 },
            { name: 'Salted-Caramel', img: 'images/Salted-Caramel.png', price: 60 },
            { name: 'Cookies&Cream', img: 'images/Cookies&Cream.png', price: 50 }
        ],
        hotDrinks: [
            { name: 'Hot_Coffee', img: 'images/Hot_Coffee.png', price: 40 },
            { name: 'Almond_Latte', img: 'images/Almond_latte.png', price: 50 },
            { name: 'Hot_Choco', img: 'images/Hot_Choco.png', price: 30 },
            { name: 'White_Hot_Chocolate', img: 'images/White_Hot_Chocolate.png', price: 45 },
            { name: 'Hot_Mocha', img: 'images/Hot_Mocha.png', price: 30 },
            { name: 'Kape_Mocha', img: 'images/Kape_Mocha_Hot.png', price: 45 },
            { name: 'Americano', img: 'images/Americano.png', price: 30 },
            { name: 'Hot_Brusko', img: 'images/Hot_Brusko.png', price: 30 },
            { name: 'Matcha_Latte', img: 'images/Matcha_Latte.png', price: 30 },
            { name: 'Kape_Karamel.', img: 'images/Kape_Karamel..png', price: 30 },
        ],
        frappe: [
            { name: 'Mocha', img: 'images/Mocha.png', price: 60 },
            { name: 'Coffee-Vanilla', img: 'images/Coffee-Vanilla.png', price: 65 },
            { name: 'Caramel_Maccha', img: 'images/Caramel_Maccha.png', price: 55 },
            { name: 'Coffee-Jelly.', img: 'images/Coffee-Jelly..png', price: 70 },
            { name: 'White-Choco', img: 'images/White-Choco.png', price: 60 },
            { name: 'Black-Forest.', img: 'images/Black-Forest..png', price: 65 },
            { name: 'Winter-Melon.', img: 'images/Winter-Melon..png', price: 55 },
            { name: 'Double-Dutch.', img: 'images/Double-Dutch..png', price: 70 },
            { name: 'Salted-Caramel', img: 'images/Salted-Caramel..png', price: 55 },
            { name: 'Cookies-&-Cream', img: 'images/Cookies-&-Cream.png', price: 55 }
        ],
        fruitTea: [
            { name: 'Kiwi_fruit', img: 'images/kiwi_fruit.png', price: 50 },
            { name: 'Lycheeee_Fruit', img: 'images/lycheeee_Fruit.png', price: 55 },
            { name: 'green_apple_Fruit', img: 'images/green_apple_Fruit.png', price: 50 },
            { name: 'lemon_Fruit', img: 'images/lemon_Fruit.png', price: 60 },
            { name: 'peach_Fruit', img: 'images/peach_Fruit.png', price: 50 },
            { name: 'mango.Fruit', img: 'images/mango.Fruit.png', price: 55 },
            { name: 'Blueberry', img: 'images/Blueberry.png', price: 50 },
            { name: 'Strawberry_Fruit', img: 'images/Strawberry_Fruit.png', price: 60 },
            { name: 'Passion_Fruit', img: 'images/Passion_fruit.png', price: 55 },
            { name: 'Watermelon-Fruit', img: 'images/watermelon-Fruit.png', price: 50 }
        ],
        icedCoffee: [
            { name: 'Kape_Vanilla', img: 'images/Kape_Vanilla.png', price: 45 },
            { name: 'Iced_Americano', img: 'images/Iced_Americano.png', price: 50 },
            { name: 'KapeFudge', img: 'images/KapeFudge.png', price: 55 },
            { name: 'Flat_White', img: 'images/Flat_White.png', price: 60 },
            { name: 'Kape_Maccha', img: 'images/Kape_Maccha.png', price: 45 },
            { name: 'Kape_Mocha', img: 'images/Kape_Mocha.png', price: 50 },
            { name: 'Hazelnut_Macchiato', img: 'images/Hazelnut_Macchia.png', price: 55 },
            { name: 'Kape_Brusko', img: 'images/Kape_Brusko.png', price: 60 },
            { name: 'Irish_Coffee', img: 'images/Irish_Coffee.png', price: 60 },
            { name: 'Kape_Karamel', img: 'images/Kape_Karamel.png', price: 60 }
        ]
    };

    products[category].forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.onclick = () => selectProduct(product.name, product.price);
        productDiv.innerHTML = `
            <img src="${product.img || 'images/default.png'}" alt="${product.name}" />
            <h4>${product.name}</h4>
        `;
        productGrid.appendChild(productDiv);
    });

    // Mark the clicked button as active
    const menuButtons = document.querySelectorAll('.menu-buttons li');
    menuButtons.forEach(li => li.classList.remove('active'));
    button.parentElement.classList.add('active');
}

function selectProduct(name, price) {
    // Update the product details in the summary
    document.getElementById('productName').textContent = name;
    document.getElementById('selectedPrice').textContent = '₱' + price.toFixed(2);

    // Construct the image path dynamically based on the product name
    const imagePath = 'images/' + name + '.png';

    // Debugging: Log the image path to make sure it's correct
    console.log("Image Path: ", imagePath);

    // Check if the image exists
    const imageElement = document.getElementById('productImage');
    const img = new Image();
    img.onload = function() {
        imageElement.src = imagePath; // Set the image only if it exists
    };
    img.onerror = function() {
        // If image loading fails, set a fallback image or alert
        console.log("Image not found: " + imagePath);
        imageElement.src = 'images/default.png'; // Set a default image here
    };
    img.src = imagePath; // Start loading the image
}

document.addEventListener("DOMContentLoaded", () => {
    // Initialize the menu with the default category (e.g., 'milkTea')
    const defaultCategory = 'milkTea';
    const defaultButton = document.querySelector('.menu-buttons li button');
    
    if (defaultButton) {
        showMenu(defaultCategory, defaultButton);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Store selected product details
    const selectedProduct = {
        name: '',
        img: '',
        size: 'Medium', // Default size
        sugarLevel: '100%', // Default sugar level
        addOns: [],
        price: 0
    };

    // Elements to display selected information
    const productNameElement = document.getElementById('productName');
    const productImageElement = document.getElementById('productImage');
    const selectedSizeElement = document.getElementById('selectedSize');
    const selectedSugarElement = document.getElementById('selectedSugar');
    const selectedAddOnsElement = document.getElementById('selectedAddOns');
    const selectedPriceElement = document.getElementById('selectedPrice');

    // Function to handle product selection
    window.selectProduct = function (productName, price) {
        selectedProduct.name = productName;
        selectedProduct.img = `images/${productName}.png`; // Assuming the image filename matches the product name
        selectedProduct.price = price;

        // Update UI
        productNameElement.textContent = productName;
        productImageElement.src = selectedProduct.img;
        productImageElement.alt = `${productName} Image`; // Update alt text
        selectedPriceElement.textContent = `₱${selectedProduct.price.toFixed(2)}`;
    };

    // Handle size selection
    const sizeOptions = document.querySelectorAll('input[name="Size"]');
    sizeOptions.forEach(option => {
        option.addEventListener('change', function () {
            selectedProduct.size = this.value; // Capture selected size value
            selectedSizeElement.textContent = selectedProduct.size;
            updatePrice();  // Update price based on size
        });
    });

    // Handle sugar level selection
    const sugarOptions = document.querySelectorAll('input[name="sugar"]');
    sugarOptions.forEach(option => {
        option.addEventListener('change', function () {
            selectedProduct.sugarLevel = this.value; // Capture selected sugar level value
            selectedSugarElement.textContent = selectedProduct.sugarLevel;
        });
    });

    // Handle add-ons selection
    const addOnsOptions = document.querySelectorAll('.add-ons input');
    addOnsOptions.forEach(option => {
        option.addEventListener('change', function () {
            const addOnLabel = this.parentElement.textContent.trim().split(' ')[0]; // Get the add-on name
            if (this.checked) {
                selectedProduct.addOns.push(addOnLabel); // Add selected add-on
            } else {
                selectedProduct.addOns = selectedProduct.addOns.filter(item => item !== addOnLabel); // Remove deselected add-on
            }
            selectedAddOnsElement.textContent = selectedProduct.addOns.length > 0 ? selectedProduct.addOns.join(', ') : 'None';
            updatePrice();  // Update price based on add-ons
        });
    });

    // Function to update price based on size and add-ons
    function updatePrice() {
        let price = selectedProduct.price;  // Start with the base price of the selected product
        
        // Adjust price based on size selection
        if (selectedProduct.size === 'Small') {
            price -= 10;  // Discount for small size
        } else if (selectedProduct.size === 'Large') {
            price += 20;  // Extra charge for large size
        }

        // Add price for add-ons
        selectedProduct.addOns.forEach(addOn => {
            price += 5;  // Each add-on costs 5 units
        });

        // Set the updated price
        selectedProduct.price = price;
        selectedPriceElement.textContent = `₱${price.toFixed(2)}`;
    }

    // Handle checkout button click (Redirect to addtocart.html)
    document.querySelector('.Checkout').addEventListener('click', function () {
        // Assuming you want to store selected product in localStorage
        localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
        window.location.href = 'addtoCart.html';  // Redirect to addtocart.html
    });
});

function addToCart() {
    const selectedProduct = {
        name: document.getElementById('productName').textContent,
        img: document.getElementById('productImage').src,
        size: document.getElementById('selectedSize').textContent,
        sugarLevel: document.getElementById('selectedSugar').textContent,
        addOns: document.getElementById('selectedAddOns').textContent,
        price: parseFloat(document.getElementById('selectedPrice').textContent.replace('₱', ''))
    };

    // Get the current cart from localStorage, or initialize an empty array if not present
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the selected product to the cart
    cart.push(selectedProduct);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Product added to cart!');
}

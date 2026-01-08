// Store cart items
let cart = [];

// Add product to cart
function addToCart(name, price, btn) {

    // Get selected size (dropdown before button)
    let size = btn.previousElementSibling.value;

    if (size === "") {
        alert("Please select a size");
        return;
    }

    // Add item to cart array
    cart.push({ name, price, size });

    // Update cart count
    document.getElementById("cart-count").innerText = cart.length;
}

// Place order
function placeOrder() {

    // Get user inputs
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;

    if (!name || !email || !address) {
        alert("Fill all details");
        return;
    }

    if (cart.length === 0) {
        alert("Cart is empty");
        return;
    }

    // Redirect user to Google Form to save the order
    window.location.href =
             "https://docs.google.com/forms/d/e/1FAIpQLSdM-lNsdoksydIS4n7fF-6HIM20RdbbEoBM6mVh6WZud6-GAw/viewform?usp=header";

}

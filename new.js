// new.js

let cart = [];
let total = 0;

// Add item to cart
function addToCart(item, price) {
  // Check if item already exists
  let found = cart.find(product => product.name === item);
  if (found) {
    found.quantity += 1;
  } else {
    cart.push({ name: item, price: price, quantity: 1 });
  }

  total += price;
  updateCart();
}

// Update cart UI
function updateCart() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach(product => {
    let li = document.createElement("li");
    li.textContent = `${product.name} x${product.quantity} - $${product.price * product.quantity}`;
    cartItems.appendChild(li);
  });

  document.getElementById("cart-total").textContent = total;
}

let products = [
    {id:1, name:"Book - C++", price:300},
    {id:2, name:"Web Development Course", price:1000},
    {id:3, name:"Programming Notes", price:150},
    {id:4, name:"Python",price:1500}
];

let cart = [];
let orders = [];

function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(sec => sec.style.display="none");
    document.getElementById(sectionId).style.display="block";
}

function loadProducts() {
    let list = document.getElementById("product-list");
    list.innerHTML = "";
    products.forEach(p => {
        list.innerHTML += `
            <div class="product">
                <h4>${p.name}</h4>
                <p>Price: ₹${p.price}</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(id) {
    let product = products.find(p => p.id === id);
    cart.push(product);
    alert("Added to Cart");
    displayCart();
}

function displayCart() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item,index) => {
        total += item.price;
        cartItems.innerHTML += `
            <p>${item.name} - ₹${item.price}
            <button onclick="removeItem(${index})">Remove</button></p>
        `;
    });

    document.getElementById("total").innerText = total;
}

function removeItem(index) {
    cart.splice(index,1);
    displayCart();
}

function placeOrder() {
    let email = prompt("Enter your Email ID:");
    if(!email) return;

    let orderId = "ORD" + Math.floor(Math.random()*10000);

    orders.push({
        email: email,
        orderId: orderId,
        status: "Ordered"
    });

    alert("Order Placed! Your Order ID: " + orderId);

    cart = [];
    displayCart();
}

function trackOrder() {
    let email = document.getElementById("trackEmail").value;
    let order = orders.find(o => o.email === email);

    if(order) {
        document.getElementById("orderStatus").innerText =
            "Order ID: " + order.orderId + " | Status: " + order.status;
    } else {
        document.getElementById("orderStatus").innerText =
            "No order found.";
    }
}

loadProducts();
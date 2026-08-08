/* ==============================
   THREADCART
   Main JavaScript
   ============================== */

// =====================================================
// PRODUCT SETTINGS
// Change these values when you change the product.
// The visible product title/description/price are also
// marked clearly in index.html.
// =====================================================

const PRODUCT_TITLE = "Your Product Title Here";
const PRODUCT_PRICE = 990;

// Delivery charges requested for ThreadCart
const DHAKA_DELIVERY = 120;
const OUTSIDE_DHAKA_DELIVERY = 150;

const titleEl = document.getElementById("productTitle");
const priceEl = document.getElementById("productPrice");
const descriptionEl = document.getElementById("productDescription");

const quantityEl = document.getElementById("quantity");
const areaEl = document.getElementById("area");

const summaryProduct = document.getElementById("summaryProduct");
const summaryPrice = document.getElementById("summaryPrice");
const summaryQuantity = document.getElementById("summaryQuantity");
const summaryDelivery = document.getElementById("summaryDelivery");
const summaryTotal = document.getElementById("summaryTotal");

const orderForm = document.getElementById("orderForm");

function money(amount) {
  return `৳${Number(amount).toLocaleString("en-BD")}`;
}

function getDeliveryCharge() {
  const selected = areaEl.options[areaEl.selectedIndex];
  return selected && selected.dataset.charge
    ? Number(selected.dataset.charge)
    : 0;
}

function updateSummary() {
  const quantity = Math.max(1, Number(quantityEl.value) || 1);
  const delivery = getDeliveryCharge();
  const subtotal = PRODUCT_PRICE * quantity;
  const total = subtotal + delivery;

  summaryProduct.textContent = PRODUCT_TITLE;
  summaryPrice.textContent = money(PRODUCT_PRICE);
  summaryQuantity.textContent = quantity;
  summaryDelivery.textContent = delivery ? money(delivery) : "Select area";
  summaryTotal.textContent = money(total);

  document.getElementById("emailProduct").value = PRODUCT_TITLE;
  document.getElementById("emailUnitPrice").value = money(PRODUCT_PRICE);
  document.getElementById("emailQuantity").value = quantity;
  document.getElementById("emailArea").value = areaEl.value || "Not selected";
  document.getElementById("emailDelivery").value = delivery ? money(delivery) : "Not selected";
  document.getElementById("emailTotal").value = money(total);
}

document.getElementById("minusBtn").addEventListener("click", () => {
  const current = Number(quantityEl.value) || 1;
  quantityEl.value = Math.max(1, current - 1);
  updateSummary();
});

document.getElementById("plusBtn").addEventListener("click", () => {
  const current = Number(quantityEl.value) || 1;
  quantityEl.value = Math.min(20, current + 1);
  updateSummary();
});

areaEl.addEventListener("change", updateSummary);

orderForm.addEventListener("submit", (event) => {
  const phone = document.getElementById("phone").value.trim();

  // Basic Bangladesh phone validation.
  const cleanPhone = phone.replace(/[\s-]/g, "");

  if (!/^01\d{9}$/.test(cleanPhone)) {
    event.preventDefault();
    alert("Please enter a valid Bangladesh phone number, for example 01712345678.");
    document.getElementById("phone").focus();
    return;
  }

  if (!areaEl.value) {
    event.preventDefault();
    alert("Please select your delivery area.");
    areaEl.focus();
    return;
  }

  updateSummary();
});

// Set visible product information from the settings above.
titleEl.textContent = PRODUCT_TITLE;
priceEl.textContent = money(PRODUCT_PRICE);
priceEl.dataset.price = PRODUCT_PRICE;
summaryProduct.textContent = PRODUCT_TITLE;
summaryPrice.textContent = money(PRODUCT_PRICE);

// Current year
document.getElementById("year").textContent = new Date().getFullYear();

updateSummary();

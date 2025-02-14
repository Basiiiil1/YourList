
// Sample product data
const products = [
  { id: 1, name: "Product 1", price: 20.0, image: "https://via.placeholder.com/300" },
  { id: 2, name: "Product 2", price: 15.0, image: "https://via.placeholder.com/300" },
  { id: 3, name: "Product 3", price: 25.0, image: "https://via.placeholder.com/300" },
];

// Cart to store selected products
let cart = [];

// Function to display products on the marketplace page
function displayProducts() {
  const productsContainer = document.getElementById("products");
  if (productsContainer) {
    productsContainer.innerHTML = products
      .map(
        (product) => `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `
      
      )
      .join("");
  }
}

// Function to add a product to the cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    cart.push(product);
    alert(`${product.name} added to cart!`);
    console.log("Cart:", cart);
  }
}

// Function to handle account sign-up
function signUp(accountType) {
  alert(`Successfully signed up as a ${accountType} account!`);
  console.log(`Signed up as: ${accountType}`);
}

// Function to handle search
function handleSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );
      console.log("Search Results:", filteredProducts);
    });
  }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Function to filter products by category
function filterProducts(category) {
    alert(`Filtering products by category: ${category}`);
    console.log(`Filtering by: ${category}`);
  
    // Redirect to marketplace.html with a category filter
    window.location.href = `marketplace.html?category=${category}`;
  }
  
  // Function to display filtered products on the marketplace page
  function displayFilteredProducts() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");
  
    if (category) {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(category)
      );
      console.log("Filtered Products:", filteredProducts);
  
      const productsContainer = document.getElementById("products");
      if (productsContainer) {
        productsContainer.innerHTML = filteredProducts
          .map(
            (product) => `
            <div class="product-card">
              <img src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>$${product.price.toFixed(2)}</p>
              <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
          `
          )
          .join("");
      }
    }
  }
  
  // Function to filter products by category
function filterProducts(category) {
  alert(`Filtering products by category: ${category}`);
  console.log(`Filtering by: ${category}`);

  // Redirect to marketplace.html with a category filter
  window.location.href = `marketplace.html?category=${category}`;
}
// Initialize functions
document.addEventListener("DOMContentLoaded", () => {
  displayProducts(); // Display products on the marketplace page
  handleSearch(); // Enable search functionality
  displayFilteredProducts(); // Display filtered products if a category is selected
});
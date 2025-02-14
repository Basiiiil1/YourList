// Sample product data (30 products)
const products = [
    { id: 1, name: "Laptop Pro", description: "High-performance laptop for professionals.", price: 1200, category: "laptops", image: "https://via.placeholder.com/300" },
    { id: 2, name: "Smartphone X", description: "Latest smartphone with advanced features.", price: 800, category: "phones", image: "https://via.placeholder.com/300" },
    { id: 3, name: "Wireless Headset", description: "Noise-cancelling wireless headset.", price: 150, category: "headsets", image: "https://via.placeholder.com/300" },
    { id: 4, name: "Fast Charger", description: "High-speed charger for all devices.", price: 30, category: "chargers", image: "https://via.placeholder.com/300" },
    { id: 5, name: "Gaming Laptop", description: "Powerful laptop for gaming enthusiasts.", price: 1500, category: "laptops", image: "https://via.placeholder.com/300" },
    { id: 6, name: "Bluetooth Earbuds", description: "Compact and wireless earbuds.", price: 100, category: "headsets", image: "https://via.placeholder.com/300" },
    { id: 7, name: "4K Camera", description: "Professional 4K camera for photography.", price: 900, category: "cameras", image: "https://via.placeholder.com/300" },
    { id: 8, name: "Gaming Console", description: "Next-gen gaming console.", price: 500, category: "gaming", image: "https://via.placeholder.com/300" },
    { id: 9, name: "External Hard Drive", description: "1TB external hard drive for storage.", price: 60, category: "hardware", image: "https://via.placeholder.com/300" },
    { id: 10, name: "Smartwatch", description: "Fitness and health tracking smartwatch.", price: 200, category: "accessories", image: "https://via.placeholder.com/300" },
    // Add more products as needed...
  ];
  
  // Function to display products
  function displayProducts(filteredProducts) {
    const productGrid = document.getElementById("productGrid");
    if (productGrid) {
      productGrid.innerHTML = filteredProducts
        .map(
          (product) => `
          <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
          </div>
        `
        )
        .join("");
    }
  }
  
  // Function to filter products by search and category
  function filterProducts() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
  
    const filteredProducts = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm);
      const matchesCategory = category === "all" || product.category === category;
      return matchesSearch && matchesCategory;
    });
  
    displayProducts(filteredProducts);
    updateProductCount(filteredProducts.length);
  }
  
  // Function to update the product count
  function updateProductCount(count) {
    const productCount = document.getElementById("productCount");
    if (productCount) {
      productCount.textContent = `Showing ${count} products`;
    }
  }
  
  // Initialize the page
  document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products); // Display all products initially
    updateProductCount(products.length); // Show total product count
  
    // Add event listeners for search and filter
    document.getElementById("searchInput").addEventListener("input", filterProducts);
    document.getElementById("categoryFilter").addEventListener("change", filterProducts);
  });
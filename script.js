
const searchToggle = document.getElementById("searchToggle");
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

const cartButton = document.getElementById("cartButton");
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

// Open and close search
searchToggle.addEventListener("click", function () {
    searchBar.classList.toggle("active");

    if (searchBar.classList.contains("active")) {
        searchInput.focus();
    }
});

// Search placeholder functionality
searchButton.addEventListener("click", function () {
    const searchValue = searchInput.value.trim();

    if (!searchValue) {
        alert("Please enter a toy car name.");
        return;
    }

    alert("Product search will be connected when we build the shop catalogue.");
});

// Cart placeholder
cartButton.addEventListener("click", function () {
    alert("Your SaRa Toyverse shopping cart is coming soon!");
});

// Mobile navigation
menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

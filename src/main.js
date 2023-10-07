var mobileMenu = document.getElementById("mobileMenu");
var menuIcon = document.getElementById("menuIcon");
var closeIcon = document.getElementById("closeIcon");
var mobileMenuVisible = false;

menuIcon.addEventListener("click", function () {
  // Toggle the visibility of the mobile menu
  mobileMenu.classList.toggle("hidden");
  mobileMenuVisible = !mobileMenuVisible;

  // Toggle the visibility of menu and close icons
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

closeIcon.addEventListener("click", function () {
  // Toggle the visibility of the mobile menu
  mobileMenu.classList.toggle("hidden");
  mobileMenuVisible = !mobileMenuVisible;

  // Toggle the visibility of menu and close icons
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Display the loader initially
const loader = document.querySelector(".loader");
loader.style.display = "block";

// After 3 seconds, hide the loader and show the content
setTimeout(function () {
  loader.style.display = "none"; // Hide the loader
  document.querySelector(".content").style.display = "block"; // Show the content
  document.body.style.overflow = "visible"; // Show the content

  // Initialize AOS after the content is displayed
  AOS.init();
}, 2000); // 3000 milliseconds = 3 seconds

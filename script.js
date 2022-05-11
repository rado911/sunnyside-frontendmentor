const mobileMenuBtn = document.querySelector(".nav--mobile-burger");
const mobileMenu = document.querySelector(".nav");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

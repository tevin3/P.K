const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
// working of the mobile navigation
const btnNavEl = document.querySelector(".header-btn");
const headerEl = document.querySelector(".main-header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
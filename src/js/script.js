// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const backToTop = document.querySelector("#back-to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    backToTop.classList.remove("hidden");
    backToTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    backToTop.classList.remove("flex");
    backToTop.classList.add("hidden");
  }
};

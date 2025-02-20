const navToggle = document.getElementById("nav-toggle");
const linksContainer = document.querySelector(".links");

const closeBtn = document.getElementById("close-btn");
const overlay = document.querySelector(".overlay");

const links = document.querySelectorAll(".links li a");

const backToTopBtn = document.getElementById("back-to-top");

links.forEach((link) => {
  link.addEventListener("click", () => {
    linksContainer.classList.remove("show-links");
    overlay.classList.remove("active");
  });
});

navToggle.addEventListener("click", () => {
  linksContainer.classList.toggle("show-links");
  overlay.classList.toggle("active");
});

const closeMenu = () => {
  linksContainer.classList.remove("show-links");
  overlay.classList.remove("active");
};

overlay.addEventListener("click", closeMenu);
closeBtn.addEventListener("click", closeMenu);

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTopBtn.classList.add("show-back-to-top-btn");
  } else {
    backToTopBtn.classList.remove("show-back-to-top-btn");
  }
});

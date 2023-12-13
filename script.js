const btnshow = document.querySelector(".btn-show");
const nav_links = document.querySelector(".nav-links");

btnshow.addEventListener("click", () => {
  nav_links.classList.toggle("open");
  btnshow.classList.toggle("open");
});

var navlinks = document.getElementById("nav-links");
function showMenu() {
  navlinks.style.right = "0";
}
function hideMenu() {
  navlinks.style.right = "-200px";
}

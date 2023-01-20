const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".navbar-menu-btn");
const divVisibility = document.querySelector(".menuBtn-visibilty-clicked");

menuBtn.addEventListener("click", function () {
  if (navBar.className === "navbar") {
    navBar.className = "responsive";
    divVisibility.style.display = "none";
  } else if (navBar.className === "responsive") {
    navBar.className = "navbar";
    divVisibility.style.display = "block";
  }
});

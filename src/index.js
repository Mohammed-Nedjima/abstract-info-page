const burgerIcon = document.getElementById("burger-icon");
const menu = document.getElementById("mobile-menu");
burgerIcon.addEventListener("click", () => {
  menu.classList.toggle("menu-full-height");
  burgerIcon.setAttribute(
    "aria-expanded",
    menu.classList.contains("menu-full-height")
  );
});

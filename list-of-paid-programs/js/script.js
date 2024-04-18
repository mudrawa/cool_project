const burgerBtn = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const closeMenuBtn = document.querySelector(".close-menu");
const body = document.querySelector("body");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.add("d-none");
  closeMenuBtn.classList.add("show");
  menu.classList.toggle("open-menu");
  body.classList.add("no-scroll");
});
closeMenuBtn.addEventListener("click", () => {
  burgerBtn.classList.remove("d-none");
  closeMenuBtn.classList.remove("show");
  menu.classList.toggle("open-menu");
  body.classList.remove("no-scroll");
})

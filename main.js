$(document).ready(function () {
  $(".nav_btn").click(function () {
    $(".mobile_nav_items").toggleClass("active");
  });
});

const detailsButton = document.querySelector("#details");
const sideBar = document.querySelector(".sidebar");
const closingTag = document.querySelector("#closing-tag");
const initials = document.querySelector("#initials");
const hoverHeaderPart = document.querySelector(".header-hover-img");

detailsButton.addEventListener("click", () => {
  sideBar.style.display = "block";
});
closingTag.addEventListener("click", () => {
  sideBar.style.display = "none";
});

$(".round").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $(".arrow").toggleClass("bounceAlpha");
});

initials.addEventListener("mouseenter", () => {
  hoverHeaderPart.style.display = "block";
});

initials.addEventListener("mouseover", () => {
  hoverHeaderPart.style.display = "none";
});

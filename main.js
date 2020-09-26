$(document).ready(function () {
  $(".nav_btn").click(function () {
    $(".mobile_nav_items").toggleClass("active");
  });
});

const detailsButton = document.querySelector("#details");
const sideBar = document.querySelector(".sidebar");
const closingTag = document.querySelector(".far fa-times-circle");

detailsButton.addEventListener("click", () => {
  sideBar.style.display = "block";
});
closingTag.addEventListener("click", () => {
  sideBar.style.display = "none";
});

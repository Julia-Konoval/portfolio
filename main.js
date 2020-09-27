$(document).ready(function () {
  $(".nav_btn").click(function () {
    $(".mobile_nav_items").toggleClass("active");
  });
});

const detailsButton = document.querySelector("#details");
const sideBar = document.querySelector(".sidebar");
const closingTag = document.querySelector("#closing-tag");

detailsButton.addEventListener("click", () => {
  sideBar.style.display = "block";
});
closingTag.addEventListener("click", () => {
  sideBar.style.display = "none";
});

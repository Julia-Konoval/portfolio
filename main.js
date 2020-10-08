$(document).ready(function () {
  $(".nav_btn").click(function () {
    $(".mobile_nav_items").toggleClass("active");
  });
});

const detailsButton = document.querySelector("#details");
const sideBar = document.querySelector(".sidebar");
const closingTag = document.querySelector("#closing-tag");
const initials = document.querySelector("#initials");
const infoButtons = document.querySelectorAll(".info-icon");
const contactDetails = document.querySelector(".contact-details");
const closingTagTwo = document.querySelector("#closing-tag-two");
detailsButton.addEventListener("click", () => {
  sideBar.style.display = "block";
});

document.querySelector("#contacts").addEventListener("click", () => {
  contactDetails.style.display = "block";
});

closingTag.addEventListener("click", () => {
  sideBar.style.display = "none";
});
closingTagTwo.addEventListener("click", () => {
  contactDetails.style.display = "none";
});

$(".round").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $(".arrow").toggleClass("bounceAlpha");
});

AOS.init({
  easing: "ease",
  duration: 1800,
  once: true,
});

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
const infoButtons = document.querySelectorAll(".info-icon");
const contactDetails = document.querySelector(".contact-details");
const closingTagTwo = document.querySelector("#closing-tag-two");

// infoButtons.addEventListener("click", () => {
//   infoButtons.style.padding === "20px";
// });
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

// hover effect applies to any elements using the 'container' class
$("#initials").hover(
  function () {
    //mouse over
    hoverHeaderPart.style.display = "block";
  },
  function () {
    //mouse out
    hoverHeaderPart.style.display = "none";
  }
);
AOS.init({
  easing: "ease",
  duration: 1800,
  once: true,
});

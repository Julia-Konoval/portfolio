const title = "JULIA KONOVAL";
const typingDelay = 200;
const charIndex = 0;
const typedTextSpan = document.querySelector(".typed-text");
const newTextDelay = 1000;

function type() {
  typedTextSpan.textContent += title.charAt(charIndex);
  charIndex++;
  setTimeout(type, typingDelay);
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent += title.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, newTextDelay);
  } else {
    setTimeout(type, typingDelay + 1100);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, typingDelay + 250);
  type();
});

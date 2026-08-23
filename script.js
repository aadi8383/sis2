// ===============================
// SMOOTH SCROLL
// ===============================

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}


// ===============================
// SURPRISE BUTTON
// ===============================

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseBox = document.getElementById("surpriseBox");

if (surpriseBtn && surpriseBox) {

  surpriseBtn.addEventListener("click", function () {

    surpriseBox.classList.toggle("hidden");

    if (!surpriseBox.classList.contains("hidden")) {

      surpriseBtn.textContent = "Aww! 💕";

      surpriseBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    } else {

      surpriseBtn.textContent = "Don't click 👀";

    }

  });

}


// ===============================
// CELEBRATE
// ===============================

function celebrate() {

  createHearts(25);

  const button = document.querySelector(".secondary-btn");

  if (button) {
    button.textContent = "Love You! ❤️";
  }

}


// ===============================
// FLOATING HEARTS
// ===============================

function createHeart() {

  const heart = document.createElement("div");

  heart.classList.add("floating-heart");

  const hearts = [
    "💗",
    "💕",
    "💖",
    "💓",
    "💞",
    "❤️",
    "💝"
  ];

  heart.textContent =
    hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left =
    Math.random() * 100 + "vw";

  heart.style.fontSize =
    (Math.random() * 20 + 15) + "px";

  heart.style.animationDuration =
    (Math.random() * 3 + 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);

}


// ===============================
// CREATE MANY HEARTS
// ===============================

function createHearts(amount) {

  for (let i = 0; i < amount; i++) {

    setTimeout(() => {
      createHeart();
    }, i * 100);

  }

}


// ===============================
// AUTOMATIC FLOATING HEARTS
// ===============================

setInterval(() => {

  if (Math.random() > 0.35) {
    createHeart();
  }

}, 1200);


// ===============================
// OPTIONAL BACKGROUND MUSIC
// ===============================

const bgMusic = document.getElementById("bgMusic");

if (bgMusic) {

  bgMusic.volume = 0.35;

}

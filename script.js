const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseBox = document.getElementById("surpriseBox");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

surpriseBtn.addEventListener("click", () => {
  surpriseBox.classList.remove("hidden");
  surpriseBtn.style.display = "none";
  celebrate();
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = ["💗", "💖", "💕", "💝", "✨"][Math.floor(Math.random() * 5)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (16 + Math.random() * 24) + "px";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}

function celebrate() {
  for (let i = 0; i < 35; i++) {
    setTimeout(createHeart, i * 55);
  }
}

musicBtn.addEventListener("click", () => {
  if (!bgMusic.src) {
    alert("Add your own MP3 file/URL to the <audio id=\"bgMusic\"> element in index.html first.");
    return;
  }

  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = "🔇 Pause";
  } else {
    bgMusic.pause();
    musicBtn.textContent = "🎵 Music";
  }
});

window.addEventListener("scroll", () => {
  document.querySelectorAll(".memory-card, .timeline-item, .letter-card").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * .88) {
      el.style.opacity = "1";
      el.style.transform = el.classList.contains("featured")
        ? "translateY(-18px)"
        : "translateY(0)";
    }
  });
});

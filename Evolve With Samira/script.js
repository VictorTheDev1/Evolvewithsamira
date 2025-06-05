    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    const playBtn = document.querySelector('.play-btn');
const videoPlayer = document.querySelector('.video-player');
const videoContainer = document.querySelector('.video-container');

playBtn.addEventListener('click', () => {
    videoContainer.classList.add('active');
    videoPlayer.play();
});

  const form = document.getElementById("newsletter-form");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const endpoint = "https://formsubmit.co/ajax/evolvedusolutions@gmail.com";

    message.textContent = "Subscribing...";
    message.style.color = "#6366f1";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        message.textContent = "✅ Subscribed successfully!";
        message.style.color = "green";
        form.reset();
      } else {
        throw new Error("Network error");
      }
    } catch (error) {
      message.textContent = "❌ Not subscribed. Try again.";
      message.style.color = "red";
    }
  });


   const eventDate = new Date("2025-06-14T09:00:00Z").getTime(); // 10AM WAT = 9AM UTC

    const countdownTimer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "🎉 The event has started!";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("countdown").innerHTML =
        `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s remaining`;
    }, 1000);


  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });

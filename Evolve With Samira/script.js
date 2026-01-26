
  const form = document.getElementById("newsletter-form");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const endpoint = "https://formsubmit.co/ajax/moradeyovictor@gmail.com";

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

  function toggleMenu() {
    const links = document.getElementById('navLinks');
    links.classList.toggle('show');
  }


  document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.querySelector(".video-container");
    const playButton = document.querySelector(".play-btn");
    const video = document.querySelector(".video-player");

    playButton.addEventListener("click", function () {
      videoContainer.classList.add("active");
      video.play();
    });
  });
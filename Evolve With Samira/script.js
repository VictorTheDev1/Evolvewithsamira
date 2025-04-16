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

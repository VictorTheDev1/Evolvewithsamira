const form = document.getElementById("newsletter-form");
const message = document.getElementById("form-message");

(function(){
  emailjs.init("oc4vk3E1OUMb-pZlZ");
})();

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const endpoint = "https://formsubmit.co/ajax/moradeyovictor@gmail.com";

  const templateParams = {
    email: formData.get("email"),
    to_email: formData.get("email")
  };

  message.textContent = "Subscribing...";
  message.style.color = "#6366f1";

  try {

    // Send to you via FormSubmit
    const response = await fetch(endpoint, {
      method: "POST",
      body: formData
    });

    if (!response.ok) throw new Error("Network error");

    // Send welcome email to subscriber
    await emailjs.send(
      "service_j0j9ptf",
      "template_edhnmrg",
      templateParams
    );

    message.textContent = "✅ Subscribed successfully! Check your email.";
    message.style.color = "green";

    form.reset();

  } catch (error) {

    console.error(error);

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

const modal = document.getElementById("reminderModal");
const openBtn = document.getElementById("openReminder");
const closeBtn = document.querySelector(".close");

openBtn.onclick = function() {
  modal.style.display = "flex";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

function showOptions(type) {
  document.getElementById("appleOptions").style.display = "none";
  document.getElementById("androidOptions").style.display = "none";

  if (type === "apple") {
    document.getElementById("appleOptions").style.display = "block";
  } else {
    document.getElementById("androidOptions").style.display = "block";
  }
}

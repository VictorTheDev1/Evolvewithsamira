const form = document.getElementById("newsletter-form");
const message = document.getElementById("form-message");

(function(){
  emailjs.init("Tl3e6W8oFsEye18-h");
})();

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const email = formData.get("email");
  const endpoint = "https://formsubmit.co/ajax/moradeyovictor@gmail.com";

  const templateParams = {
    email: email,
    to_email: email  // ✅ Make sure your EmailJS template uses {{to_email}} as the TO address
  };

  message.textContent = "Subscribing...";
  message.style.color = "#6366f1";

  // ✅ Run both independently — don't let one failure kill the other
  let formSubmitOk = false;
  let emailJsOk = false;

  // 1. Send to your inbox via FormSubmit
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Accept": "application/json" }, // ✅ Required for AJAX mode
      body: formData
    });

    const result = await response.json();
    if (result.success === "true" || result.success === true) {
      formSubmitOk = true;
    } else {
      console.warn("FormSubmit response:", result);
    }
  } catch (err) {
    console.error("FormSubmit error:", err);
  }

  // 2. Send welcome email to subscriber via EmailJS
  try {
    await emailjs.send(
      "service_haf3a3r",
      "template_stiqomq",
      templateParams
    );
    emailJsOk = true;
  } catch (err) {
    console.error("EmailJS error:", err);
  }

  // 3. Show result
  if (formSubmitOk || emailJsOk) {
    message.textContent = "✅ Subscribed successfully! Check your email.";
    message.style.color = "green";
    form.reset();
  } else {
    message.textContent = "❌ Not subscribed. Please try again.";
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

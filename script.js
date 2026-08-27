// Hero Buttons
const myWorkBtn = document.querySelector("#myWorkBtn");
const hireMeBtn = document.querySelector("#hireMeBtn");

myWorkBtn.addEventListener("click", () => {
  const projects = document.getElementById("projects");
  projects.scrollIntoView({ behavior: "smooth" });
});
hireMeBtn.addEventListener("click", () => {
  const contact = document.getElementById("contact");
  contact.scrollIntoView({ behavior: "smooth" });
});

// Observer Function
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
       entry.target.classList.add("active");
       observer.unobserve(entry.target);
     }
    });
  },
  {
    threshold: 0.2,
  },
);

// Hero Image
const heroImage = document.getElementById("heroImage");
observer.observe(heroImage);

// hero texts
const heroTexts = document.getElementById("heroTexts");
observer.observe(heroTexts);

// about image
const aboutImage = document.getElementById("aboutImage");
observer.observe(aboutImage);

// about texts
const aboutTexts = document.getElementById("aboutTexts");
observer.observe(aboutTexts);

// glass cards
const glassCard = document.querySelectorAll(".glass-card");
glassCard.forEach((card) => {
  observer.observe(card);
});

// Contact form
const form = document.querySelector("#contactForm");
const btn = document.querySelector("#sendBtn");
const formStatus = document.querySelector("#formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  btn.disabled = true;
  btn.textContent = "Sending...";
  formStatus.textContent = "";

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        formStatus.textContent = "Message sent successfully!";
        form.reset();

        btn.disabled = false;
        btn.textContent = "Send Message";
      } else {
        formStatus.textContent = "Something went wrong. Please try again.";

        btn.disabled = false;
        btn.textContent = "Send Message";
      }
    })
    .catch(() => {
      formStatus.textContent =
        "Unable to send the message. Please check your internet connection.";

      btn.disabled = false;
      btn.textContent = "Send Message";
    });
});

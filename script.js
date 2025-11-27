// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("nav-open");
  });
}

// Close nav when clicking a link (mobile)
navList?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("nav-open");
  });
});

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Contact form UX (works with Formspree or any POST endpoint)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (e) => {
    // If you're using Formspree, this simple HTML-post is enough.
    // This JS part is only for nicer UX & message display.
    e.preventDefault();
    formStatus.textContent = "Sending...";
    formStatus.style.color = "#6a6a6a";

    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        formStatus.textContent = "Message sent. I’ll get back to you soon.";
        formStatus.style.color = "green";
        contactForm.reset();
      } else {
        formStatus.textContent = "Something went wrong. Please try again.";
        formStatus.style.color = "red";
      }
    } catch (err) {
      formStatus.textContent = "Network error. Please try again.";
      formStatus.style.color = "red";
    }
  });
}

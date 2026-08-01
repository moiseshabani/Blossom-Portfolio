const button = document.querySelector("#toggle");
const article = document.querySelector("body");

button.addEventListener("click", () => {
  article.classList.toggle("dark");

  if (article.classList.contains("dark")) {
    button.textContent = "Toggle Light";
  } else {
    button.textContent = "Toggle Dark";
  }
});


// Form Validations Codes
const form = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const formMessage = document.querySelector("#formMessage");

form.addEventListener("submit", (event) => {
  // Stop the page from refreshing
  event.preventDefault();

  // Get values and remove extra spaces
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Check name
  if (name.length < 2) {
    formMessage.textContent = "Please enter your name.";
    nameInput.focus();
    return;
  }

  // Check email
  if (!emailInput.validity.valid) {
    formMessage.textContent = "Please enter a valid email address.";
    emailInput.focus();
    return;
  }

  // Check message
  if (message.length < 10) {
    formMessage.textContent = "Your message must be at least 10 characters.";
    messageInput.focus();
    return;
  }

  // Everything is valid
  formMessage.textContent = "Message sent successfully! ✅";

  // Reset form
  form.reset();
});

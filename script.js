const toggleMenu = document.getElementById("toggle-menu");
const navbar = document.getElementById("navbar-nav");

const navLink = document.querySelectorAll(".nav-link");

toggleMenu.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    navbar.classList.toggle("show");
  });
}

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", (event) => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

// Contact Us
const form = document.querySelector("form");

// Function to display error messages
const showError = (field, errorText) => {
  field.classList.add("error");
  const errorElement = document.createElement("small");
  errorElement.classList.add("error-text");
  errorElement.innerText = errorText;
  field.closest(".form-group").appendChild(errorElement);
};

const handleFormData = (e) => {
  e.preventDefault();
  // Retrieving input elements
  const fullnameInput = document.getElementById("fullname");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  // Getting trimmed values from input fields
  const fullname = fullnameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Regular expression pattern for email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  // Clearing previous error messages
  document.querySelectorAll(".form-group .error").forEach((field) => field.classList.remove("error"));
  document.querySelectorAll(".error-text").forEach((errorText) => errorText.remove());
  // Performing validation checks
  if (fullname === "") {
    showError(fullnameInput, "The field is required");
  }
  if (!emailPattern.test(email)) {
    showError(emailInput, "Invalid email address");
  }
  if (message === "") {
    showError(messageInput, "The field is required");
  }
  // Checking for any remaining errors before form submission
  const errorInputs = document.querySelectorAll(".form-group .error");
  if (errorInputs.length > 0) return;
  // Submitting the form
  form.submit();
};

// Handling form submission event
form.addEventListener("submit", handleFormData);

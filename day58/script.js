const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameOutput = document.getElementById("nameOutput");
const emailOutput = document.getElementById("emailOutput");

// Event for live typing feedback
nameInput.addEventListener("input", () => {
  nameOutput.textContent = `Hello, ${nameInput.value}`;
});

// Event for email input
emailInput.addEventListener("input", () => {
  emailOutput.textContent = `Your email: ${emailInput.value}`;
});

// Prevent form submission
document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted!");
});

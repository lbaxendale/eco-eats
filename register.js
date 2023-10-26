const registrationForm = document.getElementById("registrationForm");
const message = document.getElementById("message");
registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username.length <= 1) {
    message.textContent = "Username must have more than one letter.";
  } else if (password.length < 8) {
    message.textContent = "Password must be at least 8 characters long.";
  } else {
    message.textContent =
      "Registration successful for " +
      username +
      ". Please check your email to confirm your registration.";
  }
});
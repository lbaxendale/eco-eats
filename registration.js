const registrationForm = document.getElementById("registrationForm");
const message = document.getElementById("message");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;


  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


  if (username.length <= 1) {
    message.textContent = "Username must have more than one letter.";
  } else if (!passwordRegex.test(password)) {
  
    message.textContent =
      "Password must be at least 8 characters long and contain at least 1 number.";
  } else {

    message.textContent =
      "Registration has been successfully processed. To finalize the registration process, kindly check your email for a confirmation message.";
  }
});
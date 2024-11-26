const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");
const form = document.getElementById("signupForm");


emailInput.addEventListener("input", () => {
  const email = emailInput.value;
  if (email.length > 3 && email.includes("@") && email.includes(".")) {
    emailError.textContent = "";
    validityChecker()
  } else {
    emailError.textContent = "Make sure email is more than 3 characters and has '@' and a '.'";
    successMessage.textContent = "";
  }
});


passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  if (password.length > 8) {
    passwordError.textContent = "";
    validityChecker()
  } else {
    passwordError.textContent = "Make sure password is more than 8 characters.";
    successMessage.textContent = "";
  }
});

function validityChecker(){
    if(!emailError.textContent && !passwordError.textContent && emailInput.value && passwordInput.value){
        successMessage.textContent="All good to go";
    }
}


form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!emailError.textContent && !passwordError.textContent && emailInput.value && passwordInput.value) {
    const confirmation = confirm("Do you want to proceed with the signup?");
    if (confirmation) {
      alert("Successful signup!");
    } else {
      emailInput.value = "";
      passwordInput.value = "";
      successMessage.textContent = "";
      emailError.textContent = "";
      passwordError.textContent = "";
    }
  }
});

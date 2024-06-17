const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const checkbox = document.getElementById("check-box");
const radio = document.getElementById("radio");

const emailError = document.getElementById("email-error");
const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const messageError = document.getElementById("message-error");
const checkboxError = document.getElementById("checkbox-error");
const radioError = document.getElementById("radio-error");
const submitBtn = document.getElementById("submit-btn");
const modal = document.getElementById("modal");

email.addEventListener("blur", () => {
  if (!email.textContent) {
    emailError.classList.toggle("off");
    email.classList.toggle("error-input");
  }
});
firstName.addEventListener("blur", () => {
  if (firstName.textContent == "") {
    firstNameError.classList.toggle("off");
    firstName.classList.toggle("error-input");
  }
});
lastName.addEventListener("blur", () => {
  if (!lastName.textContent) {
    lastNameError.classList.toggle("off");
    lastName.classList.toggle("error-input");
  }
});

message.addEventListener("blur", () => {
  if (!message.textContent) {
    messageError.classList.toggle("off");
    message.classList.toggle("error-input");
  }
});
checkbox.addEventListener("blur", () => {
  if (!checkbox.textContent) {
    checkboxError.classList.toggle("off");
    checkbox.classList.toggle("error-input");
  }
});
radio.addEventListener("DOMContentLoaded", () => {
  if (!radio.textContent) {
    radioError.classList.toggle("off");
    radio.classList.toggle("error-input");
  }
});

/*TODO:
  submit form 
  check fields
  if fields are invalid
  if true display modal

*/

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("on");
});

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const checkbox = document.getElementById("check-box");
const radio1 = document.querySelector("#general");
const radio2 = document.querySelector("#support");

const submitBtn = document.getElementById("submit-btn");
const modal = document.getElementById("modal");

const nameFields = document.querySelectorAll(".name-field");

let boolean = true;

// email.addEventListener("blur", () => {
//   if (!email.textContent) {
//     emailError.classList.toggle("off");
//     email.classList.toggle("error-input");
//   }
// });
// firstName.addEventListener("blur", () => {
//   if (firstName.textContent == "") {
//     firstNameError.classList.toggle("off");
//     firstName.classList.toggle("error-input");
//   }
// });
// lastName.addEventListener("blur", () => {
//   if (!lastName.textContent) {
//     lastNameError.classList.toggle("off");
//     lastName.classList.toggle("error-input");
//   }
// });

// message.addEventListener("blur", () => {
//   if (!message.textContent) {
//     messageError.classList.toggle("off");
//     message.classList.toggle("error-input");
//   }
// });
// checkbox.addEventListener("blur", () => {
//   if (!checkbox.textContent) {
//     checkboxError.classList.toggle("off");
//     checkbox.classList.toggle("error-input");
//   }
// });
// radio.addEventListener("DOMContentLoaded", () => {
//   if (!radio.textContent) {
//     radioError.classList.toggle("off");
//     radio.classList.toggle("error-input");
//   }
// });

/*TODO:
  submit form 
  check fields
  if fields are invalid
  if true display modal

*/

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateFields();
  validateEmail();
  validateMessage();
  validateQuery();
  if (boolean == true) {
    modal.classList.add("on");
  }
});

function validateFields() {
  nameFields.forEach((input) => {
    if (input.value.trim() == "") {
      boolean = false;
      input.nextElementSibling.classList.remove("off");
    } else {
      input.nextElementSibling.classList.add("off");
      boolean = true;
    }
  });
}

function validateEmail() {
  if (!email.value.includes("@")) {
    email.nextElementSibling.classList.remove("off");
    boolean = false;
  } else {
    email.nextElementSibling.classList.add("off");
    boolean = true;
  }
}

function validateMessage() {
  if (message.value.trim() == "") {
    message.nextElementSibling.classList.remove("off");
    boolean = false;
  } else {
    message.nextElementSibling.classList.add("off");
    boolean = true;
  }
}
function validateQuery() {
  if (!radio1.checked && !radio2.checked) {
    boolean = false;
    radio1.parentElement.parentElement.lastElementChild.classList.remove("off");
  } else {
    boolean = true;
    radio1.parentElement.parentElement.lastElementChild.classList.add("off");
  }
}

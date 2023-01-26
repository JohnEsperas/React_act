import { checkName, checkEmail, checkPassword } from './formValidationHelper.js';

function formValidation() {
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;

  if (checkName(name) && checkEmail(email) && checkPassword(password)) {
    alert('Form Submitted Successfully!');
  } else {
    alert('Please fill in all fields correctly.');
  }
}

export function checkName(name) {
    // check if name is not empty
    return name.trim() !== '';
  }
  
  export function checkEmail(email) {
    // check if email is a valid email address
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
  
  export function checkPassword(password) {
    // check if password is at least 8 characters long
    return password.length >= 8;
  }
  
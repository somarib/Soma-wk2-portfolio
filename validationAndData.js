const emailValidation = () => {
  const eemail = document.getElementById('email').value;
  const regExp = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  document.forms[0].onsubmit = (e) => {
    if (regExp.test(eemail)) {
      document.getElementById('error-message').innerHTML = '';
    } else {
      document.getElementById('error-message').innerHTML = 'Please enter the email in lower case';
      document.getElementById('error-message').style.color = 'red';
      document.getElementById('error-message').style.display = 'block';
      e.preventDefault();
    }
  };
};

document.addEventListener('click', emailValidation());

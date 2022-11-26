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


const myform = document.querySelector('someform');
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

myform.addEventListener('input', () => {
  const usersData = {
    username: fullname.value,
    email: email.value,
    message: message.value
  }
  localStorage.setItem('userData', JSON.stringify(usersData));
});

const GetDataFromLocalStorage = JSON.parse(localStorage.getItem('userData'));
fullname.value = GetDataFromLocalStorage.username;
email.value = GetDataFromLocalStorage.email;
message.value = GetDataFromLocalStorage.message;


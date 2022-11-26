const emailValidation = () => {
    const email = document.getElementById("email").value;
    const regExp = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    document.forms[0].onsubmit = function (e){
        if (regularExp.test(email)) {
            document.getElementById('error-message').innerHTML = '';
            document.getElementById('error-message').style.display = 'none';
          } else {
            document.getElementById('error-message').innerHTML = 'Please enter the email in lower case';
            document.getElementById('error-message').style.color = 'red';
            document.getElementById('error-message').style.display = 'block';
            e.preventDefault();
          }
    }

}

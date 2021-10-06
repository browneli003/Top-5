async function signupForm(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    console.log(password);
    if (response.ok) {
      // $.getScript("nodemailer.js", function(){
      //   sendEmailNotificaiton(email);
      // });
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

async function loginForm(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      console.log('response');
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document.getElementById("navBar").style.display = "none"
document.querySelector('.login-form').addEventListener('submit', loginForm);
document.querySelector('.signup-form').addEventListener('submit', signupForm);

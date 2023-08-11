const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const id = document.getElementById('id').value;
  const password = document.getElementById('password').value;

  // Replace these values with your actual ID and password
  const validId = '9506608157';
  const validPassword = 'hello';

  if (id === validId && password === validPassword) {
    window.location.href = 'https://github.com/Pankaj-Bind';
  } else {
    alert('Invalid ID or password. Please try again.');
  }
});

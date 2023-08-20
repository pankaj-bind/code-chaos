
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the entered username and password
    const username = document.querySelector('#loginForm input[type="text"]').value;
    const password = document.querySelector('#loginForm input[type="password"]').value;

    // Check if the entered username and password match the desired values
    if (username === 'pankaj' && password === 'bind') {
      // If they match, redirect to google.com
      window.location.href = '../html/home.html';
    } else {
      // If they don't match, display an error message (you can customize this part)
      alert('Invalid username or password');
    }
  });

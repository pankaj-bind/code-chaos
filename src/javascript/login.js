document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username and password match
    if (username === "pankaj" && password === "bind") {
      // Redirect to another webpage
      window.location.href = "../html/home.html"; // Replace with your desired URL
    } else {
      // Show a prompt message
      alert("Incorrect username or password. Please try again.");
    }
  });
});

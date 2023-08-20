document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if ((username === "pankaj" && password === "bind345") || (username === "neeraj" && password === "bind342")) {
      window.location.href = "redirect.html"; // Redirect to another page on successful login
    } else {
      alert("Invalid username or password");
    }
  });
  
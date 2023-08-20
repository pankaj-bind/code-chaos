// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the image element
  var image = document.querySelector(".image-container img");

  // Display the image for 3 seconds
  setTimeout(function () {
    // Redirect to another page after 3 seconds
    window.location.href = "./src/html/login.html";
  }, 3000); // 3000 milliseconds = 3 seconds
});

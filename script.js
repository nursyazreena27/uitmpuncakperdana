document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    var passwordValid = password.length >= 6;
  
    // Show error messages if the input is invalid
    if (!emailValid) {
      document.getElementById("emailError").classList.remove("d-none");
    } else {
      document.getElementById("emailError").classList.add("d-none");
    }
  
    if (!passwordValid) {
      document.getElementById("passwordError").classList.remove("d-none");
    } else {
      document.getElementById("passwordError").classList.add("d-none");
    }
  
    // If both email and password are valid, redirect to index.html
    if (emailValid && passwordValid) {
      window.location.href = "index.html"; // Redirect to the home page
    }
  });
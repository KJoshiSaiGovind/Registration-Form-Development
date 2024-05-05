function validateForm(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var errorMessage = document.getElementById('error-message');
  
    // Basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMessage.textContent = 'Invalid email address';
      return;
    }
  
    // Password length validation
    if (password.length < 6) {
      errorMessage.textContent = 'Password must be at least 6 characters long';
      return;
    }
  
    // Form submission
    // You can add your code here to submit the form data to the server
    // For example, using fetch API or AJAX
    
    // Reset error message if validation succeeds
    errorMessage.textContent = '';
  }
  
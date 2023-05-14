const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-entry').value.trim();
    const password = document.querySelector('#password-entry').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      
    }
  };


document
.querySelector('.bucket-list-login-form')
.addEventListener('submit', loginFormHandler);
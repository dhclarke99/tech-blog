
  
  const signupFormHandler = async (event) => {
   
    event.preventDefault();
  console.log("click")
    const username = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    console.log(username)
    console.log(email)
    console.log(password)

  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log("success!")
      } else {
        console.log("fail!");
      }
    }
  };
  
 
  console.log("listening")
  document
    .querySelector('#submit')
    .addEventListener('click', signupFormHandler);
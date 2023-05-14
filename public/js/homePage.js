const blogPostButtons = document.querySelectorAll('.blog-post');
  blogPostButtons.forEach(button => {
    button.addEventListener('click', async () => {
      // Retrieve the blog post ID from the button's data attribute
      const blogId = button.getAttribute('id');
      console.log(blogId)
      const response = await fetch(`/blog/${blogId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
     
      if (response.ok) {
        console.log("response worked")
       
        
         document.location.replace(`/blog/${blogId}`);
        // If successful, redirect the browser to the profile page
        // document.location.replace('/profile');
        // const getLists = await fetch('/profile', {
        //   method: 'GET',
        //   // body: JSON.stringify({ email, password }),
        //   headers: { 'Content-Type': 'application/json' },
        } else {
        console.log("error")
        alert(response.statusText);
      }
    });
  });
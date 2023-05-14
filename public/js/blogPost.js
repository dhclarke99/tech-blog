const handleFormData = async (event) => {
    event.preventDefault();
    console.log("click");
   
    const body = document.querySelector('#body').value;
    const blog_post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    
    console.log(blog_post_id);
    console.log(body);

    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ body, blog_post_id}),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
      
        console.log("response worked")
         document.location.replace(`/blog/${blog_post_id}`);
        
        } else {
        console.log("error")
        alert(response.statusText);
      }
    

    
}

document
.querySelector('#submit')
.addEventListener('click', handleFormData);


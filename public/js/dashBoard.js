const newPostForm = async (event) => {
event.preventDefault();
console.log("click")
// document.querySelector('#post-content').setAttribute("style", "visibility:visible")

const parent = document.querySelector('#post-content');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const h2 = document.createElement('h2');
const h3One = document.createElement('h3');
const h3Two = document.createElement('h3');
const input1 = document.createElement('input');
const input2 = document.createElement('input');
const button = document.createElement('button');
h2.innerText = "Create New Post";
h3One.innerText = "Title";
h3Two.innerText = "Content";
button.innerText = "Submit";


parent.appendChild(div1);
div1.appendChild(h2);
parent.appendChild(div2);
div2.appendChild(h3One);
div2.appendChild(input1);
parent.appendChild(div3);
div3.appendChild(h3Two);
div3.appendChild(input2);
parent.appendChild(div4);
div4.appendChild(button);

button.setAttribute("class", "submit");




}


console.log("listening")
  document
    .querySelector('#new-post')
    .addEventListener('click', newPostForm);
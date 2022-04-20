'use strict';
const button = document.querySelector('.button');

button.addEventListener('click', (event) => {
  button.classList.toggle('dark');
});

'use strict';
const button = document.querySelector('.button');
const nameInput = document.querySelector('.js_name');

button.addEventListener('click', (event) => {
  console.log(`Hola ${nameInput.value}`);
});

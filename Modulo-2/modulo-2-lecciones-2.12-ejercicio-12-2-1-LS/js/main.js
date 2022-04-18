'use strict';

const nameInput = document.querySelector('.js_nameInput');
const textResult = document.querySelector('.js_result');

function renderName(event) {
  const name = nameInput.value;
  textResult.innerHTML = name;
  localStorage.setItem('name', name);
}

function getName() {
  const nameFromLocalStorage = localStorage.getItem('name');
  nameInput.value = nameFromLocalStorage;
  textResult.innerHTML = nameFromLocalStorage;
}

getName();
nameInput.addEventListener('keyup', renderName);

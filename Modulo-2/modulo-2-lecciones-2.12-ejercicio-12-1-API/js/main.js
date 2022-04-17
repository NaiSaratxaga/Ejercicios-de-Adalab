'use strict';
// Crear página web que liste todos los personajes de Star War.
const list = document.querySelector('.js_list');
const button = document.querySelector('.js_button');
const inputName = document.querySelector('.js_inputName');

function paintTML(data) {
  for (const item of data) {
    const li = `<li>${item.name}</li>`;
    list.innerHTML += li;
  }
}

function getData(name) {
  fetch(`https://swapi.py4e.com/api/people?search=${name}`)
    .then((response) => response.json())
    .then((data) => {
      const allResult = data.results;
      paintTML(allResult);
    });
}

function handleClickButton(event) {
  event.preventDefault();
  getData(inputName.value);
}

button.addEventListener('click', handleClickButton);

'use strict';

const colors = document.querySelectorAll('input[type=radio][name="color"]');

function setColor(color) {
  document.body.classList.remove('claro');
  document.body.classList.remove('oscuro');
  document.body.classList.add(color);

  localStorage.setItem('color', color);
}

function onColorChange(event) {
  const selectedColor = event.target.value;
  setColor(selectedColor);
}

colors.forEach((color) => color.addEventListener('change', onColorChange));

const savedColor = localStorage.getItem('color');
if (savedColor) {
  setColor(savedColor);
  const colorRadioSaved = document.querySelector(
    `input[type=radio][name="color"][value=${savedColor}]`
  );
  colorRadioSaved.checked = true;
}

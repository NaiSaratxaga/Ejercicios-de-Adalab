'use strict';
//Example, EMOJIS

function getEmoji() {
  fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.js-result').innerHTML = data.result;
    });
}
document.querySelector('.js-emoji').addEventListener('click', getEmoji);

//-----Exercise 1; Random number----//
const randomNumber = document.querySelector('.js-number');
const buttonResult = document.querySelector('.js-numberButton');

function getNumber() {
  fetch(' https://api.rand.fun/number/integer?lenght=6')
    .then((response) => response.json())
    .then((data) => {
      randomNumber.innerHTML = data.result;
    });
}
buttonResult.addEventListener('click', getNumber);

//-----Example Dog Api; ----//
function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
}
const btn = document.querySelector('.js-dog');
btn.addEventListener('click', getDogImage);

//-----Exercise 2; Chihuahas----//
const btnChihuahua = document.querySelector('.js-dogChihuahua');
function getChihuahua() {
  fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Chihuahua breed dogs';
    });
}
btnChihuahua.addEventListener('click', getChihuahua);

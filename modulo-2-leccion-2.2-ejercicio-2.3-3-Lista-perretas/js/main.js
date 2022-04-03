"use strict";

const dina = document.querySelector(".js-dina");
const luna = document.querySelector(".js-luna");
const lana = document.querySelector(".js-lana");

const firstDogImage =
  '<img src="https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg"/>';
const firstDogName = "Dina";

const secondDogImage =
  '<img src="https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg"/>';
const secondDogName = "Luna";

const thirdDogImage =
  '<img src="https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg"/>';
const thirdDogName = "Lana";

dina.innerHTML = `${firstDogImage} ${firstDogName}`;
luna.innerHTML = `${secondDogImage} ${secondDogName}`;
lana.innerHTML = `${thirdDogImage} ${thirdDogName}`;

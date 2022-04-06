"use strict";
const selectedName = document.querySelector(".list li").innerText;

// second li
// const selectedName = document.querySelectorAll(".list li")[1].innerHTML

const titleElement = document.querySelector(".title");
titleElement.innerHTML += selectedName;
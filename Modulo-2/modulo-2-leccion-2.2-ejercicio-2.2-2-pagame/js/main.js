"use strict";

const price = 128;
const sake = 2;
const friends = 9;
const total = (price - sake) / 9;
const ana = total + sake;

//console.log("Las amigas tienen que pagar " + total);
//console.log("Ana tiene que pagar " + ana);
console.log(`Ana tiene que pagar ${ana}`);
console.log(`Las amigas de Ana tienen que pagar ${total}`);

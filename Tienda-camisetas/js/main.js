'use strict';
// data

const product1Name = 'Node JS';
const product1Price = 12;
const product1ImagUrl = './images/node-js.jpg';
const product1Quantity = 1;

const product2Name = 'Node JS';
const product2Price = 15;
const product2ImagUrl = './images/javascript.jpg';
const product2Quantity = 1;

const product3Name = 'Node JS';
const product3Price = 18;
const product3ImagUrl = './images/react.jpg';
const product3Quantity = 1;

// paint products

const productsElement = document.querySelector('.js.products');

function getProductHtmlCode(name, price, imageUrl) {
  let htmlCode = ` <article class="card">`;
  htmlCode += ` <img src="${imageUrl}" class="card__img" alt="Camiseta de ${name}">`;
  htmlCode += ` <h3 class="card__title">${name}</h3>`;
  htmlCode += ` <p class="card__description">${price}€</p>`;
  htmlCode += ` <button class="card__btn">Añadir a la cesta</button>`;
  htmlCode += ` </article>`;
  return htmlCode;
}

function paintProducts() {
  const product1 = getProductHtmlCode(
    product1Name,
    product1Price,
    product1ImagUrl,
    product1Quantity
  );
  const product2 = getProductHtmlCode(
    product2Name,
    product2Price,
    product2magUrl,
    product2Quantity
  );
  const product3 = getProductHtmlCode(
    product3Name,
    product3Price,
    product3ImagUrl,
    product3Quantity
  );
  productsElement.innerHTML = product1 + product2 + product3;
}

paintProducts();

// Paint cart items

const cartElement = document.querySelector('.js-cart');

function getCartItemHtmlCode(name, price, quantity) {
  let htmlCode = '';
  htmlCode += `<tr>`;
  htmlCode += `<td>${name}</td>`;
  htmlCode += `<td>${price}</td>`;
  htmlCode += `<td>`;
  htmlCode += `<button class="js-dec-btn card__btn">-</button>`;
  htmlCode += `${quantity}`;
  htmlCode += `<button class="js-inc-btn card__btn">+</button>`;
  htmlCode += `</td>`;
  htmlCode += ` <td class="text-align-right">${price * quantity}€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
}

function getCartTotalHtmlCode(totalPrice) {
  let htmlCode = '';
  htmlCode += `<tr class="text--bold">`;
  htmlCode += ` <td>Total</td>`;
  htmlCode += `<td colspan="3" class="text-align-right">${totalPrice}€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
}

function getCartItem() {
  const totalPrice =
    product1Price * product1Quantity +
    product2Price * product2Quantity +
    product3Price * product3Quantity;
  const item1 = getCartItemHtmlCode(
    product1Name,
    product1Price,
    product1ImagUrl,
    product1Quantity
  );
  const item2 = getCartItemHtmlCode(
    product2Name,
    product2Price,
    product2ImagUrl,
    product2Quantity
  );
  const item3 = getCartItemHtmlCode(
    product3Name,
    product3Price,
    product3ImagUrl,
    product3Quantity
  );
  const total = getCartTotalHtmlCode(totalPrice);
  cartElement.innerHTML = item1 + item2 + item3 + total;
}

paintCartItem();

// Listen events

function handleQuantityBtn(event) {
  const currentTarget = event.currentTarget;
}

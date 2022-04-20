'use strict';
const calculator = (a) => {
  const result = a % 2;
  // operacion modulo vista en condicionales 3.4
  if (result === 0) {
    return `PAR`;
  } else {
    return `IMPAR`;
  }
};

console.log(calculator(2));
console.log(calculator(9));

// ejercicio 2 multiplicación//
function multiplication(a, b) {
  return a * b;
}

console.log(multiplication(2, 2));
console.log(multiplication(6, 2));

//ejercicio 3 calcular modelo caja
const size = (confg, width, border, padding) => {
  if (confg === 0) {
    console.log('content-box');
    const total = width + border + padding;
    return `El ancho del contenido es: ${width}px y el ancho total de la caja es: ${total}px`;
  } else if (confg === 1) {
    console.log('border-box');
    const box = width - (border + padding);
    return `El ancho del contenido es: ${box}px y el ancho total de la caja es: ${width}px`;
  }
};

console.log(size(1, 30, 1, 3));

// ejercicio funcion media//
function media(a, b, c, d) {
  return (a + b + c + d) / 4;
}

console.log(media(12, 3, 4, 5));
console.log(media(1, 1, 1, 1));

// ejercicio tickect con IVA //
function price(a) {
  const vat = a * 0.21;
  const total = a + vat;
  return `Precio sin IVA: ${a}, IVA: ${vat} Total: ${total}`;
}

console.log(price(10));
º;
//ejercicio pares o nones//
function calculator(a) {
  const result = a % 2;
  // operacion modulo vista en condicionales 3.4
  if (result === 0) {
    return `PAR`;
  } else {
    return `IMPAR`;
  }
}

console.log(calculator(2));

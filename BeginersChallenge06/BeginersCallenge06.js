//Exercise 06
//Verificar si un numero es in entero
const isInteger = (number) => {
  return number % 1 === 0;
};

console.log(isInteger(8));
console.log(isInteger(8.5));
console.log(isInteger(-6.3));

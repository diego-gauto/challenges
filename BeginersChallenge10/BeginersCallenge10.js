//Exercise 10
//Dado un numero mostrar el numero invirtiendo de sus digitos
const number = 125;

const numberInStr = number.toString().split("").reverse().join("");
console.log(number);
console.log(+numberInStr);

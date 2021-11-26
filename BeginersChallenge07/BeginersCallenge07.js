//Exercise 07
//Mostrar un numero aleatorio dentro del rango dado
const randomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

console.log(randomNumberInRange(1, 10));
console.log(randomNumberInRange(20, 80));
console.log(randomNumberInRange(0, 100));
console.log(randomNumberInRange(300, 600));
console.log(randomNumberInRange(1, 1000));

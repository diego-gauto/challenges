//Exercise 05
//Intercambiar el valor de 2 variables numericas sin usar una variable auxiliar
let num1 = -50;
let num2 = 20;

console.log("antes del swap", num1, num2);

num1 += num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log("despues del swap", num1, num2);

//Exercise 4
// Mostrar la suma de los numeros ingresados
const numbersOfElements = +prompt(
  "Ingrese la cantidad de numeros que va a ingresar"
);

let arrayOfNumbers = [];

for (i = 0; i < numbersOfElements; i++) {
  const actualNumber = +prompt(`Ingrese el numero ${i + 1}`);
  arrayOfNumbers.push(actualNumber);
}

let suma = 0;
for (i = 0; i < arrayOfNumbers.length; i++) {
  suma += arrayOfNumbers[i];
}
alert(`La suma de los numeros ingresados es: ${suma}`);

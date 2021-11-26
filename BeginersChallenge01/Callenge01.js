//Exercise 01
//Listar los numeros pares dentro del rango 0 a n

let limitedNumber = +prompt(
  "Elija un limite hasta donde mostrar los numeros pares"
);

let evenNumbers = "";
for (i = 0; i <= limitedNumber; i += 2) evenNumbers += i + " ";

alert(`Los numeros pares desde el 0 al ${limitedNumber} son :
${evenNumbers}`);

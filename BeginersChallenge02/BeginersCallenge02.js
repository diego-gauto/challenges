//Exercise 2
//Imprimir las tablas de multiplicar del numero dado
const tableNumber = +prompt(
  "De que numero desea mostrar las tablas de multiplicar?"
);
for (i = 0; i <= 10; i++) {
  document.write(`${tableNumber} x ${i} = ${+tableNumber * i}<br>`);
}

//Exercise
//Realizar el factorial de n en forma recursiva

const factorial = (number) => {
  if (+number === 0) return 1;
  return +number * factorial(+number - 1);
};

const number = prompt("Ingrese un numero entero mayor o igual a 0");
alert(`El factorial de ${number} es ${factorial(number)}`);

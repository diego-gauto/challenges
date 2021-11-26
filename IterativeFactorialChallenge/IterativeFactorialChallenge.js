//Exercise
//Realizar el factorial de n en forma iterativa

const factorial = (number) => {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = i * result;
  }
  return result;
};

const number = prompt("Ingrese un numero entero mayor o igual a 0");
alert(`El factorial de ${+number} es ${factorial(+number)}`);

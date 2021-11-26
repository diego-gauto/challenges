//Exercise
//Dado un array de numeros, ordenarlo de menor a mayor
//Metodo aplicado:Bubble Sort
const OrdenedArray = (arr) => {
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  return arr;
};
//Se puede mejorar dejando un flag que indique si hubo algun swap y si no hubo, no se sige iterando
//Hay metodos de mejor performance como Pivote Sort

const arrLength = prompt("Cuantos numeros va a ingresar");
let arr = [];
for (let i = 0; i < arrLength; i++) {
  arr.push(+prompt(`Ingrese el ${i + 1}* numero`));
}

alert(`Los numeros ingresados son: ${arr}.`);

alert(`Los numeros ordenados son: ${OrdenedArray(arr)}.`);

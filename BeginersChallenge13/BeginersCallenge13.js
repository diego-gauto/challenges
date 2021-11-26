//Exercise 13
//Hacer una funcion que dada una cadena reemplace los ultimos 3 caraceters por "..."
//Si la cadena tiene menos de 3 caracteres, devuelve la cadena

const truncateStr = (str, number) => {
  if (str.length < number) return str;
  if (str.length < 3) return "...";
  return str.substring(0, str.length - 3) + "...";
};

console.log(truncateStr("fr", 3));
console.log(truncateStr("Vanesa", 3));
console.log(truncateStr("fra", 3));

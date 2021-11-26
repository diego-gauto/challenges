//Exercise 14
//Dada una cadena, cortar las primeras n palabras de la cadena

const str = "Soy un ciudadano de la Republica Argentina";
const number = 3;
console.log(str);
console.log(str.split(" ").splice(0, number).join(" "));

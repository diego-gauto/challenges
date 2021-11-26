//Exercise 11
//Dada una cadena reemplazar los espacios por otro caracter especial
//2 soluciones
let str = "Diego Martin Gauto";
console.log(str);

let replacedStr = str.split(" ").join("_");
console.log(replacedStr);

str = "Diego Martin Gauto";
const anotherReplacedStr = str.replaceAll(" ", "_");
console.log(anotherReplacedStr);

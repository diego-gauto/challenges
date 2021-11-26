//Exercise 09
//Dado una cadena, hacer un reverse por palabras y luego un reverse de cada palabra
let str = "Diego Martin Gauto";
console.log(str);

const splitStr = str.split(" ");
splitStr.reverse();

str = splitStr.join(" ");
console.log(str);

const str2 = splitStr
  .map((element) => element.split("").reverse().join(""))
  .join(" ");
console.log(str2);

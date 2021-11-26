//Exercise 08
//Reverse una cadena dada
let str = "Republica Argentina";
console.log(str);

const splitStr = str.split("");
splitStr.reverse();
str = splitStr.join("");

console.log(str);

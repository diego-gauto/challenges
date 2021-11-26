//Exercise 12
//Indicar la cantidad de caracteres de un string entre la primera y la ultima aparicion de un
//caracter dado.
//Si hay una sola aparicion, la funcion devuelve -1
//Si no existe el caracter en la cadena, la funcion lo indica

let str = "Diego Martin Gauto";

const cutRangeStr = (str, char) => {
  const str2 = str.toUpperCase();
  const char2 = char.toUpperCase();
  const firstApparence = str2.indexOf(char2);
  const lastApparence = str2.lastIndexOf(char2);
  return firstApparence == -1
    ? `En ${str} no hay ${char}`
    : lastApparence - 1 - firstApparence;
};

console.log(cutRangeStr(str, "r"));
console.log(cutRangeStr(str, "o"));
console.log(cutRangeStr(str, "m"));
console.log(cutRangeStr(str, "x"));

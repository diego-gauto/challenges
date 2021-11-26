//Exercise 15
//Realizar una funcion que no reciba parametros, pero que liste los argumentos que se le pasen
//al llamarla

function func() {
  for (i = 0; i < arguments.length; i++) console.log(arguments[i]);
}

func(1, "pepe", { nombre: "a", dni: 25 });

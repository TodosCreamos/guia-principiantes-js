/* Inicio rápido con JavaScript
   Operaciones comunes
*/

//Asignación de valores a variables
var cantidad = 10
var nombre = "Dean"
var fecha = new Date()
var persona = {
	nombre: "Sarah",
	edad:35
};

//Objetos (Agrupan propiedades en una variable)
var persona = {
	nombre: "Sarah",
	edad:35
};

//Mostrando información a la consola
console.log(persona.nombre)
> Sarah
console.log(persona.edad)
> 35

// Listas de elementos []

var listaNumeros = [5,4,3,2,1]

var listaPersonas = [
	{nombre:"Sarah", edad:35},
	{nombre:"Vicky", edad:25}
]

//Operaciones sobre listas

/*
  Buscar un elemento (forma 1)
  Vamos a buscar la persona cuyo nombre es Sarah
  Para ello recorremos el array
*/

var persona

for (var i = 0; i < listaPersonas.length; i++) {
	if (listaPersonas[i].nombre === "Sarah" ) {
		persona = listaPersonas[i]
	}
}

/* Forma 2: Usando el método "find"
   Recibe una función con la cual se evalúan los elementos de la lista.
   El primer elemento que cumple
   lista.find(function(elemento) {
		if(elemento.algunaPropiedad === algunValor){
			return true;
		} else {
			return false
		}
   })
*/

var persona = listaPersonas.find( function(elemento){

	if (elemento.nombre === "Sarah") {
		return true;
	} else {
		return false
	}
})

//Métodos útiles de las listas:
//Agregar elemento
listaPersonas.push(otraPersona)

//Eliminar el último elemento ( y retornarlo por si queremos guardarlo)
var borrado = listaNumeros.pop()

//splice(indiceInicial, cantidadABorrar, elementoNuevo1, elementoNuevo2....)
//Eliminar 2 elementos empezando por el indice 3 ( es decir en la 4 posición)
listaPersonas.splice(3,2)

//También se puede usar splice para agregar elementos en una posición
//Para ello se pasa 0 en la cantidadABorrar
listaPersonas.splice(2,0,otraPersona)

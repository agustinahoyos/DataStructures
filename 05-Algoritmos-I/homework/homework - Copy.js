// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [2, 2, 3, 3, 5] Ya que 2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

1  LEER  los TEST!
me piden: crear un array donde guardo los resultados  []

2) la excepcion : si num = 1, return 1
3) else..
Creo un ciclo para ir sumando numeros divisiores for (---> mientras X sea menor a num, i++)
if (num % X === 0) 
array.push(X)
num = num / X 
repito operacion con el ciclo, ahora dividiendo por X = X+1.

Si el modulo no es 0, no hago nada, le sumo 1 a X y vuelvo a probar.

al final, devuelvo el array que contiene el num factoreado.
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
array desordenado = [4, 7 , 9, 2]

primer ciclo de comparacion compara 4 y 7. NO Los intercambia de lugar. 
segundo ciclo compara 7 y 9, tampoco intercambia, 
3er ciclo compara 9 y 2. SI intercambia y queda
[4, 7 , 2, 9]  el nueve ya esta en su posicion final. SWAP SE PONE true, indicando que deve volver 
a iterar el array desde el principio. 
compara 4 7, swap false
compara 7 2 SWAP TRUE y queda [4 2 7 9]. Vuelve a iterar desde el comienzo del array: 
compara 4 y 2. SWAP TRUE, queda [2, 4, 7, 9]
se recorre una ultima vez el array, pero todos los SWAP son false, por lo que el ciclo termina
y se devuelve el Array. 


  necesito llevar cuenta de cuando hice un intercambio. 
  --> creo una variable swap = true

  mientras swap sea true, voy a hacer lo siguiente: primero cambio swap a false,
  y hago un ciclo for para el array, para iterar e ir comparando cada valor con el siguiente.
  ejemplo if array[i] > array[i+1] 
  necesito intercambiarlos, ya que queremos ordenar el array de menor a mayor.
  voy a necesitar una varable auxiliar, para que los datos no se pisen entre si. 
  ejemplo: guardo array[i] en una variable aux
  var aux = array[i]
  entonces ahora puedo pisar y decir que array[i] es igual a array[i+1],
  luego decir que array[i+1] es igual a mi variable aux. 

  luego volvemos a setear la variable SWAP a true, para que el ciclo siga funcionando hasta que
  todo el array esté ordenado.

  ES IMPORTANTE EL ORDEN EN QUE HACEN LOS CAMBIOS, Y QUE LA VARIABLE AUXILIAR ESTÉ ANTES
  QUE LOS INTERCAMBIOS. Recuerden que el código se lee de arriba hacia abajo.

 


}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:  [2, 4 , 6, 7]

iteramos el array, en vez de empezar en i = 0, arrancamos en i = 1
declaramos otra variable j que sea j = i-1 (señalando a los 2 primeros valores del array)

guardamos el valor para poder manipularlo
 var aux = array[i]

decimos que mientras j sea mayor o igual a 0 yy el array[j] > al aux (que es array[i])
los tenemos que intercambiar de lugar, osea 

array [i] va en el lugar que ocupa array[j] 
array[j+1] = array[j]
restamos 1 a j -->  j-- 
e introducimos aux en array [j+1]
al final devolvemos el array
es como hacer un corte e insertar un valor

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  acá vamos a buscar siempre el valor mínimo del array comparando de a 2 valores

tomamos el 1 valor con un ciclo for, 
  decimos que  i = 0, ...blabla.. i++
  var min = 0,  

y hacemos otro ciclo for para tomar el 2do valor esta vez empezamos en j= 1, blabla, j++ 
comparamos los 2 valores array[i] y array[j] Para ver si ya están ordenados o 
hay que cambiarlos de lugar. 

si array[min]  es mayor que array[j], están desordenados, y 
var min = j  J es nuestro nuevo mínimo. 

entonces ... 
si min !== i  || o si min === j, como les parezca 
  (osea, esto se va a ejecutar siempre que los valores no estén de menor a mayor,
     los intercambiamos de lugar)

 para eso, como siempre,  nos ayudamos para no pisar el valor con una var aux
var aux = array[i]  guardamos
array[i] = array[min]  intercambiamos
array[min] = aux   

cuando termine el primer ciclo for, devolvemos..

return array

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
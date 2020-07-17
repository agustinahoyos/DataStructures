// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [2, 2, 3, 3, 5] Ya que 2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var array = [];
if (num === 1) array.push(1);

else {
  for(var i = 2; i <= num; i++){
    while (num % i === 0){
    num = (num/i);
    array.push(i);
   }}}
  return array;
  }

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:  
var swap = true;

while (swap){
  swap = false
    for(var i= 0; i< array.length; i++){
      if( array[i]> array[i+1]){
        var aux = array[i];
        array[i] = array[i+1];
        array[i + 1] = aux;
        swap = true;
      }
  }
}

return array;

}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código: [4, 9 ,10,2 , 5]



for(i = 1; i< array.length;i++){
    var j = i - 1;
    var insert = array[i];
        while (j >= 0 && array[j] > insert) {
          array[j + 1] = array[j];
            j--;
       }
    array[j+1] = insert;
  }
  return array;
}




function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código: [2,1,4,3]

    for (var i = 0; i < array.length; i++) {
        var min = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }
        if (min !== i) {
            var tmp = array[i];
            array[i] = array[min];
          array[min] = tmp;
        }
    }
    return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

 // resolve estos ejercicios usando recursión

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  if(n === 0) return 1;
  else if (n <0) return 0;

  return n * nFactorial(n-1);

}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  if (n <= 0) return 0;
  else if (n === 1 || n === 2) return 1;
  return nFibonacci(n-1) + nFibonacci(n-2);
}

// Implementa la clase Queue
// enqueue:   Agrega un valor a la queue.   Respeta el orden existente.
// dequeue:   Remueve un valor de la queue.   Obedece a FIFO y respeta el underflow (cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size:   Devuelve el número de elementos que contiene la queue.

function Queue(d) {
  var collection = [];
  this.length = 0;
  this.enqueue = function(d){collection.push(d)};


  this.dequeue = function(){if(collection.length > 0)
    {return collection.shift()}};


  this.size = function(){ return collection.length};
}



// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un valor en el final de la lista. Modifica solo el puntero tail.
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Eliminar el último nodo de la lista y devuelve su valor. Resuelve correctamente una lista de un solo nodo.
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
    this.head = null;
    this.length = 0;


  this.add = function(value){
    var node = new Node(value);
    var nodoActual;
    if (this.head === null){
    this.head = node;}
    else if (this.head != null){
    var nodoActual = this.head;
    while (nodoActual.next !== null) {
        nodoActual = nodoActual.next;}
    nodoActual.next = node;}

    }

  this.remove = function(){
    if (this.head == null){
      return null;
    }
      if (this.head.next === null){
      var resultado = this.head.value;
      this.head  = null;
      return resultado;
    }

var nodoPrevio = this.head;
var nodoActual = this.head.next;
      while (nodoActual.next !== null){
      nodoPrevio = nodoActual;
      nodoActual = nodoActual.next;
    }

      var resultado = nodoActual.value;
      nodoPrevio.next = null;
      return resultado;
  }

  this.search = function(arg) {
      if (this.head === null){
        return null;
  }
  var nodoActual = this.head;
    while (nodoActual !== null){
      if (typeof arg == "function"){
        if (arg(nodoActual.value) == true){
          return nodoActual.value;
        }
      } else if (nodoActual.value === arg){
        return nodoActual.value;
      }
   nodoActual = nodoActual.next;
}
  return null;
  }



}

var Node = function(value){
      this.value = value;
      this.next = null;
  }

// Do not modify code below this line.
// --------------------------------

module.exports = {
  Queue,
  Node,
  LinkedList,
  nFactorial,
  nFibonacci,
};

// resolve estos ejercicios usando recursión


// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, y 'breadthFirstForEach'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
//corre breadth-first cuando breadthFirstForEach() es ejecutado
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
BinarySearchTree.prototype.insert = function(value){
    if(value < this.value){

      if (this.left === null){
        var newTree = new BinarySearchTree(value);
        this.left = newTree;
      }else {
        this.left.insert(value);
      }
}  else {
      if (this.right === null){
        var newTree = new BinarySearchTree(value);
        this.right = newTree;
        }else {
            this.right.insert(value);
      }
    }
  }

BinarySearchTree.prototype.contains = function(value){

  if(value === this.value){
    return true;}

  if (value <this.value){
    if(this.left === null)
      return false;
      else {
        return this.left.contains(value);
      }}
  else {
    if(this.right === null)
      return false;
      else {
      return this.right.contains(value);
        }
      }
    }



BinarySearchTree.prototype.depthFirstForEach = function(fn, orden){
  if (orden === "pre-order"){
    fn(this.value);
    if(this.left !== null){
      this.left.depthFirstForEach(fn, orden);
    }
    if(this.right !== null){
      this.right.depthFirstForEach(fn,orden);
  }
}
else if (orden === "post-order"){
    if(this.left !== null){
    this.left.depthFirstForEach(fn, orden);
    }
    if(this.right !== null){
    this.right.depthFirstForEach(fn, orden);
}   fn(this.value);
}
else {
    if(this.left !== null){
    this.left.depthFirstForEach(fn, orden);
    }
    fn(this.value);
    if(this.right !== null){
    this.right.depthFirstForEach(fn, orden);
}
}


}

BinarySearchTree.prototype.breadthFirstForEach = function(fn){

var array = [];
array.push(this);

while(array.length > 0){
  var temp = array[0];
    if (temp.left !== null){
      array.push(temp.left)
    }
    if (temp.right !== null){
      array.push(temp.right)
    }
   fn(array.shift().value);
 }
}

BinarySearchTree.prototype.size = function () {

  if(this.left ===null && this.right === null){
    return 1;
  }

  if(this.left ===null){
    return this.right.size()+ 1;
  }

  if(this.right ===null){
    return this.left.size()+ 1;
  }

  return this.left.size() + this.right.size() + 1;
}






// Hash Table
// Una hash table contiene un arreglo de "contenedores" donde puede guardar información.
// Para guardar un valor asociado a una key (string):
//    - Correr la key a través de una función hash para transformarla a un número entero.
//    - Usar ese número como índice para ver en cuál contenedor guardarás el valor.
// Para buscar el valor por su key:
//    - Correr la key por la función hash para conseguir el número.
//    - Usar el número para buscar el contenedor donde está el valor.
//    - Devolver el valor.

function HashTable(key, value) {
  this.numBuckets = 35;
  this.buckets = [];
  this.hash = function(value){
        acc = 0;
        for(var i = 0; i < value.length; i++){
        acc = acc + value.charCodeAt(i);
        }return acc % this.numBuckets;
  };
}
HashTable.prototype.set = function(key,value){
  if (typeof key !== "string"){
    throw new TypeError("Keys must be strings");
  }

    var posicion = this.hash(key);
    this.buckets[posicion] = this.buckets[posicion] || [];
    this.buckets[posicion].unshift({
      key: key,
      value: value,
    });
}


HashTable.prototype.get = function(key){
  var posicion = this.hash(key);
  for (var i = 0; i < this.buckets[posicion].length; i++) {
    if(this.buckets[posicion][i].key === key){
      return this.buckets[posicion][i].value;
    }
  }
}

HashTable.prototype.hasKey = function(key){
  return !!this.get(key);
}



// Do not modify code below this line.
// --------------------------------

module.exports = {
  HashTable,
  BinarySearchTree
};

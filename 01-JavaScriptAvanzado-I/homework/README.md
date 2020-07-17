
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiguen cual es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);
```
1-10
2-8
3-8
4-9
5-10
6-1

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```
1)console.log(bar) devuelve undefined porque sólo lee "var = bar" pero sin darle el valor.
2)console.log(baz) da un error
baz no existe, porque no fue declarado como variable.
la funcion no se ejecuta porque encuentra error en el código.

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);
```
1)"Franco"
no se declara ninguna función, por lo tanto la var instructor es la misma y se termina cambiando el valor.

```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);
```

1) "Tony"
2)"Franco"
3) "Tony"
 la función termina en un (),  por lo que se la función no solo se define sino que se llama.

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);
```
1)"The Flash"
2)"Reverse Flash"
3) "The Flash"  El if(true) no genera un nuevo scope para el var. Se vio modificada la var instructor.
4)"Franco" por diferencia entre var y let. El let actúa dentro de bloques. Var actúa dentro del scope o función.
Fuera del bloque if, pm mantiene su valor "Franco".


### Coerción de Datos

Que crees que va dar estas operaciones:

```javascript
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinity
{}[0]  = Array[0] crea un arreglo
parseInt("09")  = 9
5 && 2 =  2
2 && 5 =  5
5 || 0 = 5 los numeros distintos de 0 son true.
0 || 5 = 5
[3]+[3]-[10] = 23 se forma el string 33, porque el + lo permite. El menos no permite operaciones entre strings, así que convierte los strings en numeros y resta 33 - 10.
3>2>1 = false  
[] == ![] = true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

Cuál es el output que vemos en consola luego de ejecutar esté código? Explicar porqué es así:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```
undefined
2
El return no se muestra en consola


Y el de este:

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
```
no hay ningun console.log, no se ve nada en la consola.

### This

Cuál es el output que vemos en consola luego de ejecutar esté código? Explicar porqué es así:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```
1)"aurelio de rosa"
2) "Juan Perez". Vuelve a utilizar la primer variable porque lo estamos llamando desde el concepto global

### Event loop

Considerando el siguiente código, cuál sería el orden del ouput? Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```

1
4
3
2


3 y 2 tienen un setTime que las envía a la "lista de espera" del web appi, y les indica cuando aparecer, como 1 y 4 no tienen esa funcion, se leen primero porque el resto del código se sigue ejecutando de arriba hacia abajo. 

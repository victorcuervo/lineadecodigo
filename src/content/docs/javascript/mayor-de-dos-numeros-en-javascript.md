---
title: Mayor de dos números en Javascript
description: "Uso de estructuras selectivas if-then-else para poder calcular cual es el mayor de dos números en Javascript."
lastUpdated: 2023-05-15
author: victor_cuervo
---

Vamos a ver lo sencillo que es saber cuál es el  mayor de dos números en [Javascript](https://manualweb.net/javascript/) mediante una secuencia de [estructuras selectivas](https://manualweb.net/javascript/estructuras-selectivas-javascript/). Seguro que este es uno de los primeros códigos a los que te tienes que enfrentar ahora que empiezas a trabajar con código en [Javascript](https://manualweb.net/javascript/).


La idea es que tenemos dos números, los cuales hemos definido perfectamente en dos variables mediante el [operador let](https://manualweb.net/javascript/variables-javascript/).


```javascript
let n1 = 5;
let n2 = 2;
```


La idea es sencilla lo que tenemos que comprobar es si el primer número es mayor que el segundo, en este caso ya sabemos que el primer número sería el mayor y si no el segundo número sería el mayor.


Para ello tenemos [la estructura selectiva if-then-else](https://manualweb.net/javascript/estructuras-selectivas-javascript/#if-then-else):


```javascript
if (condicion)
  bloque_sentencias_1
else
  bloque_sentencias_2
```


Dónde la condición será el validar cuál es el mayor de los dos números. Por lo que el código sería el siguiente:


```javascript
if (n1>n2) {
    console.log(n1 + " es mayor que " + n2);
} else {
    console.log(n2 + " es mayor que " + n1);
```


Pero hay que tener en cuenta una cosa. Y es, qué pasa si los dos números son iguales. Pues, en este caso, tendremos que preguntar también por esta situación. Es por ello que primero preguntaremos si el primer número es mayor que el segundo, si no preguntaremos si el segundo es mayor que el primero y si no se cumple ninguna de las dos condiciones es que, entonces, son iguales.


Para poder hacer esto, las [estructuras selectivas](https://manualweb.net/javascript/estructuras-selectivas-javascript/) contemplan el poder anidar las validaciones de la siguiente manera:


```javascript
if (condicion)
  bloque_sentencias_1
else if (condicion2)
  bloque_sentencias_2
else if (condicion3)
  bloque_sentencias_3
...
else
  bloque_sentencias_Nl
```


Es decir, que podríamos mediante cláusulas `else-if` anidar muchas validaciones.


Pasamos a modificar nuestro código para acoplarlo a la nueva situación y tendremos lo siguiente:


```javascript
if (n1>n2) {
    console.log(n1 + " es mayor que " + n2);
} else if (n2 > n1) {
    console.log(n2 + " es mayor que " + n1);
} else {
    console.log("Los dos números osn iguales");
}
```


Ahora ya si tendremos completo nuestro código que nos ayuda a saber cuál es el  mayor de dos números en [Javascript](https://manualweb.net/javascript/).


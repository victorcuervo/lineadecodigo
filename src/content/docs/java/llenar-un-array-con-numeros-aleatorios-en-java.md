---
title: Llenar un array con números aleatorios en Java
description: "Ejemplo, explicado paso a paso, de uso de una clase Math y de su método random para poder llenar un array con números aleatorios en Java."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En el siguiente ejemplo, vamos a explorar en detalle cómo podemos llenar un array con números aleatorios en [Java](https://www.manualweb.net/java/). Para ser más precisos, lo que vamos a hacer es [inicializar el array](https://lineadecodigo.com/java/inicializar-un-array-en-java/) y posteriormente ir insertando una serie de números aleatorios en él.


Esta práctica puede resultar ser extremadamente útil en diversas situaciones. Por ejemplo, si estamos en la fase de prueba de un programa y necesitamos manipular datos de prueba, llenar un array con números aleatorios en [Java](http://www.manualweb.net/tutorial-java/) nos permite simular condiciones de datos variables de una manera sencilla y eficiente. Esta técnica nos permite probar nuestro código en diversas situaciones y con diferentes tipos de datos, lo cual es esencial para garantizar que nuestro programa funcione correctamente bajo cualquier circunstancia.


### Definición de un array de números enteros en Java


Pero antes de empezar, con ponernos a realizar el ejemplo de llenar un array con números aleatorios en Java deberemos  entender un poco más sobre arrays. Para comprender cómo [trabajar con arrays en Java](https://manualweb.net/java/arrays-java/), es esencial comenzar con la definición de un array de números enteros. Los arrays son estructuras de datos que nos permiten almacenar varios valores del mismo tipo en una sola variable.


A continuación, se muestra cómo podemos [definir un array de números enteros en Java](https://lineadecodigo.com/java/inicializar-un-array-en-java/):


```java
int[] numeros = new int[10];
```


En el fragmento de código anterior, hemos creado un array llamado 'numeros'. Este array tiene la capacidad de almacenar hasta diez elementos, lo que significa que puede contener diez números enteros. Los corchetes después del [tipo de datos int](https://manualweb.net/java/tipos-datos-primitivos-java/#int) indican que estamos creando un array. Después de eso, usamos la palabra clave 'new' seguida de nuevo por el tipo de datos y los corchetes con el número de elementos que el array puede contener. En este caso, el número es diez, por lo que nuestro array 'numeros' puede contener diez números enteros.


### Accediendo a un elemento específico en el array


Una de las habilidades fundamentales que debemos dominar al trabajar con arrays es cómo acceder a un elemento específico para insertarle información. Para llevar a cabo esta tarea, es necesario utilizar el nombre del array seguido del operador de corchetes [] con la posición específica en el array donde queremos insertar la información.


```java
array[posicion] = valor;
```


> Es importante recordar que en la mayoría de los lenguajes de programación, los arrays comienzan a contar desde la posición 0. Esto significa que el primer elemento se encuentra en la posición 0, el segundo elemento en la posición 1, y así sucesivamente.


Por lo tanto, si deseamos insertar un valor de 4 en la posición 2 de nuestro array, el código que necesitamos utilizar es el siguiente:


```java
numeros[2] = 4;
```


Este código se traduce en que estamos asignando el valor de 4 al tercer elemento de nuestro array llamado "numeros". Es crucial entender este concepto para poder manipular efectivamente los arrays en cualquier lenguaje de programación.


### Generación de números aleatorios en Java


El siguiente paso en este proceso de aprender a llenar un array con números aleatorios en [Java](https://www.manualweb.net/java/) es la creación de números aleatorios. Y es que uno de los aspectos fundamentales que debemos entender en la [programación en Java](https://lineadecodigo.com/categoria/java/) es el proceso de [generación de números aleatorios](https://lineadecodigo.com/java/numero-aleatorio-en-java/). Este es un proceso esencial en muchos programas y aplicaciones, desde juegos hasta simulaciones.


Para lograr esto en [Java](https://www.manualweb.net/java/), podemos utilizar el método incorporado [`Math.random()`](https://w3api.com/Java/Math/random/). Este método, por defecto, genera valores que pueden variar entre 0.0 y 1.0. Aquí hay un ejemplo de cómo podríamos usarlo:


```java
int aleatorio = (int) Math.random();
```


En este código, estamos generando un número aleatorio a través del método [`Math.random()`](https://w3api.com/Java/Math/random/). Pero hay un problema: estos números son decimales, y a menudo necesitaremos números enteros para nuestras aplicaciones. Para obtener un número entero, lo que hacemos es forzar su conversión a un tipo [`int`](https://manualweb.net/java/tipos-datos-primitivos-java/#int).


Además, es muy común que necesitemos establecer límites para nuestros números aleatorios. Por ejemplo, es posible que queramos generar un número aleatorio entre 1 y 20. Para hacer esto, multiplicamos el número aleatorio por 20 y luego le sumamos 1. Esto se debe a que queremos evitar que el 0 sea un número aleatorio, y al añadirle 1, nos aseguramos de que nuestro rango comienza en 1. Aquí está el código ajustado:


```java
int aleatorio = (int) (Math.random()*20)+1;
```


Con este código, ahora podemos generar números aleatorios que varían entre 1 y 20, lo cual es útil para una variedad de aplicaciones en la programación de Java.


### Llenar un array con números aleatorios en Java


El último paso en nuestro proceso es llenar un array con números aleatorios en [Java](http://www.manualweb.net/tutorial-java/). Para lograrlo, utilizamos un [bucle for de Java](https://manualweb.net/java/sentencias-bucle-java/#for). Este bucle ejecuta un número determinado de veces, correspondiente a la longitud del array. En cada iteración del bucle, generamos un número aleatorio y lo asignamos a la posición correspondiente en el array.


Aquí está el código [Java](https://www.manualweb.net/java/) que muestra cómo hacerlo:


```java
for (int x=0;x<numeros.length;x++)
  numeros[x] = (int) (Math.random()*20)+1;
```


En este código, `(int) (Math.random()*20)+1` genera un número aleatorio entre 1 y 20. `numeros[x]` asigna este número aleatorio a la posición `x` en el array.


Al final de este proceso, hemos logrado nuestro objetivo de llenar un array con números aleatorios en [Java](https://www.manualweb.net/java/). Esta técnica es útil en muchas situaciones, incluyendo la simulación de datos para pruebas y la creación de datos para ejemplos de programación.


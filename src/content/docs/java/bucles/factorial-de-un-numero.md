---
title: Factorial de un número
description: "Código Java que de forma recursiva y mediante un bucle nos ayuda a calcular el factorial de un número y mostrarlo por consola."
lastUpdated: 2025-12-09
slug: java/factorial-de-un-numero
author: victor_cuervo
---

El factorial de un número es la multiplicación de los número que van del 1 a dicho número. Para expresar el factorial se suele utilizar la notación n!. Así la definición es la siguiente:


```text
n! = 1 x 2 x 3 x 4 x 5 x ... x (n-1) x n.
```


### Factorial mediante bucles while


Siguiendo esta simple expresión podríamos codificarlo en [Java](https://www.manualweb.net/java/) de una forma sencilla utilizando un [bucle while](https://manualweb.net/java/sentencias-bucle-java/#while) que nos permita realizar el decremento de valores.


Lo primero es definir la variable que va a contener el factorial y la que definirá el número sobre el que vamos a calcular el factorial.


```java
double factorial = 1;
// El número elegido para el factorial es el 30
double numero=30;
```


Lo siguiente es hacer el bucle en el cual iremos decrementando el número y multiplicando por el valor del factorial. En este caso nos apoyamos en un [bucle while](https://manualweb.net/java/sentencias-bucle-java/#while), el cual terminará cuando le valor del número llegue a 1.


```java
while ( numero!=0) {
  factorial=factorial*numero; 
  numero--;
}
```


Solo nos quedará el volcar el valor por pantalla el valor del factorial:


```java
System.out.println(factorial);
```


### Factorial de forma recursiva


El uso de un [bucle while](https://manualweb.net/java/sentencias-bucle-java/#while) es una forma muy sencilla de implementar el factorial. Si bien, tenemos otra forma de implementarlo. En este caso el factorial se define de una forma recursiva. Esta [definición fue realizada por el matemático frances Christian Kramp](http://es.wikipedia.org/wiki/Factorial).


La definición viene a decir lo siguiente:


```text
si n=0
  entonces el factorial es 1
si n > 1
  entonces (n-1)! x n
```


Esta implementación se puede definir con recursividad en la programación [Java](https://www.manualweb.net/java/) de la siguiente forma:


```java
public int factorial (double numero) {
  if (numero==0)
    return 1;
  else
    return numero * factorial(numero-1);
}
```


Como podemos ver es un calco de la [definición de Christian Kramp.](http://es.wikipedia.org/wiki/Factorial) En esta definición el método se irá llamando recursivamente hasta que se llegue a calcular el factorial del número 0.


Para volcar el dato por pantalla deberemos de invocar al método `factorial()` con el valor del número del que queremos calcular su factorial y mostrarlo por consola mediante un objeto [`System.out`](https://w3api.com/Java/System/out/). Lo cual nos generamos en la siguiente [línea de código](https://lineadecodigo.com/):


```java
System.out.println(factorial(40));
```


De esta manera ya tenemos dos formas de poder calcular un factorial. ¿Cuál estabas utilizando hasta ahora? ¿Cambiarás? Cuéntanos tus opiniones en los comentarios de la página.


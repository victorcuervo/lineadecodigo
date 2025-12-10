---
title: Números pares en Java
description: "Sencillo ejemplo, explicado paso a paso, para conocer cómo calcular los números pares en Java utilizando una operación de módulo (%)."
lastUpdated: 2025-12-10
slug: java/numeros-pares-en-java
author: victor_cuervo
---

Hace unos días publicábamos el artículo [Números impares en Java](http://lineadecodigo.com/java/numeros-impares-en-java/). Ahora veremos el otro lado, cómo hacer un programa en [Java](https://www.manualweb.net/java/) que calcule los números pares en [Java](https://www.manualweb.net/java/). Para ello haremos una codificación ad hoc del mismo y por otro lado veremos cómo reutilizar este código para calcular si el número es impar, siendo una solución complementaria a la planteada en [Números impares en Java](http://lineadecodigo.com/java/numeros-impares-en-java/).


Lo primero que tenemos que saber es que un número es par si es divisible entre dos. Es decir, que el resto de la división sea cero. Para ello, que en [Java](https://www.manualweb.net/java/), nos apoyaremos en el [operador de módulo (%)](https://manualweb.net/java/operadores-asignacion-aritmeticos-java/). Lo cual hará que el calculo de si un número es par se limite a una línea:


```java
if (numero%2==0)
    System.out.println("El número es par");
else
    System.out.println("El número es impar");
```


Vemos que utilizamos el operador == para comprobar que el valor del resto es exactamente igual a 0.


Ahora pondremos este código que hemos desarrollado en un método, que llamaremos `esPar()`, con el fin de poder reutilizarlo:


```java
static boolean esPar(int numero){
    if (numero%2==0) return true; else return false;
}
```


Como utilizamos el método directamente dentro de la clase que hemos creado para el ejemplo, lo declaramos como estático mediante el modificador `static`.


Lo siguiente será invocar a este método `esPar()`. Para poder llamarlo, simplemente tendremos que invocar a dicho método por su nombre y pasando como parámetro el valor del número del cual queremos saber si es un número par o no:


```java
if (esPar(5))
    System.out.println("El numero es par");
else
    System.out.println("El número es impar");
```


Además, si negamos la llamada al método (utilizamos la exclamación para hacer esto `!`). Podremos reutilizar el método `esPar(int)` para saber si el número es impar.


```java
if (!esPar(5))
    System.out.println("El número es impar");
```


Como se puede observar algo muy fácil de codificar con unas pocas líneas de código que hagan que se este sea un sencillo ejemplo para conocer los números pares en [Java](https://www.manualweb.net/java/) ;-)


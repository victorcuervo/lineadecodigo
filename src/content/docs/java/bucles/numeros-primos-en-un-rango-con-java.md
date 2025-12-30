---
title: "Números primos en un rango con Java"
description: "Calcula números primos en un rango con Java utilizando bucles y una función para determinar la primalidad."
publishDate: 2017-10-09
updatedDate: 2025-12-30
tags: ["bucles","for","numeros-primos","while","rango"]
slug: java/numeros-primos-en-un-rango-con-java
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/NumerosPrimosRango.java
---

Un número primos, tal y como vimos en el [ejemplo de Números Primos con Java](http://lineadecodigo.com/java/numeros-primos-en-java/), es un número el cual solo es divisible por si mismo y por la unidad. En el [ejemplo de Números Primos con Java](http://lineadecodigo.com/java/numeros-primos-en-java/) vimos el código necesario para calcular si dado un número este era primo o no. En este caso nos vamos a apoyar en dicho código para poder calcular los números primos en un rango con [Java](https://www.manualweb.net/java/). Es decir, el usuario establecerá un rango de números: inicio y fin, y calcularemos los números primos que haya en dicho rango. Lo primero será revisar la función [Java](https://www.manualweb.net/java/) que nos dice si dado un número, este es primo.


```java
public static boolean esPrimo(int numero){
  int contador = 2;
  boolean primo=true;
  while ((primo) && (contador!=numero)){
    if (numero % contador == 0)
      primo = false;
    contador++;
  }
  return primo;
}
```


Lo que hace la función es iterar desde el número 2 hasta que llega al número por si es divisible en alguno de los números. Asume que el número va a ser primo, pero tan pronto encuentra un número por el que pueda ser divisible:


```java
if (numero % contador == 0) { ... }
```


Cambiará el valor a indicar que ya no es primo:


```java
primo = false;
```


Es decir, está utilizando una variable que actúa de cortocircuito para salir del bucle y devolver una respuesta lo antes posible. Ahora lo que vamos a tratar el el tema del rango. Para ello definimos dos variables con el inicio y fin del rango:


```java
int iInicioRango = 50;
int iFinRango = 97;
```


Nosotros las hemos dado unos valores por defecto, aunque lo suyo sea pedírselas al usuario por consola. Una vez que tenemos el rango es tan sencillo como establecer un bucle que recorra el rango y vaya llamando a la función `esPrimo()`.


```java
for (int x=iInicioRango;x<=iFinRango;x++) {
  if (esPrimo(x))
    System.out.print(x + " ");				
}
```


En el caso de que la función `esPrimo()` nos devuelva un true, imprimiremos el número por pantalla. De esta forma tan sencilla tendremos nuestro código que calcule **números primos en un rango con Java**.


---
title: "Número compuesto en Java"
description: "Sencillo ejemplo que nos explica como utilizar un bucle y el operador de resto para poder saber si tenemos un número compuesto en Java."
date: 2021-02-18
updatedDate: 2026-01-11
tags: ["bucles","operadores","for","if","metodo","boolean","numero"]
slug: java/numeros/numero-compuesto-en-java
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/NumeroCompuesto.java
topic: java

---

Mediante este artículo vamos a conocer cómo se puede saber si tenemos un número compuesto en [Java](http://www.manualweb.net/java). Pero lo primero que tenemos que saber es **¿qué es un número compuesto?** Pues bien, un número compuesto es aquél número natural, no primo y a excepción del 1 que tiene uno o más divisores distintos a 1 y a si mismo. Es decir, aquel número que podemos escribir como multiplicación de dos números naturales menores que él.


> También puedes echarle un ojo al ejemplo que explica [cuándo un número es primo en Java](http://lineadecodigo.com/java/numeros-primos-en-java/).


## Bucle para calcular un número compuesto


Pues bien, si queremos saber cómo calcular un número compuesto en [Java](http://www.manualweb.net/java) lo que haremos será ir dividiendo el número desde el número 2 hasta llegar al número del cual queremos saber si es compuesto. Así que lo primero que necesitamos será [crear un bucle](http://lineadecodigo.com/tag/java-bucles/).


```java
for (int x=2; x<numero; x++) {
  // Código para comprobar si es compuesto
}
```


Vemos que hemos inicializado el contador al valor 2 ya que será el elemento sobre el que vayamos iterando y dividiendo.


## Comprobar si el número es compuesto


Lo siguiente que haremos es dividir el número por el contador. Y en el caso que el resto de la división sea 0, esto nos lo dirá el [operador resto (%)](http://www.manualweb.net/java/operadores-asignacion-aritmeticos-java/#operadores-aritm%C3%A9ticos), lo que haremos será indicar que ese número es compuesto. Y que lo podemos componer por el número que tenga el contador y por el resultado de la división. Añadimos este control al código fuente:


```java
for (int x=2; x<numero; x++) {
  if (numero % x == 0) {
    System.out.println("El número " + numero + " es compuesto");
    System.out.println("Se puede descomponer en " + x + " * " + (numero/x));
  }
}
```


## Método para calcular números compuestos


Otra opción que podemos tomar es la de implementar el código en un método para poder reutilizarlo. En este caso este sencillo método nos quedaría de la siguiente manera:


```java
public static boolean esNumeroCompuesto(int numero) {
  for (int x=2; x<numero; x++) {
    if (numero % x == 0) {
      System.out.println("El número " + numero + " es compuesto");
      System.out.println("Se puede descomponer en " + x + " * " + (numero/x));
      return true;
    }
  }
  return false;
}
```


Con este sencillo código podemos conocer cuándo tenemos un número compuesto en [Java](http://www.manualweb.net/java).


---
title: "Invertir una cadena con recursividad en Java"
description: "Uso de las técnicas de recursividad para poder invertir una cadena con recursividad en java"
date: 2015-06-15
updatedDate: 2026-01-11
tags: ["recursividad","reverse","cadena","function","metodos","string","stringbuilder"]
slug: java/strings/invertir-una-cadena-con-recursividad-en-java
author: victor_cuervo
type: doc
topic: java
id: a71e4116-8ac2-47b2-b556-ed9d4a5c1be7
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/ReverseRecursivo.java
---

## Concepto de Recursividad


En la página ya teníamos publicados dos artículos sobre como invertir una cadena en Java. Por un lado podíais ver como [invertirla utilizando un bucle](http://lineadecodigo.com/java/invertir-una-cadena-con-java/) y por otro [apoyándonos en el método reverse de un StringBuilder](http://lineadecodigo.com/java/invertir-una-cadena-con-reverse-en-java/). Pero en el día de hoy vamos a ver como podemos invertir una cadena con recursividad en [Java](https://www.manualweb.net/java/).


Lo primero que tenemos que saber para poder invertir una cadena con recursividad en [Java](https://www.manualweb.net/java/) es el concepto de recursividad. Podríamos decir que la recursividad consiste en ejecutar un mismo código un número de veces limitado para luego acabar dando como resultado la agregación de todas estas ejecuciones. Si bien está agregación se ejecutará de forma inversa, es decir lo primero será lo último ejecutado.


## Implementación de la función reverse


Para poder invertir una cadena con recursividad en [Java](https://www.manualweb.net/java/) nos vamos a apoyar en esa ejecución inversa. Lo primero será crear la función reverse.


```java
public static String reverse(String palabra) {
  // código de la función
}
```


Como vemos lo que recibe la función reverse es una cadena. Dentro de las funciones preparadas para la recursividad siempre hay una comprobación por la cual nos saldremos de la ejecución y otra con la cual llamaremos a la función.


En este caso el fin de la ejecución será cuando la palabra solo tenga un carácter.


```java
if (palabra.length() <= 1) {
  return palabra;
}
```


## Llamada recursiva


En el caso contrario lo que haremos será llamar a la función nuevamente, pero en este caso la llamaremos con el contenido de la palabra a partir del segundo carácter.


```java
reverse(palabra.substring(1))
```


Pero todavía tenemos que tener en cuenta qué hacer con el carácter que nos queda en la pila. Es decir, el carácter que está en la posición 0. Este carácter habrá que añadirlo al final de la cadena para conseguir que esté invertida.


Por lo que nuestro código para invertir una cadena con recursividad en [Java](https://www.manualweb.net/java/) será el siguiente:


```java
public static String reverse(String palabra) {
  if (palabra.length() <= 1) {
    return palabra;
  }
  return reverse(palabra.substring(1)) + palabra.charAt(0);
}
```


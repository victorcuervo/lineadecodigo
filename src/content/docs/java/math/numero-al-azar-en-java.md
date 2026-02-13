---
title: "Número al Azar en Java"
description: "Uso de la clase Math para poder calcular un número al Azar en Java."
date: 2007-04-08
updatedDate: 2026-02-13
tags: ["math","random","sysyem","read"]
slug: java/math/numero-al-azar-en-java
type: doc
topic: java
id: 8c26ad11-2db0-444b-8f94-ba3c5ec3450b
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/NumeroAzar.java
---

Seguro que más de una vez has jugado a esto. La idea es simple: una persona piensa un número entre 1 y 10 y otra intenta adivinarlo.


En nuestro caso, quien pensará el número y dirá si lo dicho es mayor o menor será un programa [Java](https://www.manualweb.net/java/).


Es recomendable leer estos artículos:

- [Leer caracteres por consola en Java](http://lineadecodigo.com/java/lectura-de-caracteres-por-consola-en-java/)
- [Número aleatorio en Java](http://lineadecodigo.com/java/numero-aleatorio-en-java/)

Te ayudarán en la construcción del juego.


## Generar un número aleatorio


Lo primero será generar un número aleatorio entre 1 y 10. Para ello utilizaremos el método [`.random()`](https://www.w3api.com/Java/Math/random/) de la clase [`Math`](https://www.w3api.com/Java/Math/).


Como esta función genera números aleatorios entre 0 y 1, tendremos que multiplicar por 10 y sumar 1.


```java
int numeroAleatorio = (int) (Math.random() * 10 + 1);
```


## Leer el número por consola


Posteriormente tendremos que pedir por consola el número. Para leerlo nos apoyaremos en [`System.in`](https://www.w3api.com/Java/System/in/).


```java
int numeroTeclado = System.in.read();
```


## Convertir de ASCII a número


Hay que recordar que el número leído estará almacenado como carácter ASCII dentro de un `int`.


Un truco para calcular el número real es restarle el valor ASCII del carácter que representa al número cero.


```java
int cero = (int) '0';
int numeroTeclado = System.in.read();
numeroTeclado = numeroTeclado - cero;
```


## Comparar con el número aleatorio


Con el número aleatorio y el número obtenido por consola tendremos que realizar comprobaciones para indicarle a la persona usuaria si el número buscado es mayor, menor, o si ha acertado.


```java
if (numeroTeclado > numeroAleatorio) {
	System.out.println("El número buscado es menor");
}

if (numeroTeclado < numeroAleatorio) {
	System.out.println("El número buscado es mayor");
}
```


Todo esto lo tendremos que meter en un bucle hasta que se acierte.


## Saltarse el retorno de carro


Cuando se teclea un número y se pulsa Intro se generan varios caracteres ASCII (el número, más retorno de carro y salto de línea).


Por ello, entre cada lectura habrá que saltarse dos caracteres. Esto lo conseguimos mediante el método [`.skip(numeroCaracteres)`](https://w3api.com/Java/InputStream-java-io/).


```java
System.in.skip(2);
```


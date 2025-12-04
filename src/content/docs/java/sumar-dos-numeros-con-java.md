---
title: Sumar dos números con Java
description: "Ejemplo básico que nos explica paso a paso como sumar dos números con Java los cuales habremos solicitado por consola."
lastUpdated: 2023-09-17
slug: /java/sumar-dos-numeros-con-java/
author: victor_cuervo
---

Empezaremos el ejemplo de sumar dos números con [Java](https://www.manualweb.net/java/) pidiendo dichos números por consola. Nos apoyaremos en la clase [`Scanner`](https://www.w3api.com/Java/Scanner/) para realizar esta tarea. Es por ello que instanciaremos el [`Scanner`](https://www.w3api.com/Java/Scanner/) sobre la consola, la cual es representada mediante la clase [`System.in`](https://www.w3api.com/Java/System/in/).


```java
Scanner reader = new Scanner(System.in);
```


Es importante saber que para poder utilizar la clase [`Scanner`](https://www.w3api.com/Java/Scanner/) tendremos que haberla importado al principio de nuestro código, antes de empezar a definir nuestra clase y método `main`.


```java
import java.util.Scanner;
```


Para leer cada uno de los números nos apoyamos el método [`.nextInt()`](https://www.w3api.com/Java/Scanner/nextInt/). Ejecutaremos este método dos veces, una por cada número y almacenaremos el resultado en sendas variables de tipo `int`.


```java
int numero1 = 0;
int numero2 = 0;

System.out.println("Introduce el primer número:");
numero1 = reader.nextInt();

System.out.println("Introduce el segundo número:");
numero2 = reader.nextInt();
```


Cuando realizamos la lectura mediante el método [`.nextInt()`](https://www.w3api.com/Java/Scanner/nextInt/) se almacenará en las variables definidas previamente el valor que haya insertado el usuario hasta pulsar el Intro.


En este código no validamos que el número introducido sea realmente un número, por lo que hay que tener cuidado con esta situación y evolucionar el código para que lo soporte.


Un vez leídos los números por consola ya solo nos quedará la parte más sencilla del código, la suma de los números. El resultado de la suma lo almacenaremos en otra variable.


```java
resultado = numero1+numero2;
```


Hemos utilizado el operador de suma para realizar la suma entre los números. Ya solo nos quedará mostrar el resultado por pantalla. En este caso nos apoyamos en [`System.out`](https://www.w3api.com/Java/System/out/)


```java
System.out.println("La suma es " + numero1 + " + " + numero2 + " = " + resultado);
```


Es importante que antes de acabar el programa cerremos el canal de lectura que hemos abierto sobre la consola mediante la clase [`Scanner`](https://www.w3api.com/Java/Scanner/). Es por ello que finalizaremos invocando al método [`.close()`](https://www.w3api.com/Java/Scanner/close/) del [`Scanner`](https://www.w3api.com/Java/Scanner/).


Este sencillo código es el que nos permite sumar dos números con [Java](https://www.manualweb.net/java/) que hayamos leido previamente por consola.


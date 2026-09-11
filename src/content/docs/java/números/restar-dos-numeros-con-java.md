---
title: "Restar dos números con Java"
description: "Domina la resta de dos números con Java usando Scanner aprende paso a paso el código, la lectura de datos y la visualización del resultado para crear apps."
date: 2010-09-04
updatedDate: 2026-09-11
tags: ["restas","scanner","nextint"]
slug: java/numeros/restar-dos-numeros-con-java
type: doc
topic: java
id: d778d1af-b70b-4e55-bab6-a1d35febc2b0
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/RestarNumerosTeclado.java
---

En este ejemplo vamos a ver cómo podemos restar dos números con Java. Y es que ya teníamos publicados varios ejemplos sobre operaciones matemáticas básicas: [suma](http://lineadecodigo.com/java/sumar-dos-numeros-con-java/), [multiplicación](http://lineadecodigo.com/java/multiplicar-dos-numeros-con-java/) y [división](http://lineadecodigo.com/java/dividir-dos-numeros-con-java/). Sin embargo, como muchas personas nos habéis indicado por correo electrónico, faltaba la resta.


El procedimiento es prácticamente idéntico al de los ejemplos anteriores; solo cambia la operación matemática que debemos ejecutar.


## Leer los números por consola


Primero creamos un objeto de la clase [`Scanner`](http://w3api.com/wiki/Java:Scanner) para leer los datos introducidos por la persona usuaria:


```java
Scanner reader = new Scanner(System.in);
```


A continuación, solicitamos los dos números que queremos restar:


```java
System.out.println("Introduce el primer número:");
numero1 = reader.nextInt();

System.out.println("Introduce el segundo número:");
numero2 = reader.nextInt();
```


La lectura de los valores se realiza mediante el método [`nextInt()`](http://w3api.com/wiki/Java:Scanner.nextInt/), ya que esperamos que se introduzcan números enteros por consola.


## Realizar la resta


Después, ejecutamos la operación:


```java
resultado = numero1 - numero2;
```


Por último, mostramos el resultado en pantalla:


```java
System.out.println("La resta es " + numero1 + " - " + numero2 + " = " + resultado);
```


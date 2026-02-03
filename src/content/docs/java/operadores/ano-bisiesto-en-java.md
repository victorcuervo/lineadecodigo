---
title: "Año bisiesto en Java"
description: "Dos formas de calcular un año bisiesto en Java. Bien sea mediante fórmulas matemáticas, o bien sea mediante la clase GregorianCalendar."
date: 2007-02-18
updatedDate: 2026-01-07
tags: ["modulo","operadores","gregoriancalendar","java-util"]
slug: java/operadores/ano-bisiesto-en-java
author: victor_cuervo
type: doc
id: ac4d2611-c94c-41de-a053-74bfd9b00b76
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/dates/AnioBisiesto.java
---

En este artículo vamos a calcular qué es un año bisiesto en [Java](https://www.manualweb.net/java/). Para ello veremos que dentro de Java tendremos la posibilidad de calcularlo de dos formas. Por una lado podremos hacerlo mediante el cálculo de una serie de fórmulas que nos ayudan a conocer si un año es bisiesto o no. Y en una segunda forma lo podremos hacer con la clase [`GregorianCalendar`](https://www.w3api.com/Java/GregorianCalendar/) que nos ofrece el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/).


### ¿Qué es un año bisiesto?


Pero, lo primero será saber qué es un año bisiesto antes de programar el cálculo de si tenemos un año bisiesto en [Java](https://www.manualweb.net/java/).


Los años bisiestos son aquellos que duran 366 días en vez de los 365 normales. El día de más que tiene el año es el 29 de febrero. Esto sucede para corregir el desfase real de la duración de un año, que es de 365 días y 6 horas. Y es por ello que los años bisiestos se producen cada 4 años.


> Para saber si un año es bisiesto se puede aplicar una simple fórmula, la cual dice que un año es bisiesto si es divisible por cuatro, excepto los principios de año (los divisibles por 100), que para ser bisiestos deben de ser divisibles también por 400.


### Calcular un año bisiesto en Java mediante la formula


Si tenemos que resolver esto con el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) solo nos harían falta unas pequeñas líneas de código para llevar a cabo la definición anterior. Sería algo así como:


```java
if ((anio % 4 == 0) && ((anio % 100 != 0) || (anio % 400 == 0)))
	System.out.println("El año es bisiesto");
else
	System.out.println("El año no es bisiesto");
```


En este código vemos que recurrimos al [operador aritmético Java](https://manualweb.net/java/operadores-asignacion-aritmeticos-java/) de resto que es representado por el tanto por ciento (`%`). Para saber si un número es divisible por otro, simplemente deberemos de comprobar que el resto es igual a 0.


Es por ello que si queremos saber que sea divisible por 4, hacemos el cálculo del resto mediante el operador módulo, validando que el resultado sea 0.


```java
(anio % 4 == 0)
```


Pero tenemos que obviar los que sean principio de año. Es decir que son los divisibles por 100. Aquí es cuando añadimos con el [operador condicional AND en Java (&&)](https://manualweb.net/java/operadores-condicionales-java/) seguido de la validación de resto, que es este caso, como queremos que no se cumpla ponemos el `!=`. 


```java
(anio % 4 == 0) && (anio % 100 !=0)
```


Como puede ser otra situación, que el año sea divisible por 400, tendremos que recurrir en este caso al [operador condicional OR en Java (||)](https://manualweb.net/java/operadores-condicionales-java/)


```java
((anio % 4 == 0) && ((anio % 100 != 0) || (anio % 400 == 0)))
```


Con esto ya tendremos calculado si lo que tenemos es un año bisiesto en [Java](https://www.manualweb.net/java/).


### Calcular un año bisiesto en Java mediante GregorianCalendar


Pero [Java](https://www.manualweb.net/java/) nos ofrece una forma todavía más sencilla de resolver si un año es bisiesto. Y es que nos proporciona la clase [`GregorianCalendar`](https://www.w3api.com/Java/GregorianCalendar/) y, en concreto, el método [`.isLeapYear()`](https://www.w3api.com/Java/GregorianCalendar/isLeapYear/). 


Si vemos la sintaxis del método [`.isLeapYear()`](https://www.w3api.com/Java/GregorianCalendar/isLeapYear/) veremos lo siguiente:


```java
public boolean isLeapYear(int year)
```


Es decir, recibe el año del cual queremos comprobar si es un año bisiesto en Java o no y, para ello, nos devuelve `true` o `false`.


Para poder utilizar la clase [`GregorianCalendar`](https://www.w3api.com/Java/GregorianCalendar/) tendremos que instanciarla mediante un operador `new`. Y luego ya llamar al método [`.isLeapYear()`](https://www.w3api.com/Java/GregorianCalendar/isLeapYear/) para realizar la validación.


El código nos quedaría de la siguiente manera:


```java
GregorianCalendar calendar = new GregorianCalendar();

if (calendar.isLeapYear(anio))
	System.out.println("El año es bisiesto");
else
	System.out.println("El año no es bisiesto");
```


Ya hemos visto las dos formas que tenemos de poder calcular un año bisiesto en Java, bien sea mediante el uso de fórmulas matemáticas controlando los restos mediante el [operador aritmético](https://manualweb.net/java/operadores-asignacion-aritmeticos-java/) módulo (%) o bien sea utilizando el método [`.isLeapYear()`](https://www.w3api.com/Java/GregorianCalendar/isLeapYear/) de la clase [`GregorianCalendar`](https://www.w3api.com/Java/GregorianCalendar/).


¿Cuál te gusta más de los dos? Déjanos tu opinión en comentarios.


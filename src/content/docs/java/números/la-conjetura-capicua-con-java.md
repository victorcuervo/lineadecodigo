---
title: "La conjetura capicúa con Java"
description: "La conjetura capicúa con Java consiste en transformar un número natural en un número capicúa mediante sumas sucesivas."
date: 2009-06-23
updatedDate: 2026-01-09
tags: ["bucles","while"]
slug: java/numeros/la-conjetura-capicua-con-java
type: doc
topic: java
id: a0fe32b6-65df-4822-bf3d-8cae6e288b47
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/ConjeturaCapicua.java
---

Un número capicúa es aquel que se lee igual de derecha a izquierda que de izquierda a derecha (véase [Saber si un número es capicúa con Java](http://lineadecodigo.com/java/saber-si-un-numero-es-capicua-con-java/)). La conjetura capicua dice que partiendo de un número natural podemos llegar a obtener un número capicua en un número finito de sumas.


Para ello iremos sumando a dicho número su número inverso. Así tendríamos la siguiente secuencia:


96 96 + 69 = 165 165 + 561 = 726 726 + 627 = 1353 1353 + 3531 = **4884**


Lo que vamos a explicar aquí es como hacer la conjetura capicua con [Java](https://www.manualweb.net/java/)... Para empezar podemos leernos el artículo [Saber si un número es capicua con Java](http://lineadecodigo.com/java/saber-si-un-numero-es-capicua-con-java/). Ya que en él se nos explicará el cómo saber si un número es capicua de forma detallada mediante Java. Lo primero que codificaremos serán un método que nos ayude a invertir un número:


```java
static public long invertirNumero(long numero){...}
```


Esto ya lo veíamos en detalle dentro de [Saber si un número es capicua con Java](http://lineadecodigo.com/java/saber-si-un-numero-es-capicua-con-java/). Pero veamos el código:


```java
static public long invertirNumero(long numero){
	
  long falta,numeroInvertido,resto;

  falta=numero;	
  numeroInvertido=0;
  resto=0;
		
  while(falta!=0) {
   resto=falta%10;
   numeroInvertido=numeroInvertido*10+resto;
   falta=falta/10;		 		 
  }

  return numeroInvertido;
}
```


Podemos observar que mediante operaciones matemáticas y obteniendo el resto de dividirlo entre 10 tenemos el número invertido. Ahora vamos a la parte central que nos permite aplicar la conjetura capicua con Java. Estaremos en un bucle que vaya comparando el número con su núnero invertido. En caso de que coincidan es que hemos dado con el número capicua.


```java
long numeroInvertido = invertirNumero(numero);
while (numero != numeroInvertido) {...}}
```


En el caso de no haber dado con el capicua, sumamos el número a su número invertido y volvemos a calcular el número invertido del resultado. Tal y como dice la conjetura capicua.


```java
long numeroInvertido = invertirNumero(numero);
while (numero != numeroInvertido) {					
  numero+=numeroInvertido;
  numeroInvertido = invertirNumero(numero);						
}
```


Si salimos del bucle habremos dado con el número capicua... Hay que tener en cuenta que el ejercicio trabaja con long. Es decir que si cuando hemos llegado a 9,223,372,036,854,775,807 no hemos encontrado el capicua... mal tema. Así que habrá que controlarlo o trabajar con tipos de datos de mayor precisión. ¿Alguien se anima a explicar cómo podemos hacerlo con mayor precisión?


---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
slug: /java/area-de-un-circulo-en-java/
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RDKJO6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAoz8XQisViK5YiFDPvwYVwvP5dxcUmYdxAKHMrwlLDAiEA%2Fm1Y3ZgIch8gNoviNZgQ5bf8UNFZorfHzvnQeqZI6fsq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDEJAvjk5dxMieXnFbircAylm48U5yN3ccSGjLOhoWGNzkRhe1lAwqbbjZVpSPiFA7P5%2BOqNce%2Fwg0k%2FmRYyho2Urx0do%2FZAM3cMGZInGv8ZQkg2XaP5aTr7pI%2Fh1h%2BpDD9jMhCVWr2BZxcAzhpinWGHW%2BwKq%2B7KOG%2B%2Bpab9Y9lHofTcIXTFfajYzGJqd%2BKrRJPHe87IJ50YdYMLMxu%2F6yAuIrnINUychqe2CXp9yKfIYJsbfnU1mhBmdb2uDPLVwVhBhYDUSoTdxboX6R8%2BSG82KHivW%2FWMp%2Fr0xtlC3mSyLiC9DHHikWfzkXRhm14tFP2WaXRBZZmT6ECNnRzWU2RlIFM3gn%2FMvpkPaAZg6g2%2FSYdSgZloG514c5%2FKWv2j5pI7BgkSd4VAHo%2BDT6b2A4sHJBxLXcaIitkwBsZw84iN7tOCeOdR1%2BCi27mdY1V4VgeNqGUK9HXc4PfdECtQAdpbnHTnQb4fDVG5vLZ9PBJAEkTw7YNIVOqCgin2AQ32oxjOroXPPy9K5fWC6EwmcBCOKzCeL6FbzhX4i5P%2BO4nntye1fJ08HxSpr9yk3GA2eicovaGTf7bk8U3nbCTwvhV2YckuW8xKAFCA0iTYSaqbzT4e3bFNdoRTM3bmGeD30wYJr0dGqM0wluMCgMIT9zskGOqUBAIVa0XgOuI%2Bt0UMeEPmnj%2BYir3fcSwdps51iW5E6C%2BgnJIvbLl0VOYalVcGXbS849t7xbI9CmLGZX62QhlVDLS7lQQIsiVNowtrL1h6Nr6AYq4FQE9%2BVh5LUBIZrjHrncKdY2UY5NYsHhXIctSGGs07NPCg5dFlS5L5jiCjM2bMYALcutx2CSWarpGBwaeIfIri69H42NUydQsn4x24TsdROiACp&X-Amz-Signature=bf10466ac1638fbf844d9a6e74393d2fbb03511f7fb45aed0b64a164da30810f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Además tenemos que saber qué es el radio, **el radio es la distancia desde el centro del círculo hasta el borde del círculo**.


Con estos dos conceptos de área y de radio podemos saber que la **fórmula que nos calcula el área de un círculo es** la siguiente:


```text
Area = Π · r2
```


Si analizamos la fórmula vemos que el área se calcula multiplicando el valor de PI (Π) por el valor del rádio elevado al cuadrado.


### Codificando el cálculo del área de un círculo en Java


Una vez que hemos adquirido el concepto sobre qué es el área de un círculo vamos a ponernos manos a la obra con el [programa en Java](https://lineadecodigo.com/categoria/java/).


Vamos a crear una clase Java que llamaremos `AreaCirculo` y en la que añadiremos un método main que será el que contenga nuestro programa que realice el **cálculo del área de un círculo en Java**.


```java
public class AreaCirculo {

	public static void main(String[] args) {
		
		// Nuestro código

	}

}
```


Lo primero que haremos dentro de la clase `main` será definir las variables que vayan a contener los valores `radio` y `área`. Para ello, definiremos dos variables de [tipo ](https://manualweb.net/java/tipos-datos-primitivos-java/#double)[`double`](https://manualweb.net/java/tipos-datos-primitivos-java/#double).


```java
double area;
double radio;
```


Lo siguiente será implementar mediante código fuente la formula del área.


### Calculando potencias mediante Math.pow


Para poder implementar la fórmula en [Java](https://www.manualweb.net/java/) necesitamos conocer dos cosas. La primera es saber [cómo se implementan las potencias en Java](https://lineadecodigo.com/java/potencias-del-dos-con-java/).


Es decir, ¿cómo podemos calcular el radio al cuadrado? En esta situación, alguno podría pensar que valdría con multiplicar el radio por si mismo y estaría en lo cierto.


Pero lo que vamos a hacer para nuestro código es ayudarnos de la [clase Java Math](https://lineadecodigo.com/tag/java-math/) y de su [método ](https://www.w3api.com/Java/Math/pow/)[`pow()`](https://www.w3api.com/Java/Math/pow/) para poder calcular potencias.


Hay que recordar que este método es un método estático. Es decir que lo utilizaremos directamente desde la clase [`Math`](https://www.w3api.com/Java/Math/). La sintaxis del [método ](https://www.w3api.com/Java/Math/pow/)[`pow()`](https://www.w3api.com/Java/Math/pow/) de la [clase Java Math](https://lineadecodigo.com/tag/java-math/) sería la siguiente.


```java
public static double pow(double a, double b)
```


Cómo podemos ver en su sintaxis o que hace este método es elevar el valor del parámetro a la potencia indicada como parámetro b.


Por lo tanto, si paramos a codificar nuestra fórmula para el **cálculo del área de un círculo en Java** podríamos escribir la siguiente línea de código:


```java
area = 3.1416 * Math.pow(radio,2);
```


### Usando la constante Math.PI


De momento esto nos valdría, pero vamos a ir un paso más allá apoyándonos en la [clase Java Math](https://lineadecodigo.com/tag/java-math/), ya que la clase [`Math`](http://www.w3api.com/wiki/Java:Math) nos ofrece una constante con el valor de Π. Esta constante es representada con la constante PI y que escribiremos en [código Java](https://lineadecodigo.com/categoria/java/) de la siguiente manera:


```java
Math.PI;
```


Esto nos permitirá trabajar con mayor precisión decimal dentro de la fórmula que hemos implementado para el **cálculo del área de un círculo en Java.**


Finalmente, nuestra formula quedará de la la siguiente forma en una [línea de código](https://lineadecodigo.com/):


```java
area = Math.PI * Math.pow(radio,2);
```


Ya solo nos quedará el mostrar el valor del área mediante el típico [`System.out`](https://www.w3api.com/Java/System/out/) y su método [`println()`](https://www.w3api.com/Java/PrintStream/println/).


```java
System.out.println("El área de un circulo de radio "+radio+" es "+area);
```


Ya tendremos concluido nuestro programa que nos ayuda con el **cálculo del área de un círculo en Java.**


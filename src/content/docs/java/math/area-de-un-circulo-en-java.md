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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTURTRFH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBj%2B7mAwGH6xd5%2F2yu2YokowhrDixpkmKBFZ31Z%2F%2FrpgIgaTDY6hHT24sU67zIDaAinXsAYISh2Ql2ssiM6M3VPlYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDA4QCCLuUIR4JtEGwCrcAzoLedWtkxm7vle8t58IUGhtU1ADpW7WFvynAQRHmBe30anjotOsmXsRJI7Jd4%2BQDX3u5WoXupMRiEbs%2Bi%2BHnBFewfT4Q4vEGo5HsSOaftjVdRvQmA0Ld%2BVOZmtTCYuv%2BMA%2FDDefJXdXq9mGaXXOquDH7aPGKPfmvlMIjPdCnFt%2BXkgz1AqvIMljtLHrdNO378%2B9WyPLExal8t6iGQV6KEY6wUknaDN8A%2Bbf2a7fHMbWOn6uG%2ByOqHt%2FZG6qiroqwzr5FuueWIeLZrDOSvhR5NnEMptM%2BTQvnNLz3LBPBlOx6tGI2OEiXTCZmtB91%2FsVKosQJUGnXmQFdPTT9XNMKFi2Xup8U%2BzYkbElHzrzrXROb8v3b8A24Kg7IUrYJBpOezjJnB6NuzL7MpikTirJPzCj2g%2Fzh%2FOyKsBKoi4wymmECIomiOmDAFra00uRBUalDQMAlzOVXN2VUcfooidCU%2BPDmxkcxfloOzFHk4jyjO8XY5eqPz5JxiaP3COtVNDEpOcgPv9lA%2BNg4ts0hxHQsQX5wuBvoC65F%2FHMA7Zc3Vjy8ib%2BlxdmKDuLsHwBISSKTdxeHtxMgTYKsCNge1FtAkn3ZKtLABarTBgULHk4JMm6%2Bjm4dcqrVKUUu5PIMLLF0ckGOqUB%2Fd1eaJD05zWfk2habfEO2QCroI1%2FUbC5bs4QDAyDTd%2Bb9Cw4pRsg4HZuOnnHSu%2Fj%2BLV2I7%2BBI55F5ueWhSqbR3u23AsemO6WqQrxaHLhqJpW8cF7voEkGdzaP%2F9qhNH3M1S3MqNhDjcF8ZlUbXfVQvrbZNjgYmJkCElH0joHHsNIdVLg1JZzfFwIbRUqZMeA87nH32sVQBEvYt2IMbTace%2B%2BCWBb&X-Amz-Signature=c5eb53cec28001a0625beed85f8b89381e183c0275cc144a453e2818d10e05f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJ65XKW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0b%2FMThr%2BolKnmGj%2Bqk96bn3onYh%2BwXXPqG4%2BKnsrfLAiAYA3IlxzaushFYy2C%2FZdgsH2xNj3jiHXNZxEnQRAmYOSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3wQbONi3FvEtKtBWKtwD2M5mit82%2BWDfJEoebz23IoYCwnXc%2B38Itpj3LT2eeUVZKKro2ndipfDPl1cqslYRKCVdR%2BsrPITXxqi1JwieelsWtYde%2F5Jhc%2F%2BpI0w3QSCGI9CyWCsK05iYV42Sm%2Fr4cDw%2Fx3Z9J9c9k974jOEQHEDrSm5CxCfCqvXACtnczZt%2FKmxGZLkhTnjf3jg%2B9l%2FVLkhFYo19CaXQydote%2BZpcJgKQd8Qy%2Bhmac1oFRbXXq0kEHbRHZYZoUMuJaxR9bToSXY10WoC1xQJZwJIMS%2FZFIk%2F5EIxKSuUey%2F7Qzne4QA%2Bs5tjCHE28fBDUiX35d%2FEWzAdANmbldNM1LdzJB%2BkqE%2BRG%2BCN62V%2BSKjtvyOQFdJY%2FT9bXDtWfw5QDOkBLOV9mhnh3hKR5xWSDZxopnCka%2Bdk7W7XdC0%2FnZ1TJdi2v9RJ8HJo2ZXSD2%2Fhae%2FC1AtMTIXOVUQwuHZJOAOcMwQw1rqyzuI1k4GPho4b%2B6Ca9lXIMfVa4JWkFvK9vh9n6bKuQfFezkb1CSUxFHSdXlC1aoM6XCLTklozHdjksWB5y0yzaQ6ZnUUR22CByE0JMD0Ho4taBOo8ltSAvSEum0NX7VXcayyVyjTcf2LBl10ta9L2AN5Hc%2BFsYsKWeLIwqeTeyQY6pgG%2Blxm6rVUf8tnZLx847%2F%2FrwhZiT4eEkXLVYj9%2FsKo%2BBzR7DiYzUAfCIKP1F%2ByDOy6lXqZfAbECs5PlC66iGZVTYF4tzRkpbdpEPz%2B2FT2XQ9KpHNWsOhTMKwBHBIcX32lOHbvJAQKPab6dfjVuhiXQd3j10%2FL5W7XSkc92PCa9xn3IvigrpcgRxEjUDCGfVtHdmKycmtdXPx30A5wTieu7Pk3QjfpX&X-Amz-Signature=63f31fca9fab7f263edc4e46cbda2e5ec4bec5096ed557d072a2f9ac2086d6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


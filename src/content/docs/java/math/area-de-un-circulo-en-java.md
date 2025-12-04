---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJOHNWYD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCqVY%2FwtpZiPFUzc7YxtAKso4ze5xGkJjxW8oxlZlvpPQIhAOgHT0UnQ%2F4BAwTQ52VaFe7GH9fhGuWDXNdmNXtmQjyaKv8DCDsQABoMNjM3NDIzMTgzODA1IgzGbjo%2B1mlqdYyLHWQq3AMpF1Py3PNRS%2F%2Bkfd8F3Ne4OWRy9zYmXY9oAzJC9YW2RwtG2U%2F%2FyKLB%2FoCBeilo6PM1P%2BEbq3TkVsIUPmpRlE62qsDTG6LlhA%2Bfeu80Ygwziaq4SLl4py%2FWKWi7vfY8BMmDx%2B0Uy2kquBcFEgPqejW0PMKg362RhtGpsp9wsvtaflJqy0wZDDvpqdKSUARykW%2FJkAj%2FTlSGJn4%2Fdmd0Qy%2BLE4dNZfT6It%2F5lrA3o4Pi2pcdLfRr9bvQ6Y2wuwpJ%2F1sk5slQnxYaFyZOJQNC03yZ5yurhnNjgot7nRrrNcrn3VQjW6mGfGtQwwjBfWYXFMhcTYYxTtFEI7kAWwCOYOrqUs%2FyVvR8AuqChtyMlCj1%2FiseXfja2Eb57Qhi9LyGyh3PyIo3ZD0KAeL8TiN0eQg0q9Cua01I3DF822H0H60FehVcredC5ECmJn%2Ba6cnWQ7qddQNbDzYYkAANN2yqVUOBXVrScxAI7dV0Bah3vMKnmiOkPj7Y%2FdMzY12eLbTI0JhNfQvpoCLFdVwobwfIxCCe20Ag5o9YxiflzayyF1hLY%2FFrmi3ZkS83tOCYlGyQf3i8vCD2VLIAwfaTUOdiodI1VjMzHw5wOf8viK5sqyhNwEr9ySE53sIiUZ8wUTDe1MPJBjqkAQSlfPpbJ865q2Y%2FPKBGWNgn6RhGJ0feYM7lsHABPYUg6P8%2BLAnKJ8AVpnxy4MlpId15SJZorAfRiuEUno%2Fq4VxrhwaRAc615HqOnNjmh3Q%2FYiSy1EPWjdgOnM4TMvpBvlQ8TS6dLW2Ln9axJiPGEccMojmdEGNSFv9aGldz6EAtMz8%2BK8GA15SyMp4jcYDExJzxvcfzY34Db7yLGpwY1tZ3b1fW&X-Amz-Signature=fae319dc3b54da5a20f40b2281d90a1e6e8b0857355a405c13f6949ab010b02a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


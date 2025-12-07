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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMSHD4DD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAbEEnIxSHB0b3owyZZ66FtGfAT1%2FiERh%2FwVNONMn6vAiBuUwpNDJa0O51E7ZqYVFXyYq5bJjq%2B2a2LK5MQYlb5KiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBf0VIbQvNEWxouIHKtwDHznwbqgCviZvO1DmaMTUH0za6TfgXS%2BJd6UeMcTxNfUykj9EoDH8sljyrv5hc%2BjT6crNm9K%2BQNZ%2Fm1jxsdaUwTfu8FlYu2NClBmPf1YNjDJqBuuMCas%2B5lSGJfp3OXsFmvcnNVlHoh2b%2Fh6fKYYhb9B%2B0WBLGA%2BhlZ04xlw4f2Sptqcjuodk5KMbPS5BTNKTmswN3eCdeGIXf0zo%2F1KWK6ERHF62Cnh0mfRc86cbvQkI3smD7%2F2%2FHgPEi11Ll%2B6QJ9xhURcNkyFDRE%2BZP%2B%2Frm6wb0fhPkQl40NoY4xDGbU4vBLCCziRnt5w02Fpak3bdU3qVKyj3sDoS%2BrNgmn3Nc7xGs6QNvAiy%2FEwFKjiclrZrxX2r7pq%2Fe%2BukNjAGdV9Oqskf9x1OId2d1b6CcUdsqjI0HNIewWNQuGbepKz9TZBSqOOnSrDeOTTE2lVK1TzNrCoFlMNxB%2B8upSwBrh5y0Cx1R%2FKwfzRlKWIcqrxo9ZwIbPNbjBF%2FvuUdTRGj1pMIUvXivbD77Q9f79oebNNNtR50DmHad9F2q0YkQwNzFUrL7X6uq8A5EVRGFbAK5gImrxAJTk8npwUKGo8xUNoDyyg85pbixz8e6L7F1vwe2Y2DPcwBexZahGL9WPAwlajXyQY6pgGjL2vV9BRxmZOk%2Bknayuz1ClgkIsI7VTQK0yiJZGrkFt3zlhmYcJnhX94OWbba2gt2TWZrWn3yg3SWF%2Bmk2nWM9ayZx3p8E2rISQ3Hp60qjt4iHDsIACyemyy%2FS69%2BFEtKg%2BskhN87zr6fA3o89db2qLpgKRnjOtw1FhGq%2F1yhrYcsoipijhb1AWSo7PmOC%2FdK7L3Ty9kL75udPA8TKFdhbSMKPplu&X-Amz-Signature=794177bb84c87476787749305db4a5ac846a57434ce4c9c9a23443aa5f2ec0d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


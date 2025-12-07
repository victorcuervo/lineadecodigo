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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHSLBEXH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwpSdVOh%2F51eNVgjTdTwOlYVw35QVM2XyZfcY%2FKfwHcAiEA%2FauJfQYB8LwtpmfislMQzqdcoTF%2Beg6qU8KLbgjRk5IqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLit80YUetMlGRjmircA8POBvQkBABd6WmrcC1qTY1jwN9jk5aTV31RrSmlma442QPj7qNyEeMilJ0ENExK0Wa%2Bux1GUoz7U4otNVgATfsAI50JouWUpk9eKgWJRxml7bMgUTQ0I1MMDrv%2BDISxW%2Bq4YBd1cROeWuCwGLxdxOdAwz7XgOwR4KkZR%2F%2B1G2b93j58G4dMZP3kA3tRVxcwAa0NWlU2zQ6gR6nYP0LcpMG%2Bc8ixIX8KoL602x9bx0fiQReZ%2FANxw0pDlrgX8CRB8%2FjVfpovaPWMFSg6CeWHrlOyMrpzjJTQCeosjttjxbDeTkTlCJkXaeV1pMV7X%2Bm%2FJ4iixm68ne9RM2XPFyVhTR3sjKPvD7Glv3XD1va4y8oAnhMLd3arRgUXLYtOs44vOIknkvNnh3FIj%2FM7rZOIzjd2%2B3GCgMPquxmELxW4o8cdNi4EhMUtskHT15MikORUzE1qlwXgRYM4Q1MY%2FUnhII4Qw1ELgaRtYCju5SB9v7bnOm%2Bw3Hat2U4sAq9GyBQ4aK3wxx2HTfjgL2rX0%2BpYeJ7oaIADap1pbp180Sue10AeREkT3viHsf0JLapdlIyNjq4GTg6ksR9ECYNwPqtVNXNPGPo3C%2FKErWmzAcrpzj18XYHkh3ua%2B5sgsGmiMNf90skGOqUB70CFMUk7VS0r%2BwOQRYTi%2BeMngkXspfTtxa4%2B13qKpXIWLR23ZtlLbOD8f0iM50WvFB8B%2FA8oFmfnaj5%2F7qh3D%2Fl9uwb1ZtK1XGXMRVDJeiWeVOK1oB8%2FgyO%2BZ3Nd1Ar%2FTRv0YjDKL0xS%2Fm2OfemZQyKTWOAsg1bSuHtKJJR773YURy7VVeKsz8Khf9EOFqMItGMdRXGeZ3%2FBuv9baMcNYIGGt1sn&X-Amz-Signature=41b000d429d766eaa4678315ff19b9fdaa9492c6eed0d6e564ddce9d40cbb828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


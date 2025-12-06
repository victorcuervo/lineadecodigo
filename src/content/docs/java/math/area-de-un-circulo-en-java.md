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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2PMTSOZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwCqPmf%2FQphTl5wOm54gwnR%2Bs7oj5ZdHDUx47Z5XQBDAIhALn919SEeGSkWFnaECJCzDUX2efeNtZgV4BKbweuh9P2Kv8DCHEQABoMNjM3NDIzMTgzODA1Igw1uY5vyrpGmX7T7E4q3AMLM7E%2BPczAQbc5JpKF4EOghoExqSykQ6Zx%2BX9Egt8DcZvVzgdvlz4anmW7jVd4PVcktTxH%2FnmpCi2arjmUOYClJSiCX5k9Z4F%2F6UaPlQ32kIvwnkFiy3%2Fg%2FbFVDEeMJlRe9h6cvKY%2BrDoJj67ckrGHloIk8zcEo8%2B3KCFtm%2BNWtP4rtHoimtJSBQnFQna691dWff7c8u40EixA5DUlL7PW1N4OBejDvLxT%2F1qq2MkSVll3aR7LtNPlEG1KTzVyw1n3IJu%2FrzFL6xHptRevDDIy0nAaC3wH%2BEtj%2Bpsa5ExEXjEiO0pbUnJA80RznxQSsOIc42aiaIz6I5vEVkyFO%2BKUfjKnO1nFytEF%2Fg8%2FSUXZ8DX1ffqLeBEuTWNc0ApG1ZX6ttlGBRiHFLw8CcPSc3C4rq0y5jNnDZAE0WJ7bFitiR285XtgYtY5x45STYupIN1qF8DJZ%2Fm4Mh85wA1Kqr1Q6TwAXd10v2Z6RgfabKvDOM%2FOP%2FyIa7Ybjq4dJ%2FAh0U6gLfMoNUhmPll%2BVxcA4QWUv0IZ9WxZOEKRD3ZwLA4RN2q5PuOHuNvAbLpM1FDAYLRu8YR25CmjbPK5XukjeOdb%2FjrtjroAhIY5alGjZ2sMPNbuaAskNhfiB%2BbGITDHvM%2FJBjqkAe9ltHxMxtWLWAiUFjoPX5hEUCrsHPsq%2FlZQKU0JaYS%2FmdrHKMnXfOdgIRBmJBRV%2FxLNydGnssoP1WI9%2BZHSNa%2FJI7jhEDCqJZMmrJHB0K5aPIGpJYpspAJCZxO46yNKNvrodQ8dUscoupQ%2BuuQ3kWHh39A5mgXTvyadFsmO%2BgYQ2M1v41V7qLCx%2FKENY6qCJ8DJD7FzsTv4yLNHEgzhVjHM%2FmWy&X-Amz-Signature=60103a8acba872b5cf5b6d552ff20a0d36d18e9a6c066987d3d807ca04e063bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


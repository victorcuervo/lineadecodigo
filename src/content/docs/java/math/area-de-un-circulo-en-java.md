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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAXCXLMO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICN1jfWYlg71Q2pFmG7xAwRu05TJu7maxLTMAnCs0hrxAiATPzUeKYQ5SrbsE0%2BIZaK3wV35PLrwleBILgQgroBflyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMHYXlVi1u0%2BbE55%2FdKtwDp4sLeGi5Wu7p37JHkqSXarr6JDAdmShGN7qVw1falrldDU6T%2FcAYstGZVvdDE0y9orrZ4yNa7kpny8nw3Dv24kKQLaM8mGFga%2F4RlrRDmwxFPIaeA6%2BDB%2FBpjUk1w91VVMcKfYcPdPeJt2Xqn8BvutcZKpRk5hCUv%2FTo2N1luKtM7EnMjhaRg%2FUuV7YQ5bpQI7QiQnu4%2B0ncJ%2BFZlYTINlEdu7%2FfRftBM2ZgPwOAXXjjLLBktAoV6TY0Nej7SoeW2Sci0xvqCX2j8hpCzYpphddJDjQ0oG6pAgakYJwbSNfeQjXoHGUx5FC2ozsLvYa5HUhAYD%2B%2FJA%2ByiO9iS7irfD8MtvxwStcODbEKV82n7gr%2FfZsv4zkP5Ft3oosnb%2FHcfanCoFscRmtbYE%2BEX8zjk1cmzPczkpHG0RWEcfXoCK2HSUBzqGUqd9pTiBY1U23TFJPSfXFCfe%2B5muh7s8tP%2BU3J%2FSwSHsg8g9QDJ%2FE3ofopWfFzt1GMgvxRAOIyptN0ofjeVGiV6WD0f2bi%2BTlfsu323QFxI4yqegg2Tcy5MSSOvGJflSopNDeeqTvYsQvKhjXFGecJrRP5VCdHi4IPN%2BI4Ke38LNVL6brUOIJsoyZm4qDcaID14cnvU6sws8jRyQY6pgFxcPs1olkIrc2y2XskzVPdwAHD0ADvJ3HXtIBDoav0qUd8HfSJ1MsRWhBFvwxQ%2Bb3YIrfwTXNONzuvL7XdImKstNprMlxm9uLoYjnAZEuWwyWYcnuP%2BNwhjMYq4Zca7JPxtHAb00BYjV7v9JBvJARmgEAzi35AfGGmZ8%2FByXXpHXRCiJkg3IO3XJ%2BZ9WVOmHNWsVOSAQB7ao7Ll%2BoVsvRx%2B9GS9Ji4&X-Amz-Signature=71d6858afffae08a2d5815d44a4aff03695a2ffc5718f1688465553d8c39ebcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


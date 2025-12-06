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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBBBNU6X%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtxeHtR8VGYECTlw3Sl8TFMj%2FcM8tJ5VcQSU7ySI0L%2BgIgT2PZoJm5AJzw%2FcU6i2rAXPpZWFcJiCE1Mqu37agQzggq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPRubagiS550WA9poyrcAyNw%2Busqcs5yOV3hUVjR079Yt8%2FJoJpcw%2F6iaPhU9Fy1n8uviauvfgLC8sFb6RqFXjQwTh32vF7v6wjgFizm8HwsQuZagjm2sMvJRXiG2D0KkOetbbuZzvfkIwd1KvDn3Gz0L6UXtWcoXX%2Bg7sR9lqnKwK8l6LxsmBk0ZZwQHcAvcDNu6UupxVYZnGFlcqA2kque%2BjmijQ8iSSMKyxENwvfI2nqus2omiZv%2FXS4URs%2FWeqraNVFfpS78pUkG2WuqqZR6FfxswUIhYjFR%2BEdcEVxv%2BCYznPZZr0%2FxSX4yqoLeN9uhkSfIU%2BstyeSArAJX5A%2BpOKAU6gtugGRosq9RJyCuKlXHDS1qrPM1p0Sb48JrLH1EVLkn%2BzC%2BdgHTRxrjg9VlPJ76%2BoKxArooM%2FsSCxxOTbJCB326woF2BueT3DWqOI%2BiWh0vdbZv%2FNWGBsXqlH4xfEyUD6IaCUwkfOeGpQQA%2FfJhsn3kyxkhPplaotkoLUdWMsJ8%2FgLhy6OftPXmDwqE8YbnM6pnHLzt%2Fbay0MddYTCtxAjBMNz%2BNMfs%2FTEZKb8RddVR4Gv8cqnC7H3Tt0%2BCIyfRlwR70JNm07rElq2LwkGDOpyQeKfOJ0LcK%2BlssdI3Rpscp5Iw77sbMIaJ0MkGOqUBdbMMLb1O0riI6h9yaGHOF5X%2FLsL15UbJ3tjXqPH3yEuKeI6uvGnrqD3gLC%2BKNsndVpwl%2FDnbMgOvcDOf%2BECiN1dZmrOs%2FK7xtGsFqoJcm6hhHK3oYaJ5jcMBY8KcWPeNP0ZJjsb%2BOlKwxDiZ%2FiiawaqQyEeM%2BTw3teI1f9aeOoPK6VYOnb%2BAVvV41%2B1WYSfPN6h4mQJ2ArgQCCj7p3e3%2B2tvlOnL&X-Amz-Signature=2c1993cec8bc11b31097d3274f65db24ae05595175aa734411fd5bca5f657fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


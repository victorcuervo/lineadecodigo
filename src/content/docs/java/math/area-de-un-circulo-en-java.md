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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUS4G6QY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDq03lM8kxscdd45P3%2F7PfQu5modhpKcVtCT6zRvlnBAiEA4KpFuZSgndJLp4qZO%2FcnD2gI87cV8lb281dKHMSRmW0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8WmXnugIlMUOvLNSrcAwBBEIb8rE%2BUcPbAwzUt4Qy6iZhJVPVj%2FzHOiqSdPK5xVKetdhNDwOn%2FihpdbtyQzLNGUZEj3WbnWY6Tz1pPbCzcA1Q6lBD4%2B4NIxELLMEKV8rZ64V7eKdwL9AxUt7UTtdrL4Zq%2BsdUOy8xOldNYUoMkdOXcWdwePfKow4H39LM9BRNkLWxeqMhFgeE1nwlVl9PuIeLjAD4WFn3BM4R3PqTuA1ZE5VjCHq4ilGNs0vzZGrd%2BylSvReYcUKVixpPCUqtNjCSeOYp8hIFKVyYswPai0b3PAo1ztH35MakSn3jeMMRlLxGz9SNElq5lKZbFsMppbjN17ETOkbXE7aEQ2dJ0tsVbSyQY8mgHxntwIhHec1BE8YUfG0ff4WJEswM5g%2F97wssujnruLRWhLnHA5cCVnYuFTf4R%2FtJFbRiXHtslqVsFd4B%2F7W%2BKM5du%2Bq2TzmEoZPyj8BmfjTjcJ8n%2FTFiKYwhHhzJ7BLbp3C%2Bn6iBTqsGki2J9P%2FsH9Rl62Tt9DPhZjOP3ttl%2FgBWD7rdzldW8lGGv2ta6O%2Fr63fXf39x9VccVzgvp2BSa%2BjTOgXz2BE7y5fgPQZC3y%2BT9b7p47TBOBvaamH%2B4ANKg0F%2FoWv7GKRBrL7%2Bx7ChoKK%2BaMLia1ckGOqUBSeocwKbKijF3VGIrSuwRQi6zz0RMcL24ZJWSI7SsqE7ehqY4SHhbWREDLe7U2tUtSzYSUS23RipyvVMcRq7QN0hD5BS6zYiRkBZVB0VV1LxRHHBldaVIINnvDaufKmaI7xwgIv0836c386KLCdRvQIABlo2cGSIpZ8Eo0%2FbQ7plx6wOXG%2F53slBWA16I%2Fd23Efuq4Rrk2%2BI4n2Yi1BxieM5rWC4R&X-Amz-Signature=fec32f6e709f2421091bfde8a5cb0be53d7c6750500aab480be068eff4635e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYBWA4TB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy0AGopu4e8DW9h2xiu8byWtdBxafkPeABfWi4UwEXeAIgAaGuauWY8tT4L2Tz%2BYRXL%2BwPfZkmYYPoX0%2FuyvtU1dQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPiwf8fxyyC%2BGkZDSrcAxvF%2BtDL2UQPo4qPe%2FIfhkSt7S51H0BODO56SfHr99pcRurPlNXmEQ%2F7DHtSwZbkurS2KuNaaD9rvWQLguYEpPLqIsBgCFBFYnugb3Jlz%2FN9njYkVnMWtBG%2Bad%2B0jsh7%2BABJr8IUdKSZuy5h3n0JTwr76ucCT0k%2BrFxgXxDBtV5vuVbrEXLB7bk6mevH6bZf6hHyq9XRi4zTD5T8T53HnVJwZVIUL3L%2BcGqaF7nfoPKSiI%2BUcjLvchr45OpNA%2FjpjvydveepgsCEDxFnIadzqWB6xajc6zgBLBfcGUre7vSn8t3sXvd7pYmOALp78fexaQ%2Bo2Eu5TskSPvNwzO1jcIJi0Gjc6TLFvMKhnqwYaubYFwn90o9Ueh%2Bq%2B9NZBGdT54EAd6xg%2FE7H%2Bj%2BDZ%2Fp9Qp3w6utDWZ4Euo8CQZpO%2FiJHVecXh3xrexiKX87TIp3FDFdnA4vE252hImNv6TJ%2FnYORz0ixT3HaeMSduhRICCDOokKtnhnr0PWP8Ywemm5apOgQIjf6oGBzbDAqsHzF5qRogvqwSw68%2BvB%2BL9aW%2BT%2FTIofQLWNRKrPBXdgcD4NGNc98MkqGWv33ZW9qlyv69%2FijnzrP0XVNDtg7OT697xz7fv9DLtwYnfMy9QIOMKua1ckGOqUB1x1slvgLNqPyuQZjIymL8HWHY5tEWbIPwpFLmWcMwYhHgk2U4PBHRRNN2dFqH4fsYkOic7q%2FcLT9kgzt%2BrzcBhuqRkkPAFP1Ii0KHWdpCaVgMTGycohMRvhn%2B7mcMY7zdyur1plFceokcBNNTTHqGPL0gou5Y32KVX3bNbOs8ykUROxYsssG%2Fxm%2FBvsW1sIOqzVJkud0FpUYNodvMDwqIoEMfkPG&X-Amz-Signature=456e0a5d4ecb684b97b8a472eee5fd8312d2e1dca06043ca2847df0f465a40c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


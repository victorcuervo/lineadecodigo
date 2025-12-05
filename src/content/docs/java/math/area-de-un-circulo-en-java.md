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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDMRA2TY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7gayZ%2F%2FriqjyMLMmwP%2FoRRnxJhB%2BNR8WWDlxSvUmcgAiEA%2BOqJpErl0AkKYZ%2FsNh62iYcNpRk7w1IRUdr%2FUPjW3gkq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDB07ffbHqHAXK1%2B1MSrcA5awY9yRMK76oyFFZKNYKmJ5QfBqn%2BzwMu8gTLP3%2F%2F%2BkdsohcRnfGkUOFhLRZ31Ewk4XpW0sAYpg6E4gT3b6N5%2BcmE%2BwGThoRCVGXofJixbZggWpKEzahSS%2B0OjzDsakJnFASZMd0UpmtR768YDheX%2F1twmC9oSADxNU0wH92NX0jDn%2FcmW0%2BJmI6sROu48MssZistJELh%2B0xkdtdLVJi7pm7EkNlRdUaFBgbNIIwbbPOgkOWwlKcnJo5y9ZuSqhkN901EzJL%2Bw2%2B8%2Fa216gUR4KBYNAHPqHMtorbpXDl5TJzUrXVPue5mnxA0lnUTqeJ5i79PD71f%2FkxCVY6M0rseq2uoF%2Bqg4J1lnG3qKjdFMOWRLXnXnT%2BCtGGRRL5syop7sZmsRQLiz2b91zebyzhW1RM6giF9IGykoks9HFhvH86q6ROGEH7K5cUcQxlkQ4kJeqXQlDdGt1cKtZPbQgkRi2wKIZDbNHegvChkaX4msMzCshcjB6zr9jFZs1%2F39%2Bb10VGLTWxsR35%2BKm0E%2BL4T18HhsMJrDnBmF6YEQHDw66%2F1NuRVC5avr5YM3Cx9%2Bq9RUkwXDgmjNbJtT4KE%2FOfwCluStIVBdFHd3hcGuF7bmIe9ckusLOEh1ogYhIMKfty8kGOqUB5GsCKCK%2BmiczX87YwP3I%2Fr0Lrj9Nzc2%2BBOak1iPjdWu6hfYUH7LFS6HTa6zH9g5bCeN3hVchuK7PvH1Yg%2FA%2FFXEZJ5LGZBsfVTGfMhREw4Ta5VCbDJym8t1LLLJUW3Yt4a%2Bnr7fszK4OwpTj4MJGX3fBy7Ebxe7qZMV%2BWXUm%2FAW%2B%2FwlVZstBKJNwlj1QAQVEwkSM0EdRFxQIxaJ5SvxG5%2BStoCuM&X-Amz-Signature=9383eb3e0f4068574e0185d1034c75111e94601d4ad7b9cd24150fa276c1fc64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


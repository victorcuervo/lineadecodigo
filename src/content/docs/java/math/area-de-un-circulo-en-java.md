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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSKW4ZSK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGbnzmzgdfiBn36YxyXojxaEVXh70OmRJIgIB1IA1FaAiEAnG7CvwmL5t78MTZ%2BUR9gljfJHEF539YAa1DRscsyJIYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXGoONl1hQPitxaCCrcA2mKRSCjTWE%2FvCFGGH5qwDhSX1xxoir%2BQLKs%2BI76alD3Qzgl5iHoFPrvUXEki8%2FcmsudEgAVfTJa5EfROkTDu44oOIC%2FqVTNQ5x84orcKEPgbKmQBBAEZvoIm5hm3Y4t8TZe5NLBWmmSXTgk0%2F0n2nnIjw%2FL%2BZZVn3rC0v%2BT0%2B1vtRmSoFfkhaAp%2FQt87kqzhY%2FbfuAJSwKMROs%2F4SH086UMW8v%2B4%2BxXbroNV4pHqs4XHAZTgwTylo2umGHLsAJXVNJNgmhlH1JPiWwKOhG4cYyHtZ1HvMo3hg5d5Uy3s0ntxhq3fzbBrfP8OPxB%2B6xbp1wBJAJBokrY32lI%2FwOq%2BV0eKR7eMa%2BUo1nBLZ4LXhbEUXY56IGVK9UYbnES%2B58phBe2JkTWr%2But9Ao24766WW6wE9EortQT7PL5CJaF2RSi57lOhGDT8WIgar88%2F23FsQrWSIaG65jngdug3iR8LNnLC89A95EcVg8pUUCmBFmCId%2BSgT%2BNvz1R5PmLxzddKD77FvwYfREhGRmODBlr9sMlFURE8eEJ6kdqEJeLRDXoM62TJenEEZDKBsjvHFg%2BYTuCa8XEOW45Od1DOk%2FxIUZIM4%2FAFmSpcQQxXqI7ut2vg%2Bhh0plOObF3%2BhbdMPvs2ckGOqUBzvBg2z7I9nPT0cm%2Bltg7QstltnXNIsJBGGzGsAi7FVN5fICALg2sS7Lgi6y3J40benbSdtVRLSVykM57aVqJrJ4qXJYw8RiAt%2FfP33hyO%2FPZoeVji2t3YFqD4Pa0b4vT3IYS8W0lmm9P%2BXi5yGhU%2Fo7rFmuCf3ztaK8fQM2Cs%2BI65%2BJS4V2u0bBOnaf0%2FFBDsJs5ZAwECYyzdt6apfkru5NgNxWe&X-Amz-Signature=8d557a25668b7124566162043d520cce645244bda261250657bd2ed48c4ffa6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


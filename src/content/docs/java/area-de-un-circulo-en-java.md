---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastupdates: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGLA7SQM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEybOnQvQYj5e9mj7wBPWWMMqUnv6l%2BMWTOP6qEP1jBKAiEAkD1Mi4WWB30fPV9YAG8ANhuFlGn63RJM%2BycQN3tOTv4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEOn%2BxAMzgQMh7zfPircA8UApVgr3E9I1rV%2FxrUSrVeUQScWdU8ktMXtpCXomNA8kox5mEkiOLRHJtI2xddCynNXJADa38%2B%2FxHKX7jjtyX3NSE8wkx%2BOBy5uax2EwZahiFkHT4oaEr9tbdV38Oh6B1grg43dlKrXpikZiNiso0Tsgq883NKO80nrzaBSGNGF7tL%2FMLosUKsXMUR1hE6EHicDzyLGAt%2BLa5BbCjsYMVs4UDxqbbCcgbTWh2powOM0jd0qgFEmzbM49JQVisnnkXOSPbSKj%2FhwtCgLpS3tqelBDO2o49H0elCbpx7%2FGVGk3hH4toGcmkB4HIrsnQ6DyFnhLDS672bHW5jkkt%2BsOE%2FmhDxxYmddNOu47JIq0xKlqAIUAeQxVh2WLcWMHGnvTdi%2BJTlrqgbKPadfLHiyVG7xQCT2m75by59zO8L018ppxgsf8KqD%2FIB5l23FS1YdT9p%2F7Z6d2zWc%2BH7zD7iCvcWiQ7aMQ%2FGQdGInMLL9JhQHPAYQFJZ9YuqXwXdhjKWjVk5K0XdW2T8vFaV%2FJRGSwZnQKpShUHiWPmxgfgk37lBK4f2zwIPotLHQSVA9YYTQzTH8hhFGzpqXzjoe5cSJTHd%2FDvGNvRlhmrA%2B%2F48%2FS35mdnDXlJw%2FFrfgo9NSMIrcwskGOqUBrDkHSPY06J2ZHI%2F7xc%2BGWRYw5YqJZNPws137HIw%2BhLapILSkgdcs2GHVbyaxO3WIQt64Bado5ULal5x21Gtg9BtMJH96AhZEZ8GxPySdtDHHGV0B8xBaLNv8zMligFGXGT5id2o22i7WRPs0pyo5dgcWyPb1Up8Q8%2BFQLutJKREYjKx7ujxO4e4rtT7BWZUY0g3zwlfJsHGTkO0Udsp9L3mkocrh&X-Amz-Signature=3b976896ff2a3a5436b80b9637e6768b0a7a13b26b2faa460d0e66f573257e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


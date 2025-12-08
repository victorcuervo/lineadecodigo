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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GCR4ON3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd1K%2FcfMd05LhbRSA0Kt9tZf%2F9vBpLYbvE48ToEG8i4AIgW%2FfxzyrNbQ9Ij8WFWN9t881DUPkn5yLadfcYf945FBQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOMHkSSeb04XT036CrcA8pg1cxK7GD%2FWcppBkuGNCybQkZY%2FWx2PpgAx9uS%2FnY4K1eGz0OfdF4AD5KeRsve09NJLQ0MOEB%2FUSpQaDSm5wXkmT6TZQEqLxYq8X8k6u8nUHDMOz4ZUZmtVIAskGAmT5JJYpTaU4RJslf8psbvwpazmKY48qNRIY00FAl2E9wI%2Be04mo0K20zasGN%2Fgw%2BUs5sLpI3sD9kZee2vmOl9HVAV0xMognP3yHSC25sp3zThIx2kGv03aOdx37Cy2T%2Fncn4SxeACcQ8vLnl6aNpJudiB3OMihb%2FTFdXk5QBinHn5nBXXcGHiWf6nCS4LxXR20WECNf8QyV1Q8lT77qF2CLOu6Ej1uJvoCrPhyJkTOnJiDJdSUH5L5JX5RdoHlMRG652Fm69krYRMmKe9Tk5gbiRHQAaL8I9nTWkGtPg%2BR3h%2FLHh2GDgxNe0fkTQbBweyCeLmuuJ%2FUWDJ5n%2B%2BRYDMOBDQUBiRemaQM9gyQ%2FqXCHH39L15EZvGxSA1oSVelaKtoJxQQ2bo4e4OhoYwucm7nD2qr4%2BSwDmUAvOtHlccVHrmiL%2B%2FOc2mAlvnSnCzV0XLSH6Mc4B%2FcNBGS%2B93HGCrSmr6cCdYKG1RBmn7LJkmHsHV7vizYZdQy6tLAvZxML7c3MkGOqUBOTAkEsuHTUNSaD%2BwKPaCEDJLIMLccGVPVlr9BBc%2Bxm%2BLfI09unRwVxCNMGr3JVU5ofNtAMHpI8rmWX8n9EhcwAv8AWC2btnVrqRNROJPrV9bPB51Vbwx8Xv1wq6oKB%2Fu5EqXExJixE9nZU921CFH0oNj5kpOFOAIeRhVDdfE2mruejDve18NhggkwYoGBAsDIy5mlTvI0TF%2F4dGo%2FD4FHqKAUpRV&X-Amz-Signature=a46466c3c51e163b2d25dcebb47d9f1180a3321005a1a7f6a2c9d83048adc195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


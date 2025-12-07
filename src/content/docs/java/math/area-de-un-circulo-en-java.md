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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EH4H75T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjY7BNO0t%2B5Eu2%2FSuzosvPat4xuIGcI%2F4H6w1hxJKMYgIhAP25gI5mSz1o%2BheIA5AY2HpOjXBRxOOOXE0G8dy9U2FMKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3p3hovsfSxl2MOAgq3ANyl4ellhC63tdoCWP0QG24O0P6HgducuzQ0LeV5RGCPtr982QgY6E26XVyQJ8sccUbf16wqyt2cQThK6rALo7mQ0zIVXZTf8V2VdeMCKxAY6%2FS7bNWuYw8oK15hGZbSN4e3qv85KNMPgmAsmo6%2F%2FtIzl2%2FFgUtZuNzAvajKPGNkJlYcvrzOgzp8eJMfwDPWt4s9htLaI%2BrKWGIOvR3dTO8o3DUt5hi8wrXtVOLP3%2Be9EF9dvlJcClj9jwDXY0nqq41rEhI1KRWw7Tf6Zeez%2F9qzAwzaCW4adyuHaWYS9pHnYk4%2FZ39YM2JqwsBE5bxb%2FNXrDXXSvBuhCt32pzOHIEd2K9olo5sOYguZlCRm7JJsooc4G0etVEwuKiPNRvzIN%2BlGkYP80mPuGk5mw0XGvNpq6AAgHX2ZPibwuSvFEu2GKAcflSJqC3ICFURUh4WTC20BcGTiCv9q%2BrjzzzUck%2FPaxFXr8Rj2euBNT36BrRx8mtfoxecDAoZOI9BTy2nAnG7O8j2vFNREDgKtHCkcZMIHO4%2BW648YcL7WNwM%2F0jmrQx88RGuW%2FNrlBlXktQXiSKMJvhBSsFCIFXLro4sGBFO6ZSPxpgrtQ4Gpt7sxQ5ETgZ5Qn1ULHEyqJREazCLmtXJBjqkAZ4zB%2FdUlwRYKYYmCAx1JolLEbqV%2FEJpULmDsUy8z%2FXMABZ4clg61PEED9uvLsiLv0FoPAEnMyzskHqyl4bxHD69rMiTJAJuHyuDJhwNl9oI7JQI0kXzum5EHTGHv2OE9jlrt7S4IJW%2ByZP5QFKud8w%2BKGF9Sd9764V0ri4e3hCOg3eYsrK2jdQilYd08pPTSdU855eGpw8KFjqVzq5NuwgVSajI&X-Amz-Signature=d859dd48f4b580b092c687b48c89fe1d1a698b8a672e4a32f5aabc8a32b6e91c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


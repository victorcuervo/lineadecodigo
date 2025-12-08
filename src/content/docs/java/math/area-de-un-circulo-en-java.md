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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEST6EGX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDunJ%2FgHneIynm%2FVV%2FWYvEtMACtqi29bMNiR38wRj3FfAiB293r1l2ADyxQZmoQkfCYF3hJoTnOXShImsAFeu8LMsyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXInTk0i4HW9G4xSqKtwDuyg0z7l2aeFHa5Jr5pgTjU6d4j8CMjDVkhCO4ydAt3iv3DobobUOgCoVCR1RK%2F6FmGHCfiNX%2FOyZdwQrqPApDD9UKU%2FQeGEB6dDrSvoC6jDsRLuc3UXmCdEISXHoogBd52K91mjlkriT1vyAITCcmYKGiMYgf5ZE6NPu7HehdkwEiK4fC5upJXyQ%2F%2BJzI%2FQfV99y7KA5JaIsiraL2kJ%2FmE3dx6hy88S4zN6m%2B8IGN00GxmzG1QoXaWO2OwQva59sfrZaQwQaAG6k4CVUDGTlE2A9ZLDfNOINWBynlqByFF1Fuh7f8Ij7fXVWtNEXlhmFenVYzuxfBQwVB7IZKLGNFl4zXzHq39w5y5UvC09IqhjFbw7xFDikn3MS8uTKp79RMQchWKTuEnydo9NU4WMOz2SNzfn%2FWqQQr8W4jiG8Atmcs%2FszHZyQPEYr%2Fo2vqDXF4Mw0n%2BWA6bp3O5H%2BAJ5FylR5cDohP7C4u7wiZnyTGIDnl9Q%2FOq3m7WTpB%2BdpsHXt%2BkOcNKgyPOsq3v8s6dRGCgukm4q9AffQqtGb5RVaCTBg9Bs64Dnc7EEKdiJWt7MvyooiBzuQCszaZR3KzW4E344SJRJ9L9U1%2F6B%2BC9MTTJKUNxBDxb82UN2FMBYw%2FLPcyQY6pgGP65d6tVFJQ0wXzo2gn2nW7k5gBAc7ecfALdBIlnBxmVNu6qn1JNTUriPg8%2B8Pt4b0AFGse1EFasSSJ36aw1dAZZkftlk2Nu%2BIhiHiBZt23CNS%2F8qjCUWCGZWekY%2BzCaMt0U31UKEPVESunfhV99GEBlRL9CMvozjNVcfLvak9EGT1sgV6tjgDY67pq%2Bt1FpxCsi682tTQCajkA%2FZeW7%2FMKdXYuRXz&X-Amz-Signature=8c48aad97106d53add224ea8368c73af1cc9efef92f147a308b3d47c2c362c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


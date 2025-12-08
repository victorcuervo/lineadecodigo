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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJM2MKTE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpvCr761FpqDt2ljglaBuw9Qt0bk2qW5BCTPCNCmHQdAiEApTjpx8Yr3zHn8S0iNkWTSUiGkNIB4AhV%2Bm3KL3kRHlQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI9Auu2PsirKNe%2F2LCrcA9qcHP1kY6fx7r8A2oieD8c52iV6OpbvrVYvUCuUyODSBWBdOWPjKKrLUEG9QFHtOGjfAovtJXkrlI%2Bg6tdFSzVRxPmoWiw3t%2BoPWV2gqtKyjtP9kqtEt9IsAQRCq435YzISB9Kgvhk0RMfHgRddyjXjn8qneh%2Fii1TQKBEwmvnzkGEzwSFxckkYCoiZPcEwsLVkl8hB6K0psX5tM1BR42apHfhQRIrHYaZCqolYi8YFWQ7DvFTPteZei1iLeZms%2Bhez4EAMOuC1cCXX54sqrTL9kRNVGITG2%2B0kzKC4U8l36aqqMSbGFxrkFYlU%2FwMyvf8FmrOIKTiOrUoDo0Z6Qb0jp5HTyPPUWVhI8jyzuXzlcB4ZLYKzG8F0dYM%2FghajSXSzwQ%2FoS1vteK8Uzv4hWOFGSHjjuuCpvkTzmsB1omcOkLf0wHoN2sgye50XzXRKtjj6132U4fL9YUZGuDgnFF57Rg5Za%2Bl74KWq%2FuXt5Z%2BXas%2BhzAQ8iTCumDWYkalt5RYJvKLtQI9Rm1tUL3dnjqAkNxkTs3l1E2kveL4H1Q2wSFz%2F3NjCJpqCUcKUceo5oqtC%2FQ8flR8qOAUOHluXFHnvxVp56ujw%2B5Yj4Q3bKTwXrStPZUU41N8vwTzaMJih2MkGOqUBQL6zPo%2BP3QlO%2FPDyx9jlrNPk3T9KA9COXZiGBm0wH6Q9miemXHfmjasbgyTYKRfFanePDsuQyuGYQC5cRi5Ibu40X5RjruVmRQRDUty6fFuSDlcxtQM6q32w825RUt3TScaaR4K5J7W4LMfg2cO18K8joDjQJvQdvUGaVfgf8vYHpVL%2F%2FeYFiAe%2F6Aw3%2B5XOzQAA35rjPNto7PMg0Cwr%2Frb5KPcA&X-Amz-Signature=a65be2a8d71abf808f9f39f8efe50be5918cef83eda772b7bb156567ac26525d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


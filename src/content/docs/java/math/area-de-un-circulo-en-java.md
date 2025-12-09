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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQE2OGK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR9y1LevUokisaeEUcHnFy0jIVNssyrp9CeUf02s%2FpyAiEAl8XpNVtTrE%2BtJBPW0xi8Iz3HK4sBtpdPsigW%2FcTkzjEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdwXMNoiGiwuUGyeyrcA62r56wgpUAIxu0IFy8XfKAg1xoc6Ztct0ornmq7ubNkBtLUkb8HysB%2BWalYUNMmPCneRO0Lrwql5k3UhDMBCc0kExv0Cq9w585C3zwd4%2F1NvjTdMJqhGcebg%2BY9ntny2Ef2NJ4%2FP4coFjqp6KJgbf7bqGSnkm2fhVNaZIStxqWHP4rbKIoR2z1ZKNSHhJ9FPOkQORS%2FwOGkhIMqLBNF%2B38gTLV%2Bb%2Bf%2Fvr4gcqCDTOQb9pRmEGjUPZpiUfjuy9qJUCJTtYoJ4gTAtd3E3D85hH8tIVMy1TVUmL%2B5soHDSFXCw3bpwWjBPqcKYofu7pjlEBZhZwJrKkOQoLoTlT0CCegtoBL1JGg%2BeW4nwlDoR%2FXbRzsD7BcGlZtwaUS%2F2AOoxzI%2B2YAd9Gv8DDljqzd4mmQQSwFEMK00FzIqa%2FGguWRVk8ct5nyGy%2Fr5CqdTWyRDVFnkpCnRG3wD49VRCvpDQq5eC46l0SvkB1siLYG2mhhPWPZB4Kdv5C%2FvCDmvK%2BYq0l2aqPirqllv3jXKEE4WqeRd66x0cX3GBUc7ZrL2A3hB29jDDqe8bN%2BhBiLlpdnsdNcYrF0C3JBihS6t5y%2Ffejn37mm%2Fm41XuwCWrtxPUfBgxBPjvZ%2FCW9eVxvI3MKzl3skGOqUBu5MICybhR0y4Kg70BR%2F3i53LwfYUwxMtnK8dysDOtCrb5fi3UY31INpwUhOG1BYMtmWEomWNV%2FwumtwcV2XEIRw42jboXKepHEzveXPKwVJrY9qeFUQug1%2BQ%2FRd%2Feum%2F%2BmGvU18Z7B6%2F%2BARC%2B0PPe4OoW8jukQmUWe%2FaWYnkicn49IxiHbx3OcpQS3ysokygzMeTidjSzjRctCdBgnxQ8WlgM4OT&X-Amz-Signature=9b1c3315191405745b0e57abb70860c1449b3cd5ad0f05ea6f739f26576455a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


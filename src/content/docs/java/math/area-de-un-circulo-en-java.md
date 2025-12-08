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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7UFGMU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf%2Fk6czBt0qWG8AgWMqweuTvshrIgmO%2BMZAnhLAhmQpAIgePYi6eiITb0D5inFixAshz0%2FBBGTAckwvXRBnQw6oO4qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGio6Ej4IxUoCN7gSrcAxeLu2%2FetE2kGuRyPhC2cJ0sdOkIOWKvLuQEThiWsNebq9wQrUym87077%2By1tHeJBmJAUqKMdhBmvTa6LUWMOx%2BgjNt%2Fw0aG0uoBVJdw9oJi%2FjMVV5xxwrIxh5R%2FJcRBUv0V%2FzJIBWnwr2OOzoMk%2FSs9HAiy9SS8yXzzRyINHgLhrneqpD3az%2FA%2F9h0cL53KAQNiLwALc47KCDk2WX0ldlPhc3yhLRAc21lWHL7TrA5Y8L4CJ0sYtVxfT7Ck%2BaYZlz28BRg9iNnd8yUJQPBMaQqpx%2FAD6U6ie9HLCXaqKy0d8r2Sf4o1JuhZohQZrqQDUu%2FLI%2FbssCKXGH%2FSe9MIy2fW6NFDsb5tW8rv%2FUWUWWjdG5k2IxpyJiTZ%2F0nf2BfsTnCfvDoC61YJYnASEfMy63aoYEho8hc0tJ3%2B%2B04eKYXCOoroIyjmzLeY54f4lKLn4r5GMVMHTODypJSN%2F9UQHLtGkLDMirXl0bvSO%2B2SVvFYQyfQJuLGzAjZuyQhy355iH3BKtsXGCfGe4q35UU7TR7b1P7ruZYVoafVbKfAgecgMoBmSI9b2tMfp6sUtfrCoEibIvBDCT02I3WQ%2F5Wp9iOLZywXWyK3OlfO72GOgCXQLTGfjgykPhpbrmLXMLfQ2ckGOqUBgaHlFiR6o4iyx7WIcc5WTpnoukT5F%2BsSUXSjH7MDWW145b3nqy3O8WS11h43CzV2mkFB0lglpeXxkEezwPXNevb%2FKhxZ3A9lQxl4R3DaphM3lTFlyKYbi5IsluHxmOO3zXbBfpg0i7VaMlAPM8RE0O4mC%2BY3cOkqXyZngWSVUuOWDwv79m8z2MtS%2B4rJ79FMdjI2IJRiKvMT9zJi9JE%2Bg9PF0RWC&X-Amz-Signature=98e6a875646e2d532d53f1d1d1983bb3df29a4cd0ee41f579df2990d0a203782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


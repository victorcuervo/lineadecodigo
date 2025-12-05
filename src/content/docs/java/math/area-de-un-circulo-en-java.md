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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M4F3UM3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEasbPLAXLcFmB0x6CLp5VSygj5xbmQbU0zcVMMmvmEgAiAsy81AIFY%2Bvn3xL0tWRvyjzpG%2BiYPGNOglCOVHs8YzKir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMY2iB55AvmeakDZWeKtwDS4iTEHTIx954o2%2FF%2FRtyuBsw8wK%2F6%2BR82XPgspJiUlRETnTvFfQ2mAHHmNhJne0z9NSGw1NbAv9D3m57u1K5bvp%2BdAWwEhCzvgkKGMmMHxr2rBQOB40yXVu22gvihDBHhi8jiTBWGcyME5xHLsszPh9epGuqn%2BXwBRhPm%2BzpfxpqKHy2X%2FzJiJBBLZ%2B4aFOSADiq3gDod8nep%2FaZiJOkv0Wxy%2B4gKCjC2dVQ7yHYCTyXkEvOY%2FfXERBWuYSB8pPCHoZ%2Fa6Col5yftB6pIRaDvq5dGPv9PB583kjvHjwkwZPeqQD%2B5Hl%2FShi3f46hyw4MZj6izFRi9bPEC%2BuVk%2FIVS3aPNlYzg%2F7asgwIgLO%2B7lOmZPDiuaB621W22qyxKXyhfUToWXK3MGFXcv7ti7%2BYvIX3zVx%2Bxlajp1xQ7RpL0STbg6SXzJ4pynAFRE6GFP3FnakAwr%2FMxjyJTqYrGfZ%2FSWSNuv7IO6z05Q7X3VueSLulIIhYHVY4I5qzTx3CvNdNbZEOU33EKzSzxaN6Xuu8Qza5Kyp4BhqtVpYQiF7joiXEJ5j9tlcB%2BLSb4UT1oJqY7U162dmK8H%2BT1Sw5vUY6WIDOPlfwZ7lVgdqMgw1%2B5pAzrCMQSoX%2FVqefN%2BUw4NbKyQY6pgF3uoJrH%2FJnE1vENq%2FbZ7xnEdE9wGFFMypNh1Mke4icp5HTY0TlsoZkDgZpG5NfdVfjkJXWU0C5bcbaAwCaogcvlFh49kgeBdYbL%2F2bzYmQ1CqSSPymF0vqL8pzFUtmQ%2F%2BQLGsbmmj4zs8dBC0ViFsuFpQdO6fjwuhwnSEYtN4V90cwWUgQ7wThsoiEUII65hl%2Bhn0bUazVRJ91aK5%2BWLjpLpQ5XZ6O&X-Amz-Signature=cb1a899dbd92f7c62fef5bdda81ea451b89c8b9a687acfdce27efeb887f84916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


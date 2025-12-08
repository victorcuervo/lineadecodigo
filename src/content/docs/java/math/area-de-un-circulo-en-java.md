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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRCHBHIB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGQa4bfOJj4HM4S5gPYM3YCVu2Pwc92BY4gpYPES%2BwtAiA5OW9oPbKfTzRscfATlJBh%2FxQeLdlGKaJ3wpi7OV3JfCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA%2Bxz89%2BhHjZzcGy1KtwDVgKREeAZEOteTYmZb3fsBCxZPyxgusbPyRu%2FjqNTzi%2FgBDYaON1PU86F%2BJx1xF7IoDHlLts2FXLe5KlqvMgiGoSCW5Ym4jjVOMjMM0u82yl4jHGC3kLDIMtZ8fLvkMzUf70H3Ob22CF5f%2Ba3Dbbg74mTDx0KOKmSrz9l3kt3pyV0GvmshhoyIuupv31Ij6LJE9%2BomHSiK%2BxI8P2RMvUCe74EZbb4egUttzpwRzQyNoenE5rVByWArKM%2FnSjBi2Pza2XJ852GSVRybuRvScD%2BOHilLA%2FynzVa4xZICJYAaL0mJru6nfA86MggMHUeGirYCdOhsIVdx5bMN1wDLwByb5mviR9CS7ycT%2FBqfz2pK03WCpYDRAC6UDPDv1Jl77wDrU3SRnLUCZlTvA8RF65a6Xx7FUgy2eLVevtpUAqzCHxrgqiZaG5fKDdGFwBP8XZyz5hRWa%2B456i%2Fo6TYAKN6BN6NGy%2Fc1IZGLe%2BHi2jjP%2Bi97dUs79y3m0ZspU1pZwYcvgrrDJRAFejMWPgWjjZ6v1IzO0CKvyE%2BgN3tPZ4ijlVtuQtY%2By3PVJp5nv1d1rXEdRYULVW5Ygp5Md9jo31YuIKrcyo6Lfe0FKBl4iiwW2mDi3j96GPZUd2QocwwmsLbyQY6pgEJXrsohC4peht%2BeVyDWvXYUvMMIxH5I4AknP8b0YXh0DP6mmoA4neA4WYlRy3UGRnCx9qzrMwa1ocTBffgvuWhT1AFsCB6MIZobtu9uFCQVi9dC3bCNLx4Z4a2I70bfCtWN6E%2FvM%2FUlua7ceCP9kA3hB1JTDPVzwsTFAz1DJuXxsBajDUGz6JtunmJsyMKTY7oVHITZFtsl8YenKh22zY8rLBlZt%2BR&X-Amz-Signature=236e3be670a30d97a64a1d1a17d857c69ff9ba92b7f361253640df7fb7a63b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


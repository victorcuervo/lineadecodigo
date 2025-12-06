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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVGTJFBJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuUlqiIIBtpgqCaThtotrG805QPtFgrnCjH5NvCLEpkAiEAl7yPD%2BPzC9ELQrF%2FZ3BYKT0x6dBpBUvqu7L6Mfm2JVIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDORymrDUFH85I1ZfXyrcA3r%2Fw2AFhkzi0EVfq9AoQ7PcBOC6lvof%2FUnFUZVxDTN4WLvSLUZLa%2F7c0fg9SaWPt6fXk%2BhZUfTcZtE5QHjJPN9%2FY9956X7HMA75Tl6vkACjDfWjX5mRyNY9Jc0cfT9RToyjvZQsgJG66sO0m%2Ff3zfT6Ph5wl2%2BnTGIdFqlEmsIkvird0PyHK2DsOoS7U%2Btu288vUKnNAeFhLZMpbJU8fxbweUSyZWm2V04ZNawE30dwuh6mdCUKGBCDv8gBZvEy9N2cCzf4LjVHPutoM1q0O4BhWSJ3vM1le5aOmsEVX1g1oCRtNK1vnhs1gHZvM6WH4hj3hEk5XZu0Hr9T5b8tthDO9%2FGAejYzTOEuL0tzKK712VUiEwI0Avv%2FFSlODVgX4ns6FLedW1rylPfy3dlvr47ga4F8Dov%2BbS1O9dkNBj4Pzwqak6OeB%2BbyKzpv0pNPo8%2B3qzRYBegPGQJeb7Kj7MzYnYS3don%2BuCx%2ByWe5bw6GEc1aoAHZeP2YFrlGAEwEjTG8WE0Owsxt%2B7mueydw4ZJ1PwznwdxUjP914XsQ%2FjVGrISrUigj7t30euGIWAqTqlgeFh3YIG5uPIiGmvA7LvWmKlTQHyvYI%2FsMLvP5gj3D5yA4JO0ecKZCcGwvMJz9zskGOqUBmNbqQfim8zYejMBima0z8bGN7rbcIqqzbziIvGpfe%2BbS6%2BjD2T7n9zcJY0AQCY0DH05C8TzzQ8ujYT%2F4B0ZRT2FtbPLniBFDWAmYm8dwbH0z22KwpDSQD9qvTXMtKZL8sj9vXaYF4du2U1U5B%2B3KxnXZjn9ZmZEonIJGcki4CJ3PpK4avajE2IkrLsFeua8PS12fiafpWLe%2BDEiVeaBZdgqOBShV&X-Amz-Signature=25b869753ca036635b572ba7cb9a0ddfa00c3c35688da9713dc40ea6f7061fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


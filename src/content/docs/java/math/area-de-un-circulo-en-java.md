---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q6KURX6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDHmKF0P4ha6Voeic9k8l%2BR2QdL5zFodkSfcc3yQUQw%2FAIhAP4p3ln0lFvlii4RrA7LSDEg0EQcnir764BCtvUZMyLIKv8DCEEQABoMNjM3NDIzMTgzODA1Igzlbfxe7c6LxBJH09gq3APPY2XOhnBlQKOiiLuzEWJRtbGAaSRY5gr9THNywSe8ema7CpmLN9OYSOaoyEDF6gI0ZjtCmBVrTLgYxjkxHxMtAlBhkxNl7IALFqE6%2FGBoyOIaC%2FQga4dD00DFz%2FqECwKUR%2F3OjKd9iVokkCyr6FbFw0PfRUtNFVhzRAZKuubDxfwiKAmLJF8xn8h1nNj3E7WQCuNrldJbKrtJ9xS4p6FbHWHC%2BGeGGTvRNx6jeNzL8QLzu19zBDq06gSlDcDE0K056qQrM9bUDabbXt6AbqH23ZG1mE%2F3PzLMfhVxqcTR5pK%2BRQVdCAB9%2BcXTc8BdtumcY9Rhj9JVajJ9Eu0u1SIZTX5tDECBE4LiD4AuQ8zBHDHUs%2FRy7tqED9a13G8UNdPxUKK8nMBgIr4hMGlDWBhAU7hwUGlFY4qTcZtHHFrQpJOjqvbgaVrQVeMp2PY3s2zYjhBR3sx3cDuUBRj9YWeRnV7Ahi873lL4kFI1Tdi8oBHitN2JM1TKy8nJDuwmMqfGsFiTeVAqo0OLz%2FeCGQSr1P4EZGrs2xVPmzOulcSQFR5hylq7bAh6fsZUUD7kczCO%2Ff3h7rWGwTRolquJYVixzoa8WfhYAA2ip5TONLdKqHujOl5QkaN4cTapDzDfh8XJBjqkAVAn07p63%2BujhNRbpe8Lg5tOw06t%2F5PqNlWtzVPM49sOY04htb3i6OTlTqke4fc4YgdcPf2GPtAlGuSL1ctJ1DYJ1NYfMUHe2vGgruCCmSRGlzHtl3hAA57vfh81KrTvOehl1H4BIrKBiC5fXfdW%2F7ZVmkKHkKdxrGcwmcKfKJ5bDdZH0RmAJllje3Tt087FdYHd2ix3zLuDyFDs4Gzx9dNJa86i&X-Amz-Signature=08ac679a0541377a5374b68e664c65e39a1e80109636aa88e49af7461faed4d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


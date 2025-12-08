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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX3G5HAD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkA5uXSlBW96%2FlAGbq1pO9cOcm3eYpFMuvVQCsA%2BSskAIgUZ7d4gxM%2F0QvXtEVr%2B%2Fq9n43We2mCDUY7kuSMNLX%2BQIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgblaMTRC95QiEQMSrcA2Z7i4rQil6sEhYLUsDhIlL%2BR1SY5DVY184IZITCY5W12r4nI5%2FJcYigOTrWzIZ5%2B9vQFg2WOFXw1AOe6NxUIMoKtKxQSPYO9kzC5l%2FIPNtT1AdDac8n3reVjoJGSBXpQEEYkgO7MkG3PK0r1PJW4dMt2%2FKw%2B2ID4rK%2FN6%2B0UECKJTywcsa7W%2Fg8QH3bfxMwQPjZLuRoaW9WpHOiySojnrupg%2FONNa0QrvgAfTKOK5IUnlkGD0bJTlhNUiUKAQ6LHfylMPGsraQ4gSrgvvzYoUkR6yfZZYPzx4g3vZtrd2mPsRYnd74IpEZ%2B8ip6HS3olaT3ihhNLRO2QP384pLt7w7eylkqnh3s7zMLUcRvuM3YiIkwnIa74pc%2F24ESa6rTOjn%2Fy9JjvMFMeXVUfDhoY5qiyWO3%2Fwk94tY5dBhQTlRjYlelIuZC1RKYLgTCxdmgcWF%2FdRo0%2BiP0aOB1Od807nr7C1o8RnWCnGDYVl3b3j%2B8EH3Oqs1TmdTIJQoYU%2BGUqVYcHqIHg9KmsgMnjbaK7NfKcnBLjSVSe4%2BQ01ldIfVPoTwd8EirzZ6HhK4nITn5RoQ4%2Fn7XLll8rRpCi9Bbn5NQFldxFM5HXfhrFqTqpFStRMD0INTYTj4QxPzqMLvt2ckGOqUB8k0Dyw1Fe6Xbbd3adzFoLlnBnjkuv%2B8ucDjREfJ7CZ3pfUnyK2AhVJkU0MgCFmRfjMN8QsAgc9De2Z7nIBMmsLVEp%2BohYmfUS%2FuPCaXp0%2BLRNQpbCHzZS15ZPvLG6SmJOA0GZhkWqyrM5liewbdf9G3TojpjYNa9qJxSfXRrfbNeMhkPC272vi2Q0jlD1l8Fx0Lg9TPiEsw%2BGihIKZsqhXRyn9hE&X-Amz-Signature=04ad1c0da03feb116bef22852b7f57e82b27a148233d1b680bea7afb1a98fa10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


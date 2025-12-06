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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666AIS2Q4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvbxMfuYrbVdL7Ge4RKi5ByZPLsQbA9UEMcqd61Kcz0AiB20ZyMaGVwaWMv6sCAge348GJir%2BSfS2nfrNoacPwvDSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEmGMa0A5J4lwgw8dKtwDpVkToOIvCk5rJuYKvUkOZIK16ec7lpackUkJ7CyDRM7mJhgAFpps8X%2ByKaYy3HRnAwNiCLvsZNYplBtIG2%2B7VCa7YGcaVrxPWkIsBz75VAAYqm72cM1KtuNwxa1M6dskSk8nrUb2iDBkKHqbqKbuXr3o7VvEAdaZoteP5AINKkQ1gqi7dKSL8YSw6XpFPAZ0r%2B1Xon%2BpXOD3GbSbdY5L1Dn6PQSjGRet261C3wHswDLEl7wsg%2Bc%2FFYiNG9fd2cvxssJ2FQSb3N9EtBA0Nksbr%2Fh80aMwTs10oY%2F9KTR0SxysflaccNtKOV6%2BtVVFw65IugKa7NnluVhwpvP7JXdaYKEyWAg3a3vlWl%2B04T4Y%2BLC9ifqe6GLuDsd4VP7abQ0m%2FNhludaHdqOzI1UFCJ9N1gZhVNsI4Ec34NDQWzKU8LkLlHpRSGHk9MmE2Kh6vJGb5UQax8ba7ozNinROtBTDMzJ1j2eiMLNPCC1AB1Bt8jSU2pYNHSyg%2BlJztGDg1W1IqisagStWHYhZzKBDCdYeHYk2fGSKWCGcYSaX%2BkbabceqQveeOM96AZTwzP0gLW8Rc0XgNg5jJqUyz4sN%2FMjqRpz7VMezyIIr%2FV4eKcfFnnicuvqsOSoGVMTVhvMw0v3SyQY6pgF4x1gy3Fu7WTVKLWsmseQRml9mEvpsClvJwdfMD%2FbpPg23ZpRoUMijtH9aPo%2FnFBoQam%2BKB%2B%2FJRuYT%2BkG5Ag363b8fW1nVHjXKFQ4cRI1XToQEx%2FY6XewxZb%2FSiTmLfwxlKObg07mlrwJNuaaJ%2Fm4b4koz1zavBV0h0r5QJxqpBONMMdgSH22J2TyDI0qwwXzhJuezRExnxASftQwsIUSw5Hl0rHQk&X-Amz-Signature=41532fbeaca20c5592038dde4b785e115a7a8b0851234abe299ba7bac879f401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


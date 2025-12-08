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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGED3C4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQiGdRKxjtlY3Y%2FMBpKX6mxeItQ%2F99fU6L2lJ1SHzHmAiBoJOdSAsFHdrUP4nOBq6QIndULIJaPVPuHdYV3QngLACqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWriCPN%2BaQPValNSKtwDIOJXutySlCii8L3QyqrCEiWv25W5zQzYRzOdqhnhgdaBAHrPjucFaPf%2B70y5yokb7vH73M5AtFMZbMtdSMsS6dJIp5hnAJEEMm%2BQI1JVw8h2ECvf6CKznfO0Z2ogz3ry3stz4ZjECmAZsIkzPqHCgRjEX3mQBT426Y%2ByPF5AeaD8%2F7rWZ1iDzWLAzz%2BWU%2BUx1LgXpBew%2F3LlYcPBVsWWBGD7aHunYExMPuyDnFCDbAdrjW0GKMgwKCXGgXgwK9i94raGbZtMCL3VRbBJVn6i%2FOuwWdcHflNUD29nJBKoHzkTwC2Vf9XLWTUpxFANG%2FUx%2FZG3POdtlnPorx1HY%2FCszlU89FinPF8%2BLRMOxeqDr%2B7HjWXaPIdwhm1huLot8835rVJVuzx8h68EwvgG54scnQZ%2F91FCwdaQnLriUiIYGClfyNo79WJOXuhYKDyL7O2z1EZxdpEDiNKVIxxL8fylPz1SpaEkPdVLj%2BIP05hEqtDJXudVGdDSJdat1imlCY%2BjDpeGPfgFiQ9yG2EQ9VpWw2QEArC3yMkHBYaHS5gChzpRnwq6zBkDP3ujLj19YnHt4XxGNuNxAc2fX2SEqt0llYaihLZwjrSBRh8j3xpzkK85j78IiHh7Qcm%2FyNgwt7PcyQY6pgHWXeC%2BUyUbtc69tZ4mERCMV9e0TGcv34itJFM7l4UmxXB3%2BVzvsE0s5xI0i0jpcRyWehKmMDPp2EEVlSqktNzB7l8%2BpSjZW6Xg1y9iQr5E4WxVq6ggvPJQUiOzCrv%2FvciByLHhKm%2B2FN0bL0NKa2FHU42KTrMV4%2FjzSFNZ%2Fc3TAP%2BY%2BHBZzQsKYM0AV%2BCAUFT%2BpvsnVw3dzImjoWLafgAHBnKFAiww&X-Amz-Signature=a20169f3e6f558b6e724d0794c0d5136cf510f54c4fa5959549b933dd0bef772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


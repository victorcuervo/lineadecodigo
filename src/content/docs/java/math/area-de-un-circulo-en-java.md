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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XSDUC34%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwC3zD4L7M2vYOpk3tjPrt%2FJSpsIwp%2F%2F41mLpts2WH%2BAiAfRjmua8sgBoWvcvsKA%2BRN4NatW7IPlTP%2FBhJ4Qf3BYCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMhvJ0iQt1ZODQiDR9KtwDQ0zjbjy8wNoR%2F3BX0kEdNsIzIouAfORmSwaVBDrDiwzMI%2FI%2FuWn229TxU4Mwo2ytFuXVBW2wkVBl9xW9jaV4LtgF4tG615xJj8A4t7gwumE1p1u0gI6sJtr0w1Yhc%2B0%2F5fUPo0CBvKV9eyLo%2BIQLPi2LgJqRJLoqPia7FCxOMosCo02q3IhKz0%2Bee4swSy0aePazdwVtc5l47u%2FZwXJe0Pyivk4rQlK7jyYPTZQxPeg5Pkak0BRosv6w%2BwdaKqjkIKibMok87sB18F3MFFXRrXcg8rxPp68UB7%2F%2BqmNUAMUUMlie7Jj5YpdW6g2R6elFE1WqOvlKF%2FDQ%2FFzz6g7fjdvMn0OQ9igZdJLljpgYtEXYawNtZ3MPBulIywlhOEZp%2FqjkbJjyJ53lCti7lV7Td40lHIBtaaNU0ba%2BRqH4blZRGDDu7eWm6Q8DXpadpLWmIPY3tZu%2B3pCH4mSwRX3qHD7eL%2FX1sNX4y3Hh5J1ATPvxURoGUXhbUN0yvJ9wKN2X4DaP6C6ClqbpHR8E%2BzciJBxVHoYU2O0esczbA%2BClGVx9alcG4waZgPspNZd1RMm1aRXJVgmKG5Fkjh1IeMhNYEhYTF2NDcZnqWyhhhmiamUWZwUiXsxzMywso%2F4w%2FebLyQY6pgFPsySvpstFC3fAyyigCs%2FhgtKWKMm7q%2B4lHjf4%2BcFp9T%2F0DSwLtKpnFHxJz%2F1kA45RAiG82Kx29A7dRAQ9C%2F0ql8hEss%2B3BHW0tDTIDmQwSMzfjBEFS51%2BLeP0HP%2F4Xn8a0%2BD8%2Fot5ahhXlTKlkRy5vHOErOBEvpOo%2F3iglUTk%2BkIQq2u%2BsVN6iF7n6HZStaUIwjpiaYmZnGw7Gk%2BVkNAS92Niganp&X-Amz-Signature=fb85b6de057b5ae0b078b38d0e8cb2672d14387c7700755abd440fa9aa052a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


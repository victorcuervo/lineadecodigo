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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662EG4LJL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCidzZdPxM8KcGFnwyXwlgMFe7POJc%2Fi2r4FAJb5tBRAiEA6CRlFigg%2B1uJc%2FcMdKqds0zPdstcQTAyDwuNiUjezAcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJJvErxiweA7cACZjCrcA2MWq31m%2Fac4Fa6rSTyCpmht9iU6acEjNn1HYnye1x4T0emSr6W9G%2FfBxb9skYpXNVtAb3VjwcDvVkl5rnZKXpDq%2Fd5CmfNRLH%2BtKb%2F%2FgcYRH0OZmhxp5Di%2B5eBVoGbo2FMJlFF61cImzCr%2B0OZgGJPudPtzUkJZ0%2FepqoHj2Mz18uet6%2Fi%2FXDJDAfnbog0Xr9Gs0ejxeSNuJs9HNLBlDc2lDlDkw7rcjb6%2FBv1QpkR%2BbR52OURNgzQU2XdowffDENe7fXBHNUFWaVEEcmPPDPHrzufhawC7RA%2FcjjBJ%2FE0sYvNVTlP%2FLOnOOV4swgDlAptpcoayTGedTq9KsUX4ZLnQXrCerMWv%2FkAbm3FwpZEqE8KeE51gRoJpjXJL6MoeGGKc0ZYDsRn%2BSqGMxlhFAzTGnPaIZdd3Jkanl9%2B9TUVOLbKAc6xOCiRcdbKF63b%2BfIbL%2F2qpeE79MmPT39vypTVEahs1pUmmh%2FoyA0aeXTlnJlOWypVfiEiJh7IqSUMSpn5tqpSO5v4DVlH4Au2VaUY5A9NaBNVLLGwTe7vkTceRdmy9xm1g37G8Uh4HwFCTsJKX%2FaUU4TGEo788fyGPwjRD0V69hCK%2FjDVFXCOp3WFyiW0sdlDh2XGTSq%2FvMJbL0ckGOqUB1g9c2v861kZ5SDRrwJmhYXd71AyUgmTCm9%2FrZ3oVrKD4dBE7r306cPHJuPzS6Seg%2BRAJP4DExe8uUKdvW6lZvVrOc8cujZYyoa%2FP1Wi7Vs9moImcmMZ545wb9mcs5iKx6UI3AR5LleJBmVlb0g22vwR8dRp9XbfNlIoUZgBZPtPce6Y%2FxJoUm0Bp6gSJfY6k188kmGgV24OFxrHPO0abyz7RCbKO&X-Amz-Signature=b135becf3d9470b59d9ba1333bde43d3a838bdf3ca6e8daeb7111f8bdae01358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE47UMN3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSvCuM%2Bz4Huf2G5LAtumhlhOKGa1VKXVJxA2Ljlg%2FqzAiEAsFdDpQRzeVXynex7%2FW14NbtYfLn1IA5tUDfuZ5oIT7kq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDN2rPgYEnE907qwOTircAy0t6xgjkC%2BMJyGKQj3oLKxeqZ%2FuXnHRzaReBOuiyd%2BzYMe6xECeUReHer1Wfde8Haxl%2FhK0zRgBRp4RnTC2sWM2AN91hmtuouoxnB5JP53YiCA%2F15NngNCjlBbfb0DEJre%2Bjr9%2F4vxfDV0PefKvTi%2FRbjkaxrEHTubfQEP%2FKN%2FW9luLnGaxQ1l0McS0iu%2FedKlVttll5FsWM1ouT1vSNnt%2FF5Jr9VzGrGLI6%2FxIlrH2RZiBnP990wKc%2BJQFNuiu9B87UoiWH%2BnPGc%2BgxmGh3Q1g%2FmBlSIO33KQTwriof9u9U6MKAivYCj0%2FnLgUfhyMk5mP3gqp9fWMVBkcgaLkipP8W5N8X52BdYDk3fM%2BNB7w2oitE03GoW43EYi%2BnFT8blnQb6hycESb9IAMfpe%2F%2BWOwqxIs1I49Bq%2Fkuwu3PMBHw1OlCV08xFlNGdcwigAeOdamDZhQDQOXa%2BQpL80bNI8HRghxyf%2BWT64UrkNzbYU0KFM8y0bNrfzrsm4Y%2FF%2BPlOhnHS8Wqmq3D7ZkKx5cejNtwGyNEpx9tbwKEPK%2BuxOouOXeUUAeWHHnO%2BVluGfpq1WrDZaH%2BhenkIdJelhG0Ux5adWpl5i1TxEyhpPl5nOBA6bGLOYbOY%2B6xPAMMK%2BLzckGOqUBIE9k6vxSkfPfQNi0Y%2F%2F%2BnxO7wuM6VAymvH3IYI4b%2BNNmSwCs3lJ2N1BLMIEAqeitnmb95gd%2FSOuhMbkLTTjuDzsLIyXcYihTnQYLckx7A%2Fs70ljxKSflSNQF92OqdKuxrqCS9Uwv49Q5YFaVSTXCtsPL3arhEwv6LYIqbwGx1Qh9gCPFF8fFdv%2FAJpmSE79nxluQCyRaDiQSnzjtwuVXlE84hGrx&X-Amz-Signature=e8067ba27272810006a7fddd21b54bc0c5b51db92837e944d364f248a769a103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


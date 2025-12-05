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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOJBHDTF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdOxaNTAmaGCBVVrd3G%2FgpQMjC6kF6T1raVeHX0hni2AIhANaX789iC00zrSsoIkuSoql1QH6liLjPwKjKn6RJKllwKv8DCGYQABoMNjM3NDIzMTgzODA1IgzUUs%2FYV1d5Zh8%2BwjEq3AMlaByNZVjJHHmNEbpwNEswwvrgszVvKdpj90%2B0dovSUq3mAnq9y%2FAn%2BYhM0AVcSSWAxCeC%2B3az1k1YPZbCv4xVfRG5Y9VMXPoAnVx0t3hpRUMo6Hz0AYdsvWIH3yKYiGAytKvu6sezhizbVA72VkJ5%2Fc%2BAdMj33uPPnDO%2F7%2Fiz48P4R%2FIXtJM5pP0MxrJCU3ZkCjI3Fr1cGFpT9nE79NwMGK1QxBhocZGh6mAz%2BZVkLf8jLXuqfo0jLLyCKj3Sb3liOVkbtKvUJPgvAGHZ%2BWO2Ekq09EFk%2BNAjTdwEOQPkRJjXBThLZiDLQ58xbTh6nUFZASRuCzs%2BJKnxyfJu%2BNkT39n7zjsTDezGplqOuc7QqNJutmf7ZiFDnc5V097CD8KPFpo57%2FdZnPNsDaMC22eHpz4sXe0oCvaUjXwi9acg4M9kMtrIsG%2BJFtFvQl2T2NQde2obfHVjDeAtGroSc9I4du%2FGSWiF%2FCtdFcMP2I0u%2B%2Fb%2F1S4OH%2BS8pAtfOtcP2iCDNO4MKGNm5HoXkGkLreAHCt7CM9NqEcna%2B7EDWoxZdM3X2y1F4Z9tidd80S3POegIglcv2NVAnRwLqaDBrz3ASRXDA13YcfbYRB7cA6fiNIImSgHSA5oPzQNTVzDVjc3JBjqkAad4WwcSr2i%2Fw8ilaqfH%2FCERZ3Utq15g2B4gOzXum3bPB%2ByAlcTnj48kRCe36ZR3bDY%2BzW3FDOJSM1LtmeG%2FeTyo%2FJ%2F23QLyMGGHf9QKZ%2F6I7oL5pOirxSHlygBnDqIwqp6AFxamI1nxMGcEyfCXLNa8wcH8h0OSHqmFUJoUsK3zY468wxBwRaXJS7Ov75EVw%2BRa7q5gzDSw2PDnu0yMZX9f58ah&X-Amz-Signature=85902984d1ad9c9dbf37140b62e9035e0897c71d0a9f9e3927b71eb5e4370523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


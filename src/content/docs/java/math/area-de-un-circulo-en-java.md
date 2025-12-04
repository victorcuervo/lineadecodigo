---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPKDB7WN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T110959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIC%2FurxiNc6gUa3MkxVkqxjVi3xJMgyO5tmhsiiPjsfXnAiEA54L3ViKz9yJyKMNRnrPMCxo7%2Ft67ALnOFJ2FMuIWT1Eq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDP%2FY0HiA6yFbfCx9YyrcA8fhhmLWUtuCQe0xkngwxthrZazLEYjx48iKsP40I7Wqk8qF2JkLkjsHmBreuW%2BiU7lbGqKb086MPPu%2BmIjWCJA8o3oRvX8Kt%2FBCR%2FpjkeqYUev%2BsIcEKi4qs4w24MwLmOd7qvT6Q6y1NSb201OsjYeBPohxh2kzjo24bL%2BMJ8ktMIqdaDytpVndjYKKePqvtSa6W1SyATybtD0ETDNjoVY60pS6CKAUSi%2Fjw1yFZvlhPqPQyDZptc5pdfsyMQqXjkFO8aRUTsUaxf188XGj68MNufKmON8IoxpBPgTgCbxZEfJXOOnVrra13kztfBMGONiZslJ4nD%2FzUBTIDCNWsbe0qW2j2dW2B4w04NIRuhyianrObscSvxYmdvYPfNRcqaalv%2FSpkanWG1bx6k7eMCsJh0BeHQBHJVNqVBgsstUdVI7hrPqUJsOjZ%2B5ahfQ4cUMus7sTDzmpylpZqfaSI5UlNMqp1zhQmyn%2F7JNjge19mCMgppF6T%2BRQQNymPihjjHs26tXyU%2F3ArLSyIQOTYJf12FEez8QRy9twKqL4%2BbEHIC9ZeKP6Z0uEdF%2BS39sApDd3xvfEFH4WYzZVmaotUExD94px92aDPziSqOJxxPCKvZxTgTh7MRQ3IycFMOHJxckGOqUBP9IfL%2BrJolALfDXVkr33PN%2FaWxUE8TiA0N8qFboca%2BQh2RL2SQxCd30kG%2FUfb0g9Xl3cKID%2FMeaTpj90xziWXTITqSpFHlbsh28G%2FX0oStL166SC6pPOAGmr5bQPB8VXyoScz9n7Ky6QqwKbvWI8R2b623VM%2Fz%2FlkomD2zL6t9CDWFdxNefOcYrC2kLF5KbIsnRYu0Q%2BgRRxaD5ysIxP0AhvLg82&X-Amz-Signature=63e83406b31b723c915fea8f46873119c5b8983bb2229e2511a8852db590e13a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


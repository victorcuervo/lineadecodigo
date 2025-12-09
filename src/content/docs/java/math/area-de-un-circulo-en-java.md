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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7UYD5P6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7ZTEPlYp1ES7laodTlNC%2B96E%2FtgRv00VSb%2FUAoYmNwAiEAqbSxYWo2S44pKijLFDdKhOFrewyK%2F9HQ53yIOxMKDcoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4YS%2Fg1BD0BhvGB9SrcA%2FF%2B4AJz7%2F2FZbF6ay%2BIShHeMNAzDqRPoZk%2FhPS%2FEIjRKR05pvkWX6Q9xgKCAEjpWh3s11o%2FH0z4mWQy%2F4OmykEryuxiEr%2BboqAkeAjmbb1qzokQVzhlzR3UXPG%2FXcY%2BCVwhFaYGLQvnWT8UhCU048GD3UhTkSgFV2avh6lVc267agb8nMb%2FnI2RQB6nT6PddZlyCv6W6vvh8ji4%2BEOrpg5gwhXHg3j9KU3NQ65WpXtHTZ3PpoqZtYFZr7ajbXcUKTcKgiYTg8E41lgsx4cO1ZvVnuzvLe0m%2FXYVUOEU68alKa%2FqC4PCC6ud0LJPPHZWSwVuAkIjsoS6XtV%2F5r%2FwOQ43JkXsHQB%2BqIMtd9AoTdCL1m6D4SjdrHdOr2bNtb7W7jtQF4qKQm8LhZ55FtdgXPO2l7NEiN62BQvmwrB2isalqy7TWwB03MhcU7R48ebtLt1zjpJNR8rmpMqRDTk5Rb7NJ8xAZRhNyT8Tb6TrCMowoeOVA10YX30suyuvNlOh3%2FXvbilqhGdq7b3xCclkLv8Osrb6MYlMkXAe71aKj%2BJf8ZxLBf9Li4x4bMAHGTzpN0pd9J4eo4ntuq%2BKpO%2FQqO4zUXblgpU6JMG0dJudDSrYpFjHKqqzT8QUOlK%2BML6l38kGOqUB%2BzG%2Fro0fxJ12AVCQfv0BAOiXS3zk8B5H2XeKT6M6Dz9Ee02FI3E%2FeQ8VPgyj3nySHQUEN67uzTFC3PIIQ43YGBgkHcUkF9fl9nQ%2BXr3dS71XzEqT9ofl%2BRZqOmJyAYqjWsDTyU%2FvZvdfa434q%2BeGYsAhCiZas3AIKQz7y%2B479XDUPgt8oJ4F7uQdJrqATg3LJ3jIkp2sxPO51Kc4tDY4LxSpkens&X-Amz-Signature=bf5c8b9e94f3cd310bb043c7b0d0098d8cd23f516af6d6b737b6ff2c1be8be7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


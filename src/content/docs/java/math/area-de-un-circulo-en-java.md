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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MVUSMXH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1C5%2B%2BB%2FdFhZZaPXgmhuSq3bqu66ks9RVNrVtH%2BcGUcAIgOtfKEU0yky8B11pe23%2BKcf92Sfr5hRGBgkUH3lPpUg4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOkw9o%2Bp7Y5%2FGRlqACrcAwlWDqYZ4hXt9dQWaNsTbB%2F2U5KKARsxK4PEpA1f3OuxCsaeHGOdWlUwM3ohJ1WbZn4LXyrDLIqwL0juFNy%2BQAR0qgInsOjQ9aRwUoprHNUIY1XI07WBci71bZ1ftWXO8AFOySKK%2F3HJhR%2FnFrPkCBP1DncV9rFNXhGh7C0ZGiL6YgVbZO5VWL%2BBjDHZngcU0F%2BW3vH%2BLs4HCMbgtOwH%2BS6S3I1kaoAEWFK8P182F9%2BhT0LQ%2FytUpMWJgi2xBs%2F%2Fay5R9sdqCnYLt9cOHA28%2B42YsH4QEUAyvKb6syW6%2FJRg4OLHPtqQrXw5d0hqJsrbFUejh6BUqA4uqIAx1b6GXkKIfcW9Rnieo7IIpmQwIlEstUJTm%2BQKm6dkoovDbetpx3vDX1lexygDfR6VrjFWp0JufqZJnLoPPn9ljQSiABF3VSB91cAwdy7IMhHcp0CAArDNd3rZkMnk2%2BMggBTYe5%2BINnBFW6J%2FNaK8l24noYDn%2FUyKxU8g5Rv5AnXW7xf59e29UFy5hIR32BAMBdLdkW0jkwLgcjJ6rI64m9cfQFE31VTSBNjgkCdI1j8jVklGW0ZWOU%2FCRdN%2BxHQv%2FI3GgRdO5%2FDj17%2BVWIJRJ91d%2FPmwrbFIe1GgIph1Hm6JMJf4y8kGOqUB34XM7SXYc6v0gPA0cotHpqFgjyrvL%2BAcbqmAnompFXnO1KYu0QBja7kIODLrkcePXQDBN%2FBZS7wjcGoXJvshnv4hbV1vedcC1SdWqxRE5FStHPH015EBXFz9D2E%2F7FUrIj82u3MaIqJFv6UGmGUE5ECrQzj2NfKVuGYe5TBbjpF%2Fjq90MM%2F93rxvo%2BZ1m%2FU%2Ba%2FSwObfD5HjbSn%2BkF0LtrNv7KfHg&X-Amz-Signature=b99120bb960088a1575bcfa4194eb0b82e5e2141d9ed756a379765814c7ec118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


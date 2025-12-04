---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466745PLFVO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIEm55K%2FiSxJN%2BetaCkVPiT8ry8Se4Ns0i0PZB9cP1AtRAiBqX5yG65eEtoZVnOl%2FqbS4Bq9DnUxOx4efE7zgtw8LEir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM6u1QFMYDMiu9oEeqKtwDqTxIUeNmeng%2BOCfdYwZp%2BKqvCsUFA8PcF2XTtgYJpMTvKrEjCfun%2BtsUM6oldob9KPxdEWoE3mJ8ZHX9mBjZ%2F4EupBOv%2FxO3SXRTT9jrIKcZxpf5QhrI290rtVM6W%2B6V1dJm%2FoTGXZAV8FB0e4Tui68323Ya5RNjl8Y2mMercUF6rad%2FODorbnyvS5tumyuxVnH6gWN3OeIAu7%2B0wBCMXDPKdN0krkBHJac3AAs5joDClS0hb96pHESzXv0I64h4HS3JCokzfYBeZxOrnEZu4dLtdGhjrhp00CdIZUVR4W%2FU1Iu4191HAomkCZvuRyNOo2Cpeq4PbA%2BMkdI0kszdVMBLoTluebX645l7tLVYbEfhyMzaelQ%2FFmMdT%2BLW1fIf3BCI6iGYgsavlzQXwhUtsJQOvW0G2anSfxJ4wWf8oBSAHChgp8N5zAJKcTJbd54I%2Fu4JUOGZOO%2BL%2BkhaCCG69dGIOGr7EQex1V5RMBO9NEDI496Fu2uSzoLCJhPLbe7MtB7cWYcCQ49%2BvZap3Uh%2BdjS%2BirOVAkW0zYo4oaM%2FSdZGL%2F3xK1%2FwOnuI7kb%2FMG4mmUaZXgHbhIKTHjuOeEI6IbfEflHnehiEOQLURtNhSPjGW3pNdc9AT2vO3%2FkwiKzFyQY6pgEtMCQg3ihVwmQcwsiknjlf%2FASfl%2FtggQxz9go0zDOyis9Ni1uc367rqw1f%2BwysJ4p2U61MxBg%2BZruPmWj6Cbs9%2BRbLu4jzgQIkP3gKyNvdJlClclBZPGKpuM5Y%2FXlDHuNIk4j9iSATj7Gbeml401%2F0%2FzO486pxGAso8K5lFrgOa6q0iHSiCUWWI8l%2FI0kNwym5xcHk9Mwxw8f16SzOF3N%2FBWZ%2Foq1p&X-Amz-Signature=1e0c416c73b984c2412a66eac66b2ccd528b2bf6297e7decb8f0e9e5bdb99694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


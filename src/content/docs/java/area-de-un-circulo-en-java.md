---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastupdates: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQAN4UF5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFk8Q9OOV9Yl%2Beacnej3Ne8c2uJAZP7OlPEP3YG51o8zAiBav%2FXhdEsqA5JRae3iUP0aFIB5V0KT5%2BQag7QNwUCl%2FSr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM57bOZRgBC%2BkwIlTaKtwDIJT8xsQxPJMHzAfWYjS7lRsbSewajVczV9NpokxyeGVQZAPgEARE11B6ydK9p58E0QQ0v3EIE4BGxAFws2W6irxwtMK5%2Fkdl9Lel1K8lhokcf%2FFLy5Kkk87Kuz%2B%2FnweSvpItEdFTzGmUeEWAqEhiA1eVCkJvxe0FO0c%2FQA1f89uZ9CRe3WRr2nOr7L1OOEDNIaGCsbhoXw9YcGSFXdIwt6ZUabHSyWpxTrkuZZswGZ0YyYlEuR73pD7Cnzrd1i3hjz01%2BNUI9aeRAURHi1VdxSw3byKJECO48fsp0hjTIlq8Om71g%2BFXfc1b5PXFK2wutgF%2FSQ0hLI8lbMvOyKu2nIVsQyl97ovxy4znD2S2%2Fihae1R%2FqIg90%2BNoJrJBjZfrmKcWVAtqxv93f%2BDkIvA2umQUN99G6LoazSiXD93ohKmcx87the7k75BiVLpo89Nn5DaFqg6BsjeGCSMqS2909lh6xdkWXsCa90z468INfLsaFbwVwn%2BAnkB8wNNRtqw%2BUKoE2%2BP6R2wUMYc2%2BXoXChCt%2BZhpt9eijamyte2JO590cZtKWgR7n8w4jLWafyPrFyb7B9urQyfeM7G5nhJ0V%2BcW9BNgaYtFowJJ%2ByHk%2BUd5YHNHQCaJrHBlLbYw%2BL3CyQY6pgHqLiY%2FfSyw849lzxisAPBaf%2F61A9oadcLDBfmCNXlr4ASvNNei%2BCofhgadANqRr3Mb7Ocbbb6VaWgP597%2FqPDT1pJ%2FeG7Vz5mtL8PqqghUCqRc3XjHXcaYUamTK2R2GR1TGpTjnGvjaTetB6CC%2BIT0wmZnEEmbWxTMfiex80J%2BOe447J9mFcmC%2F2vmXfjv5%2FZkTa9xGgkkzodYu3libdzZ4%2BwrOZWj&X-Amz-Signature=829bf73883c3e5a4513e51fae7c743ce56f003d55f84afa3330e8305b5731750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


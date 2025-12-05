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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYCELLLG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwNLQtpZr9zWOd1e1FF6DW1MILS1SWcQOVHOmLeFKB%2FAiBMtyr18xkV8QpGsvBLHSS0rPasaqk%2F73FPznAhQumEkCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMco9LomcNS2oIJ3MZKtwD6J29BWjd1joW3yd6M0bnphq%2FFzjpGpcEfFanhdiPKsnB%2Ft1Bqoy%2BEH83liGRmVpkLs%2ByxmIaLCk0FxXwfzlDn2vJ9n%2FIv5T58ycgG6XDEe3twKh2eifv7Dkapp%2B6HpsVids4vyq6l6EMoZ20xZ%2FH3c24mFZU6cSo5J4e9e0Kq1rNvxnS0MMPo43glrtgrEbo5%2Bxom1FiOqYxutpOf%2FWUs1ZALnWo2F4G3CL6g6uV2ZA9wgWn3ZYqLv4v1%2Bnbid2KAXiGGlE4t5haOLBbLs00ktM%2FUTbxnHJomhkoRTt7J5zygGuzfp%2FxdGR%2BTlZsyrcwWudtNITX1Cd%2BwSFCEGc6dCuqwd4F0SnPvxWn8EOQV6ca%2FHQ3eqxu3wgYaAGeeOL5xCops5sepG%2BRgz%2BGIp5HSdkKUTiKGihTlYR5pp8KvjjspD7ft8MvfCIkyWcW2mWOYHA%2FzIZX9bN9vFtubrC6Wlzmh0BuPrieG3VPu1Jabos4dGlEet7WdMcHYPpH5mfqyPInU7xXz6MrB%2FS3g0IdgKM14wtw4GcZWi9sIAQtu7dj%2FhnjWcVDpBQePpO2LFcARjdnWh%2FFBeCV%2FfuCMvrE9RBmpgV%2FRAefsxkGTmFy7PqQB35KrIBZqmX1Er4wxpPNyQY6pgFIdhJ8VTObvuk1h4FtJC52ZIITlGfgl%2B8VPQAu59odXmg9YnT8BmF7pnSJ3jfsmsJhwjoNCIb90Agp4kRjzqC7s85Ye5ZgGt0DWuHVn6iTBQBlUxUCYtFX%2BAZvubY%2BpTwQDAKVS7QKBq9y7k83bJLRZS1dCusOQcrOU8sxpMZztSYyRc%2FgfnDU8%2BUicrUSAUZovrV%2FvNMrDx1y7GA%2BZpghwSjE3DCT&X-Amz-Signature=21219593713d73e27dd1a736bd454b37bef2bc259a79ce2f5b46bd7374c1c260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


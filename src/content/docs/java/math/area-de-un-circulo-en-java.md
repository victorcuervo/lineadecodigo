---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6QBMYX7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICx3b2m025qRh%2BQLiFSKAKl44EZO0sGj7XgINvWmISQqAiBW4sFHKanOX4Ih8j7sMK3qbjwgCnssefHqxVrdJu5sKyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMsA4%2FQpcdnUX%2BRWcMKtwDQJvUg%2BZMoDcp%2FprGJcq%2FCDfMEQCZdVubw%2FPfplG4vJARdP8%2FsJOd3b3oIacnJqFGMVcYUxRlivjLLGi%2BCDFI71c0KEg3JIfgF26wALlkRG6%2Bv0F%2FA%2BqqbeU6NyvDURlNCFUfynKVf4oDhGMpOHF%2BNu0daP0m1ou3jtJyCZbT6RZ2SYaozcDI8z9StJek60SB3UYO0PJMeDeGQLR7XCNQewsg6Zk7MzKuEBHRTivvRsC%2Fe0NGEmAtYUxb5DmcZoxYdGXhaMWe4uVLiM%2BcOw9iZfbxplEGNXgbuIkklynebiLlF2vfBbEESfuCo%2BIuGT68pLunmVqcEeUC5%2Fi1ijdx%2BJnBx9ODPLpwujmo%2Fb9RTIiucPlUaAvP7qWfNwinRhapwKEvMEVi%2B5zcEQMOuMKJRoRjAwEAOK6W1YCVYw1e84rARCjPRpviOERlyUoYisQ3gFL8n5p2RpJCVzs39NvJ4QbNNxNDgXbaSAuDJ6wXv8%2FyIOSZwBH3%2BVQ58lUrRKTmfdxvy5XXh2tKzIoj8Jz5wpy5CovF5hywcUVonTJeE1DYAclZyCQB%2BZk3UhQzDohuGLYeYHY%2F8PYuauYF%2Bpn%2B4mUTmstsNYyeZc2OVAuKB7xbWCqDRut0MDMq2EgwgPjCyQY6pgFm2F%2FT4pZ3X4SNjyL4%2BBb3LW49UtYKqieo%2FNlbg%2FoSROvvgx0G2KnWsKn%2FyVRCwzvPJHPuIwF9rntorr%2FHU7v5AkqFTkX24zLjwPlRbKNgx3UFOe7cWKNibkEO5XND8pnmsnz0yznhYU%2FtWsfnDdy4suaXm3C31974veeIypGXL5WyT4Tfwa3kiTZjNSLT%2Fr5wOGRW2e%2BgvdoeRG4DKJDjrNISb7ym&X-Amz-Signature=ad9df1939f18b8a2e397da7f5a49c7cb849f57e8090f3cd93032ad263a2ac999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


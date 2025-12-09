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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PVN7JY7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLrfkp7ud0q06bhrtBiBf88ctdh6DJ1WxJDnpnfa0RXAiAn46kXVDK%2B6Mn7p8ohMuAbsUPZVtCdse1Z1NLIN%2F1HdCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ03VcXguYyGx8HuwKtwDLev5OBRD4RUysYcMNpzKkZCOzyX9PotpJ0nCuRmCNjyyVnr7aAO9MrYtFu9eT128BEIYdw4jchyUgbKs0ah4s2jggmRXYTPdKhU0rVSFtvbtpYSz3qL21O2PznWauykTCduor47nUYty4wJBqlspFDLJZVr3SqNJcG3gL2BOHOYNrwglUT85On%2FZQ116kiTz2z72%2BzeQj2kP%2FGaDJv3%2Fx2u7RHMOo1DODMNeNNv2kJMwXHNyIjRcnB6sOGDoYLI6nTckOpcM1Z0dYrbWiRmPiFs3WpueRrZOkuP5hM6%2FiDADMKoTWHZsRNznFjVDhapqYlXIm2ZOHfUMC2mq9uMBT2Djb84cax0A0Gtbuf4gIo8gpYNJFE%2BpNtMV4oIoTEmJWeE8He0uRG44No%2FRCeiZ4SVy6gHe%2BjOLKDqWN8KLiFf63DYj8NolQmwuI6tIpv4rZUdFa7muruFlQx876npkMeJKZBmzR6adcK2nWT5OVK13AEGU3w%2FwgQtUFvkQcY9rbFung9xbHtH6wt4HqqvSB8TftlcE39fA9%2Fut%2FbvUc2ZIDA7bsivc0AHOqVzt%2B1VQKuBage%2Fd3rCUu7EgYmbY3Ypq86rwqcsxW3in1sAwNrmKSCKKr9Tsr2xxmOMwjcTfyQY6pgG3oFzGwdc%2Bo%2Bj%2BfnF6I6FHcF0NEtFs71CWGas9v9nO%2FAPbjUfEfYA%2B1QKWsA8UQH8pTaBg6TmaZPsNmnOpJs4f6pn8Kv3WNenOS0z35rcM4IWCIlPdhwql%2Fw3MLgE1LbLdtZNl1E%2BArYumlPsyTET%2BM9WP82t6dhe4nwnwOqfJEXTi3pkabPZI3o0Ktxs2jlDpfaCYfbN6XuJav2OctuvPp%2BwWiECE&X-Amz-Signature=da9398677fd50a2bb69e9b6cd79d368a6631eb8c440ebe75520c171d8d00cf6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


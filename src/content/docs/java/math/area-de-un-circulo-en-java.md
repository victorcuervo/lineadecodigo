---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQSSVU5J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI5diEk1GV9BvpkcEUBY7pPzNgdmDlwfHzFk%2FI8BrEhAiANHI7JwePdE7qi1%2FUCa4fGYxO7D3C907o45KmxFxjB5Cr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMyte4E3eQP3FHJLvPKtwDPy62q6o4x5yBjU2dxkNV55V4Hd97Wp1kU7osB7ynPjQ0AECwjOa6LVD5vBx9fjIsGKCH4xJ5nXGygfTryJ%2FlgIf6M6n2amNoUiQWmTIUYv1PkkXqmnZrRAdQpn7u4lkp5Ao4eQK3CfI2zkMDUmeAh6bjZMqS5B%2BWFrVidsNpGuNc2qzuS9TLlIX75yD7ULmPU14W0jy8lTb8XjJlvvEju7PJfIwoNV8ednHDLA3qek0LW1dglawDYokJG9jmdprjB%2F9JfrF9Jt2o8rmtETiizpUNWiY6zehgpo0m%2F0TN1rz8CUeBlSMh%2BW0ajbipJ8v78Csc8LzeZ40dZm37kEfLrRGMlNvcBik08NnDTsopu5GtcR8MTeZdEONc%2FJkhUVyf6kh5sjKR45LEpCyw0XII0G3fZaONgi1B5JsoEFPTHCBRTikGKFEakAlEU6eYJ8n%2BqVliYp035imcxIDFj7hAcMxJ2KbH2bIWnefJzhpGmD24L5W6P%2FnQBROcqqgVvEdB8e992bCyurOpb7Np0Zt78QsrlOHIvCyQ8cgAU42ZzsznyLO%2F%2F%2B94Df%2BaIR%2BLFDLRaFoRfpPAGrMivNo0IXW3Cfe0l%2BybdNBKTBfPI8057bY4lBOPnjHRQHg0c9cw7vrGyQY6pgHLG1H7aYIbr153RLjoOAuxoVk9pFPV7wyz527bE4qLqlzADOGvLqs%2BBnOgUYflM0vDx0yE34D97rz1CjpJU5zF3TaV%2Bq2lirDwZZoAvd7qBBkTtkxhvPgl3u1ukduVt%2FcjB19OihDsAiQLLVSCapP6x4%2BWPqHA%2Ff3TFrmpvduN7lDsAZ5uXnYjm6yjEgdwwri9ce9eZw%2F7twpy4RPVCjEKGbJ%2F7t5v&X-Amz-Signature=54d98095ae533214f2b370c5eefe7d297e1eadd4e72309be5c7d2a54a011a718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


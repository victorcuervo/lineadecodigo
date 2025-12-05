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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLSF5ML%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEDWEYuJxLo2sG5xpRqYq7CX%2BZPiqtEXtuCM%2FdeqfBuwIgLLZjaElT8sT8Mxu8t5GT0vAUqDbpuGFElTZBtiN9r4wq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHJe1m2PFbzyXVrZfyrcA5ErSlQk%2F3pbeakPr9jaykZGAedpsP%2FBY%2B3eQcUYUdKDkp4t64G0mpDzyUtKoMiPkdhoMX5ybDkIPg5nsIlsaSd9Lpa8U9g6Rrt1cynVpXM83AsuS48rI1GoGkvg4n5JPKKYbGsDvYVuCKqJtRSDhMUvn3Z%2FxCaTmiVLAdZMVQYOmdb2KqTk5axFaTzCIyN1ZMAJxNC33g5FwgL3y2Mbp4ySudBkrLW%2BbnJMRHAqbfF2SZEbGdVRBrjQsFIuXARQzkRn1EofcE6OdyFqoXe3CNYHIBuPzOsOHarm%2FWsUCH%2B2ZLGnyMwGxvCYpEHXrZQdlPhwFGiWPBqOCVIqvme1V0QGzjQsOdrl3O4YB%2F0DfWBEw3f%2BNe8AA%2F38LuuPWLx7YzFdwqraMvVjD5KM5S8oqrxuUM9x8SAXu%2BtDoTD2s1uuThxm0aRHCxxZ1TZJfBYdofnQV7lX4kuGFAWvBYbJjao74s61II%2BuFcsH4tLnOBD2XhunMYnO28szSjJMnWTup1mlUSiVwUdtjIIPDPk7C7xJkKmEX2pHCN%2BwF0glTFsaiuGY6J7yrM9gb2P07%2FPmxewCBLqdHg45oYjpCVBmuJl06JoWM27d118FZ8YKqd3%2FjVHEjclMRMZcWRUuMOrGyskGOqUBgogQZvFP%2BzOZ8RslZBl9Fitqh%2B%2BcyILdEaU1UCBfLxB08GpsTmSH9QuN4mzjoEc1MdVAxoR%2B0pOLxuVTLkQU%2BwXa1bJUMjmJurliL0IZcTdlPU4%2B1B88flDMTqcCcGBpY%2BnugLd0yW4AuBKENAVi0QoFEJySX5aZAKADyA%2BWbdbiImm8O5zzUEbWIA1Tu%2BNTCPnK%2BdxGX6OtWfm6242mq4H3Konp&X-Amz-Signature=7842a5ac4d4421a8cf8c4c2d9163bcf6ddc61ca5f9332a69699d36c9600bc54d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


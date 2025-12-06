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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK2C5LAL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz4lCMKECMB7Y1B508dBRhdqpZ%2BhxchtSCF9p8mxiX%2FAIhAN%2F4AqRHQaacA9MRGANwXUoV76KTZJBDeNVy%2FcuYHGE0Kv8DCHEQABoMNjM3NDIzMTgzODA1IgwgcNgN3RLJi8cvJJ8q3AMZF3aoIRlahOTYCj9u2N73CfneNOBsV9SlkQDUeo3XG7iw5Kd35Zs3iKULoBS6%2Bn%2BVo1UorU4KmEKi48qJ1KJJwPLxHKftDvXzcu9BhtkLdjzvIPGt6KrUbHhHzZjTMp5yhnA1tnKQ4U80BGh1a5AcodbrnZVhGLQytEj4P8VowgRXjQh3VzW9rcYuK4LnWldP%2BwVlO%2F3GPPv%2BADp1LvqZAtFSoHgUc%2B3DCaCYvt9Dw7oybDhUydyBZ007ZIKpkpt2ekcnToXXXzj4hWUUall6sopuxH46qwK0lPZsS7p44KkS2QlFrpK69iGek%2BSioB9%2B38w5pHEg4v2hUxMqgQiDYnP2sYXjzmwSxo%2FjYbtVOuqgGD6Ko%2B56CJ8eyCiPPF%2BL9S9z1yAlhHghfHqILhXE1lPgqKbwepcZumt1h%2BmxI5BNcJOg%2FwwCyERyXMuCPQQZno4lXuDP1M1Pzr2zlNWtdL9ctLdxsuQM%2B1P6N9uNPab%2FYDZ9oH8xQhJnpriBSFboGVj5kd0I8%2FqHzhoKy3t5NlNyv62zFgcvpSjpbGbacuyjhVsmnfEg8%2BOyoj2As9r%2B%2B6yHkxJQRh7gPeCtf9Sh6rGjJDC7Ujx%2BHZYscfLeAkhY4rFz53Ni%2BKVvazD5vM%2FJBjqkAR6BPtLRClBL41ox55SA6sCQHPKqeQTHkMw8plims5WaXWvmPOG2ySA2ATZG8qlOiRN92MmYTqh31ZjBRjG5oyYVCcUbUkXuHuzPAj2yJ1jZLDgJqkvjxHXBx1z4sifBsx87yCEv0CjiYytg1t7Uc2mRaTquWpjRAZyrSb7C2D74iXH4zcusSkGACSwdq%2F2e23kotY%2FZzbh8lqRivwxkjPDMg2eY&X-Amz-Signature=b3109b8b7bf71fef4d7ff194a106d15738febba4a2033a44f223cfb191970835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


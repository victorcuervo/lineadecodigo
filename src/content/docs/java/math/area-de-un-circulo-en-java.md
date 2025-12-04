---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBH3CWVE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIA4LcnmOiWrs6HJJh1RLozFL%2F%2F5Q5BEGwFwg%2BVSWWdaxAiA5Sw09gY%2F%2FeYJjWxQXDpIq%2BohSXrnnzpHeHxQX0PMymir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMFpXw1xVXYLC9x7eNKtwDDbBMb%2FSQ2GcdZjfzgZiGMVbzm1LkmNxfALSLZlqmop%2FGUnWYqh3jU83GoFXYDMaqn4%2Fk15AqdL3RudvRduzxry6opFgdVyOLi8k%2FDkltq758dlb7r70NEl5v1SKgVJ7eKdAKOMtfqAzXfVDdHafFWDQV27mBORiWT9ABdS3LDlwGEcyAXRKGtXWn3dadokY9Hy%2BeZWAHlcF51OoPjcB%2BUhIx%2FYQDyVP0h1fV6xu6P%2FypI4H%2BRPzf9ueAc6wfKZ4h8%2B89FB%2BudvYQQyaEL2EGSKxKMvf0MbrEGrxrpA3UqqvKFk5MdOUtmBQhJ31nxDRT%2FfKE4TWguukMLG33Yszfpb5X%2BzPQjSaUhakioIW6r24aDC7YgNRIyARS6v2kKtZjFnaDl4xI1FgKs7XrayxKNh22erGJjvmDhF8Vfz4QOgDtydUXuTtJ4e9PMfa4RIHu8GQiuws89SdqPB0l1ltoCH3Cx%2BPVBpBqcoSiVGwijt32mRlatzcIxqYFn4ayE4%2BjuVxMSEZAkbYJ3cxJ90lUAOfCn9%2FU6wTAq93O47sK5v0J%2F%2FYfOYPZ%2FzRdlCRps%2Brc17D189tkCf7u9FP2oArXlBWt%2FZOp8uWFUxWWFnBKuzDRMEo%2FAMkRc3MES1gwuq7EyQY6pgHmFqIEp81bZ2GMByzflL7s6W2%2F2rgixTZHm2xjaYGjDQ2bB46p7UCCDnqFMbGXpn6HeK1Q%2BuecuGQs5730QZnUxgcC4bGEeIiJqyvN%2BBBMD9S5uAopbwmDmnjJHBGRpBLcj3KP1bEkiiRDdlrUJ%2B1kTAd%2BdIUaYAZBnMEUh5lTxCmGGI3yypbqR6ibAf5523gwCKOahE%2BF%2FoRAZQwbsChkDocmcXxY&X-Amz-Signature=ee90b27053f035daffed1005f60bb814d8695a5600c706780a25e24336600170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


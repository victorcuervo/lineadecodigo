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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPUGV6C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDObb%2Fd8uu7%2BFsPfcKZyDYhfcJnC7Z0QKoTsgUWobS4KwIgMZnLbJSUbS7gFhbVBpQXZJccIJl5c5RDqjPbPZsw4C4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDF7HYSCnic0KDdwfZyrcA3j%2FSyW38ASQWBIfROxdt1kZOZqqgQTx4Onm62eQayLr4O0gvuF%2BRw4hWruBqJW9QIUTAr6XbM8sTcbsRmXPSQ2U2ayOw02QyUfCAneP8NbQbxYJb21F94PVtNgZg7x76MfAjiiDGlQMGF9yDEPSO300xr8Ti%2B6513N2GqjUN3XZExuhB3Fh%2Bzv3moQtzyyN50anh9RTDOoSaogJf6vTgPk9EETW9w0j3%2FuXsKYn9TnQYVpIasOsL2FE5SIpolMtD6sd81j7PSshb%2BTC3TJI2Cbws1q4%2BEhRKG8JYuDBTQF%2FS4g%2BdJ72YwFXcBgyGACxOgx6IRrgvwEm0aT9mo7u4eIACLY%2FPTcJzvRNYfX9u5dMdKHFRHInuKUHgAuEwSQi%2BwNkP6x%2F2xp1C7TTay8hPb0d%2Bbr4TitWXdta2M2lEueDHBWpbOTu%2FuIEwBwMTnc8kA%2BpBZtItnDG6NJs%2BaRtxmajbNhE0ZT%2FnCQXtQSV4dKwvgtLc0Pe2URv7uNcm47%2BGvdX%2B3DYDdF3zYfGVciCJma55djRONz%2FHMepkGGbl6xeZer1t3uFOWdF05%2Fu%2BCwUMesWtdeeodYhSr5naga1b5S6wkNwADl%2FQRivOocbyYo2G1j72LxcF3jHwEakMJKMyMkGOqUBEj4Teqmc%2F3zmaeOK7Fj71t2cFKK%2F8js1%2BqLvYlmdOKBjSZ7UHzmd%2FjsU0%2FZb2PF9znyfYQ19DtU6kszh375RAouLAw8jdhqHLIqLcd6JDmi1MnthWqW%2BiVbHY706ZiYv1%2B9SmHrJjnIbB8HK%2F244FxwjegIq%2BBjWTaS3VLmmWAF8oiRVF6pqzDRIRBnw22KcTCgtX7S7ne1I9cUyMw34569QQLGk&X-Amz-Signature=b264e218c1e79dd964469afa2ea49085a00dcffac4baf1d8fea73ab1ba6d08b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


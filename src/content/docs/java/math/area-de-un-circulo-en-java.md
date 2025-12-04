---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CR3YHQR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEX5%2Bqo7N%2B3BuayYZp3nFRcuc99J3hle0ktcn9Mbx3NdAiEApH8NWc9c9WIPQGpitjbla8o5Q5XNAY1bTU9hjY5E1IAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKLuExtOVVEYtdsqwyrcA5PShawBEoAbUdgpK%2FoBsCoj2aUwWK8M4%2BtALq6Rcp9Ax9puRqScF%2FP1BfRA1dqYlpTrV2dWJ1oNxrbGU3HK%2BKLnHx1TRxEAOIgvXZYDmz8PgmiXe7E6%2BKm%2BWjJoekoYacd7O1fbYck45A9SEtmFJi%2FuYQkTuHfPppS%2BsKO4JZS2VWKyu1tkPnr%2BBeRXF%2BfIwfli%2BwST0M5UH048QD0OKw%2FnZS9gi2Eu0jT8iocCxAftlDH6VW9VtjUUlELZyTjjNvkYjq2rbiMuH%2BI5Ngx6u1gz2weuuRij090tHXsgXQnfn%2Fa8RR4kBAdT%2FXlh%2BUHCVD3ds1%2BzVoB7WK%2FZx2m5Ng%2FGiINm%2F1qvy6DSDJcUSG6fkNI0UOFuQuZozcZq3xQPkNfFM2m7YQOSiga6JMdu03b1yOwIoHdy5KYsFNP6yHt9h2q90tF8QKnIlM7pD1PlhdsnpC2K1PDqE0GNfuyEWqxmbjQi8NRLhpvLcVGmV9fFHd7u7jOccU64eJvmIfvDDDmHPCclxaqbZAY2%2FM26py%2F3RWu7kGzxVMlGnW0Ei1V3M25xx6WTJfFqS851Gr1prr5kw3eg1O75S%2Bg3CsV63WfmtDccT%2Bi8bWBhldrBP8J%2Bm078rl5Mdw8pHQFUMImGxckGOqUBR032dVDHC9M60K3GXaR7B6tWnijg8FSGajsh730fZVW7yqPh017EsIK7OZoS5jKqcYaUOi0i2HpkTDYF57z%2FK%2BZqUPiTaI%2Fpdn74PPaNLS0V2isDDb95%2FKwSxHsj6%2FO8rdJi7y7PHA%2Bcrl62jZ8njvci6XIHgl15L0m%2FIL81OASOdD27BlVKXXXmIrKT7HFrpb5%2FA9OA2dunn6uk6idrpJRBUoO1&X-Amz-Signature=242267a4d1166d69a9e557a8aa6f9e4475d45385b86130283c59c775a3cfc4ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQALO2A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIAZRWwxWtRcFIF3%2B2AivRCUwX%2FAiOiPobps5oS4s9BTdAiEAwbnDUBA1wh52vt4U20qD0DkOUY3tn05J4DiGXbvpABwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKT1eCf%2Fk6kYLufCNSrcAzl22RFd0LKGbp3ePdIfOYJQryLfdl4v1ZRBJ%2FjOtTGRbgsZm%2BY6umLHXyTfF0fqbBaQlQp19Qv%2FGOEB8SNvpLSgdyide5JCcB4pbAm1dJROT8gAKVDx77K0m%2BnN9WDH7CheF09BahEGxpKCITWsHlcMNX7D5GUdZAWZ73K3%2BoWTsL4wjnTOyWVTe%2FBAHLiSICZnCJycTBgDTwMSIDxcC0Xv00iLgN%2BZH0Q9BboCVg1jClkFM3aSTC4YT04GWBxYeglVeb7vx7004yg4ZqK%2FmfQdJxPmkWInWZQYaCd65bF67cx%2F3VCN1n1OS7SmeU31I883lQq13klCVlSZ8QTAHHeWTxBaXKABP75KHff4y9GdB1En1gCtq74I%2Bex4AX00QbPh2lRIhM%2BFrVdoS9WzeUqCoIhDuT3%2B8SoNe1gHgYuwfy610G9bBUhPPujEHzAaX7NPgGNl65mG0TE3Kte0dojckvFhPpwa9M9QAkvWYZBollt9EtF%2B4tFlRD%2BGqa77JWyFRbjgIbGmgDeWv2gYnEytli0%2BVE8IKeRV6Gh7bR46cTppSqEIdG%2FvsnzKOMnJ6fWPrHTq21k8bnQ7GFIlZBYyQWjfMtoB20%2BDFxno8NzDtpoG1JUUqxrkfP8KMOStxMkGOqUB%2FBcnWTbvAk8rMsefSXwRtqVPECCXNYXJT9qNMR%2BQJJHmiL%2FJ219rG4Wq4wnd6AyB4UBNIhKuyrjrQCuXqYTXH5tuRB3qZc6XZkUpmkG01Uy8nZdOcB0ARuQcDBd8ISiCTu2ojdfX0Kmk2Pqp7k8bJSxRZvzsiBkJuE%2FdOigoxpAPezP%2FpXeA4YIozs7woz8amtyTi7jvY6f%2FBpG9Zju3NneiwAQ1&X-Amz-Signature=c98e1b70db72014308048e711dad42398c27ccf2eb731cabd6ab817ab5e885f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


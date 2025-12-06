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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ZNCSN4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcCxQbpLL%2F2ZWwp60WYlmmIxg4MMTwJZBFe9ktuz2ggAiAheplgL68nRva9usW39VFbz0omlxxzx%2BGpsZYeAIpEZir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMaqcU2F8bZ4u4qEwVKtwDY%2BiIMtAI9ZpCvaa392lxunXenuqHy1ndQcJvW8pDgsPJVO4HGMiL79H5j5rZf67zFAEZ8D4hi6d7K8TJvOekI1du0Kw1guYRyCKQ3I1alFTqFuMju3rqCzmyU7fmxmMAFxfNr%2BS9KPoe9FVV5dydCNfsUe7VI11sVYtMXErJLuBcwiyJGhAzobrsaRPB3T0b1TqMp4XaIAZ500bEtlT%2FqFSh%2FRk%2BaGqQllxTV4%2FacqDnT7%2BC12PQrzK5ZIf2zF9XXk9oBCDaixEDtaicS3ge9X68tfaNott8oq93fmuY0m%2B74BefzmNk3fD2xTcxDE5NORQ6xhYyPGlU%2FZURtcyf%2BK1D5QXnzbwRMspzf%2BmxJPYNezCIiaKJZlQ3jGS0deidu7889LQvMTs11m%2Fn6yObd%2FksBjui3mF3ic7CNF1NBzTj3vFBN36Imj3Vhht6%2BmqDmyw%2BnF%2FuSNQTX2N0ACx5sv0CVdfQvZQGh4dgm4OU6vKYd7fNAnVFPMS7teE6uLNPHeAAqktOC5vEZzpd2yaU%2B5KYaSe3DHcncxhlnw3NODb5I4t5sOMBRyaYdGLWMwut6XpdQqwENbi5Eyq6iE%2Bx1R%2F0ZXWwBTwQG1x%2BAWrUnS%2FyAdAtgvadjws72QUwxabQyQY6pgH8yLgK9C%2FmxCWVLBYDc0VxSEqzGsB%2FhT5XPQDwHMqCGbymK64t0eBaD38AwOZksrcOKejdjJhb9BU4zeqInRJHl91LKnZFhF%2BxGSh5ucD2YlFTn0aAHd4BCEAh%2F%2BRXXAIlqsc3LfDyA9rL%2Fdul1hh0bv1sOhPgBYXr3KBbN%2BNbla9kcuvdVaVWsxtUG8BiCiKLkvGs9haBHHz2z1VhQH0k3xiLVkNP&X-Amz-Signature=7b51891f43630b2d8de0234b9a26824190a4a5e29ae381f236d515887017fd41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


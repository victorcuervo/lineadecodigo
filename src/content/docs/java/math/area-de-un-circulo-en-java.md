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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IKX2AVD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4wtDNdJ5muA91G2%2BoUHso2fTz%2FUldTchxkyl7iabJPAIhANsQrSD%2FarqAvN420RsV6GKSXD9esgv1TxwrDc5vOuAgKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL%2FWpxDsRi5qaoetEq3AO4UR7tBx3zr4UUG%2FtLQKjbbENw2IWC4PwRk7WeNP1RZWmLlEiKeG4Wagt20LdnoWi8jxvUwr2%2FXELPZTHEscqTbd8gGaACbzxlL%2Bvx39uEnEhkbCVfsZVy4rJxCcjnhtADn6ACULbDDiUQyHlst69SdiTIU7bFlGugM0ivMl22DoRpBQDJGbslHVhvel%2FyI8%2FN%2B2e0rk%2BJs04JiYs%2BsYr1DBLbH9VuqRGQy0%2Bg3EVU4AkUABX7sfFk%2BUYeYjPr3v2BHQeEwbhkmaAL0%2BFUa6a3vhpZjxxHxWoQct5JBahYs9m49WYufxf3%2BHIYObA8SqQzK90dcGAk4e2CM3oxGuZI3vE2R9qXYvV53em5SG7cyr47ErgHU1F%2BpEAqJ4Z114JbnNH80sbqXOhTwmMfXCauxD13k9qOjmWC%2FCn3T71yTT0EkOn4jTyWMvyjvWNetjVk4YNOknknDFg0UUHYNzuuV8ULTtfJ0CDQIDqAqIzk6upbqwxyML1JDmQ4o2WZbS%2BZz1XuA1xKbCOIDp35syamviSSRidDYE4PmAtMTTkiI2beT5RSso3qxVSnZ37Y10WjlbMU4r5s0BTkp66%2FxWTX2mcJT3gnDZUz5pP3cMGg3dmBh9T2nyfMwizamTDHjd7JBjqkAZRprejwbkcyn0KnLCzz94munFVZhMedxer5q3INJIc3CFwN3LV%2Bl4MqcNN0ja5LAixEYwd4DM1RiHCh0YXGmxAZsvAbQ66R%2BHcpEW2q5DPIr3mtQ23u43%2B5Bji9stX9BZ91fu%2BjcOjj51%2B1rhPu7XixXOfhqNKgD8j1aMu9GCWSVpEySYX92pBheeXnwcdC6Q%2FrvHfFBCKC%2B0B7lTDwwyRFh0oq&X-Amz-Signature=7649fd6522db4d5d356e1735d2624686262ba3bbb5de7b06b82f69327a62a171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


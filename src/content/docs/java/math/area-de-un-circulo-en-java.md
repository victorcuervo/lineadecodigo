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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XHEJKJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlvsOAx2bFUU6vJPAOcnocY3cRXyJFnZBtWZEnWG89iAiEAyFK9Mv4IGr9iIIxjrroDo1SCLd2QMehIyR4o4zODMaQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOp4e6WYw4%2BrfotYVircA3dlpAeuA7229%2BPRcVaBVNHMIDO5UCR5V8U1Vsn9Qapuir23G7U4qi83R2GpJAJAEouq5UqNutkKDQXwKkqbWnFM4Yaa1vPQXEzNiR4W56qy4RB39KdMTnBWBhuIKqLN6wx9ZgdkYw%2BkYUNDWRmfwzvpx%2Bkv3k9D4wziuTP%2F6MDKM7W0%2BLkF7o90dDZQwVHSMHOCwomVeuYAZTR1mZ7LJBXJIcOJLH10GWRs%2BYDFaFNGC22iJYDcbbdYkinGeL%2FyzmC48hXKB7FcOhkmm60r%2FP2xFoSuRgI6pA%2FnIYw8gfKyArrfbPoDkcHEHTnEWyg9jN3aj8hfND6jSUC%2FcGjK5i57sza8vJ%2F0FJf89RcbuHywwNXPkSWksddaAknHR%2BM0TdFAtwSY6DQUf5vl5zMS%2BsFouGSkBQPKQBB%2BOcTPXslfD%2Bt09rk698bW7sE%2BJuMHclucRwTmEbCjQ%2FZqypx3iC86FStKIUB3TNr1jwa1BdcDMrpCVHceAk3AlbulAaQhGP5Jycp1z4r3nSRXYuuicK%2FtdBA9tJvQ9AInWhQ%2BIoLuaIR3BaL%2BGIzaK6BM9lJzn%2FyFvcit6HPTVKF3NHSeTo01xWxe%2B3v6V2oVvoRTbHHmms1cRDk61kWJZdJwMN%2Fsy8kGOqUBjPjtk3p1F%2Bcuv7Umi8S20rls8VmuVREkSvoWvdQiqtWVbMS%2FUF9iyuooGJuwm74KjZAz1D33qfmPrkPibYqKIRcork8BCVB22I2c00tQcEIsRpANPP%2Bo5U0qWBGaqBNYZNuQCb2oEMiG211cmNc4r7ICrcEkTo41CmcLk3ZUS5c%2BdgMc0TRT%2FJ5pcGmELr2bDyxrIyvNNgA2uMYC5fZJMVMe5E%2Fn&X-Amz-Signature=8f54d771d2d8f8a9c35c2d3c5dff88a36abeb873f25d1a1fe303679e5d8dc171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


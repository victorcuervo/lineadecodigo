---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastupdates: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OH6BILU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBdhDKAZnqQN90Cyz%2BwJ5CEEEmn6I%2FYD%2BirCMeCGNs18AiEA5N724AXcts%2BcOkoetmOFruah0KFBRhUMqlRZUnT4pp8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBOgTy9zI3RlY2yDoyrcA8AzsCPrEyrreetU2T1Adb3oWeoZ%2BJgUgkjRa2n%2BBIf6SPi%2Fl60XHrE7sCe7gM6HF%2BUcF9Lt5EYjr5vzZA8u2hStnud083V6YdBPkAHnumXYAYyigRnoujtUC3JLDRRzJwCMqklQSu%2B%2BH3M0ExeigYr1jo3L9Il15%2F8mqx%2FlxHOsueSR1IbPcnwVeACDMo%2FXr33%2BZytxQPo0wvvrPRvmJOw4%2FE%2FNAQckGOvzxxtt6MlxIg9I2afEve0EpLLhayGkTrIXVIh3JLTzVGzEs%2BjWnUAYIom3YKIuxSAnrQwVnbmsb0YFTh1ifFohIAZyfUaagG2cm38eUQyG%2BDbEfpNZImfVLZOvU5fwb%2Bfn3iOrEBsaG%2BXNOTIRqLhedh2oj%2BWqu491N2QL4YC2vngDimt%2BCBjs3sU9gzeGsChKMUoo%2BpmTwxozTc%2FMCuVonUUzLMiIZodoAgLajBrZIGMyBD8KCZggE4IiOU6z1a85o0ICkRB0LUwAtdT7w%2F8x0m2CKpKQjGY%2Fe3JdgVNI9bmJK1mvKgtoeCtur6zHTMDNGkEe2H3Yo1NpX0rGzY3jVb%2F2X%2B0004aNSZzLYlqHT%2BL7bbm976eJwBhZc5%2F6mpc9p37edX%2FzjFg3%2BZjioQNvMVg6MMO9wskGOqUBpuEe65jGPUtFqYl6%2Bap4D2lt15Bi0D1S4znqEiu0e3Qi7bOD%2FS5nbAhrCwj2L21c6GJ91JZyGCHDGY%2Bbba9mDR9nia8ANMsouXlVW7xlGNJK2Xj9zfI2BZXYwmy7JxM3NaOp0NPB6CASaET%2BfMZqrE2vcvs8Nb9hgrVYG%2Fhx%2B4RG50404CtYofhpp4RJawZCREqb5zCC%2BouolL1qvw08mE3Euozr&X-Amz-Signature=6db4cbb03c71a192db2ddc577b1e9ea84913545524a9089d0168fd42c62234cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


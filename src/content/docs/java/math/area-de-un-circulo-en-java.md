---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZCFLBBT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDO6vZMYZH8Zw6VcKlRMfaqd%2BRa4Xyx%2B0d8rruB4vpPBQIgRyKeHaCUYSxF6x2KKmpY2sLRolSteZ1BZSBMqQYdYJQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJqWwAwsZO9e%2FVPCSyrcAw2Pzg3Jlg1XTWdL8sZSIYTFfzJndijyvYju49LXl083w3xM7JjT2z5rQY7J5%2B41IM%2F%2Bd6SmPd2CpL4e4lum%2Br9cawAAzfKfgRCu0OZ9Dje3WJJ2OJXFUGmsITr4Hs90h5%2FZ0oPdWhyO%2FeD1I%2BjdvGha6Q0%2BjjOna27VJRalpNsz4kxlg4qb1VmBn30KtcK3KxwX2exXoy8X3Uiw4zgK6%2FMaghYT39fh70BWJN%2Bu0Gu64ql%2BovD0sFA%2Fqtv1fpMuDwLB7Yc6ORUcWoh82Tv9o9O2KZyOwNNquOyhcCjSadiXR1vI7CLJdm4BTDJrN0tp%2FKC0ePmzdClFT5DrTVMmfBgEJ0FSzFMLAGHsf3no0LNwfd%2BBsuIOPT4sB4Q%2BZHqyH%2BJPNkH6ST9GssKON3c%2BBbUx4Y%2BLdZEO05aY%2BXN7kqLLqN%2BhBpeUw24YSVhQfRjgAEHIIyZQD%2FC%2B4V7AzcsNV54%2FqL%2BphFndF5vIXDnF6piN8LFWSIcSrya22abTIiOUiQCm%2BwiMyKPB5412H8X8JrLKvy3Nnpa%2FEIJdjHH%2B%2FXVLybd7Ym24aZ9Scrp7fhf98lz641ageL%2FL06Rej2Z0jr7EZPK5XCUpXmiZAWXfArgTD0oXS%2FfSsMme1ERYMM%2BVw8kGOqUBL6kN6RSD%2B%2Bt%2BQjuEntgSQmnTeE%2Bkte%2FYn2TEnlQYruSAp8clCcYKRusIlLTR%2FkkTHGjK14oS3pbKDBj%2FV1So0dfKQCR0lRLVDpzGbk%2F0Vgaj3XoaUYIIBypP%2F5GyS29ar5rb5WfNJQsGO8wd8G3HgLTBH8kwL1WokL1K4E5GdDmIvvEGU3DaqsXw0THdav3Y94y4fHbIrXJ9rJI4DPLrfC57c6yF&X-Amz-Signature=854978687692fffec44b2040494e1821a43fec7a2b864dfa18ee9768c613aae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


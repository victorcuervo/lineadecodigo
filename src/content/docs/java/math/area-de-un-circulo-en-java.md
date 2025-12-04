---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGDZSMGW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC2jotf1mFNa0bBY%2F3vY%2FUuVi%2BG7OyG7hYwy8%2BTbAg7QwIhAKFKv90Cc%2BYbxg1eSGP3n9cxrWOnvwi5pNR5ReHaX3KWKv8DCDsQABoMNjM3NDIzMTgzODA1IgyP9VsTWlHNhx%2BAnHIq3ANTyGU8Ww4q6%2BygynRnLbN6Sc0M9kuiEMazMYxPIChPnKMJLvroe32wYP%2FYqRDS0IrQWJ0QSgvsZ1pfwJa7UFfx8MYxeB%2Bkd%2FJod38E14veo4QWGlljtNiIEYdzf3c8go6UuYqzt64Nd51aW%2BFu5WLT3PvPr1B5A1nvMB7PPhepRTgocJ4UgT5aSwFQDGAyssdv6inPQscdMhMK1KqPEFZ0zVpBEtxMjSq9gEqOVLZcqLRqn403olOepLxr84Lw7JRH9FzgEXIgtih2D0gqSxU9ieDBirdpjvDmpV2gzQZkq3%2Fnxl1%2FkHkTl1sH97S408V0IQSYosTyvhAHPW7kFCqtCxuTXGmrcd%2B6bsze1oZfXos4ZJHrTuOKA%2FQtLgCoGrE1EHrt1v%2B3m6e8Edo95WtIWexODBIBJrbU0q57JleM0SrBZCuNcRA1EgfgsCAOCByJ%2B3PcucpHAtZ64gvNIcXVBfP5sgyQNomQLMqUxGFPDdN8zOpIERPr7PfEv3SMlvanD57cTKLubtvBUura6m8Ac3tZpQmEX%2FfGaPyZ9ksxSQ35eKuYW%2BTeBerXWB1k%2FB7r9HDkP3MV6mvnk%2FUeNX7Iq4WLqysUTbzMWxA3nue1bK6BRg0TST1r%2BEZMQDD31MPJBjqkASoyuJFeZys0ef29FbIq9T1WVJFiMES4j111P56DXxyHHWVyBDbTyRXXtZtqh%2B11RpnrlYMMIRwJVPgrGWtq%2FstQmgJja14Gu2%2B5fhLalAg0IZrA8uxQHU%2FdLUeUapqGSa6tjCIs1bTlPAlH6MLUZUDH7K7GDzL%2FPdON%2FyeWVzLoch6UQUKgP5DRsdFjk8u0A%2FlJ%2B0RtgLr9h%2BRNT6ahKodkSV%2BM&X-Amz-Signature=28be0f79b68a5810aabbaa605b1bc7773b87c66574b3299a9d8ee9df461148aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


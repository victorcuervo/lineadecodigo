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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2IZX6ZV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZv0NTuHwic97S%2FF4M8TqkYgcGRqAYAoc4Opi4fUW8RAiEAhCm%2FJUwJR%2Bs4x7fFQtIhGYrY1z7h9pKea%2BR6Ec5pVeQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDByk65ng1OZhIlRFPSrcA6EAGKxNr13sTdU3EG6sAhEfHk%2BPP7hmOc2HtxojDOL%2FOny9Y7hBsPevpgabctWtcLqJPdkAek0zp8agXXfxIWDYwXtJYZjQmE3gAcsO4apzJRg0bHqoiqMH8PF9wO%2B%2FQ67srywLN81wHEGPn%2B%2FnrDqv3rpwZs4QjJ8vFRPDt2%2BTE%2F0Fn%2BJ8%2FIATxJpk5ZnSiIUC1cWZLZsLF2tDm19Mhwx9pztIprroLWeaEF4uSfnZtmenZh6oql9VBEclSzc1u6aGmYKk7FGpqURXEeOkYrSlAGWXoFxqMDtk6mR9%2FzRfBj%2BtOU6zK%2B0mjsfKcQ2qZShYIRV1GnQ%2FsJvRR7dl63yhnaDe2a2plwcNdW8%2Fq6HNNFyYoUrat%2FmNQExMMFo%2FEqCS8NhhOzYr6dR0Y4Br6ouOz%2FeVmhtDE8gu26IUOq5ZLOcghLVd%2BEXlUWYtE3A51kGDuwsECEO%2BsMd3YQwcni95dB0Xj4sXKZZlQf6rZNfA%2BqLbDoabsZVSmJJJwhK62CgkMPeHAUw6pKd8LkW5VAytTTA9p0sIcJOpgAScykojSGIiFcRu%2BYNtP9Y362hJnUIHZkDYhFCwyWLahhQbW9qCiFTQQLKmfW9rJtlwDrEA3clQ401xDcLZmREEMOSpyckGOqUBYnzUtxMo8tPY2zIHaXf6XWvG9ZZPPpsrswtlZth2kgeGLLGb5M1WkGdf8Y2aypBB42XOdnA2i%2FxOmxncO%2Bw9%2B0OyuGtoU0ZSGSMDQbzTc3ETmJ87bBqv0QlvaNzzrpx6zKqA%2Fn6Yqc0pkEfHAmyMq3jRwH%2BeHlR6y6%2BpjNS9fLcJiu2%2BFMu7et0KJjSy0pKVQPo4AhE3Y3KWdAfryHjR%2B6uErKjK&X-Amz-Signature=8e30a438ff66ebf71a9e6a716e46a50f294cbe7ea6084d97e3587ef62f09793f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


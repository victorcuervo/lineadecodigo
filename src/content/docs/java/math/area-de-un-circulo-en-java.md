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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVS3AZO4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmP0wRNTzsK25nrvPzcNZF%2BG5%2B79bt4BCb78v19xZnrgIgCQt31PP6wIRCxAAAD8tKaFPmI986HtMT8%2BO3XlKRC5wq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAlmsvomCUZLseLHVCrcA19waQw%2FRbJXdIc9%2Bcx0EluBVkG4T6MlvlquI%2Fr9sFCSXhfV%2FGjXlOZ09L5NDVN%2F4pvlmX4SP84LCSJTfmiSv31ZEqCNsm%2FobHuOBAS20V%2F%2BLohA6X7vxbN2rmXjQycgxRWrLYbLu6Ru2Mf8qYoaVlDT90AuhyAhYi7ufCxntA7D66QbAjH9q5b0UOajiM4yXvzITKSo5VPptFLGp2z%2FFXWdSs5q0BMTxgVuVYQ9tq8im1CQu0lx1OGuKcJPOw7HHUNe7z4RUKCCT1QuKgfzNzkFXQgrPzBTQ9m1WVsiydTibgtl78vfMcL0v%2BMYoYQB%2Be5lKfu%2BXUoym6E77XemUvlsGRIg8tw%2Btgua2iABqm%2BHNyCo8Fc0K7KN8wdlQJWhs5ej7Xm%2FoAfUZ77S%2Fn%2BwEvU20HD1os43hkj21HONNJ%2BBSIsba4QG04C1GUvCdkG7d7%2BbGEeMUw8CYXYk1RevtErn8oG0kKNvFnsuE%2BR4MbqDV73czBJwi4IDxLdsfw9Fcr8UwGrZYh5gQGbzENpPZW%2BqfM4O9e6XsjeWmBaFIBkN4N8kfRwmfKKkDijRSiJuFXuTKabDmUlLpeedYxdSBBIreo%2Fpl1yCBssN8sKi%2B%2F6C8N21VHbh8y74rqG4MPeLyMkGOqUBAJZWb%2FO7FAM2W%2Fj9rlzxSsMd5ohV3HCCz3de35cIe7i58tQpBCYgCK1GcuVUZELIbf012WOB%2Bvs5djX9x%2Bz9SyHmg2952b046sgsB0Q2vWIpn4nX94PJwbiOenrLsnA26P77c05UYubleiqPKg6ozWSEGqtT3GOi5ri%2Fqm4uDAAlk3yYWl6UThOCngTD9V6P8qX5nsD62hJG7uhsfOMq0OkRUyFL&X-Amz-Signature=fde2c249ec0ad89764f2a984d959232ed67566185fc6e26f1e52b463a99611f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


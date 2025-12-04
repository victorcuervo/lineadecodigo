---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VXSTCYB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBb0hvyP1gAuTZUSO5KsRPyQNE%2Fa0UMCzcxfd8bbI85TAiAZaxxjA7n3eGcbk%2BASj9a%2F75UknauEmjEO0THI5GV%2BfCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM8ufA0adt5PbzPqIfKtwDR5Lh0cDlYd4qArPzLq3OKjpLuve56EHTkoXk0hIEtddVxlU0Q3ywqVG19LwaJOneEcrjmz6n1IsGUXF1NIRSl4mASaAAVRZW5mj%2BZp8E0tsjEr7rocySWURrx7%2BXaWackvQFgO4tRsurgMtQImMpzLRqdb0pJZDO7ZZbihKm8ubYOMUqIiMa75OoAv4%2BtwH1sDdfyv7PfF17EsJNDTR6NYk%2BdGHl6y%2BFE7EimkNnEYcNuF%2FNi88K6s4%2Bw3%2Br0d%2F7%2B17dyoI5ovWdocVSptM4jiyc%2FIAn6wBo3XlxV1bhq6H8RC9asjURBGj4YwwngCwgGlL%2BNZQziOxLyOHfgI0hZAXTfyDtdh4nPS8lTRUCbx0Y8e7k0v08%2FwQaWAUWedhu%2BUYR6HUxgW%2BZ2MLSs6MDbngtP4pd8sokNFIbSCpFC29h6qsAK2K3pLiA6LOuYeIiQFHk2PY0FizNeZjpypS%2Ba%2BKxu0QUZ0%2BCaQYaoWCvTU3Eo66imkiuSoYR3Zc%2BLypWrVfXWyHB%2FLM55bZ%2B6OT7YVyebI58o%2FM5kd1Iq%2FH%2FCkFfByZpW%2Fqz65OGledMLU0sSt8B1I43Uy5%2B8s8TGQaqqWBxdENx0SS9AtvT2UvU7Uagv%2FN3aNT0uJy8pNQwtsrEyQY6pgEHBrsJsHzAs2AyNUHjI%2Bst1R0ZGI5Ou8OPl9Th9x0%2BMxKl3ynYHVgS295kMu30oXdS1Wklgidf7rnBWEpHnEmtMusfTniK5Wyt3%2BZHnWG7K8RqP9yq%2BF%2FOZhdyiOnN%2FLM1IVzJJ1qf1P25dLHz7NY4Q%2FJ8q6nTBjE5gneYL91cMV2Pfuh8SKWj3solgkj%2FIORE7d1oBrKqeF%2BcFocKvtvns7yXMZVH&X-Amz-Signature=38cc874791592c018e3d6e27def8c20f5bc5fbe538395092856954fceb0e8002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


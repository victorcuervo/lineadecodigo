---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D3SAWAI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIF3%2BbCnWHcCsZ4z%2B6E7mq%2F0aoFnTIC%2F%2Bw25cMWKpdfX6AiBnL1Q0TsA%2Bh0CF5XLQ27nL7%2BYs3igMUm0MGZ3aD9zmxyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMCy30q0NQ3JTjs%2ByJKtwDpXbWlWQ8S3%2F%2BldwAX9rzABniCXJikQcF1eHvIgmQRv5hcrWd8DW%2B4s6kmZL8PES2MAxi%2FmIpf910YO2EQQ%2BdMi6%2FJDdPoUgdemEMMe1HxPN%2BwBqpZ%2F5ugEBWnTkVNnGe7PsgkAeypIMFa2WFtkC2TIDPhwiLdGeLoGXkUL3P%2F5%2FGOv%2FLuhw4RkI7yFZJtgFCI%2BJUDreT4HEPF57GQ8PIu%2FNs1k7cR6bpL4%2FJPRUub%2FBrH9yaDibkmh8XQ2mjPUYN74DfrGwFHUb2UidS3DnSVjyNNrvJASXpqEMD2V37gWh5yE4IlG2TcyzE7tqbv8Q48Euy7CMBEXOj9K2pg2e0H5mAlG3ypN3dGEdNBW8URIwMeFD6%2FsjgfC0Evgmd7JFMGJrt9MCiCD%2B%2BHG3rO0FP9DMUCakAwtXYlnMdpnAQCbpj9hl3xKIkSLggkZey4qopK8xy3vQEQBp6G4iENEtBopWv%2F5Q2StPf3dxfbgV0MI%2Fdap8pFbxlWhcF%2F%2FRarsQ4Q3kEOmDOmaD%2FMtI5GpTPJi9mjbCKGmasIl1QNXIf0soVsqQ6naGxXXlrtMrjv1EiSWZ4kAeRQf%2B3ASz6hJzIix9xCl4Mq0iGab9pE03rn7pMfBdKp1LYR0wUw6gw%2FebFyQY6pgEWf30NH5b5Suvstbtk9mfzJaQkWehicrRPwPdc9y5IBiB2gColAOn3NFpgO54sjbhBuL4SMtdNiVu8VcxnUQN9rkdqjkN0OwfGVhWpigLcQtSuZke79yGe2HwqCaGiCTWuGYZP3wbSvo3SlIT6GmIK40JhtQXX6NcdpIwSy2QeSA1%2BG%2FyTpc%2Bj3tF8JJT88Xq8OOj3EJjffaylPhlmWjTtT8PBiPyg&X-Amz-Signature=4841d0152f1fc4e9b41556f318507db76b8096060515e9dd5f86c538089c9853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


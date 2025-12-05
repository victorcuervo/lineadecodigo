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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWS6KOI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLVXjxx%2FwI8Nc6mjRPwhgvx2xfK5g9mq31jZ1ZmtXPSAiAIer9V%2FHP4h31IgAmggiTFrIp998aG6kCQQkL4KTHsDir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM1YMfX17XfdVLRI1IKtwDxbUUxR2an6no4caUNqKM3p3pz84%2BMSeB0%2FnsXGVkDsZwuRIIHCKejrBH5yR%2BrBCk%2B%2Fho7mSoGyOm6w0GLU3oYyUXZua9wGYbNJkmYThwR2KuLExwg4L6IIlYyAP%2F48Pxj6UDShreOgF16LvG%2BoBdTQ2XMHrYUJlbHL28dJipTvf6zJhfbB6E1%2FWO%2FhL38J2yPkD3DjUST%2FOdYCKVRRGerqFqxnfb5SzcMO%2FrRuoXksGa%2BnxsqRFI0u0HVAep8hbJmZoWfFkA%2FWEisvuxGdLaStWAOpXyNfeDDZixMKyIdGRfy5Ei5G%2BNLu53%2Bj6ymVCeMpAct%2FqFDPJutUvQRhQVYg4%2Fhl8ed4KqpCoIlaq%2F3SQIuw16cH24r6PdNinl3EkMnhMl%2ByjRWxb2KCJ53hWz37cU92SfnfklEeg0r8b9qDMJregcv8i3oMpcqrLX47f6kYIwumrkI1IxWxdWSqlCoXfhh8pdXSesaUTDnFTTa9caxdVUWA4mWjiD5l%2FEQB9FSxQ9hESN5v04dKMRB6gETn7lxbArSUQpWQYKj%2B13PfcuZyYN4byA0x0%2BV1JBGxruzLj1SYXGgNOynFDEabS4oycKrlIm6kqsbruo9OLqUqXKD1i2c%2BEMpTbFzEowsdDKyQY6pgGnj15%2FQt1QkNPOPdpj9p4yZ4rqXdTB0%2B6vKV%2FhpCwV6yJgPZd3ruT47GMVmxUkaZ0up1EmMzcY%2FjjQJOlVkSY%2B1icVeHQ3eZvNSQtpCkDLdjfdyLnRiEsCyYWUWiA%2F1oteW6VpSizHSr3KrLZ%2FKoFkJYXTlaL6VYxjXanDu1PQ2ll%2BbcxwDntwPDMeEG6eDnIfwSHjGZWDm%2BM4BnnYGQQDgahyAqsF&X-Amz-Signature=e9cddb5c10c47dde49139d5b1d476941db4987182955e4a169ee40a368f74d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


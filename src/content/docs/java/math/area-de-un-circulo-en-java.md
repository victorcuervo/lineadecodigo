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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654PM5GCG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaQrUgmZfPHOdalLSQXiV7WUSGCu0x5Q7lLpqFTTuWjAiB8%2BpbQJ9T83fQIF1DBbOSHlodX68%2FxYiHcfMl%2F1XtCoyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMf5uea%2FZyWaA7W9pdKtwDQJydhRolb2Y1SEc3OpRr%2FqGMNu04L760Oy6VEY1Q%2BreqaqD9yn1pnO5LJbo7oomR%2BhSfDknGb0RWO7q0qkcD99BYYM4oN15YJyMg1%2FuArkdAXUOIE7%2F9qHqdBUKJkqyAqMQyU1i7lNl7oqH9kIReWOK2ygWIYAp9m7IC922280C47TxRE1q4yXvu1dvYz35pV%2BiWy%2BxzXdOzsXny0Ee0%2B%2FXVAtTSHoUPSaOwcd%2BRd%2FrIYhUWmJCTZXxADcnzh%2F53C1rWPqHVGfg3SP9Q9ysV0iItWyceib%2BUd4NFT8n3FrJ63iYVUCOF%2F4lRvFHGqdpBgx9rxvoeGwS%2Fhzl8BSm5Fe9oCcxAfJmrH7QLgLCPrSNsN4%2Fc08euFK%2B2V5AuUjLVcbs8U11grF0bqz%2BkYPtgwNKktBYOVm7qS%2FqU598QRgyvylx8P20LGxpYFeCLme%2FTVxf3t0xeYw7Rom24oNTSDGvh7Y4uRbh8KvrfdGRiXIxL%2BGo88Eosg0UXAcMGE8IQoFAQCeSSgdHUNPegAqLdvMnDcSNGsj%2FnvpIBejE5la4HblC1xVTNMiQNxcKBMmpvbvvwsvijFWOyF%2FOMwBljxvHGvCx5Zu30c15xgabMJBriR40CzIVRzas5auww1KfOyQY6pgGWpt1FfS3bcDByRfgU17cC%2BQeQ7eMiEvCbAgT7AgPGKUKx8TYTyxORxfZ8tSxdz1znPAqPSsMALYx1GnAv8ecSDL3GO01V1aCLYaQvrublec2JcWhEtU0yKAraJVJ9UgAX18Let525WDPE0SLcoFi8OKiYz%2BI%2FjDd1%2FnXBWs4f5fsaejysdMpLhF5FbZHvU2A48NFHR8h9yb2g3cXRhogeVqf7XBrd&X-Amz-Signature=2a3833f16083ef2385a47fa935d88856dcb6db5bffe41833e74194a1669016ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


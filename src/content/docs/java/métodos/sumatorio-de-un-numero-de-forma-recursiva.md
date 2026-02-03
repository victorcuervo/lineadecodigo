---
title: "Sumatorio de un numero de forma recursiva"
description: "Ejemplo que nos enseña de forma sencilla y explica paso a paso cómo hacer un sumatorio de un numero de forma recursiva."
date: 2007-06-23
updatedDate: 2026-01-08
tags: ["recursividad","bucles","while"]
slug: java/metodos/sumatorio-de-un-numero-de-forma-recursiva
author: victor_cuervo
type: doc
id: 799ce57a-0a3b-4954-b09d-2ba446581af8
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/SumatorioDeUnNumero.java
---

Hace unos días escribíamos el ejemplo de cómo [calcular el sumatorio de un número en Java](http://lineadecodigo.com/java/sumatorio-de-un-numero-en-java/). Para ello utilizábamos un bucle while en el que iterábamos desde el número 1 hasta el sumatorio. En cada una de las iteraciones íbamos realizando sumas. Otra forma de resolver este ejemplo es mediante programación recursiva. La programación recursiva consiste en llamar de forma iterativa a un método. Es decir, se llama por primera vez a un método, el cual hará algo y se llamará a si mismo. Si nos paramos a pensar, esto significa que entraremos en un bucle infinito y, claro está, no nos llevará lejos. Es por ello que dentro del método habrá una condición de guarda para parar las iteraciones. En el caso del sumatorio lo que el método hará será sumar un número y llamarse a si mismo decrementando el número que le entra como valor.


```java
private static int Sumatorio(int iNumero){
  if (iNumero==0)
    return 0;
  else
    return iNumero + Sumatorio(iNumero-1);
}
```


Como podemos ver en el código, la condición de guarda es controlar que el número ha llegado a cero. En este caso, en vez de llamar de nuevo al método, retornaremos el valor de cero. Solo nos quedará el llamar por primera vez al método con el número sobre el que queremos calcular el sumatorio. Esta invocación la realizaremos desde el método main.


```java
public static void main(String[] args) {
	System.out.println(Sumatorio(10));
}
```


---
title: "Tablas de multiplicar recursivas en Java"
description: "Implementación de tablas de multiplicar recursivas en Java usando un método que llama a sí mismo para generar resultados."
date: 2008-02-12
updatedDate: 2026-01-08
tags: ["recursividad","if","metodo"]
slug: java/basicos/tablas-de-multiplicar-recursivas-en-java
author: victor_cuervo
type: doc
id: 259b376d-5c47-4562-8bcc-a3ecd5c8665d
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/TablasDeMultiplicarRecursivas.java
---

Una forma sencilla de crear un programa que genere las tablas de multiplicar lo podéis encontrar en [Tablas de multiplicar en Java](http://lineadecodigo.com/2007/06/05/tablas-de-multiplicar-en-java/). En él, mediante un simple bucle se van generando las diferentes lineas con las multiplicaciones. Si bien, las tablas de multiplicar se prestan a ser resueltas mediante programación recursiva. La programación recursiva es aquella que utiliza un mismo método que se llama de forma recursiva para resolver un problema. Otros ejemplos de fácil resolución de forma recursiva serían el calculo de un [sumatorio](http://lineadecodigo.com/2007/06/24/sumatorio-de-un-numero-de-forma-recursiva/), [factorial](http://lineadecodigo.com/2006/11/19/factorial-de-un-numero/),... El método que implementara las tablas de multiplicar recursivas en Java será multiplicar. Este recibirá como parámetros el número de la tabla de multiplicar y el número en el que se quiere terminar. Quedándonos la siguiente signatura:


```java
public static void multiplicar(int iTabla, int iNumero){...}
```


Todo método recursivo tiene tres partes. - El control de fin de ejecución

- La llamada recursiva al mismo método
- El propio contenido del método

El control del fin será cuando se llegue a 1. Entonces, si no hemos llegado, llamamos recursivamente:


```java
if (iNumero>1)
	multiplicar(iTabla,iNumero-1);
```


Eso sí, cuando utilizamos la recursividad hay que ir decrementando el número, para que llegue en algún momento a control de fin. Solo nos quedará el ejecutar la multiplicación en cada una de las iteraciones:


```java
System.out.println(iTabla + "x" + iNumero + "=" + iTabla*iNumero);
```


El código de todo el método sería el siguiente:


```java
public static void multiplicar(int iTabla, int iNumero){
		
	if (iNumero>1)
		multiplicar(iTabla,iNumero-1);		
		
	System.out.println(iTabla + "x" + iNumero + "=" + iTabla*iNumero);
}
```


Y la llamada al método:


```java
multiplicar(3,10);
```


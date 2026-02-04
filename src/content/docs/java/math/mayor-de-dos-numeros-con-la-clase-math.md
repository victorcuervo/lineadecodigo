---
title: "Mayor de dos números con la clase Math"
description: "Cálculo de cuál es el mayor de dos números con la clase Math de Java."
date: 2012-10-19
updatedDate: 2026-01-09
tags: ["max","scanner","nextint","math"]
slug: java/math/mayor-de-dos-numeros-con-la-clase-math
type: doc
topic: java
id: 527a7bf7-734b-4689-b5fc-770ab0d636cc
author: Víctor Cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/math/MayorDosNumerosMath.java
---

En el ejemplo sobre [el mayor de dos números con Java](http://lineadecodigo.com/java/mayor-de-dos-numeros/) veíamos como podemos realizar el cálculo de cual de dos números es mayor mediante una estructura de selección. En este caso vamos a ver como podemos simplificar el código apoyándonos en la clase [Math](https://www.w3api.com/Java/Math/), tal y como [nos comentaba Samuel Zarza Fernandez](http://balteus.blogspot.com/). Así que vamos a ver cómo calcular el mayor de dos números con la clase [Math](https://www.w3api.com/Java/Math/). El primer paso será el mismo ya que realizaremos la lectura de los números mediante la [clase Scanner](https://www.w3api.com/Java/Scanner/next/).


```java
Scanner reader = new Scanner(System.in);                
int iNumero1, iNumero2;
```


Realizaremos las lecturas de números enteros mediante el método [.nextInt()](https://www.w3api.com/Java/Scanner/next/.nextInt())


```java
System.out.println("Dame el primer número");
iNumero1 = reader.nextInt();
        
System.out.println("Dame el segundo número");
iNumero2 = reader.nextInt();
```


La clase [Math](https://www.w3api.com/Java/Math/) de [Java](https://www.manualweb.net/java/) nos proporciona un método llamado [.max()](https://www.w3api.com/Java/Math/.max()), al cual podemos pasar dos números y resolvernos cúal es el mayor de los dos números. Es por ello que nuestro resultado es muy sencillo y solo tenemos que invocar a dicho método.


```java
System.out.println("El mayor de los dos números es " + Math.max(iNumero1, iNumero2));
```


> Hay que recordar que no necesitamos instanciar la clase [Math](https://www.w3api.com/Java/Math/) ya que sus métodos son estáticos y únicos para todos los programas.


Como podéis comprobar un código [Java](https://www.manualweb.net/java/) para calcular el mayor de dos números con la clase [Math](https://www.w3api.com/Java/Math/) sencillo y optimizado.


---
title: "Valores máximo y mínimo de los tipos primitivos Java"
description: "Código fuente que nos ayuda a mostrar los valores máximo y mínimo de los tipos primitivos Java"
date: 2015-02-03
updatedDate: 2026-01-11
tags: ["constantes","variables","integer","long","double"]
slug: java/variables/valores-maximo-y-minimo-de-los-tipos-primitivos-java
type: doc
topic: java
id: e82931e1-38e3-4556-a849-d3b0f45da368
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/variables/ValoresMaxMin.java
---

En algún ejemplo de [Línea de Código](http://lineadecodigo.com/) hemos explicado [los tipos de datos primitivos Java y sus valores por defecto](http://lineadecodigo.com/java/tipos-primitivos-de-datos-en-java/). En este caso vamos a ver como poder mostrar los valores máximo y mínimo de los tipos primitivos [Java](https://www.manualweb.net/java/), es decir, cual es el mayor y menor valor de los int, long, byte, double,...


Para poder calcular los valores máximo y mínimo de los tipos primitivos Java vamos a apoyarnos en los tipos de dato objeto que tiene cada uno de los datos primitivos. Y es que el lenguaje [Java](https://www.manualweb.net/java/) tiene unos objetos base definidos con las mismas funcionalidades que los tipos de datos primitivos.


## Tipos Primitivos y Tipos Objeto


| Tipo Primitivo | Tipo Objeto |
| -------------- | ----------- |
| boolean        | Boolean     |
| char           | Char        |
| byte           | Byte        |
| short          | Short       |
| int            | Integer     |
| long           | Long        |
| float          | Float       |
| double         | Double      |

undefined
Estos tipos objeto tienen unas constantes que se repiten en cada uno de ellos que son **MIN_VALUE y MAX_VALUE**.


## Valores Máximo y Mínimo de Byte


De esta forma si queremos ver los valores máximo y mínimo de un tipo de datos byte deberemos de hacer lo siguiente:


```java
System.out.println("Valor máximo del tipo byte: " + Byte.MAX_VALUE);
System.out.println("Valor mínimo del tipo byte: " + Byte.MIN_VALUE);
```


## Valores de Todos los Tipos Primitivos


Para volcar por consola los valores máximo y mínimo de los tipos primitivos [Java](https://www.manualweb.net/java/) para todos los casos utilizaremos el siguiente código fuente:


```java
System.out.println("Valor máximo del tipo byte: " + Byte.MAX_VALUE);
System.out.println("Valor mínimo del tipo byte: " + Byte.MIN_VALUE);
System.out.println("Valor máximo del tipo short: " + Short.MAX_VALUE);
System.out.println("Valor mínimo del tipo short: " + Short.MIN_VALUE);
System.out.println("Valor máximo del tipo int: " + Integer.MAX_VALUE);
System.out.println("Valor mínimo del tipo int: " + Integer.MIN_VALUE);
System.out.println("Valor máximo del tipo long: " + Long.MAX_VALUE);
System.out.println("Valor mínimo del tipo long: " + Long.MIN_VALUE);
System.out.println("Valor máximo del tipo float: " + Float.MAX_VALUE);
System.out.println("Valor mínimo del tipo float: " + Float.MIN_VALUE);
System.out.println("Valor máximo del tipo double: " + Double.MAX_VALUE);
System.out.println("Valor mínimo del tipo double: " + Double.MIN_VALUE);
```


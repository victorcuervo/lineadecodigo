---
title: "Overflow de variables Java"
description: "Explicación sencilla sobre qué sucede si realizamos un overflow de variables Java."
date: 2015-02-01
updatedDate: 2026-01-11
tags: ["variables","overflow","exception"]
slug: java/variables/overflow-de-variables-java
type: doc
topic: java
id: fe284a3a-2ad4-4c8e-99ad-3d76d67ad7f1
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/variables/DesbordarVariable.java
---

Alguna vez te has preguntado cómo funciona el **overflow de variables** en [Java](https://www.manualweb.net/java/). Es decir, qué sucede si a una variable de un tipo primitivo, una vez alcanzado su máximo valor se le suma alguna unidad más.


Pues veamos de forma práctica cómo funciona el overflow de variables [Java](https://www.manualweb.net/java/).


## Definir una variable byte


Para ello lo primero que vamos a definir es una variable de tipo **byte**. El tipo byte es una variable de 8 bits, por lo tanto almacena desde el valor **-128** al valor **127**.


```java
byte b = Byte.MAX_VALUE;
```


Si no sabemos el valor máximo de un tipo de datos siempre podemos apoyarnos en el tipo de dato objeto relacionado, en este caso en **Byte**, y en su constante **MAX_VALUE**.


Al volcar el contenido de este byte por pantalla obtendremos el siguiente resultado:


```java
System.out.println(b);
// Muestra: 127
```


## Provocar el overflow


Ahora lo que vamos a realizar es a sumarle una unidad:


```java
b++;
System.out.println(b);
```


Como teníamos el máximo valor del byte y hemos incrementado uno hemos conseguido realizar el **overflow de variables** [Java](https://www.manualweb.net/java/). Pero no nos va a dar una excepción, si no lo que hace es rotar el valor y empezar a incrementar las unidades desde el valor más pequeño de la variable.


Así, si ahora volcamos el contenido por consola obtendremos el siguiente resultado:


```shell
// Muestra: -128
```


## Aplicable a todos los tipos primitivos


El overflow de variables [Java](https://www.manualweb.net/java/) es aplicable para todos los tipos de datos primitivos. Así que lo puedes probar con **int**, **long**, **double**...


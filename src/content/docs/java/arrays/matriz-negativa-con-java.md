---
title: "Matriz negativa con Java"
description: "Código que nos explica como podemos conseguir una matriz negativa con Java que cambie de signo a todos sus elementos."
date: 2015-08-11
updatedDate: 2026-01-11
tags: ["for","length","operadores","matriz","array","bucles"]
slug: java/arrays/matriz-negativa-con-java
type: doc
topic: java
id: 7e97e0eb-5eec-4a92-8592-577940940d51
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/matriz/MatrizNegativa.java
---

## Concepto de Matriz Negativa


El cálculo de una matriz negativa consiste en cambiar el valor de los signos de todos los elementos que contiene la matriz. Es decir, sería lo que representásemos como:


```java
-A 
```


## Definición de la Matriz


Para poder conseguir una matriz negativa con [Java](https://www.manualweb.net/java/) deberemos de recorrer todos los elementos de la matriz, cambiarles de signo y volverles a asignar al mismo sitio dónde estaban, pero con el signo cambiado.


Lo primero es definir nuestra matriz:


```java
int[][] m = { {1,2,3}, {4,5,6}, {7,8,9} };
```


## Recorrer la Matriz


Ahora recorreremos la matriz igual que hacíamos en los ejemplos de [imprimir una matriz](http://lineadecodigo.com/java/imprimir-una-matriz-con-java/) o [sumar matrices](http://lineadecodigo.com/java/sumar-matrices-en-java/)... y muchos otros.


Para recorrer la matriz vamos a utilizar dos bucles anidados:


```java
for (int x=0; x < m.length; x++) {
  for (int y=0; y < m[x].length; y++) {
    // Cambiar el signo
  }
}
```


Vemos que los bucles utilizan el tamaño del array mediante la propiedad `.length` y el tamaño del primer elemento `m[x]` de igual manera mediante el atributo `.length`.


## Cambiar el Signo


Ahora solo nos quedará el cambiar del signo al elemento y asignarle a la misma posición. Algo que hacemos con un simple:


```java
m[x][y] = m[x][y] * -1;
```


## Código Completo


De esta manera el código que consigue una matriz negativa con [Java](https://www.manualweb.net/java/) quedará de la siguiente forma:


```java
int[][] m = { {1,2,3}, {4,5,6}, {7,8,9} };

for (int x=0; x < m.length; x++) {
  for (int y=0; y < m[x].length; y++) {
    m[x][y] = m[x][y] * -1;
  }
}
```


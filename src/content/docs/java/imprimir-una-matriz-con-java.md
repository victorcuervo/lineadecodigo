---
title: Imprimir una matriz con Java
description: "Una matriz es un array bidimensional de datos. En este ejemplo vamos a ver cómo imprimir una matriz con Java mediante bucles for anidados."
lastupdates: 2023-09-17
author: victor_cuervo
---

En [uno de los comentarios](http://lineadecodigo.com/java/cargar-una-matriz-por-teclado-en-java/#comment-50765) al artículo que explica cómo [cargar una matriz por teclado en Java](http://lineadecodigo.com/java/cargar-una-matriz-por-teclado-en-java/), nos preguntaban sobre cómo podíamos imprimir una matriz con [Java](https://www.manualweb.net/java/).


Y es que en el artículo sobre [cargar una matriz por teclado en Java](http://lineadecodigo.com/java/cargar-una-matriz-por-teclado-en-java/) lo que hacíamos era mostrar la matriz por posiciones. Ahora la idea es imprimirla de una forma más matemática. Algo parecido a:


![](http://lineadecodigo.com/wp-content/uploads/2012/12/matriz.png)


### Definir una matriz en Java


Así que vamos con la tarea de imprimir una matriz con [Java](https://www.manualweb.net/java/). Lo primero será [cargar la matriz](http://lineadecodigo.com/java/cargar-una-matriz-por-teclado-en-java/). No nos vamos a complicar mucho y lo que vamos a hacer es cargarla directamente.


```java
int matriz[][] = new int[3][3];
matriz[0][0] = 2;
matriz[0][1] = 4;
matriz[0][2] = 4;
matriz[1][0] = 6;
matriz[1][1] = 6;
matriz[1][2] = 9;
matriz[2][0] = 8;
matriz[2][1] = 10;
matriz[2][2] = 1;
```


> Recuerda que las matrices en Java son [arrays](https://manualweb.net/java/arrays-java/) bidimensionales. Es por ello que la definición tienen dos dimensiones.


### Imprimir una matriz con Java por consola


Ahora pasaremos a imprimirla. Para ello utilizamos dos [estructuras for](https://manualweb.net/java/sentencias-bucle-java/#for) anidadas. La primera irá incrementando las filas, es decir, el valor de la X y la segunda incrementará por cada fila el valor de las columnas, es decir, la Y.


```java
for (int x=0; x < matriz.length; x++) {
  for (int y=0; y < matriz[x].length; y++) { ... }
}
```


Vemos que los bucles for van desde la posición 0 hasta el tamaño que tenga la matriz [Java](https://www.manualweb.net/java/). En el caso de las filas, será el tamaño general.


```java
matriz.length;
```


Y en el caso de cada fila fijamos la dimensión x.


```java
matriz[x].length;
```


Ahora, por cada fila vamos a imprimir los elementos, pero sin salto de línea. Es decir utilizando un [`System.out.print`](https://www.w3api.com/Java/PrintStream/print/):


```java
for (int y=0; y < matriz[x].length; y++) {
    System.out.print (matriz[x][y]);
    if (y!=matriz[x].length-1) System.out.print("\t");
}
```


Además hemos añadido, una tabulación, es decir, una separación entre cada posición. La tabulación la aplicaremos detrás de cada número, excepto del último. Es por ello que hacemos la validación:


```java
if (y!=matriz[x].length-1) System.out.print("\t");
```


> Recuerda que las tabulaciones se consiguen mediante el carácter escapado `\t`.


Una vez impresa cada fila, ahora es cuando hay que dar un salto de línea mediante un [`System.out.print`](https://www.w3api.com/Java/PrintStream/print/).


```java
for (int x=0; x < matriz.length; x++) {
  for (int y=0; y < matriz[x].length; y++) {
    System.out.print (matriz[x][y]);
    if (y!=matriz[x].length-1) System.out.print("\t");
  }
}
```


Ya solo nos quedará meter algún decorador adicional, al gusto, y el código final [Java](https://www.manualweb.net/java/) que nos imprimirá la matriz quedará de la siguiente forma:


```java
for (int x=0; x < matriz.length; x++) {
  System.out.print("|");
  for (int y=0; y< matriz[x].length; y++) {
    System.out.print (matriz[x][y]);
    if (y!=matriz[x].length-1) System.out.print("\t");
  }
  System.out.println("|");
}
```


Espero que con esto hayas aprendido a cómo puedes imprimir una matriz con [Java](https://www.manualweb.net/java/) por consola.


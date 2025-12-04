---
title: Crear una matriz en Java
description: "Código fuente que nos explica cómo podemos crear una matriz en Java, las diferentes formas de insertar datos y como listar su contenido."
lastUpdated: 2023-09-17
slug: /java/crear-una-matriz-en-java/
author: victor_cuervo
---

En el ejemplo de hoy vamos a aprender a cómo podemos crear una matriz en [Java](https://www.manualweb.net/java). Para ello definiremos su estructura para posteriormente cargar el contenido de la matriz en cada una de sus posiciones.


Pero lo primero que tenemos que saber ¿qué es una matriz matemática? Una matriz matemática es una tabla bidimensional de números. Las matrices pueden sumarse, multiplicarse,... Y suelen ser utilizadas para describir sistemas de ecuaciones lineales.[ Puedes leer más sobre matrices en Wikipedia](http://es.wikipedia.org/wiki/Matriz_(matem%C3%A1tica)).


Si queremos representar una matriz en [Java](https://www.manualweb.net/java) hay que crear un **array bidimensional**. Por ejemplo para declarar una matriz de 3x3 haríamos lo siguiente:


```java
int matriz[][] = new int[3][3];
```


Vemos que es igual que [definir un array en Java](https://lineadecodigo.com/java/inicializar-un-array-en-java/), pero en este caso indicamos dos dimensiones mediante el operador corchete [].


Ahora procedemos a cargar la matriz con valores. Para ello tenemos que saber que las posiciones se indican mediante los valores (x,y) de la matriz y que dichos valores los especificaremos utilizando el operador corchete [].


Así que la matriz de 3x3 que acabamos de definir con la línea de código anterior podremos cargarla de la siguiente manera:


```java
matriz[0][0] = 2;
matriz[0][1] = 4;
matriz[0][2] = 4;
matriz[1][0] = 6;
matriz[1][1] = 6;
matriz[1][2] = 9;
matriz[2][0] = 8;
matriz[2][1] = 10;
matriz[2][2] = 12;
```


> Hay que recordar que l**os elementos empiezan a numerarse por 0**. Así la esquina superior izquierda de la matriz será el elemento [0][0] y la esquina inferior derecha será el [2][2].


Podemos crear e instanciar la matriz en una única línea, lo cual es más sencillo de codificar, más si sabemos de antemano los valores.


```java
int [][] matriz = {{2,4,4},{6,6,9},{8,10,12}};
```


En este caso vemos que no hace falta indicar mediante el operador corchete la posición de la matriz y el valor asociado, si no que se le pasa una lista de elementos separados entre sí mediante corchetes. Cada lista de elementos entre corchetes representa una de las filas de la matriz y todas las listas de corchetes se agruparán en una superior que representa la tabla.


Si lo que ahora queremos el listar el contenido de la matriz, al igual que hacíamos con los array nos podemos apoyar en la propiedad `.lenght` del array. De esta manera podremos listar el contenido de la matriz mediante el siguiente código fuente en [Java](https://www.manualweb.net/java).


```java
for (int x=0; x < matriz.length; x++) {
  for (int y=0; y < matriz[x].length; y++) {
    System.out.println (matriz[x][y]);
  }
}
```


Como hemos podido observar en el código fuente es muy sencillo el poder crear una matriz en [Java](https://www.manualweb.net/java) para cargarla de contenido y posteriormente listarla.


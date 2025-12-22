---
title: "Rotar una matriz"
description: "Código que explica cómo rotar una matriz cuadrada 90º en el sentido de las agujas del reloj mediante código Java moviendo filas a columnas."
lastUpdated: 2025-12-22
slug: java/rotar-una-matriz
author: victor_cuervo
---

En el ejemplo de hoy vamos a ver cómo podemos rotar una matriz con [Java](http://www.manualweb.net/java). Ya vimos [cómo rotar los elementos de un array](http://lineadecodigo.com/java/rotar-un-array/), que era más sencillo. Pero en este caso veremos que se complica un poco más, aunque acaba siendo sencillo. Lo primero es definir qué significa rotar una matriz. La idea es rotar los elementos en la dirección de las agujas del reloj por 90º. Vamos a asumir que la matriz es de 3x3 para poder explicar de forma sencilla el ejemplo. A la hora de rotarla lo que hacemos es que la primera fila se convierta en la última columna, la segunda fila se convierta en la segunda columna y la última fila se convierta en la primera columna. Lo mismo si lo moramos por columnas, ya que la primera columna se convertirá en la primera fila, la segunda columna se convertirá en la segunda fila y la tercera columna será la última fila. Eso sí, siempre teniendo en cuenta que se gira 90º hacía la derecha. Y como una imagen vale más que mil palabras veamos cómo sería la rotación.


```text
|1      2       3|              |7      4       1|
|4      5       6|      =>      |8      5       2|
|7      8       9|              |9      6       3|
```


Lo primero que haremos será [instanciar una sencilla matriz en Java](http://lineadecodigo.com/java/crear-una-matriz-en-java/) de la siguiente forma:


```java
int[][] matriz = {{1,2,3},{4,5,6},{7,8,9}};
```


Además crearemos otra variable que vaya a contener la matriz rotada. En este caso creamos una matriz con el mismo tamaño que tiene la matriz actual.


```java
int tamanio = matriz.length;
int[][] nuevamatriz = new int[tamanio][tamanio];
```


> Cuidado que hemos asumido que la matriz cuadrada, en este caso de 3x3. Si no es así en el paso anterior habría que hacer algún ajuste.


Para rotar la matriz lo que vamos a hacer es recorrer la primera matriz [tal cual veíamos en el ejemplo de imprimir una matriz con Java](http://lineadecodigo.com/java/imprimir-una-matriz-con-java/). Para ello nos ayudamos de dos bucles for que controlen el número de filas y el tamaño de las columnas mediante el atributo  `.length`.


```java
for (int x=0;x<tamanio;x++) {
  for (int y=0;y<tamanio;y++) {
    // Ejecutamos la rotación
  }
}
```


Ahora es cuando aplicamos la lógica de la rotación. Si recordamos, la columna pasa a ser la fila. Por lo que la coordenada y se cambia de posición. Y en el caso de la fila se cambia de rota de tal manera que el primero pasa a ser el último, el segundo el penúltimo,... así hasta el último que pasa a ser el primero Codificado quedaría de la siguiente forma:


```java
nuevamatriz[y][tamanio-1-x] = matriz[x][y];
```


Si pasamos este código al interior del bucle dejaríamos el código de la siguiente manera:


```java
for (int x=0;x<tamanio;x++) {
  for (int y=0;y<tamanio;y++) {
    nuevamatriz[y][tamanio-1-x] = matriz[x][y];
  }
}
```


Con esto ya solo nos quedaría imprimir la nueva matriz para ver el resultado por pantalla de **cómo ha quedado al rotar la matriz con Java.**


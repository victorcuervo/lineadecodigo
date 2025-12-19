---
title: "Dibujar una figura con bucles"
description: "Ejemplo que nos muestra como podemos dibujar una figura con bucles mediante Java."
lastUpdated: 2025-12-19
slug: java/dibujar-una-figura-con-bucles
author: victor_cuervo
---

En el ejemplo [Dibujando una figura](http://lineadecodigo.com/2007/05/06/dibujando-una-figura/) nos explicaba como generar una figura por consola utilizando bucles while con el lenguaje [Java](https://www.manualweb.net/java/). La figura generada era la siguiente:


```text

*
**
***
****
*****
******
*******
```


En uno de los comentarios nos preguntaban, cómo podíamos ampliar el código para poder dibujar una figura más elaborada. Nuevamente veremos como dibujar una figura con bucles en [Java](https://www.manualweb.net/java/). La figura en cuestión sería la siguiente:


```text

*
**
***
****
*****
******
*******
********
*******
******
*****
****
***
**
*
```


Para poder acometer el diseño de la segunda figura, esta la dividimos en dos partes. En la primera se incrementarán el número de elementos por cada fila que añadimos, mientras que en la segunda se decrementaran el número de elementos en cada línea que añadamos. Es por ello que, consecuentemente, tendremos un bucle que incrementará sus valores y otro que decrementará los valores. Para controlar el número de filas a pintar tenemos la variable "total_filas". Es por ello que en el primer bucle iremos decrementando el valor del total hasta que llegue a cero. Para ello utilizaremos una segunda variable llamada filas.


```java
 int total_filas = 7;
 int filas = total_filas; 
  
 while (filas > 0) {
    filas--;
 }           
```


Para saber cuantos asteriscos poner en una fila realizaremos un sencillo cálculo que corresponde con restar del total el número de filas que nos quedan. Y sumaremos uno. Así tendremos el siguiente cálculo:


Fila 1. filas_totales= 7 - filas=7 » 0 »
* Fila 2. filas_totales= 7 - filas=6 » 1 »
** Fila 3. filas_totales= 7 - filas=5 » 2 »
*** Fila 4. filas_totales= 7 - filas=4 » 3 »
**** ... 


Para pintar la segunda parte del bucle en vez de asignar a la variable "filas" el valor de "filas_total" le asignamos 0. De esta manera el contador lo iremos incrementando:


```java
 int total_filas = 7;
 int filas = 0; 
  
 while (filas < total_filas) {
    filas++;
 }           
```


> La variable de salida del bucle es "total_filas"


Para insertar los asteriscos realizaremos la misma operación. Como hemos cambiado el número de la variable "filas" tendremos la siguiente secuencia:


Fila 1. filas_totales= 7 - filas=0 » 7 » ******** (8 asteriscos) Fila 2. filas_totales= 7 - filas=1 » 6 » *******


Fila 3. filas_totales= 7 - filas=2 » 5 » ******


Fila 4. filas_totales= 7 - filas=3 » 4 » ***** 


... Una buena forma de aprender a manejar los bucles


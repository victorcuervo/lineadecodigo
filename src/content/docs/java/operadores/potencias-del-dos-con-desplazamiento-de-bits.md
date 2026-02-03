---
title: "Potencias del dos con desplazamiento de bits"
description: "Cómo poder calcular potencias del dos con desplazamiento de bits mediante Java."
date: 2009-01-27
updatedDate: 2026-01-08
tags: ["pow","bits","operadores"]
slug: java/operadores/potencias-del-dos-con-desplazamiento-de-bits
author: Víctor Cuervo
type: doc
topic: java
id: 156f0ee5-fc41-4b28-bf4c-36bb7a0837af
download: http://code.google.com/p/lineadecodigo/source/browse/trunk/lineadecodigo_java/src/com/lineadecodigo/java/math/PotenciasDelDosConBits.java
---

Hace unos días explicabamos el ejemplo de cómo obtener las [potencias del dos con Java](http://lineadecodigo.com/2009/01/16/potencias-del-dos-con-java/). Para ello nos apoyabamos sobre la clase [Math](https://www.w3api.com/Java/Math/) y el método [.pow](https://www.w3api.com/Java/Math/.pow()). Si bien, para el caso del número 2, y como nos comentaba Le Funes hay una forma de mostrar las potencias del dos con desplazamiento de bits. Y es que todo número tiene su representación en binario. Entendiendo que en el lenguaje binario se representa todo con ceros y unos. Así la representación en binario del 1 es 1, la del 3 es 11, la de 8 es 1000, la del 9 es 1001,... Para calcular el número decimal de un número binario es tan sencillo como obtener la posición del número, empezando por la derecha como posición cero, elevar su valor a la potencia del 2 y sumar todos los números. En el caso del 9 sería, que sería 1001, el calculo lo haríamos como:


```text
  2^3 = 8
+ 2^0 = 1
  -------
        9
```


Lo que vamos a hacer para nuestro ejemplo es apoyarnos en esta característica e ir desplazando un 1 hacía la izquierda. Algo como lo siguiente:


```text
000001 = 1
000010 = 2
000100 = 4
001000 = 8
010000 = 16
100000 = 32
```


Para desplazar el bit a la izquierda lo hacemos con el operador de desplazamiento <<. La operación sería de la siguiente manera:


```text
1 << 1 // Para desplazar una posición
1 << 2 // Para desplazarlo dos posiciones
1 << 3 // Para desplazarlo tres posiciones
...
```


Así que solo nos queda meterlo en un bucle para sacar todas las potencias del dos.


```java
int iNumeroPotencias = 10;

for (int x=0;x<=iNumeroPotencias;x++)
  System.out.println("2 elevado a " + x + " igual a " + (1 << x));
```


Gracias a [Le Funes](http://lefunes.wordpress.com/) por su colaboración.


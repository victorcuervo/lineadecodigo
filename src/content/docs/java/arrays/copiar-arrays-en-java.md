---
title: "Copiar arrays en Java"
description: "El documento explica cómo copiar arrays en Java utilizando bucles y la función arrayCopy del sistema."
date: 2007-06-19
updatedDate: 2026-01-11
tags: ["arraycopy","exception","indexoutofboundsexception","array","bucles","for","nullpointerexception"]
slug: java/arrays/copiar-arrays-en-java
author: victor_cuervo
type: doc
topic: java
id: 5fcb0da1-3841-4cbf-b72b-853434bb9739
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/CopiarArrays.java
---

Muchas veces nos vamos a encontrar ante la disyuntiva de tener que copiar los elementos de un array en otros. Normalmente será para manipular el contenido del mismo guardando en uno de los arrays los datos originales. Asumida ya la situación, lo primero que se nos ocurriría, independientemente del lenguaje en el que nos encontremos, será el montar un algoritmo que recorriendo el primer array vaya copiando dichos elementos en el segundo. En [Java](https://www.manualweb.net/java/) nos quedaría un código como este:


```java
for (int x=0;x<aOrigen.length;x++)
  aDestino[x] = aOrigen[x];
```


En este sentido nada que objetar, ya que es muy buena práctica de programación. Pero todo buen programador tiene que tener en mente el concepto de "reutilización". No "reutilización" cómo copia (o fusilamiento -argot de muchos programadores-) del código. Sino "reutilización" pensando en que alguien ya puede haberse encontrado el problema y haberle dado ya una solución. Para poder reutilizar tenemos que ser conscientes de lo que el entorno en el que estamos nos ofrece. Y en el caso de [Java](https://www.manualweb.net/java/), es la librería del sistema la que nos ofrece una función para la copia de arrays. Como vemos en el siguiente código:


```java
System.arrayCopy(aOrigen,inicioArrayOrigen,aDestino,
  inicioArrayDestino,numeroElementosACopiar);
```


Hay que tener cuidado [la función arrayCopy](https://www.w3api.com/Java/System/arraycopy/) ya que esta nos puede devolver las siguientes excepciones: IndexOutOfBoundsException si intentamos copiar fuera del área reservado para el array, ArrayStoreException si intentamos copiar arrays de diferente tipo o [NullPointerException](https://www.w3api.com/Java/NullPointerException/) si alguno de los array es nulo (vamos, no inicializado).


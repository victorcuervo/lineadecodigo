---
title: "Buscar la última posición de elemento en un ArrayList"
description: "Artículo que nos explica cómo podemos manejar el método .lastIndexOf() para poder buscar la última posición de elemento en un ArrayList."
lastUpdated: 2025-12-19
slug: java/buscar-la-ultima-posicion-de-elemento-en-un-arraylist
author: victor_cuervo
---

Ya hemos visto [cómo podemos buscar un elemento en un ArrayList](http://lineadecodigo.com/java/buscar-elementos-en-un-arraylist/). Pero qué sucede si este elemento aparece muchas veces, cómo podemos buscar la última posición de elemento en un ArrayList con [Java](https://www.manualweb.net/java). ¿Tenemos que ir recorriendo todo el [`ArrayList`](http://w3api.com/Java/ArrayList/) hasta que demos con la última ocurrencia? De primeras podríamos volver a confiar en el método [`.indexOf()`](http://w3api.com/Java/ArrayList/indexOf) del [`ArrayList`](http://w3api.com/Java/ArrayList/) para poder buscar todas las veces que aparece un elemento y dar con la última. Hay que tener en cuenta, que en este caso deberíamos de ir recortando el contenido del [`ArrayList`](http://w3api.com/Java/ArrayList/) para poder ir buscando solo sobre la parte restante. Pero en este artículo vamos a ver una opción más sencilla de realizar esta búsqueda. Lo primero, como siempre hacemos con [los ejemplos de ArrayList](https://lineadecodigo.com/tag/java-collection-arraylist/), es [definir el ArrayList](https://lineadecodigo.com/java/crear-un-arraylist-en-java/) y [cargarle elementos](https://lineadecodigo.com/java/insertar-elementos-en-un-arraylist/). El código [Java](https://www.manualweb.net/java) que tenemos que escribir es muy sencillo:


```java
ArrayList<String> list = new ArrayList<String>();

// Añadimos elementos
list.add("Marta");
list.add("Luis");
list.add("Francisco");
list.add("Luis");
list.add("Sonsoles");
list.add("José");
```


Y ahora definiremos el nombre del elemento del cual queremos saber su última posición. Al haber definido un [`ArrayList`](http://w3api.com/Java/ArrayList/) de elementos de tipo `String`, será una cadena de tipo `String` la que nos sirva para guardar este elemento.


```java
String sElementoaBuscar = "Luis";
```


Lo siguiente que vamos a hacer es recurrir al método [`.lastIndexOf()`](http://w3api.com/Java/ArrayList/lastIndexOf), este método de la clase [`ArrayList`](http://w3api.com/Java/ArrayList/) te devuelve la última posición de un elemento dentro del array o bien un número negativo si no encuentra el elemento dentro del [`ArrayList`](http://w3api.com/Java/ArrayList/).


```java
int posicion = list.lastIndexOf(sElementoaBuscar);

if (posicion >0)
  System.out.println("El último elemento " + sElementoaBuscar + " está en la lista en la posición " + posicion+1);
else
  System.out.println("El elemento " + sElementoaBuscar + " NO está en la lista");
```


Vemos que después de invocar al método [`.lastIndexOf()`](http://w3api.com/Java/ArrayList/lastIndexOf) utilizamos [una estructura selectiva if-then-else](https://www.manualweb.net/java/sentencias-decision-java/#if-then-else) para poder determinar si está dentro o no del array. En caso afirmativo la variable iPosicion contiene la última posición en la que se ha encontrado el elemento dentro del [`ArrayList`](http://w3api.com/Java/ArrayList/). De esta forma tan sencilla y simplemente utilizando el método [`.lastIndexOf()`](http://w3api.com/Java/ArrayList/lastIndexOf) podemos buscar la última posición de elemento en un ArrayList con [Java](https://www.manualweb.net/java).


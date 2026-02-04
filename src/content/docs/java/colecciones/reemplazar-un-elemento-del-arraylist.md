---
title: "Reemplazar un elemento del ArrayList"
description: "Ejecución del método set para poder reemplazar un elemento del ArrayList."
date: 2014-11-18
updatedDate: 2026-01-11
tags: ["Java Collection","Java Collection ArrayList","arraylist","iterator"]
slug: java/colecciones/reemplazar-un-elemento-del-arraylist
type: doc
topic: java
id: 36e9f955-400e-4d0b-a69e-a11d5dc10cb7
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/lista/ReemplazarElementoLista.java
---

Un [`ArrayList`](https://www.w3api.com/Java/ArrayList/removeIf/) contiene una lista de elementos enlazados. Cuando estemos manipulando una lista es posible que necesitemos **reemplazar un elemento del ArrayList**. De esta forma sustituiremos el contenido de uno de estos elementos por otro contenido.


### Crear el ArrayList


Para ilustrar el ejemplo vamos a empezar creando un [`ArrayList`](https://www.w3api.com/Java/ArrayList/removeIf/):


```java
ArrayList<String> lista = new ArrayList<String>();
lista.add("Víctor");
lista.add("Luis");
lista.add("Elena");
lista.add("María");
```


### Mostrar el contenido


Si recorremos y mostramos el contenido del [`ArrayList`](https://www.w3api.com/Java/ArrayList/removeIf/) por pantalla utilizando un iterador:


```java
Iterator<String> it = lista.iterator();
while (it.hasNext()) {
  System.out.println([it.next](http://it.next/)());
}
```


Veremos que se nos muestra el contenido:


```shell
Víctor
Luis
Elena
María
```


## Reemplazar un elemento


Ahora vamos a **reemplazar un elemento del ArrayList**. En concreto vamos a cambiar el valor del elemento "Elena". Para ello necesitamos saber dos cosas:

- La primera es que el método que nos permite cambiar un valor es el [método `.set()`](https://www.w3api.com/Java/ArrayList/set/)
- La segunda es la posición que ocupa el elemento a reemplazar

Así ejecutamos el siguiente código:


```java
lista.set(2, "Teresa");
```


Vemos que se indica el valor `2` como parámetro ya que las posiciones del [`ArrayList`](https://www.w3api.com/Java/ArrayList/removeIf/) empiezan a enumerarse desde el 0.


## Verificar el cambio


Si ahora volvemos a mostrar el contenido del [`ArrayList`](https://www.w3api.com/Java/ArrayList/removeIf/) saldrá por pantalla:


```shell
Víctor
Luis
Teresa
María
```


Ya hemos visto lo sencillo que es **reemplazar un elemento del ArrayList** mediante el [método `.set()`](https://www.w3api.com/Java/ArrayList/set/).


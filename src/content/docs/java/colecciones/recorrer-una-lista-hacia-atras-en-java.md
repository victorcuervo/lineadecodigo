---
title: "Recorrer una lista hacia atrás en Java"
description: "Cómo utilizar un ListIterator para poder recorrer una lista hacia atrás en Java."
date: 2007-07-18
updatedDate: 2026-01-09
tags: ["listiterator","previous","hasprevious","list","size","java-util"]
slug: java/colecciones/recorrer-una-lista-hacia-atras-en-java
author: victor_cuervo
type: doc
id: 4bdbf367-d9f5-4166-af1d-0ec9acb52cb2
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/RecorrerListaHaciaAtras.java
---

Lo más normal es que queramos recorrer una lista de inicio a fin. Pero, quien nos dice que no queramos hacer esto al revés. Es verdad que una opción sería dar la vuelta a la lista y recorrerla normalmente (como explica el artículo [Invertir una lista](http://lineadecodigo.com/java/invertir-una-lista/)). Si para recorrer una lista, en [Java](https://www.manualweb.net/java/), hacia delante nos basamos en el [método .next()](https://www.w3api.com/Java/ListIterator/next/) para recorrerla hacía atrás nos basaremos en [el método .previous()](https://www.w3api.com/Java/ListIterator/previous/). Pero antes de todo esto lo que tenemos que hacer es obtener un iterador sobre la lista. El iterador lo obtendremos del último elemento de la lista. El último elemento de la lista nos lo dará el método .size().


```java
ListIterator iter = list.listIterator(list.size());
```


Controlaremos el inicio de la lista con el método .hasPrevious().


```java
while (iter.hasPrevious())
      System.out.println(iter.previous());
```


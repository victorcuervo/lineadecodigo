---
title: "Invertir una Lista"
description: "Este ejemplo muestra cómo invertir una lista en Java utilizando la clase Collections y su método reverse."
date: 2007-01-30
updatedDate: 2026-01-09
tags: ["java-collection","arraylist","reverse"]
slug: java/colecciones/invertir-una-lista
type: doc
topic: java
id: 79a40e28-3e18-4fd3-a657-ab8c5ebe7055
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/InvertirLista.java
---

La idea de este ejemplo es ver cómo podemos dar la vuelta a los elementos de una lista en [Java](https://www.manualweb.net/java/). Es decir, partiendo de la situación:


```text
Lista: 1 2 3 4 5 6 7 8 9 10
```


Llegar a la situación...


```text
Lista: 10 9 8 7 6 5 4 3 2 1
```


Inicialmente podríamos pensar en un algoritmo para realizar uno mismo los movimientos. Por ejemplo, me creo una segunda lista de tal manera que voy leyendo la primera lista de atrás adelante e insertando en la segunda lista. Existen varios algoritmos que nos resuelven este problema. Quien no ha oído o leído sobre el algoritmo de selección, de burbuja,.... (Una lectura para documentarse sobre el tema podría ser la página web [Algoritmia.net](http://www.algoritmia.net/), en especial el artículo [http://www.algoritmia.net/articles.php?id=31](http://www.algoritmia.net/articles.php?id=31)). Si bien, [Java](https://www.manualweb.net/java/) nos permite no comernos la cabeza mediante la clase Collections. En este clase se ofrecen un conjunto de operaciones para manipulación de todo tipo de colecciones. Uno de estos métodos es reverse, el cual recibe como parámetro una lista a la que invertirá sus elementos.


```java
Collections.reverse(list);
```


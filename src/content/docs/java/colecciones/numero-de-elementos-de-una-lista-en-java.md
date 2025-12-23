---
title: "Número de elementos de una Lista en Java"
description: "Se explica cómo calcular el número de elementos de una lista en Java usando el método .size()."
lastUpdated: 2025-12-23
slug: java/numero-de-elementos-de-una-lista-en-java
author: victor_cuervo
---

Con este ejemplo vamos a ver como podemos saber el número de elementos que hay dentro de una lista en [Java](https://www.manualweb.net/java/). Para ello nos vamos a apoyar en el [interface List](http://www.w3api.com/Java/List-java-util/) y en la [clase ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/). Lo primero que hacemos es dar de alta la lista e insertarle los elementos. Con esto pretendemos simular una situación en la cual tengamos una lista cargada con elementos, pero sin saber cuantos son. Lo que hacemos es utilizar el [interface List](http://www.w3api.com/Java/List-java-util/), el cual representa una colección de elementos ordenados. Lo que denominaríamos secuencia. Pero solo es un interface. Lo que necesitamos es utilizar una clase que implemente dicho interface. Es por ello que utilizamos la [clase ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/). Veamos como serian las líneas de código para cargar la lista:


```java
// Definimos una ArrayList
List<string> list = new ArrayList<string>();
	   
// Añadimos elementos
list.add("Andrea");
list.add("Amaya");
list.add("Julio");</string></string>
```


Si lo que queremos saber es el número de elementos que hay en la lista deberemos de utilizar [el método .size()](https://www.w3api.com/Java/ArrayList/size/). Es por ello que [línea de código](http://lineadecodigo.com/) será la siguiente:


```java
System.out.println("El numero de elementos de la lista es " + list.size());
```


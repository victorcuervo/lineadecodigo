---
title: Eliminar un elemento de un ArrayList
description: "El ejemplo nos explica el uso del método remove() para eliminar un elemento de un ArrayList indicando la posición que ocupa dicho elemento."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Un [`ArrayList`](https://w3api.com/Java/ArrayList/) es una lista de elementos enlazados en [Java](https://www.manualweb.net/java/). En este ejemplo vamos a ver cómo podemos eliminar un elemento de un [ArrayList](https://w3api.com/Java/ArrayList/) y veremos qué es lo que sucede con el resto de elementos. A diferencia de los arrays tradicionales, un [`ArrayList`](https://w3api.com/Java/ArrayList/) puede cambiar su tamaño dinámicamente. Esto significa que podemos agregar o eliminar elementos a voluntad sin tener que redimensionar manualmente el array.


De igual manera que sucede con el [resto de ejemplos que estamos viendo para manipular los ArrayList](http://lineadecodigo.com/tag/java-collection-arraylist/), vamos a crear el [`ArrayList`](https://w3api.com/Java/ArrayList/).


```java
ArrayList<String> al = new ArrayList<String>();

al.add("Víctor");
al.add("Luis");
al.add("Elena");
```


En los ejemplos suelo utilizar cadenas de texto por comodidad. Pero en el tipo de elemento genérico del [`ArrayList`](https://w3api.com/Java/ArrayList/) podemos utilizar cualquier otro tipo, ya sea primitivo o un objeto. El resultado del código será el mismo.


Es importante ver que especificamos que es de tipo [`String`](https://www.w3api.com/Java/String/) dentro del operador diamante de tipos que pasamos en la definición.


Para eliminar un elemento de un [`ArrayList`](https://w3api.com/Java/ArrayList/) nos vamos a apoyar en el método [`.remove()`](https://w3api.com/Java/ArrayList/remove/). El método [`.remove()`](https://w3api.com/Java/ArrayList/remove/) de un [`ArrayList`](https://w3api.com/Java/ArrayList/) espera como parámetro el índice del elemento que queremos eliminar.


> En [Java](https://www.manualweb.net/java/), los índices de los arrays y las listas comienzan en cero, por lo que el número 1 correspondería al segundo elemento de la lista.


Por lo tanto, si procedemos a ejecutar el código que hemos desarrollado anteriormente sobre el [`ArrayList`](https://w3api.com/Java/ArrayList/) que hemos creado al principio, obtendremos un resultado específico.


El código se ve así:


```java
al.remove(1);
```


Con este fragmento de código, lo que estamos haciendo es eliminar el elemento que se encuentra en la segunda posición del `ArrayList`.


De tal manera que si ahora listamos de nuevo el [`ArrayList`](https://w3api.com/Java/ArrayList/):


```java
Iterator it = al.iterator();
while(it.hasNext())
  System.out.println(it.next());
```


Vamos a explorar y ver que lo que finalmente obtendremos como resultado en nuestra pantalla será lo siguiente:


```shell
Víctor
Elena
```


Ya que el elemento que ocupaba el índice 1, que era "Luis", ha sido eliminado. Es importante recordar que, después de eliminar un elemento, los índices de los elementos restantes se actualizan. Por lo tanto, si eliminamos un elemento en la posición 1, el elemento que estaba en la posición 2 ahora estará en la posición 1.


Como se puede ver, eliminar un elemento de un [ArrayList](https://w3api.com/Java/ArrayList/) es un código muy sencillo. Solo tenemos que tener en cuenta el índice que eliminamos.


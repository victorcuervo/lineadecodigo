---
title: "Inicializar un array en Java"
description: "Artículo que nos enseña dos formas que existen de inicializar un array en Java: en la instanciación y yendo de elemento en elemento."
date: 2007-06-14
updatedDate: 2026-01-07
tags: ["Java Array","Javascript Básicos"]
slug: java/arrays/inicializar-un-array-en-java
author: victor_cuervo
type: doc
id: a63545f6-8baa-442c-987c-7ab0477eea74
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/InicializarArray.java
---

Cuando vayamos a inicializar un [array](https://manualweb.net/java/arrays-java/) en [Java](https://www.manualweb.net/java/) tenemos varias posibilidades de hacerlo. No es que haya una mejor que otra, sino que podríamos decir que dependiendo de las circunstancias que se nos den e incluso de la que nos guste más.


## Inicialización del Array durante la Declaración


Una de las formas más habituales y eficientes de inicializar un [array](https://manualweb.net/java/arrays-java/) en [Java](https://www.manualweb.net/java/) es durante la propia declaración del [array](https://manualweb.net/java/arrays-java/). Esto se puede lograr de la siguiente manera:


```java
String a[] = {"Avila","Burgos","León","Palencia","Salamanca",
   "Segovia","Soria","Valladolid","Zamora"};

```


En este caso, es importante destacar que no es necesario que especifiquemos numéricamente el número de elementos que queremos en el array. En su lugar, el tamaño del array se calculará automáticamente en función de la cantidad de elementos que incluyamos entre las llaves en la declaración.


Esta técnica de inicialización es particularmente útil cuando ya sabemos de antemano qué elementos queremos en el [array](https://manualweb.net/java/arrays-java/). Además, simplifica el código y lo hace más legible, ya que se evita tener que llamar a métodos de inicialización por separado.


## Inicialización del Array mediante la asignación directa de elementos


Otra de las formas de inicializar un [array](https://manualweb.net/java/arrays-java/) en [Java](https://www.manualweb.net/java/) es asignando directamente los elementos a cada una de sus posiciones. Este método es particularmente útil cuando conocemos los valores específicos que queremos almacenar en el [array](https://manualweb.net/java/arrays-java/).


El primer paso para utilizar este método es la declaración del [array](https://manualweb.net/java/arrays-java/). La declaración de un [array](https://manualweb.net/java/arrays-java/) implica especificar su tipo y su tamaño. Aquí hay un ejemplo de [cómo se declara un array de cadenas de texto (String](https://lineadecodigo.com/java/matriz-de-cadenas-en-java/)) con un tamaño de nueve elementos:


```java
String b[] = new String[9];

```


Una vez que el array ha sido declarado, podemos comenzar a asignar valores a cada una de sus posiciones. Es importante recordar que, en [Java](https://www.manualweb.net/java/), el índice del primer elemento de un [array](https://manualweb.net/java/arrays-java/) es siempre cero. Es decir, si queremos asignar un valor al primer elemento de nuestro [array](https://manualweb.net/java/arrays-java/), debemos hacerlo en la posición cero.


Aquí está el código que muestra cómo asignar valores a un [array](https://manualweb.net/java/arrays-java/):


```java
b[0] = "Avila";
b[1] = "Burgos";
b[2] = "León";
...

```


Vale la pena señalar que este método de inicialización tiene una limitación conceptual. Es más adecuado cuando conocemos de antemano los elementos que queremos almacenar en el [array](https://manualweb.net/java/arrays-java/). Si no conocemos los elementos que queremos almacenar en un punto específico de nuestro programa, es probable que debamos utilizar otro método de inicialización.


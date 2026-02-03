---
title: "Arrays dinámicos en Java"
description: "Pasos que hay que seguir para poder crear arrays dinámicos en Java en tiempo de ejecución, insertando el tamaño del array por teclado."
date: 2020-03-26
updatedDate: 2026-01-11
tags: ["array","scanner","indexoutofboundsexception"]
slug: java/arrays/arrays-dinamicos-en-java
author: victor_cuervo
type: doc
topic: java
id: 5dad22b7-12cc-4877-afaa-281a4c354026
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/ArrayTamanioDinamico.java
---

Cuando estemos creando nuestros primeros arrays veremos que las estructura de array se crea con un tamaño fijo y que una vez creado el array no podremos cambiar su tamaño. Y que si queremos tener arrays dinámicos en [Java](http://www.manualweb.net/java/) deberemos de recurrir a [elementos como listas en Java](http://lineadecodigo.com/java/crear-un-arraylist-en-java/). Si bien podemos crear dinámicamente un array en [Java](http://www.manualweb.net/java/) asignándole el tamaño en tiempo de ejecución y no en tiempo de desarrollo. Pero lo primero será crear nuestro array básico:


```java
int[] elementos = new int[10];
```


En este caso lo que hemos creado es un array de 10 elementos de tipo entero. Pero también podemos definir el array de la siguiente forma:


```java
int[] elementos = new int[x];
```


En este caso, ¿qué es la x? La x es el valor que podemos asignar al array para que pueda tener un tamaño dinámico. Este valor lo podemos obtener de múltiples forma. En nuestro caso, para el ejemplo de Arrays dinámicos en [Java](http://www.manualweb.net/java/) vamos a pedir el valor de 'x' por pantalla para que nos lo proporcione el usuario. Para ello utilizamos la clase `Scanner`.


```java
System.out.println("Dime el tamaño del Array");
Scanner reader = new Scanner(System.in);
int x= reader.nextInt()
```


Después de la creación vamos a probar acceder a un elemento que esté fuera o dentro del rango que le hemos asignando al array. Si accedemos a un elemento fuera del tamaño saltará una excepción [`ArrayIndexOutOfBoundsException`](https://www.w3api.com/Java/ArrayIndexOutOfBoundsException/).


```java
try {
  elementos[4] = 12;
  System.out.println(elementos[4]);
} catch (ArrayIndexOutOfBoundsException e) {
  System.out.println("Array creado muy pequeño");
}  finally {
  reader.close();
}
```


Espero que sea de utilidad esta pequeña explicación sobre cómo crear arrays dinámicos en [Java](http://www.manualweb.net/java/).


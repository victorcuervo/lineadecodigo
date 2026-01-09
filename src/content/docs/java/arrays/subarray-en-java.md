---
title: "Subarray en Java"
description: "Utilización del método .copyOfRange() para poder definir un método qe nos devuelva un subarray en Java independientemente del tipo de datos."
date: 2020-09-14
updatedDate: 2026-01-09
tags: ["array","subarray"]
slug: java/arrays/subarray-en-java
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/SubArray.java
topic: java

---

En este ejemplo vamos a ver cómo podemos obtener un subarray en [Java](http://www.manualweb.net/java). La idea es, que a partir de un array original, obtengamos otro que sea conformado por parte del array inicial.


## Definir método para crear subarray


La idea es crear un método que nos permita devolver un subarray enviándole el array inicial y los puntos desde y hasta con los que queremos conformar el subarray. Así la signatura de este método será la siguiente:


```java
public static<T> T[] subarray (T[] array, int inicio, int fin) {}
```


Por un lado podemos observar que tanto el array original que se le pasa como el subarray que se devuelve como retorno están identificados del **tipo genérico <T>** para que podamos utilizar el método con cualquier tipo de dato que albergue el array. Por otro vemos que hay dos valores de inicio a fin en los cuales indicaremos la posición inicial y final del array que conformará el subarray de retorno. Para poder implantar el método vamos a apoyarnos en la clase `Arrays`, la cual nos ofrece el método `.copyOfRange()`. Dicho método lo que hace es devolver una copia de un array desde una posición inicial hasta una posición final. Justo los parámetros que entraban en nuestro método. Así la codificación del mismo quedará de la siguiente manera:


```java
public static<T> T[] subarray (T[] array, int inicio, int fin) {
  return Arrays.copyOfRange(array,inicio-1,fin);
}
```


Directamente devolvemos el array que es resultado de la ejecución del método `.copyOfRange()` para que sea utilizado al invocarlo.


## Invocar al método para crear subarray


Ahora vamos a preparar los elementos que nos permiten ejecutar dicho método. Lo primero será [definir un array](http://lineadecodigo.com/java/inicializar-un-array-en-java/) origen:


```java
Integer[] numeros = {1,2,3,4,5,6,7,8,9,10};
```


En este caso hemos creado un array de números Integer, aunque, como habíamos dicho con anterioridad, el método `.subarray()` acepta tipos de datos genéricos por lo que podríamos haberlo definido de cualquier otro tipo. Lo siguiente será definir la variable que contenga el subarray. Esta variable la vamos a instanciar directamente con el array que nos devuelve el método `.subarray()`.


```java
Integer[] parcial = subarray(numeros,1,4);
```


Si observamos el código veremos que hemos creado un subarray en [Java](/67f9b782ca164c0a8ba5299c906b58f1) que va desde la primera posición hasta la cuarta posición. Podemos recorrer el array para observar que se han insertado los números que están entre estas dos posiciones: 


```java
for (int x=0;x<parcial.length;x++){
	System.out.println(parcial[x]);
}
```


De esta forma tan sencilla hemos construido un método que nos permite obtener un subarray en [Java](http://www.manualweb.net/java/) independientemente del tipo de datos con el que hayamos definido el array.


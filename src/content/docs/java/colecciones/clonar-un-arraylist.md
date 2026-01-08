---
title: "Clonar un ArrayList"
description: "Cómo utilizar el método .clone() parar poder clonar un ArrayList en Java y así tener un ArrayList idéntico al ArrayList original."
date: 2021-10-10
updatedDate: 2026-01-08
tags: ["java-collection","arraylist","add","clone","iterator","remove"]
slug: java/colecciones/clonar-un-arraylist
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/ClonarArrayList.java
topic: java

---

Si estamos [manejando un ArrayList](https://lineadecodigo.com/tag/java-collection-arraylist/) y queremos manipular su contenido, mientras que por otro lado queremos mantener una copia de seguridad del mismo, nos vendrá muy bien el saber cómo clonar un ArrayList en [Java](https://www.manualweb.net/java). Hay que recordar que la clase ArrayList representa una estructura de elementos en forma de array, los cuales, pueden ser redimensionados. Es decir, puede crecer o decrecer de cantidad de elementos a lo largo de la vida del programa. Para [definir un ArrayList](https://lineadecodigo.com/java/crear-un-arraylist-en-java/) de tipo [`String`](http://www.w3api.com/Java/String) haremos lo siguiente:


```java
ArrayList<String> list = new ArrayList<String>();
```


Si queremos que el [`ArrayList`](http://w3api.com/Java/ArrayList/) tenga contenido podemos ir añadiendo elementos mediante el método [`.add()`](http://w3api.com/Java/ArrayList/add)


```java
// Añadimos elementos
list.add("Marta");
list.add("Luis");
list.add("Francisco");
```


Una vez que tenemos este [`ArrayList`](http://w3api.com/Java/ArrayList/) inicial podemos clonarlo y crear un nuevo [`ArrayList`](http://w3api.com/Java/ArrayList/) que contenga los mismos elementos. Para poder clonar un [`ArrayList`](http://w3api.com/Java/ArrayList/) en [Java](https://www.manualweb.net/java) deberemos de acudir al método [`.clone()`](http://w3api.com/Java/ArrayList/clone) el cual aplicaremos sobre el [`ArrayList`](http://w3api.com/Java/ArrayList/) original y nos devolverá un [`ArrayList`](http://w3api.com/Java/ArrayList/) nuevo. Veamos cómo sería el código:


```text
ArrayList<String> list2 = (ArrayList<String>)list.clone();
```


Si [recorremos este nuevo ArrayList](https://lineadecodigo.com/java/recorrer-un-arraylist/) podremos comprobar que el número de elementos es exactamente el mismo que el que tenía el [`ArrayList`](http://w3api.com/Java/ArrayList/) inicial. Podemos hacer esa comprobación de la siguiente manera:


```java
// Obtenemos un Iterador y recorremos la lista.
iter = list2.iterator();
while (iter.hasNext())
  System.out.println(iter.next());
```


Ahora ya son dos ArrayList totalmente diferentes, es decir, cualquier alteración de contenido que hagamos en uno no se replica en otro. Puedes comprobarlo borrando un elemento del [`ArrayList`](http://w3api.com/Java/ArrayList/) inicial y volviendo a listar los elementos.


```java
list.remove(0);
```


De esta forma tan sencilla hemos conseguido clonar un ArrayList en [Java](https://www.manualweb.net/java).


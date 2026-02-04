---
title: "Insertar un elemento en una posición concreta del Vector"
description: "Código fuente que nos ayuda a insertar un elemento en una posición concreta del Vector."
date: 2009-01-19
updatedDate: 2026-01-09
tags: ["vector","add","java-collection"]
slug: java/colecciones/insertar-un-elemento-en-una-posicion-concreta-del-vector
type: doc
topic: java
id: 3dda7cf4-e28f-45c6-a591-f704f54a28ae
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/InsertarElementoVectorPosicionConcreta.java
---

En uno de nuestros artículos podemos leer cómo [insertar elementos en un Vector](http://lineadecodigo.com/2006/12/17/insertar-elementos-en-un-vector/). Y uno de nuestros lectores [nos preguntaba cómo insertar un elemento en una posición concreta de Vector](http://lineadecodigo.com/2006/12/17/insertar-elementos-en-un-vector/#45881). Veamos como hacerlo... Lo primero será declarar un Vector. Para ello utilizamos la clase Vector del paquete java.util. Hay que recordar que desde la versión 5 de Java tenemos que indicar el tipo de elementos que instanciamos dentro del Vector. En nuestro caso insertaremos cadenas de texto:


```java
Vector<string> mivector = new Vector<string>();
```


Lo siguiente será cargar el Vector. La carga del Vector será la siguiente:


```shell
[Posición 0] -> Elemento 1
[Posición 1] -> Elemento 2
[Posición 2] -> Elemento 3
```


Esto lo podemos hacer con una carga normal con el método [.add](https://www.w3api.com/Java/Vector/add/):


```java
mivector.add("Elemento Uno");
mivector.add("Elemento Dos");
mivector.add("Elemento Tres");
```


El siguiente paso será insertar un elemento en una posición concreta del Vector. En concreto insertaremos un elemento en la posición 1. Quedándonos el Vector de la siguiente forma:


```shell
[Posición 0] -> Elemento 1
[Posición 1] -> Nuevo elemento
[Posición 2] -> Elemento 2
[Posición 3] -> Elemento 3
```


Para poder hacer esto volvemos a utilizar el método [.add](https://www.w3api.com/Java/Vector/add/). Si bien, en este caso anteponemos un parámetro indicando la posición en la que queremos insertar el elemento. En nuestro caso el número 1.


```java
mivector.add(1,"Nuevo elemento");
```


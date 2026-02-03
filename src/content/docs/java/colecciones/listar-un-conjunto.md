---
title: "Listar un conjunto"
description: "Utilizar el lenguaje Java para Listar un conjunto o HashSet."
date: 2007-08-03
updatedDate: 2026-01-08
tags: ["hashset","iterator","next","set","hasnext","java-collection"]
slug: java/colecciones/listar-un-conjunto
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-81aa-8cbb-eff3f63beaff
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/ListarConjunto.java
---

En el siguiente ejemplo se muestra cómo volcar el contenido de un [conjunto de datos (HashSet)](https://www.w3api.com/Java/HashSet/). Los conjuntos tienen la propiedad de que no pueden albergar nunca dos elementos con el mismo valor. Lo primero que hacemos es cargar el conjunto...


```java
Set<string> hs = new HashSet<string>();
hs.add("Victor");
hs.add("Amaya");
hs.add("Amaya"); // Los elementos solo pueden estar una vez
hs.add("Javier");
```


Notese que cargamos un elemento repetido (Amaya). Al volcar el contenido del conjunto veremos que dicho elemento solo aparece una vez. Lo siguiente será conseguir un iterador sobre el conjunto...


```java
Iterator iter = hs.iterator();
```


Solo nos quedará dicho iterador para volcar el contenido. Moveremos el iterador mediante el método .next().


```java
while (iter.hasNext())
	System.out.println(iter.next());
```


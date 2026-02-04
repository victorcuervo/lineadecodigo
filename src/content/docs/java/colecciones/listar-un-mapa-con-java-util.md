---
title: "Listar un Mapa con Java Util"
description: "Se explica cómo listar un Mapa con Java Util usando HashMap e iteradores para recorrer claves y valores."
date: 2007-07-12
updatedDate: 2026-01-11
tags: ["hashmap","iterator","hasnext","mapa","clave","valor","java","entryset"]
slug: java/colecciones/listar-un-mapa-con-java-util
type: doc
topic: java
id: 54a7f02a-2ab6-45a9-b15b-4a83a202162c
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/ListarUnMapa.java
---

Un mapa es una estructura de [Java](https://www.manualweb.net/java/) que nos permite almacenar pares clave/valor. De tal manera que para una clave solamente tenemos un valor. Si añadimos un nuevo elemento clave/valor cuando la clave ya existe, se sobrescribe el valor almacenado anteriormente. La estructura a listar que utilizamos como mapa es un [HashMap](https://www.w3api.com/Java/HashMap/). Lo primero que tenemos que hacer es crear el mapa y añadirle elementos:


```java
Map<string,string> hm = new HashMap<string,string>();
		   
hm.put("1","Luis");
hm.put("2","Amaya");
hm.put("3","Julio");
```


Si intentamos añadir otro elemento con una clave ya existente, sobreescribe el valor. Ya que no puede haber elementos duplicados. Para recorrerlo nos apoyaremos sobre un Iterator que será el puntero encargado en recorrer los elementos del mapa. Obtendremos un iterador sobre la estructura invocando los métodos [.entrySet()](https://www.w3api.com/Java/HashMap/.entrySet()) e .iterator(). Usar iteradores permite separar la lógica de la clase de la lógica de la iteración. Los iteradores tienen un comportamiento similar a los enumerados. Para mover el iterador utilizaremos el método .next() y si queremos comprobar que el iterador ha llegado al final de la estructura tenemos el método .hasNext()]


```java
Iterator it = hm.entrySet().iterator();
		
while (it.hasNext()) {
	Map.Entry e = (Map.Entry)it.next();
	System.out.println(e.getKey() + " " + e.getValue());
}
```


De la estructura recuperaremos los valores mediante .getKey(), para la clave y .getValue(), para el valor.


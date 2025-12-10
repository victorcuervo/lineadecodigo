---
title: Insertar elementos en un Vector
description: "Esta página explica cómo insertar elementos en un vector en Java de manera efectiva y sencilla."
lastUpdated: 2025-12-10
slug: java/insertar-elementos-en-un-vector
author: victor_cuervo
---

Hasta la versión [Java SE 5](http://java.sun.com/j2se/1.5.0/) cuando utilizábamos un [Vector](http://www.w3api.com/wiki/Java:Vector), del paquete [java.util](http://www.w3api.com/wiki/Categor%C3%ADa:Java_Util), podíamos insertar cualquier tipo de elemento en el [Vector](http://www.w3api.com/wiki/Java:Vector). Incluso podíamos insertar diferentes tipos de objetos en un mismo [Vector](http://www.w3api.com/wiki/Java:Vector). A partir de la versión [Java SE 5](http://java.sun.com/j2se/1.5.0/) la idea es la de indicar el tipo de objetos que va a manejar el [Vector](http://www.w3api.com/wiki/Java:Vector) cuando se instancia. Lo cual evita que se tenga que hacer un cast cuando se recuperan los elementos del [Vector](http://www.w3api.com/wiki/Java:Vector). Lo primero que tenemos que hacer es instanciar el [Vector](http://www.w3api.com/wiki/Java:Vector). En nuestro caso crearemos un Vector que va a almacenar objetos de tipo [String](http://www.w3api.com/wiki/Java:String). Para ello utilizaremos la siguiente línea de código:


```java
Vector <string> mivector = new Vector<string>();
```


El método que utilizaremos para añadir elementos al [Vector](http://www.w3api.com/wiki/Java:Vector) será el [.add()](http://www.w3api.com/wiki/Java:Vector.add()). El parámetro deberá de ser un objeto que tiene que coincidir con el tipo de la instanciación. Es por ello que en nuestro caso deberemos de añadir objetos [String](http://www.w3api.com/wiki/Java:String). El código quedaría de la siguiente forma:


```java
mivector.add("Elemento UNO");
mivector.add("Elemento DOS");
mivector.add("Elemento TRES");
```


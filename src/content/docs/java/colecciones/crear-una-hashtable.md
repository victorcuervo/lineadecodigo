---
title: "Crear una Hashtable"
description: "Aprende a crear y usar una Hashtable en Java: declara pares clave/valor, inserta datos con put(), recupéralos con get() y conoce sus limitaciones."
date: 2011-03-27
updatedDate: 2026-10-31
tags: ["java-util","hashtable","string","java-collection"]
slug: java/colecciones/crear-una-hashtable
type: doc
topic: java
id: 7756782e-1607-42ff-b791-c7a507e421d7
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/dictionary/CrearHashtable.java
---

## ¿Qué es una Hashtable en Java?


Una [Hashtable](http://w3api.com/wiki/Java:Hashtable) es una estructura [Java](https://lineadecodigo.com/java/) de tipo diccionario que nos permite almacenar elementos identificados por pares clave/valor de una forma muy sencilla. De igual manera, nos permite una recuperación atendiendo a las claves insertadas. La estructura `Hashtable` está definida dentro del paquete [java.util](http://w3api.com/wiki/Categor%C3%ADa:Java_Util). Por ello, lo primero que haremos para crear una `Hashtable` será importar dicho paquete.


## Crear una Hashtable en Java


El constructor de `Hashtable` recibe los tipos de la clave y del valor. En este ejemplo, ambos son cadenas de texto:


```java
import java.util.Hashtable;

Hashtable<String, String> paises = new Hashtable<>();
```


El operador diamante `<>` permite que Java infiera los tipos indicados en la declaración. Está disponible desde Java 7; en versiones anteriores puedes escribir `new Hashtable<String, String>()` de forma explícita.


Para ir añadiendo elementos a la `Hashtable` utilizamos el método `put()`, al cual se le pasan la clave y el valor.


```java
paises.put("ES", "España");
paises.put("UK", "Reino Unido");
paises.put("US", "Estados Unidos");
paises.put("FR", "Francia");
```


Cada clave identifica un único valor. Si vuelves a utilizar una clave que ya existe, `put()` sustituye el valor que estaba asociado a ella.


Y si queremos recuperar alguna clave de la `Hashtable`, utilizamos el método `get()`:


```java
String clave = "US";
System.out.println("El valor de la clave " + clave + " es " + paises.get(clave));
```


El resultado será `El valor de la clave US es Estados Unidos`. Si la clave no está almacenada, `get()` devuelve `null`, por lo que conviene comprobar la existencia de la clave cuando ese caso sea posible.


## Consultar y eliminar elementos


Además de `put()` y `get()`, algunos métodos habituales para trabajar con la tabla son `containsKey()`, `remove()` y `size()`:


```java
if (paises.containsKey("ES")) {
    System.out.println("España está registrada");
}

paises.remove("FR");
System.out.println("Elementos almacenados: " + paises.size());
```


`containsKey()` comprueba si existe una clave, `remove()` elimina la entrada asociada y `size()` devuelve el número de pares clave/valor que contiene la `Hashtable`.


## Recorrer una Hashtable


Para recorrer sus entradas puedes utilizar `entrySet()` junto con un bucle mejorado. El siguiente código muestra cada clave y su valor:


```java
import java.util.Map;

for (Map.Entry<String, String> entrada : paises.entrySet()) {
    System.out.println(entrada.getKey() + " -> " + entrada.getValue());
}
```


`Hashtable` no garantiza un orden concreto de iteración. Por tanto, el orden en el que aparezcan los países puede variar y no debe utilizarse como criterio de ordenación.


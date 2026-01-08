---
title: "Añadir y eliminar elementos de un ArrayList"
description: "Código que nos permite Añadir y eliminar elementos de un ArrayList en Java según el usuario vaya escribiendo ADD o DEL. Controla lista vacía."
date: 2021-10-14
updatedDate: 2026-01-08
tags: ["java-collection","arraylist","bucles","while","add","do-while","remove","list","scanner","isempty"]
slug: java/colecciones/aadir-y-eliminar-elementos-de-un-arraylist
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/AddingDeletingElementsArrayList.java
topic: java

---

En este artículo vamos a ver cómo podemos codificar un programa que nos ayude a añadir y eliminar elementos de un ArrayList con [Java](https://www.manualweb.net/java). Me parece interesante a la hora de aprender a manejar el [`ArrayList`](http://w3api.com/Java/ArrayList/) ya que una de las cosas que tendremos que saber es cómo controlar el tamaño de la lista y validar que esta no esté vacía para poder seguir borrando elementos.


La idea es muy sencilla. Partiremos de un [`ArrayList`](http://w3api.com/Java/ArrayList/) que tiene una serie de elementos. A partir de ahí le pediremos al usuario que nos escriba por teclado "ADD" o "DEL". Mediante el comando "ADD" [añadiremos un elementos al ArrayList](https://lineadecodigo.com/java/insertar-elementos-en-un-arraylist/) y mediante el comando "DEL" [borraremos un elemento del ArrayList](https://lineadecodigo.com/java/eliminar-un-elemento-de-un-arraylist/). En el caso de que la lista esté vacía le indicaremos al usuario que no puede borrar más elementos al no existir elementos dentro de la lista. El programa acabará cuando el usuario escriba "END".


### Crear un ArrayList con Java


Manos a la obra, vamos con nuestro ejemplo que nos permita añadir y eliminar elementos de un ArrayList con [Java](https://www.manualweb.net/java). Lo primero será [crear nuestro ArrayList](https://lineadecodigo.com/java/crear-un-arraylist-en-java/) y le [cargaremos de una serie de elementos](https://lineadecodigo.com/java/insertar-elementos-en-un-arraylist/). No nos complicaremos mucho la vida y crearemos un [`ArrayList`](http://w3api.com/Java/ArrayList/) de tipo [`String`](https://w3api.com/Java/String/).


```java
// Definimos una ArrayList
ArrayList<String> list = new ArrayList<String>();

// Añadimos elementos
list.add("Elemento");
list.add("Elemento");
list.add("Elemento");
```


Lo siguiente, para nuestro ejemplo de añadir y eliminar elementos de un ArrayList con [Java](https://www.manualweb.net/java), será preparar la consola para poder recibir comandos del usuario. En este caso nos vamos a apoyar en la clase [`Scanner`](https://w3api.com/Java/Scanner/) para poder realizar las lecturas.


```java
// Lectura por consola
Scanner reader = new Scanner(System.in);
String sTexto = "";
```


### Estructura principal del ejemplo para añadir y eliminar elementos de un ArrayList con Java


El cuerpo del programa es [un bucle do-while](https://www.manualweb.net/java/sentencias-bucle-java/#do-while) el cual existirá hasta que lo que escriba el usuario sea "END".


```java
do {
  ...
} while(!sTexto.equals("END"));
```


Cada una de las respuestas queda en la variable `sTexto`, la cual analizaremos al final del [bucle do-while](https://www.manualweb.net/java/sentencias-bucle-java/#do-while).


```java
do {
  sTexto = reader.next();
  ...
} while(!sTexto.equals("END"));
```


### Añadir un elemento al ArrayList


En el caso de que el usuario quiera añadir un elemento mediante el comando "ADD"  invocaremos al método [`.add()`](http://w3api.com/Java/ArrayList/add) que nos permite [añadir un nuevo elemento al ArrayList](https://lineadecodigo.com/java/insertar-elementos-en-un-arraylist/).


```java
if (sTexto.equals("ADD"))
  list.add("Elemento");

```


### Eliminar un elemento del ArrayList


Si el usuario quiere eliminar un elemento mediante el comando "END" lo que haremos será invocar al método [`.remove()`](http://w3api.com/Java/ArrayList/remove/). Como el método [`.remove()`](http://w3api.com/Java/ArrayList/remove/) espera la posición de la lista a eliminar, le indicaremos el último elemento, que nos lo da el tamaño de la lista, es decir, el método [`.size()`](http://w3api.com/Java/ArrayList/size) menos 1.


```text
list.remove(list.size()-1);
```


Pero debemos de tener cuidado en el borrado de elementos. Ya que hay que comprobar que la lista no esté vacía. Esto nos lo indica el método [`.isEmpty()`](http://w3api.com/Java/ArrayList/isEmpty). En caso de que devuelva el valor de `true` será que está vacía y `false` si tiene todavía elementos.


```java
if (!list.isEmpty())
  list.remove(list.size()-1);
else
  System.out.println("La lista está vacía. No puedes borrar más elementos.");
```


De esta forma, nuestro [bucle do-while](https://www.manualweb.net/java/sentencias-bucle-java/#do-while), nos va a quedar de la siguiente forma:


```java
do {
  sTexto = reader.next();

  if (sTexto.equals("ADD"))
    list.add("Elemento");
  else if (sTexto.equals("DEL"))
    if (!list.isEmpty())
      list.remove(list.size()-1);
    else
      System.out.println("La lista está vacía. No puedes borrar más elementos.");

  System.out.println("Hay " + list.size() + " elementos en la lista");

} while(!sTexto.equals("END"));
```


Con esto ya habremos completado el código que nos permite añadir y eliminar elementos de un ArrayList en [Java](https://www.manualweb.net/java), controlando, en todo momento, que la lista no está vacía. Espero que os sirva para aprender un poco más a manejar cómo funcionan los [`ArrayList`](http://w3api.com/Java/ArrayList/).


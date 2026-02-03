---
title: "Ordenar un Vector de forma alfabética con Java"
description: "Se explica cómo ordenar un Vector de forma alfabética con Java usando Comparator y métodos de comparación."
date: 2009-03-25
updatedDate: 2026-01-10
tags: ["java-collection","vector","comparable","string","java-util","comparator"]
slug: java/colecciones/ordenar-un-vector-de-forma-alfabetica-con-java
author: Víctor Cuervo
type: doc
topic: java
id: 10396393-e605-4bb0-976a-0bf1763343e5
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/OrdenarVectorAlfabeticamente.java
---

El otro día veíamos [cómo ordenar un vector de string con Java](http://lineadecodigo.com/2009/03/22/ordenar-un-vector-de-string-en-java/). Si bien, teníamos como limitante que el método sort de Collections realizaba una ordenación atendiendo a los caracteres ASCII. Mediante este ejemplo veremos cómo ordenar un Vector de forma alfabética con [Java](https://www.manualweb.net/java/). Para ello nos aprovecharemos de que el método sort tiene dos formas de llamarse. En la primera, y ya utilizada, se le pasa la lista que contiene los elementos a ordenar:


```java
public static <t comparable<?="" extends="" super="" t="">> void sort(List<t> list)</t></t>
```


En la segunda, a parte de la lista de elementos, se le puede pasar una clase que sepa como ordenar dichos elementos y que por lo tanto los ordene a nuestro gusto. Atendiendo a nuestro ejemplo que los ordene de forma alfabética.


```java
public static <t> void sort(List<t> list, Comparator c)</t></t>
```


La clase que tiene la lógica de ordenación será una clase del tipo [Comparator](https://www.w3api.com/Java/Comparator/). Y es que [Comparator](https://www.w3api.com/Java/Comparator/) es un interface a implementar por la clase que contenga la ordenación. El interface [Comparator](https://www.w3api.com/Java/Comparator/) define dos métodos. Uno de los cuales es [.compare()](https://www.w3api.com/Java/Comparator/.compare()), el cual recibe dos objetos de la lista y decide cual es mayor de los dos. Definamos nuestra clase de comparación:


```java
class Comparador implements Comparator<string> {
    public int compare(String s1, String s2) {...}
}
```


Como estamos ordenando un Vector de [String](https://www.w3api.com/Java/String/), la clase que le pasamos al Template será [String](https://www.w3api.com/Java/String/). Volviendo al método [.compare()](https://www.w3api.com/Java/Comparator/.compare()), este deberá de devolver un valor negativo, cero o positivo. Atendiendo a las siguientes reglas:

- negativo, si el primer argumento es más pequeño que el segundo.
- cero, si los dos elementos son iguales.
- positivo, si el primer elemento es más grande que el segundo.

Como a nosotros nos interesa realizar una ordenación alfabética que no identifique mayúsculas y minúsculas, lo primero que haremos será convertir las dos cadenas a minúsculas mediante el método [.toLoweCase()](https://www.w3api.com/Java/String/.toLowerCase()).


```java
s1.toLowerCase();
```


Y posteriormente utilizaremos el método [.CompareTo](https://www.w3api.com/Java/String/.compareTo()) de la clase String, el cual tiene el mismo comportamiento que el definido anteriormente para el método compare(). Así el código nos quedará de la siguiente forma:


```java
class Comparador implements Comparator<string> {
  public int compare(String s1, String s2)
  {        	
		return s1.toLowerCase().compareTo(s2.toLowerCase());
  }
}
```


Ahora solo nos quedará llamar desde la clase que realiza la ordenación al método sort, pasándolo el Vector y la clase que hace la comparación:


```java
Vector<string> miVector = new Vector<string>();
miVector.add("Victor");
miVector.add("julio");
miVector.add("amaya");			
				
Collections.sort(miVector,new Comparador());
```


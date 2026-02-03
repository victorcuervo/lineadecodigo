---
title: "Máximo y mínimo número de un conjunto"
description: "Uso de los métodos max y min del paquete Collection para poder calcular el máximo y mínimo número de un conjunto."
date: 2007-06-26
updatedDate: 2026-01-09
tags: ["comparator","max","min","hashset","set","integer","java-collection"]
slug: java/colecciones/maximo-y-minimo-numero-de-un-conjunto
author: victor_cuervo
type: doc
id: 600715ce-eecf-4a74-aa6e-8c32c8923a69
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/MaximoMinimoConjunto.java
---

El objetivo de este ejemplo es solventar la necesidad de encontrar dentro de un conjunto el número mínimo y máximo del mismo. Podríamos implementar un algoritmo donde recorriendo todos los elementos del conjunto fuésemos preguntando si el elemento es el más pequeño o es el más grande. Si bien, vamos a apoyarnos en el [framework Collection](http://lineadecodigo.com/tag/java-collection/) para llevar a cabo esta casuistica. Dentro del [framework Collection](http://lineadecodigo.com/tag/java-collection/) encontramos dos operaciones:

- **.min(conjunto)**, devuelve el mínimo elemento del conjunto.
- **.max(conjunto)**, devuelve el máximo elemento del conjunto.

Lo primero será el crear el conjunto e incluirle elementos:


```java
Set<integer> hs = new HashSet<integer>();
hs.add(2);
hs.add(4);
hs.add(6);
hs.add(8);
```


El conjunto es representado por [la clase Set, si bien la implementación es un HashSet. El método para añadir los elementos será [.add(elemento)](https://www.w3api.com/Java/HashSet/.add()). Ahora solo nos quedará invocar a los métodos [.max](https://www.w3api.com/Java/Collections/max/) y .min:


```java
System.out.println("El número mayor del conjunto es... "
    + Collections.max(hs));
System.out.println("El número menor del conjunto es... "
    + Collections.min(hs));
```


Invocando dichas operaciones nos olvidamos de cualquier implementación del algoritmo que calcule el mínimo y el máximo. Pero, nos surge una duda ¿Cómo saben estos métodos realizar la comparación entre los números? ¿Y si fuese otro tipo de datos?. A la hora de utilizar dichas operaciones, el framework espera que los elementos de los cuales queremos saber su mínimo y máximo se les pueda aplicar la función compareTo. Clases como Integer, Float,... ya implementan dicha función. No quiere decir que a elementos que no contengan esta función no se les pueda aplicar operaciones del [framework Collections](http://lineadecodigo.com/tag/java-collection/), ya que existe la posibilidad de implementar [el interface Comparator](https://www.w3api.com/Java/Comparator/) para buscar una solución.


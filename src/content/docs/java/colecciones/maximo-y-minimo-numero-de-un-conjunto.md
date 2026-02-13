---
title: "Máximo y mínimo número de un conjunto"
description: "Uso de los métodos max y min del paquete Collection para poder calcular el máximo y mínimo número de un conjunto."
date: 2007-06-26
updatedDate: 2026-02-13
tags: ["comparator","max","min","hashset","set","integer","java-collection"]
slug: java/colecciones/maximo-y-minimo-numero-de-un-conjunto
type: doc
topic: java
id: 600715ce-eecf-4a74-aa6e-8c32c8923a69
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/MaximoMinimoConjunto.java
---

El objetivo de este ejemplo es solventar la necesidad de encontrar, dentro de un conjunto, el número mínimo y el número máximo.


Podríamos implementar un algoritmo que recorra todos los elementos del conjunto y vaya comprobando si el elemento es el más pequeño o el más grande. Sin embargo, vamos a apoyarnos en el [framework Collections](http://lineadecodigo.com/tag/java-collection/) para llevar a cabo esta casuística.


Dentro del framework encontramos dos operaciones:

- `min(conjunto)`: devuelve el elemento mínimo del conjunto.
- `max(conjunto)`: devuelve el elemento máximo del conjunto.

## Crear el conjunto


Lo primero será crear el conjunto e incluirle elementos:


```java
Set<Integer> hs = new HashSet<>();

hs.add(2);
hs.add(4);
hs.add(6);
hs.add(8);
```


El conjunto se representa mediante la interfaz [`Set`](https://www.w3api.com/Java/Set/), y la implementación utilizada es [`HashSet`](https://www.w3api.com/Java/HashSet/). El método para añadir elementos es [`.add(elemento)`](https://www.w3api.com/Java/HashSet/add/).


## Obtener el máximo y el mínimo


Ahora solo nos queda invocar a los métodos [`.max(...)`](https://www.w3api.com/Java/Collections/max/) y [`.min(...)`](https://www.w3api.com/Java/Collections/min/):


```java
System.out.println("El número mayor del conjunto es... " + Collections.max(hs));
System.out.println("El número menor del conjunto es... " + Collections.min(hs));
```


Invocando estas operaciones nos olvidamos de cualquier implementación manual del algoritmo que calcule el mínimo y el máximo.


## Comparación de elementos


Pero nos surge una duda: ¿cómo saben estos métodos realizar la comparación entre los números? ¿Y si fuese otro tipo de datos?


A la hora de utilizar dichas operaciones, el framework espera que a los elementos de los cuales queremos saber su mínimo y máximo se les pueda aplicar la función `compareTo`.


Clases como `Integer`, `Float`, etc. ya implementan dicha función. Esto no quiere decir que a elementos que no la contengan no se les pueda aplicar operaciones del framework, ya que existe la posibilidad de implementar la interfaz [`Comparator`](https://www.w3api.com/Java/Comparator/) para buscar una solución.


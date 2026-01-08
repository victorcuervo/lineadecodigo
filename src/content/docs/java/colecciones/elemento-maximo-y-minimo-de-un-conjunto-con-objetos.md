---
title: "Elemento máximo y mínimo de un conjunto con Objetos"
description: "Como implementar un interface Comparator para poder obtener el elemento máximo y mínimo de un conjunto con Objetos."
date: 2007-07-08
updatedDate: 2026-01-08
tags: ["java-collection","comparator","max","min","compare","equals","class"]
slug: java/colecciones/elemento-maximo-y-minimo-de-un-conjunto-con-objetos
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/ElementoMaximoMinimoConjunto.java
topic: java

---

En el ejemplo de [Calculo del número máximo y mínimo de un conjunto](http://lineadecodigo.com/java/maximo-y-minimo-numero-de-un-conjunto/) veíamos que el algoritmo de cálculo implementado por el FrameWork de las colecciones confiaba en que el tipo de dato utilizado en el conjunto tenía implementado la función compareTo. Lo cual sucede en los tipos de datos básicos. Esto no implica que aquellos tipos de datos que no lo implementen dicho método no puedan utilizar las funciones del FrameWork. Además de las funciones...


```java
.max(conjunto)
.min(conjunto)
```


Tenemos otras dos...


```java
.max(conjunto, comparator)
.min(conjunto, comparator)
```


Estas operaciones sirven para decirle al algoritmo: dame el máximo y mínimo elemento del conjunto y utiliza el [objeto comparator](https://www.w3api.com/Java/Comparator/) que es el que sabe comparar los elementos del conjunto. La verdad es que hablar del objeto comparator es algo erroneo, ya que [Comparator es un Interface](https://www.w3api.com/Java/Comparator/). Dicho interface nos especifica los métodos que hay que implementar para que dos elementos puedan ordenarse. Dos son los métodos del [Interface Comparator](https://www.w3api.com/Java/Comparator/)...


```text
int compare(Object o1, Object o2)
boolean equals(Object obj)
```


Deberemos de implementar estos métodos en una clase, la cual, será la que pasemos como parámetro a las funciones de máximo y de mínimo. Para nuestro ejemplo supongamos que partimos de la clase Persona que será de la siguiente forma....


```java
Class Persona {
     int iEdad;
     String sNombre;
}
```


El objeto compare deberá saber como comparar dos personas. El método devolverá un número positivo si la primera persona es menor que la segunda, cero si las personas son iguales y un número negativo si la segunda persona es mayor que la primera. Asumimos que comparamos a las personas por su edad, quedándonos la siguiente implementación del método compare...


```java
Comparator<persona> comparador = new Comparator<persona>(){
    public int compare(Persona p1, Persona p2) {
        return (p1.getEdad()-p2.getEdad());
    }
};</persona></persona>
```


Por último bastará con pasarle el comparador a las funciones de mínimo y máximo.


```java
System.out.println(Collections.max(hs2,comparador).getNombre());
System.out.println(Collections.min(hs2,comparador).getNombre());
```


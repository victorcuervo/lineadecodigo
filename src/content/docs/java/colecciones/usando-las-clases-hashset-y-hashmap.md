---
title: "Usando las clases HashSet y HashMap"
description: "Explicación de qué podemos hacer usando las clases HashSet y HashMap."
date: 2012-04-11
updatedDate: 2026-01-11
tags: ["java-collection","hashmap","hashset","hashcode"]
slug: java/colecciones/usando-las-clases-hashset-y-hashmap
author: Emmanuel Ramos
type: doc
topic: java
id: 9fee3794-6de9-4aeb-8b8c-1ed47b5683c2
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/Alumnos.java
---

Antes de iniciar a explicar el código, tengo que señalar que tanto la clase [HashSet](https://www.w3api.com/Java/HashSet/) como la clase [HashMap](https://www.w3api.com/Java/HashMap/) tienen una ventaja la cual es, que los valores que se van insertando en la colección internamente no tendrán un orden específico, esto se debe a que **estas clases realizan un ordenamiento interno mediante el hashcode del elemento (Objeto), por lo cual no sabremos qué elemento traerá**.


Esto nos da una ventaja para nosotros que es poder **sobrescribir el método** [**.hashCode()**](https://w3api.com/Java/Object-java-lang/hashCode/) **y** [**.equals()**](https://w3api.com/Java/Object-java-lang/equals/) **para así, si tenemos un objeto que tienen sus mismas características y mismo hashcode no se agregue a la colección**, una de las principales ventajas de este método es la rapidez en la inserción de los elementos si tenemos cientos de elementos que agregar, esta colección es la indicada para este trabajo.


## Algoritmo de búsqueda


El algoritmo de búsqueda de un elemento en la colección es el siguiente:

1. Encuentra el elemento (Objeto) mediante el hashcode. Imagínense varias personas en un salón con la misma edad.
2. Ya que encontró el elemento mediante el hashcode se realiza la comparación si el objeto es igual mediante el método [.equals()](https://w3api.com/Java/Object-java-lang/equals/). Imaginen que en ese mismo salón se está buscando a una persona con un nombre y apellido específico.

## Definir objeto Alumnos


Lo primero será definir un objeto de tipo Alumnos.


```java
public class Alumnos {
    private String name;
    private int age;
    
    public Alumnos(String name, int age) {
        [this.name](http://this.name/) = name;
        this.age = age;
    }
    
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
}
```


Las variables `age` y `name` serán las necesarias para que se comparen los objetos y su hashcode.


## Insertar objetos en HashSet


Lo siguiente que haremos será insertar los objetos Alumnos en un [HashSet](https://www.w3api.com/Java/HashSet/).


```java
HashSet<Alumnos> alumnos = new HashSet<Alumnos>();
alumnos.add(new Alumnos("Juan", 20));
alumnos.add(new Alumnos("Pedro", 21));
alumnos.add(new Alumnos("Maria", 19));
alumnos.add(new Alumnos("Juan", 20)); // Duplicado
```


Si verificamos el tamaño del [HashSet](https://www.w3api.com/Java/HashSet/) alumnos veremos que nos devuelve "4", ya que por defecto el [HashSet](https://www.w3api.com/Java/HashSet/) no realiza ninguna comparación.


```java
System.out.println("Tamaño del HashSet: " + alumnos.size());
```


## Insertar objetos en HashMap


Ahora agregamos 4 objetos alumno a un [HashMap](https://www.w3api.com/Java/HashMap/).


```java
HashMap<Alumnos, String> alumnosMap = new HashMap<Alumnos, String>();
alumnosMap.put(new Alumnos("Juan", 20), "Matrícula 001");
alumnosMap.put(new Alumnos("Pedro", 21), "Matrícula 002");
alumnosMap.put(new Alumnos("Maria", 19), "Matrícula 003");
alumnosMap.put(new Alumnos("Juan", 20), "Matrícula 004"); // Duplicado
```


El método [.size()](https://www.w3api.com/Java/HashMap/.size/) nos devolverá un tamaño de "4" ya que el [HashMap](https://www.w3api.com/Java/HashMap/) tampoco realiza ninguna comparación. De igual manera el método [.keySet()](https://www.w3api.com/Java/HashMap/.keySet/) devuelve todos los elementos del [HashMap](https://www.w3api.com/Java/HashMap/).


```java
System.out.println("Tamaño del HashMap: " + alumnosMap.size());
System.out.println("Claves del HashMap: " + alumnosMap.keySet());
```


## Sobrescribir método equals()


Ahora vamos a cambiar el comportamiento de la clase Alumnos para que al insertarlo en un [HashMap](https://www.w3api.com/Java/HashMap/) o en un [HashSet](https://www.w3api.com/Java/HashSet/) se valide si el elemento insertado ya existe. Sobrescribimos el método [.equals()](https://w3api.com/Java/Object-java-lang/equals/) de tal manera que dos objetos Alumno serán iguales si coinciden sus nombres.


```java
@Override
public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    
    Alumnos alumno = (Alumnos) obj;
    return name.equals([alumno.name](http://alumno.name/));
}
```


## Sobrescribir método hashCode()


De igual manera sobrescribimos el método [.hashCode()](https://w3api.com/Java/Object-java-lang/hashCode/). Para generar el hashcode utilizamos la variable edad y la longitud del String, consiguiendo así un entero.


```java
@Override
public int hashCode() {
    return age + name.length();
}
```


## Validación con HashSet


Ahora, una vez sobrescritos los métodos [.hashCode()](https://w3api.com/Java/Object-java-lang/hashCode/) y [.equals()](https://w3api.com/Java/Object-java-lang/equals/), si verificamos el tamaño del [HashSet](https://www.w3api.com/Java/HashSet/) alumnos veremos que nos devuelve "3" ya que, si hay un elemento igual, el método [.add()](https://www.w3api.com/Java/HashSet/.add/) devolverá false.


```java
System.out.println("Tamaño del HashSet después de sobrescribir: " + alumnos.size());
```


## Validación con HashMap


De igual manera el método [.size()](https://www.w3api.com/Java/HashMap/.size/) sobre el [HashMap](https://www.w3api.com/Java/HashMap/) mostrará los nombres de 3 alumnos ya que el método [.put()](https://www.w3api.com/Java/HashMap/.put/) habrá devuelto false al insertar objetos iguales.


```java
System.out.println("Tamaño del HashMap después de sobrescribir: " + alumnosMap.size());
System.out.println("Claves del HashMap: " + alumnosMap.keySet());
```


## Conclusión


Una cosa que hay que tener en cuenta es que si se sobreescribe solo uno de sus métodos ya sea [.hashCode()](https://w3api.com/Java/Object-java-lang/hashCode/) o [.equals()](https://w3api.com/Java/Object-java-lang/equals/) no tendremos el comportamiento deseado. Hay que sobrescribir los dos.


---
title: "Buscar un objeto en un array"
description: "Artículo que nos explica cómo podemos buscar un objeto en un array Java mediante listas y definiendo un método .equals() para los objetos."
date: 2020-09-10
updatedDate: 2026-01-09
tags: ["array","object","java-util","list","equals","contains","aslist"]
slug: java/clases/buscar-un-objeto-en-un-array
author: victor_cuervo
type: doc
topic: java
id: 735fc7bc-8d93-43b6-80f8-bf03726431f8
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/BuscarEnArrayObjetos.java
---

En [Línea de Código](http://lineadecodigo.com/) hemos visto cómo [realizar búsquedas en arrays](http://lineadecodigo.com/java/buscar-en-un-array/), [implementar búsquedas con diferentes algoritmos](http://lineadecodigo.com/java/implementar-una-busqueda-binaria-con-java/) y [localizar un número en un array](http://lineadecodigo.com/java/buscar-un-numero-en-un-array/). Pero qué sucede **si el contenido del array son objetos**, ¿cómo podríamos buscar un objeto en un array con [Java](http://www.manualweb.net/java/)? Lo primero será definir nuestro array de objetos [Java](http://www.manualweb.net/java/). Para ello definiremos un objeto sencillo Persona con un nombre y una edad.


```java
public class Persona {
  
  String nombre;
  int edad;
  
  public Persona(){}
  
  public Persona(String nombre,int edad){
    this.nombre = nombre;
    this.edad = edad;
  }
  
  public int getEdad() {
    return edad;
  }
  public void setEdad(int edad) {
    this.edad = edad;
  }
  public String getNombre() {
    return nombre;
  }
  public void setNombre(String nombre) {
    this.nombre = nombre;
  }
  

}
```


Lo siguiente será crear el array de objetos `Persona` e añadir varios objetos `Persona` al mismo.


```java
Persona p0 = new Persona("Victor",42);
Persona p1 = new Persona("Marta",34);
    
Persona[] personas = new Persona[2];
personas[0] = p0;
personas[1] = p1;
```


Además tenemos que definir un objeto `Persona` que será el objeto de nuestra búsqueda.


```java
Persona ps = new Persona("Marta",34);
```


Lo que vamos a definir ahora será un método que realice la búsqueda. Este método `searchPerson()` recibirá por parámetro el array de Personas y la Persona que queremos buscar.


```java
private static boolean searchPerson(Persona[] personas, Persona p) { ... }
```


La búsqueda será sencilla ya que lo que haremos es el convertir el array en una lista y utilizar el método `.contains()` de la lista para ver si contiene el elemento.


```java
private static boolean searchPerson(Persona[] personas, Persona p) {
  return Arrays.asList(personas)
           .contains(p);
}
```


Hasta aquí parece que está todo controlado. Pero aunque parezca mentira este código no nos va a funcionar. Y esto es debido a que el método `.contains()` necesita saber cuándo dos elementos son iguales para poder localizar un elemento en la lista. Para los [tipos de datos básicos Java](http://www.manualweb.net/java/tipos-datos-primitivos-java/) no hay problema ya que sabe cómo comparar dos números enteros o dos cadenas, pero para la clase `Persona` que hemos definido no lo sabe. Entonces deberemos de decirle cuando dos personas son la misma. En este caso lo que hacemos es indicar que si el nombre de la persona y su edad es la misma, entendemos que son la misma persona. Esto debemos de indicarlo en un método `.equals()` dentro de la clase `Persona`. El método `.equals()` tiene la siguiente sintaxis:


```java
public boolean equals (Object p) { ... }
```


Así que la implementación que realizaremos será la siguiente:


```java
@Override
public boolean equals (Object p) {
  return (this.nombre.equals(((Persona)p).nombre) && this.edad==((Persona)p).edad);		
}
```


De esta manera cuando se instancien objetos de la clase `Persona` sabremos cómo compararlos y saber si son iguales. Haciendo que la función `10` sirva y nos ayude a resolver el cómo buscar un objeto en un array. La clase `Persona` completa quedará de la siguiente manera:


```java
public class Persona {
  
  String nombre;
  int edad;
  
  public Persona(){}
  
  public Persona(String nombre,int edad){
    this.nombre = nombre;
    this.edad = edad;
  }
  
  public int getEdad() {
    return edad;
  }
  public void setEdad(int edad) {
    this.edad = edad;
  }
  public String getNombre() {
    return nombre;
  }
  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  @Override
  public boolean equals (Object p) {
    return (this.nombre.equals(((Persona)p).nombre) && this.edad==((Persona)p).edad);
  }
  
}
```


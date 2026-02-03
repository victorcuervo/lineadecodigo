---
title: "Pila de Caracteres"
description: "Cómo construir una Pila de Caracteres utilizando una clase StringBuilder en vez de la clase Stack de Java."
date: 2016-03-04
updatedDate: 2026-01-09
tags: ["stack","push","pop","character","stringbuilder"]
slug: java/colecciones/pila-de-caracteres
author: victor_cuervo
type: doc
id: 4435daa4-db8b-4fe2-93ee-fb4a6262b120
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/PilaCaracteres.java
---

Si tenemos la necesidad de crear una pila de caracteres en Java podemos recurrir a la clase Stack para construir dicha pila. Si bien la clase `Stack` solo maneja objetos como elementos a insertar en la pila y no tipos de datos primitivos. Es por ello que la codificación que deberíamos de tener es con elementos `Character`. La codificación de la pila de caracteres sería sencilla.


```java
Stack<character> pila = new Stack<character>();
pila.push('a');
pila.push('b');
pila.push('c');
System.out.println(pila.pop());
```


Los métodos `push()` y `.pop()`nos servirían para insertar y recuperar caracteres de la pila. Si bien el uso de objetos `Character` y de un `Stack` puede parecer y resultar algo ineficiente. En este ejemplo vamos a ver cómo podemos construir una pila de caracteres mediante un `StringBuilder` y así manejemos directamente el tipo de dato primitivo char. Lo primero será definir la variable `StringBuilder` que simulará la pila.


```java
public class PilaCaracteres {	
  final StringBuilder sb = new StringBuilder();
}
```


Ahora pasamos a codificar cada uno de los métodos.


## Método push


Este método es sencillo ya que solo tendremos que hacer un `.append()` sobre el `StringBuilder` .


```java
public void push(char ch) {
  sb.append(ch);
}
```


## Método pop


Este método es un poco más complicado, ya que lo que deberá de hacer es devolver el último carácter de la cadena. 


```java
int last = sb.length() -1;
char ch= sb.charAt(last);
```



Y eliminar dicho caracter: 



```java
sb.setLength(last);
```


El código del método `.pop()` nos quedaría de la siguiente forma: 


```java
public char pop() {
  int last = sb.length() -1;
  char ch= sb.charAt(last);
  sb.setLength(last);
  return ch;
}
```


Ya solo nos quedará utilizar la pila de caracteres que hemos creado de la misma forma que cuando definimos el `Stack`:


```java
PilaCaracteres pila2 = new PilaCaracteres();
pila2.push('a');
pila2.push('b');
pila2.push('c');
System.out.println(pila2.pop());
```


---
title: Crear una pila en Java
description: "Artículo que nos explica, paso a paso, mediante código, cómo crear una pila en Java. Usando la clase Stack y sus métodos push, pop y empty."
lastUpdated: 2023-09-17
slug: /java/crear-una-pila-en-java/
author: victor_cuervo
---

Es bueno saber cómo crear una pila en [Java](https://www.manualweb.net/java/) ya que estas estructuras nos pueden ser muy útiles a la hora de gestionar datos. Pero, lo primero que necesitamos saber es, ¿qué es una pila en [Java](https://www.manualweb.net/java/)? Una pila es una estructura que nos permite apilar elementos y recopilarlos en el orden inverso al cual los apilamos mediante operaciones de desapilar. Esto es lo que se conoce como estructuras LIFO (Last In First Out). De esta manera, una pila suele tener 3 operaciones básicas:

- **apilar**, añade un elemento a la lista.
- **desapilar**, retira un elemento de la lista
- **¿está vacía?**, comprueba si la lista está vacía.

En el lenguaje [Java](https://www.manualweb.net/java/) contamos con la clase [`Stack`](https://w3api.com/Java/Stack/) en la librería [`java.util`](https://w3api.com/Java/tag/java.util/). Es importante saber que la pila hereda de un vector (aka la clase [`Vector`](https://w3api.com/Java/Vector/)). Y por lo tanto podemos utilizar los elementos del [`Vector`](https://w3api.com/Java/Vector/) sobre la pila.


En nuestro ejemplo vamos a insertar 10 elementos, que serán números, y los recuperaremos en su orden inverso.


Lo primero será definir la pila, es decir, instanciar la clase [`Stack`](https://w3api.com/Java/Stack/).


```java
Stack pila = new Stack();
```


Como vemos, el tipo de elementos que insertaremos en la pila serán cadenas o [`String`](https://w3api.com/Java/String/).


Una vez instanciada vamos a ir creando los elementos e insertándolos en la pila. El método que inserta elementos en la pila es [`.push()`](https://w3api.com/Java/Stack/push/). Este método recibirá como parámetro el elemento a insertar.


```java
for (int x=1;x<=10;x++)
  pila.push(Integer.toString(x));
```


Hemos creado un bucle que nos vaya creando los números y nos hemos apoyado en la clase [`Integer`](https://w3api.com/Java/Integer/) y su método [`.toString()`](https://w3api.com/Java/Integer/toString/) para convertir los números en cadena.


Una vez que tenemos todos los elementos, procedemos al vaciado de la pila. Tendremos que interactuar sobre la pila hasta que ésta esté vacía, cosa que nos dice el método [`.empty()`](https://w3api.com/Java/Stack/empty/). En cada una de las iteraciones extraeremos un elemento de la pila mediante el método [`.pop()`](https://w3api.com/Java/Stack/pop/)


```java
while (!pila.empty())
  System.out.println(pila.pop());
```


Pocas líneas de código que nos ayudan a crear una pila en [Java](https://www.manualweb.net/java/).


¿Qué cosas se te ocurren resolver mediante el uso de una pila en [Java](https://www.manualweb.net/java/)? Proponed casos e iremos resolviéndolos mediante el uso de una pila.


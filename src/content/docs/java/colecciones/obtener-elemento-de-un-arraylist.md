---
title: "Obtener elemento de un ArrayList"
description: "Código que nos explica cómo podemos obtener elemento de un ArrayList mediante el método get de una forma sencilla y con poco código Java."
lastUpdated: 2025-12-20
slug: java/obtener-elemento-de-un-arraylist
author: victor_cuervo
---

Hoy vamos a ver cómo podemos realizar una operación tan sencilla como es obtener elemento de un [`ArrayList`](https://www.w3api.com/Java/ArrayList/), que se complementa con los muchos [ejemplos que manipulan ArrayList, y que para ello crean iteradores o iteradores de listas sobre un ArrayList](http://lineadecodigo.com/tag/java-collection-arraylist/).


### Recuperar elementos de un ArrayList con un iterador


Si hablamos de acceder a elementos lo primero que nos puede venir a la cabeza es el uso de iteradores, más si manejamos colecciones de datos.


Por lo tanto podríamos pensar que tenemos que recurrir a un iterador para recuperar los elementos mediante el método [`.next()`](https://www.w3api.com/Java/Iterator/next/).


```java
Iterator it = al.iterator();

while(it.hasNext())
  System.out.println(it.next());
```


Vemos que utilizamos un [bucle while](https://manualweb.net/java/sentencias-bucle-java/#while) para poder recorrer la lista e irla recorriendo mediante un iterador.


Pero este procedimiento sería muy complicado y nos obligaría a estar iterando sobre una lista.


### Recuperar un elemento de un ArrayList mediante el operador corchete


Por otro lado podríamos pensar que ya que es un array puede ser que tenga el operador corchete `[]` para acceder a sus elementos. Lo mismo que se hace en los arrays para poder acceder a los elementos.


```java
System.out.println(al[2]);
```


Pero esto no es así, ya que el operador corchete no existe dentro de un [`ArrayList`](https://www.w3api.com/Java/ArrayList/), y por lo tanto no podremos utilizar para poder recuperar un elemento de un [`ArrayList`](https://www.w3api.com/Java/ArrayList/).


### Recuperar un elemento de un ArrayList convirtiéndolo en un Array


Otra opción, visto el anterior enfoque, es que podríamos ser más enrevesados y convertir nuestro [`ArrayList`](https://www.w3api.com/Java/ArrayList/) en un [array Java](https://manualweb.net/java/arrays-java/), para, de estar forma, ya sí, poder acceder mediante el operador corchete.


```java
Object[] nombres = al.toArray();
System.out.println(nombres[2]);
```


Es decir, utilizamos el operador [] para poder acceder a cada uno de los elementos. Para ello pasamos el índice que ocupa el elemento dentro del array.


### Recuperar un elemento de un ArrayList mediante un método .get()


Pero la verdad es que la respuesta a nuestro problema es mucho más sencilla de lo que pensamos. Si queremos obtener elemento de un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) la clave reside en utilizar el método [`.get()`](https://www.w3api.com/Java/ArrayList/get/) sobre el [`ArrayList`](https://www.w3api.com/Java/ArrayList/), indicándole el índice del elemento que quieres recuperar.


La sintaxis del método [`.get()`](https://www.w3api.com/Java/ArrayList/get/) dentro de un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) es:


```java
public E get(int index)
```


Dónde `index` el la posición del elemento a recuperar, empezando por 0 como la primera posición y n-1, dónde n es el número de elementos del [`ArrayList`](https://www.w3api.com/Java/ArrayList/) como la última posición.


De esta forma, si queremos recuperar el segundo elemento de nuestro [`ArrayList`](https://www.w3api.com/Java/ArrayList/), nos bastará con escribir el siguiente código:


```java
System.out.println(al.get(1));
```


En este caso estaremos recuperando el segundo elemento dentro de la lista y estaremos mostrando su contenido por pantalla.


> Al igual que todas las colecciones, el [`ArrayList`](https://www.w3api.com/Java/ArrayList/) se empieza a enumerar desde el índice 0 para el primer elemento.


Así que no le des vueltas y utiliza el método [`.get()`](https://www.w3api.com/Java/ArrayList/get/) para obtener elemento de un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) de una forma sencilla.


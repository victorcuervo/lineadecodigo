---
title: "Leer números por teclado con Java"
description: "Ejemplo que explica cómo utilizar la clase Scanner y su método .nextInt() para poder leer números por teclado con Java de una forma sencilla."
date: 2016-10-23
updatedDate: 2026-01-08
tags: ["java-collection","arraylist","scanner"]
slug: java/basicos/leer-numeros-por-teclado-con-java
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/LeerNumerosConsola.java
topic: java

---

## ¿Cómo leer números por teclado con Java?


Un ejemplo sencillo, pero muy útil y que todos deberíamos controlar, es el de leer números por teclado con [Java](https://www.manualweb.net/java/). La idea en este caso es ver cómo podemos pedir al usuario números enteros e irlos leyendo por teclado. Esto lo repetiremos hasta que el usuario inserte el 0. A partir de este momento le [mostraremos al usuario la suma de todos los números insertados](https://lineadecodigo.com/java/sumatorio-de-un-numero-en-java/).


Además, será crucial y necesario que implementemos un mecanismo de control en nuestro sistema. Este mecanismo de control tendrá la tarea de verificar que la información que el usuario inserta en los campos de entrada sea realmente un número entero. Esto es importante para prevenir errores o malfuncionamientos en el sistema debido a la inserción de datos no válidos, como por ejemplo, una letra en lugar de un número. Esta es una tarea que no podemos pasar por alto para asegurar que nuestro sistema funcione correctamente y de manera eficiente.


## Manejando la clase Scanner para leer números por teclado con Java


Lo primero que tenemos que conocer es que la clase [`Scanner`](https://www.w3api.com/Java/Scanner/) nos permite leer contenido insertado por consola de una forma sencilla. Lo que tenemos que hacer es crear un [`Scanner`](https://www.w3api.com/Java/Scanner/) sobre el elemento de consola que es [`System.in`](http://www.w3api.com/Java/System/in/).


```java
Scanner reader = new Scanner(System.in);
```


A partir de ese momento, siempre que necesitemos que el usuario nos proporcione una entrada a través del teclado, en nuestro caso un número, estaremos obligados a invocar el método [`.nextInt()`](https://www.w3api.com/Java/Scanner/nextInt/). Este método es una función integrada que se utiliza para escanear la siguiente entrada de token del usuario, y la convierte en un int antes de devolverla.


Aquí hay un ejemplo de cómo podríamos usar este método:


```java
int numero = 0;
numero = reader.nextInt();
```


En este fragmento de código, inicializamos una variable de tipo `int` llamada `numero` y le asignamos el valor 0. Luego, solicitamos al usuario que ingrese un número a través del teclado. Esa entrada se pasa al método [`.nextInt()`](https://www.w3api.com/Java/Scanner/nextInt/), que luego la convierte en un entero. Finalmente, ese entero se almacena en nuestra variable `numero`.


Es importante destacar que con este método, la entrada del usuario se deposita directamente en una variable de tipo `int`. Esto significa que no necesitamos hacer ninguna conversión adicional, ya que [`.nextInt()`](https://www.w3api.com/Java/Scanner/nextInt/) se encargará de ese proceso por nosotros.


## Bucle para leer números por teclado con Java


Siguiendo con nuestro ejemplo para leer números por teclado con [Java](https://www.manualweb.net/java/), si lo que queremos es capturar números hasta que se inserte el 0 podemos utilizar un [bucle ](https://manualweb.net/java/sentencias-bucle-java/#do-while)[`do-while`](https://manualweb.net/java/sentencias-bucle-java/#do-while).


```java
List lista = new ArrayList();
Scanner reader = new Scanner(System.in);
int numero = 0;

System.out.println("Introduce números. El cero para salir");

do {
    numero = reader.nextInt();
    lista.add(numero);
} while (numero!=0);
```


Vemos que en cada iteración del bucle estamos insertando el número en una lista definida mediante un [`ArrayList`](https://www.w3api.com/Java/ArrayList/). Un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) es una clase de la [API Collections de Java](https://lineadecodigo.com/tag/java-collection/) que se utiliza para almacenar elementos dinámicamente. Se puede cambiar el tamaño de un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) en cualquier momento, y proporciona más funcionalidades que los [arrays Java normales](https://manualweb.net/java/arrays-java/). Un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) puede tener cualquier número de elementos y puede crecer en tiempo de ejecución. Además, un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) puede almacenar elementos de cualquier tipo de datos, mientras que [los arrays normales](https://manualweb.net/java/arrays-java/) solo pueden almacenar elementos de un solo tipo de datos.


## Controlar que lo que introduce el usuario sea realmente un número


Es muy importante que cuando estemos codificando el ejemplo de leer números por teclado con [Java](https://www.manualweb.net/java/) tengamos cuidado, ya que el usuario podría insertar una letra. Es por ello que debemos capturar el contenido dentro de una estructura `try-catch` que controle la excepción [`InputMismatchException`](https://www.w3api.com/Java/InputMismatchException/)


```java
List lista = new ArrayList();
Scanner reader = new Scanner(System.in);
int numero = 0;

System.out.println("Introduce números. El cero para salir");

do {
  try {
    numero = reader.nextInt();
    lista.add(numero);
  } catch (InputMismatchException ime){
    System.out.println("¡Cuidado! Solo puedes insertar números. ");
    reader.next();
  }
} while (numero!=0);
```


Si nos fijamos bien cuando controlamos la excepción, además de avisar al usuario, lo que hacemos es llamar al método [`.next()`](https://www.w3api.com/Java/Scanner/next) del [`Scanner`](https://www.w3api.com/Java/Scanner/) esto es ya que el carácter introducido por teclado sigue sin ser leído y hay que descartarlo para que pueda ser insertado otro número.


## Operar con los números insertados por teclado


Lo último que haremos con nuestro ejemplo de leer números por teclado con [Java](https://www.manualweb.net/java/) es realizar una operación con ellos. Así que, ya solo nos quedará sumar los números que hemos insertado en la lista, bueno, en nuestro [`ArrayList`](https://www.w3api.com/Java/ArrayList/).


```java
int suma = 0;
for(int num:lista) {
  suma += num;
}

System.out.println("La suma de los números es " + suma);
```


Espero que os haya servido de utilidad este ejemplo para leer números por teclado con [Java](https://www.manualweb.net/java/).


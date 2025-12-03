---
title: Multiplicar dos números con Java
description: "Ejemplo que nos explica cómo podemos llegar a multiplicar dos números con Java que hayan sido introducidos por el usuario en consola."
lastupdates: 2023-09-17
author: victor_cuervo
---

Multiplicar dos números con [Java](https://www.manualweb.net/java/), posiblemente  sea uno de los artículos más solicitados. Así que voy a ver si lo explicamos bien. La idea es pedir dos números por teclado, multiplicarlos y mostrarlos por consola.


### Pedir dos números por consola.


Lo primero para poder multiplicar dos números con [Java](https://www.manualweb.net/java/)  es pedir los números por teclado. Sería bueno en este punto que le echaseis un ojo al artículo [Lectura de datos por consola en Java](https://lineadecodigo.com/java/lectura-de-datos-por-consola-en-java/), que explica cómo realizar la lectura de datos por teclado de una forma muy sencilla.


Para pedir los datos, tenemos que abrir un [`InputStream`](https://w3api.com/Java/InputStream-java-io/) a la consola, el cual leerá lo que se vaya insertando. Nos apoyaremos en un [`BufferedReader`](https://w3api.com/Java/BufferedReader/) para realizar la lectura de una forma sencilla.


```java
BufferedReader br;
br = new BufferedReader(new InputStreamReader(System.in));
```


La lectura la haremos apoyándonos en el método [`.readLine()`](https://w3api.com/Java/BufferedReader/readLine/) que lee el texto introducido, hasta encontrarse con un retorno de carro. Este método nos devolverá un [`String`](https://w3api.com/Java/String/) con el texto leído.


Si bien, lo que nosotros necesitamos es un entero. Así que tendremos que transformar la cadena de texto en un int. Para ello nos apoyamos en la clase [`Integer`](https://w3api.com/Java/Integer/) y el método [`.parseInt`](https://www.w3api.com/Java/Integer/parseInt/), el cual recibe una cadena y devuelve un entero.


```java
numero1 = Integer.parseInt(br.readLine());
numero2 = Integer.parseInt(br.readLine());
```


### Controlando los errores de lectura por consola.


Realizamos la operación por los dos números. Hay que tener cuidado ya que el método [`.readLine()`](https://w3api.com/Java/BufferedReader/readLine/) puede lanzar la excepción [`IOException`](https://www.w3api.com/Java/IOException/). Es por ello que tendremos que meterlo todo en un `try-catch`.


```java
try{
 System.out.println("Introduce el primer número:");
 numero1 = Integer.parseInt(br.readLine());
 System.out.println("Introduce el segundo número:");
 numero2 = Integer.parseInt(br.readLine());
} catch (IOException ioe){
 ioe.printStackTrace();
}
```


### Operación para multiplicar dos números con Java y mostrarlos por consola.


Ahora solo nos quedará multiplicar los números y mostrar el resultado por pantalla.


```java
resultado = numero1*numero2;
System.out.println("La multiplicación es " + numero1 + " x " + numero2 + " = " + resultado);
```


Ya tenemos así nuestro código completo para realizar esta operación que nos permite multiplicar dos números con [Java](https://www.manualweb.net/java/).


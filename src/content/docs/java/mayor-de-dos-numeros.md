---
title: Mayor de dos números
description: "Cómo podemos conocer cuál es el mayor de dos números en Java que le hayamos pedido a un usuario por teclado y compararemos mediante un if."
lastupdates: 2023-05-15
author: victor_cuervo
---

El saber cuál es el mayor de dos números es uno de los primeros ejemplos que hacemos cuándo empezamos a aprender un lenguaje de programación. En este artículo vamos a ver cómo podemos llevarlo a cabo utilizando el lenguaje de programación [Java](https://manualweb.net/java/).


La idea para llevarlo a cabo es muy simple. Pedimos al usuario dos números y nuestro código tiene que determinar cuál de los dos números es más grande, si es el primer número que inserto el usuario o si, por el otro lado, es el segundo el número más grande.


Lo primero será pedir los números al usuario. Para esto nos apoyamos en la clase [`Scanner`](https://www.w3api.com/Java/Scanner/).


```java
Scanner reader = new Scanner(System.in);
int iNumero1, iNumero2;

System.out.println("Dame el primer número");
iNumero1 = reader.nextInt();
```


El método [`.nextInt()`](https://www.w3api.com/Java/Scanner/nextInt) nos devolverá lo que el usuario haya introducido en un valor entero. Si quieres más detalle sobre cómo obtener lo que el usuario ha introducido puedes leerte ["Lectura de datos en Java con Scanner"](http://lineadecodigo.com/java/lectura-de-datos-en-java-con-scanner/). Pero la idea del método [`.nextInt()`](https://www.w3api.com/Java/Scanner/nextInt) es que lee el número que el usuario haya introducido hasta que pulsa el retorno de carro. Vemos que lo invocamos dos veces, una por cada número que queramos recuperar.


Ahora vamos con el centro del problema. Saber ¿qué numero es mayor?. Para ello vamos a utilizar la [estructura de selección if](https://manualweb.net/java/sentencias-control-java/#sentencias-de-decisi%C3%B3nhttps://manualweb.net/java/sentencias-control-java/#sentencias-de-decisi%C3%B3n). La idea es muy sencilla y la podemos escribir en formato pseudo-código de la siguiente manera.


```text
si numero1 es mayor que numero 2
entonces numero1 es el mayor
si no numero2 es el mayor
```


Que en nuestro código [Java](http://www.manualweb.net/tutorial-java/) quedaría de la siguiente forma con [la estructura if](https://manualweb.net/java/sentencias-control-java/#sentencias-de-decisi%C3%B3n):


```java
if (iNumero1>iNumero2)
  System.out.println(iNumero1 + " es mayor que " + iNumero2);
else
  System.out.println(iNumero2 + " es mayor que " + iNumero1);
```


La condición que utilizamos en [la estructura if](https://manualweb.net/java/sentencias-control-java/#sentencias-de-decisi%C3%B3n) es mediante un operador de mayor y en las salidas por consola para mostrar la información al usuario lo realizamos mediante el método [`.println()`](https://www.w3api.com/Java/PrintWriter/println/) que recibe como parámetro la frase a mostrar al usuario.


De esta manera tan sencilla ya tenemos nuestro código [Java](http://www.manualweb.net/tutorial-java/) para saber cuál es el mayor de dos números.


¿Qué sucedería si en vez de el operador mayor (>) hubiésemos utilizado el operador menor (<)? ¿Podríamos seguir sabiendo cuál de los dos números es el mayor? Comparte tu opinión el el apartado de comentarios.


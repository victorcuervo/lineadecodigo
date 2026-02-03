---
title: "Obtener la IP de un Host"
description: "Ejemplo que nos enseña a utilizar la clase Java InetAddress para obtener la IP de un Host."
date: 2007-08-08
updatedDate: 2026-01-11
tags: ["getbyname","byte","array","bits","operadores","java-net","inetaddres"]
slug: java/redes/obtener-la-ip-de-un-host
author: victor_cuervo
type: doc
id: 88ffdd1c-7960-42dd-823d-b90ac054037a
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/net/ObtenerIPDelHost.java
---

Para obtener la dirección IP de una máquina lo primero que debemos de hacer es construir una clase `InetAddress` a partir de una URL. Esta clase la encontraremos en el paquete [java.net](http://java.net/). Ejemplos de URL serían [www.lineadecodigo.com](http://www.lineadecodigo.com/), [www.google.com](http://www.google.com/), [www.w3api.com](http://www.w3api.com/)...


Para instanciar la clase utilizaremos la función `getByName(sURL)` a la cual pasaremos como parámetro una cadena de caracteres que contenga la URL de la cual queremos conocer su dirección IP.


Una vez construida la clase `InetAddress` invocaremos el método `getAddress()` el cual nos devolverá un array de bytes de cuatro posiciones. Cada una de las posiciones contiene en codificación binaria el número correspondiente a la máscara de la IP A.B.C.D. Como sabemos dichos números pueden estar en el rango 0..255.


## Manejo de números sin signo


Ahora viene el paso "más lioso". Java no entiende de números sin signo así que en un byte están codificados los números 0 a 128 como enteros y 129 a 255 como negativos equivaliendo, estos, a -1 a -127. En resumidas cuentas que el -1 equivale al 255 y el -127 al 129. De tal manera que tenemos todo el rango de números del 0 al 255.


Una primera solución a nuestro problema es usar el operador condicional `?:`. Si el número es positivo lo dejamos tal cual, si es un número negativo le sumamos 256, para obtener el número real. De esta manera, la solución nos quedaría algo así para el primer número:


```java
(bytNumero[0]<0)?bytNumero[0]+256:bytNumero[0]
```


Una buena solución. Ahora tenemos en cuenta de que lo vamos a dejar en una cadena de caracteres. Usemos el `toString`:


```java
Integer.toString((bytNumero[0]<0)?bytNumero[0]+256:bytNumero[0])
```


Todo esto en un bucle para recorrer los 4 números:


```java
for (int x=0;x<bytNumero.length;x++)
  sIP = sIP + Integer.toString((bytNumero[x]<0)?bytNumero[x]+256:bytNumero[x]);
```


Se nos olvidaban los puntos de la dirección... Antepondremos un punto a todos los números menos al primero, es decir, al 0:


```java
for (int x=0;x<bytNumero.length;x++)
  sIP = sIP + ((x>0)?".":"") + Integer.toString((bytNumero[x]<0)?bytNumero[x]+256:bytNumero[x]);
```


## Optimización con operadores bit a bit


Pues parece que ya está todo... Pero veamos una última cosa. Especialmente dedicada a los amantes de los bytes o a aquellas personas donde la ejecución de un programa varía de 0.0010 sg a 0.0200 sg... puro manejo de bits.


Si queremos que a una ristra de bits con signo le desaparezca el bit del signo (el primero de todos), le aplicamos el operador `&` con un número igual de bits (en este caso 8) de tal manera que el operador desaparece a la izquierda. El bucle quedaría de la siguiente forma:


```java
for (int x=0;x<bytNumero.length;x++)
  sIP = sIP + ((x>0)?".":"") + Integer.toString(bytNumero[x] & 0xFF);
```


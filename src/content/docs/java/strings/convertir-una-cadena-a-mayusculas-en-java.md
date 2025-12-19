---
title: "Convertir una cadena a mayúsculas en Java"
description: "Proceso para poder convertir una cadena a mayúsculas en Java mediante el método toUpperCase de la clase String."
lastUpdated: 2025-12-19
slug: java/convertir-una-cadena-a-mayusculas-en-java
author: victor_cuervo
---

Hay códigos que son realmente sencillos, como convertir una cadena a mayúsculas en [Java](http://www.manualweb.net/tutorial-java/), pero que cuando estamos aprendiendo un lenguaje de programación, en este caso [Java](http://www.manualweb.net/tutorial-java/), nos pueden dar más de un quebradero de cabeza, debido a que no nos acordemos de los métodos que nos permiten hacer cosas básicas.


Este es el caso de las manipulaciones y conversiones de cadenas de texto en mayúsculas y en minúsculas. Si en la entrada [Convertir una cadena a minúsculas en Java](http://lineadecodigo.com/2007/08/06/convertir-una-cadena-a-minusculas-en-java/) veíamos cómo hacer la conversión de una cadena de texto a minúsculas, aquí veremos como hacer la conversión a mayúsculas con [Java](http://www.manualweb.net/tutorial-java/).


En este caso, el método [Java](http://www.manualweb.net/tutorial-java/) que tenemos que utilizar es [`.toUpperCase()`](https://www.w3api.com/Java/String/toUpperCase/), el cual deberemos aplicar directamente sobre la cadena que contenga el texto a convertir.


Lo primero definimos la cadena:


```java
String miCadena = "Esto es una cadena a convertir";
System.out.println(miCadena);
```


Para volcar el contenido por consola utilizamos el método [`println()`](https://www.w3api.com/Java/PrintStream/print/) de la clase [`System.out`](https://www.w3api.com/Java/System/out/), al cual le pasamos la cadena como parámetro.


Por consola veremos directamente la cadena tal cual la habíamos definido en la variable.


> 💻 Esto es una cadena a convertir


Ahora, para convertir la cadena en mayúsculas, solo nos quedará aplicarle el método [`.toUpperCase()`](https://www.w3api.com/Java/String/toUpperCase/). Este valor lo aguardaremos en una nueva cadena de tipo [`String`](https://www.w3api.com/Java/String/), la cual, solo nos quedará, volcar nuevamente por consola.


```java
String miCadenaMayusculas = miCadena.toUpperCase();
System.out.println(miCadenaMayusculas);
```


Lo que veremos ahora por consola será la cadena de texto con todos sus caracteres en mayúsculas.


> 💻 ESTO ES UNA CADENA A CONVERTIR


De esta forma ya habremos conseguido convertir una cadena a mayúsculas en [Java](http://www.manualweb.net/tutorial-java/) de una forma muy sencilla.


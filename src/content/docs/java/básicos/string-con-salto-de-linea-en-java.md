---
title: String con salto de línea en Java
description: "Para poder crear un String con salto de línea en Java deberemos de utilizar el carácter \n dentro de las cadenas. Aprende a cómo hacerlo."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En el ejemplo de hoy vamos a ver cómo podemos crear una cadena o string con salto de línea en [Java](https://www.manualweb.net/java/). Es decir, una cadena que al imprimirla por consola aparezca en varias líneas.


Y es que todo el texto que le asignemos a un objeto de tipo [`String`](https://w3api.com/Java/String/) será una cadena sin ruptura alguna, es decir, una cadena de caracteres todos seguidos. 


Es decir, si codificamos lo siguiente


```java
String cadena = new String("Mi texto sin saltos de línea");
```


Por pantalla veremos lo siguiente:


> 💡 Mi texto sin saltos de línea


Pero pueden existir ciertos casos donde necesitemos que, al mostrarlo por pantalla, existan saltos de línea entre partes del texto.


Para esto [Java](https://www.manualweb.net/java/) nos ofrece los caracteres especiales. En concreto el caracter especial para el salto de línea es `\n`. Por lo tanto si queremos poner saltos de línea en [Java](https://www.manualweb.net/java/) deberemos de tener la siguiente línea de código:


```java
String cadena = new String("Mi texto con\nun salto de línea");
```


Lo cual nos generará lo siguiente por pantalla:


> 💡 Mi texto con  
> un salto de línea


Pero, además podemos concatenar tantos saltos de línea cómo queramos. Es decir, que podemos añadir tantos caracteres `\n` como vemos necesario.


De esta manera podríamos tener el siguiente código fuente con l[as cadenas en Java](https://lineadecodigo.com/tag/java-string/):


```java
String cadena = new String("Mi texto con \n\n\n\n cuatro saltos de línea");
```


Este código lo que nos genera son 4 saltos de línea en la salida por consola


> 💡 Mi texto con  
>   
>   
>   
> cuatro saltos de línea


Como podemos ver, algo muy sencillo de utilizar cuando estemos creando cadenas o [`String`](https://w3api.com/Java/String/) en [Java](https://www.manualweb.net/java/).


> Si ponemos espacios en blanco entre el carácter especial y el texto, el sistema contemplará dichos caracteres. He ahi que parezca raro lo de “con\nun”.


De esta forma ya sabemos cómo podemos crear una cadena o string con salto de línea en [Java](https://www.manualweb.net/java/). Además del carácter de salto de línea `\n`, ¿qué otros caracteres especiales conoces en [Java](https://www.manualweb.net/java/)? Déjanoslo en los comentarios.


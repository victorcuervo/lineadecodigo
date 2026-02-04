---
title: "Primer punto de la cadena con Java"
description: "Uso del método indexOf para poder localizar el primer punto de la cadena con Java"
date: 2015-06-21
updatedDate: 2026-02-04
tags: ["string","substring","length","indexof"]
slug: java/strings/primer-punto-de-la-cadena-con-java
type: doc
topic: java
id: 4260cf0e-70d1-4daa-96a9-1527c2192057
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/BuscarPrimerPunto.java
---

Nos solicitaban [en los comentarios de la web como podíamos localizar el primer punto de la cadena con Java](http://lineadecodigo.com/java/string-cortar-cadena-por-puntos/#comment-100959). Y sobre si era aconsejable utilizar un [StrintTokenizer](https://www.w3api.com/Java/StringTokenizer/) al respecto. La verdad que localizar el primer punto de la cadena con Java es algo relativamente sencillo. Para ello lo que debemos de hacer es utilizar [el método indexOf](https://www.w3api.com/Java/String/.indexOf()). Mediante [el método indexOf](https://www.w3api.com/Java/String/.indexOf()) obtendremos la posición en la cual se encuentra el carácter buscado. En nuestro caso un punto. Pero lo primero será definir nuestra cadena.


```java
String sCadena = "www.lineadecodigo.com";
```


Ahora vamos a buscar la posición del primer punto.


```text
int posicionPunto = sCadena.indexOf('.');
```


Ahora que ya tenemos la posición solo tendremos que cortar desde el principio de la cadena hasta la posición del punto


```java
String sHastaPrimerPunto = sCadena.substring(0,posicionPunto);
```


Y desde la posición del punto + 1 hasta el final de la cadena. El final de la cadena lo podemos conseguir mediante [el método length](https://www.w3api.com/Java/String/.length()).


```java
String sDesdePrimerPunto = sCadena.substring(posicionPunto+1,sCadena.length());
```


Ya solo tendremos que volcar estas cadenas por consola.


```java
System.out.println(sHastaPrimerPunto);
System.out.println(sDesdePrimerPunto);
```


Y lo que veremos será algo parecido a:


```text
www
lineadecodigo.com
```


Como se puede observar es muy sencillo el obtener el primer punto de la cadena con [Java](https://www.manualweb.net/java/).


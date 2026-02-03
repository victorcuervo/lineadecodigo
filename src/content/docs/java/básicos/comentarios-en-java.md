---
title: "Comentarios en Java"
description: "La página explica cómo usar comentarios en Java, incluyendo comentarios de una línea, múltiples líneas y JavaDoc."
date: 2006-12-17
updatedDate: 2026-01-06
tags: ["comentarios"]
slug: java/basicos/comentarios-en-java
author: victor_cuervo
type: doc
id: 56dc1184-dcc9-4c79-a43e-185cd1996d2a
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/ComentariosEnJava.java
---

Cuando estamos programando una de las cosas que siempre nos olvidamos es la de poner comentarios. Esta claro que cuando nos midan nuestro rendimiento por líneas de código escritas, los comentarios no entraran en la estadística. En el lenguaje [Java](http://www.manualweb.net/tutorial-java/) existen tres formas de poner comentarios. La primera es cuando la línea de comentario solo ocupa una [línea de código](http://lineadecodigo.com/). En este caso deberemos de anteponer dos barras inclinadas (//) antes del texto.


```java
// Comentario de una línea
```


En el caso de que queramos poner un comentario de más de una línea (eso es que estamos inspirados) deberemos de empezar por una barra inclinada y un asterisco (/*) y finalizar a la inversa, asterisco y barra inclinada (*/). El código nos quedará de la siguiente forma:


```java
/* Comentario
de varias
líneas */
```


El último caso son los comentarios para la herramienta de documentación JavaDoc. En este caso, antes del comentario pondremos una barra inclinada y dos asteriscos (/**) y finaliza con un asterisco y una barra inclinada (*/)


```java
/** Comentario para JavaDoc */
```


Lo que se puede hacer con los comentarios de JavaDoc lo dejaremos para otro post.


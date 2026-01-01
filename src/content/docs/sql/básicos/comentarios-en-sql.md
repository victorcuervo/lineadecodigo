---
title: "Comentarios en SQL"
description: ""
publishDate: 2013-02-03
updatedDate: 2026-01-01
tags: ["comentarios","guion","ansi-sql","sql99"]
slug: sql/comentarios-en-sql
author: victor_cuervo
type: doc
download: http://code.google.com/p/lineadecodigo/source/browse/trunk/lineadecodigo_sql/src/com/lineadecodigo/sql/basicos/comentarios.sql
---

Al igual que cuando estás programando, cuando escribimos sentencias [SQL](http://www.manualweb.net/sql/) podemos (y debemos) de añadir comentarios sobre nuestro código. Para poder añadir comentarios en [SQL](http://www.manualweb.net/sql/) tenemos varias formas. La primera es la definida en el estándar ANSI/SQL que es mediante dos guiones al principio de una línea.


```sql
-- Esto es un comentario
```


Esta forma de poner comentarios nos sirve para anular partes de sentencias y lo que nos lleva a generar las sentencias [SQL](http://www.manualweb.net/sql/) en líneas. Por ejemplo, si tenemos la sentencia:


```sql
select *
from libros
where idautor = 1
```


Podemos anular el filtro del autor de una forma sencilla comentándolo mediante los guiones:


```sql
select *
from libros
--where idautor = 1
```


Otra forma de añadir comentarios, en este caso comentarios de varias líneas es mediante la estructura.


```sql
/*
 * Comentario en varias líneas.
 * Compatible con el estándar SQL99
 */
```


Esta forma de añadir comentarios fue añadida en la revisión SQL 99 del lenguaje. Existen formas ya adaptadas a diferentes gestores de bases de datos. Es por ello que podemos encontrarnos con comentarios en sentencias [SQL](http://www.manualweb.net/sql/) de las siguientes formas:


```sql
{Comentario con llaves}
# Esto es un comentario
REM Esto es un comentario
```


Aunque lo recomendable es definir los comentarios [SQL](http://www.manualweb.net/sql/) mediante las dos formas estándar explicadas anteriormente.


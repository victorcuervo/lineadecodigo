---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZASYXSP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIAWi17p2DBxHaBZhKj%2B%2BYsKzVWAGwUgMxPhnE2PT3r8%2FAiEAsIGzPDvOLo6HsqUb1hCq6bF4qgZzhJJnSYUTQ8izCJ4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJdLgjgnm%2BbsrH7HhCrcA2I6CGADuMlgKpcILH99uvmWOcHLJNPS3NRSwVd5L3tbkQLHraSNmU3qUQ8oa6yJwPTtXTW7gnoNRAGMuJH8tXwM2s3tENbxzTfBk3LJWkUwoQ5mPdehu7gA4WtLjA4d%2BO%2BXD2Xp%2BVmGLuZBbMizUkohxdd5zbJ7%2BB073qW8YH%2Bxj%2B7%2BDasmekZOU0tN6iIqa3YhK4uDvb8r8bsQFHh2c993Z49oaGxruob1ZeyACnctqwZXVXHlLmkE6wuHecM%2BdGdoMejwRwx3jbtkmeByd2s6VxWN%2BuQqApKRTKvvz4HnoSBhh9wa5wcj%2FVeRSCOkPp0SqT63PT%2BB0HKvYeT7Rdn4zhfmJ8HseuUijNT8gDJUZrvkqgruMJgrVulCRzdENXn%2F3kZwm2vi0HWLdpZPz8Ly63iQ68XamqTSAXuPDaLfEKsfmcYKyib2f5gPxFerTDlr4PYw5dRwwtE3U%2B0CtrmGkCyr8oeXJcMTwhdFpqQmvt7MACWeSu7vPMxAz5KoAAQKoaOr0N7tMkVebR3wISniNxLE373U%2Bo2IMYRFqwP3YceLt7fBgxqzSU4eqy%2BRxO7DcdVc6yQXw5YFpSP1%2BAlwyurFe6J180XUfcQHP31wNfKhWIX6RO%2BJa129MJ2TwMkGOqUBU9wewTat7Cs0M7GaiNpxPfmYAZ0bH7h6Ap%2Bn%2BU8xEjrQrkfojG1HdzEZlXzvuUZ%2FdaeWRGkYAySksUIDEfTI%2B6zoR%2FBtlLzPhmNrW%2FjLWvdgD1d8GzMiLexulc3jM80w%2BwySgI%2FNqDDagNVbPfcG%2BYcrkZJhmEerqZ2QmTCq7nb6YZ8jvCwY%2FDYUM0y7djeOctM%2FZWCtk%2Bv01oPP8%2BvnQZgoaFQO&X-Amz-Signature=766cf14f9729115f9ed0b25fe485668d14922ab33d279fd150c35fe8b7b95456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Dada nuestra tabla de libros, podemos realizar una consulta [SQL](https://www.manualweb.net/sql/), para contar elementos de la siguiente forma:


```sql
SELECT count(*) FROM libros
```


Esta consulta [SQL](http://www.manualweb.net/sql/) nos devolverá todas las entradas que tenga la tabla libros. Es decir, todos los libros de todos los autores. De esta forma, ante una tabla que tengamos los siguientes elementos dentro de ella.


| ISBN               | Titulo                  | Autor             |
| ------------------ | ----------------------- | ----------------- |
|  978-1-4493-0814-8 | What Is HTML5?          | Brett McLaughlin  |
| 970-26-0518-0      | Cómo Programar en Java  | Paul Deitel       |
| 978-84-415-2348-7  | Java SE 6               | F. Javier Moldes  |
| 978-1-4493-1439-2  | What's New in Java 7?   | Madhusudhan Konda |
| 978-1-4493-1608-2  | Just Spring             | Madhusudhan Konda |
| 978-1-4493-2838-2  | Just Spring Data Access | Madhusudhan Konda |

undefined
Obtendremos que hay 6 libros al utilizar la sentencia `count`.


Contar elementos distintos en [SQL](https://www.manualweb.net/sql/) sería para cubrir consultas del estilo... _"Contar todas las editoriales distintas de las que tenemos libros"_ o _"Contar todos los autores distintos de los que tenemos libros"_.


### Count y distinct para elementos distintos.


Para ello deberemos de aplicar la función `count` de [SQL](http://www.manualweb.net/sql/) sobre los campos editorial o autor, pero con una salvedad y es que utilizaremos el modificador `distinct`. Mediante esta sentencia `distinct` estaremos contando aquellos elementos que sean distintos.


La sentencia [SQL](http://www.manualweb.net/sql/) tendrá la siguiente sintaxis:


```sql
SELECT count(distinct campo) FROM tabla
```


Así, para sacar los autores distintos, ejecutaremos la siguiente sentencia [SQL](http://www.manualweb.net/sql/):


```sql
SELECT count(distinct autor) FROM libros
```


Siendo el resultado igual a 4 ya que solo hay libros de 4 autores diferentes.


De esta manera ya sabemos cómo podemos contar elementos distintos con [SQL](https://www.manualweb.net/sql/) mediante la sentencia `count` y el modificador `distinct`.


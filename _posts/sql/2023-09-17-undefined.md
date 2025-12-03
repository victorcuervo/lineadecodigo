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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL7WPSMK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDhsaUdxLcBUQjRbROP7tAmRARLCjwQmgHWnBRRZM%2BmhwIgTlGfsZKJ2Y0%2FtAB77DKr4DRpTMsaQ%2B4POgDvaGSPD0sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJ4ZBlqPGJTZu%2BeItSrcA0gQkD1bCDouOdm8c58d%2FQuk9jgBEJQHZteRrMzSu%2Bc5xtSoMrutaukKi5E2dFvlWdbFaogBU%2Bb3SgQPgv6w%2FcblkbNrfIBE5l7vYerDWvXCgDdWwcF7pBcHxy%2BmK5Tw%2BSahnqWK9QhR1A6UIwmqmmnL5wkSwacN6p%2BfupHcXmQ9hq1alFTdnWedpKSinwFDBf3a81J%2BWa2iQZh2HSQIrVIYnPS4jvXh8%2FHVd%2FcRSrLdk6P5Yc7erHzdNC1T%2FIbZCIoaQ8tS5bZ5KBb%2F5kTNm0b6%2BzTjfHFIxTPD3zYiFpRUX8TBwPUfHAgAgw9fz0aezbwv7YutIYYCdz8w7dc%2FYJa2jFyRHYka98w7czrJeSwoDVGWVP%2BG%2BS7Io2m3NfsQGCzGdciQoCFNM4lkzfnZ0thvElLaHmozPJkEvLGIsOFouMRpOrmL%2BhGP6Ao8XyFpakZuzu12yddSLqy%2FdtdZKkg%2FzWpnZjtWjeeCtp%2FQWKOWL5UXpBCJP5HVDqhz1%2BdWkj5elJomBjYZ0NzR9xwjA7oF1%2BoTgfBvNA9SFJIoSeRtgfg%2B%2BhBfimakXyti9r3hRBuT1NrrdcZ2OmjZPyOp4K2mf86fVqGmR5wkjtCIWPqtZCm7QDWfKzEIh3tyMMGIwckGOqUBgc49J0nbf%2FCvuLlZSokgND3TVEPaXx2uQJ6pEbChNn0ODaMZqbs7fXPrU280q4Mer9%2FbsrcHAdWE0v7Go3%2Bi74alBAgVCw2CELZjSguiewELfwD1b4S0A3vICc1PsK65117XnTgSYvl7KTQdWaR9rjaODEJDrajTobSkKv%2B2hd2VxAGqTNeSokoa8YrkQNjPYZmsYudwsSStmpmUk1dxoBAVQWY8&X-Amz-Signature=c9d41e02c5cd53613d791afdd8a61c7be640c18dbd0ccaac0cd168ce0f50119e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPMJEHKC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T045623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC3H3g1yLzYU3TS2zxW07gowcTQSO%2F8z84gdOVuQKqvVgIgBbNOCMbOvEAyVLJxz0%2Fq9Wntz7LPtU6VSEP%2Bz%2Bx8krUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDI6ATYHgCJ%2B6KB3qQSrcA8ZEsoLJFUT4QgAe0%2Fon96DTEPio3PT3GRsYqkDj7hvTaYPQXWk0r%2BH6KiGcMW6e%2BWDAKFypjdqVftyZKpi%2FFfMoziySQQsRiyYXsRjLQgf1d7u%2Fe%2Fvim3PGtnCtRfN8rkch2pfjKjlqN9L8XWxRUF1uJJV%2FRsaQ5AOORugLxu2AcphDccHDMjeF7MOO1lcZvckC173R%2FJnWDq9AXvt%2FLiESUpdtml99RFH4T75seqhaSgzkRdUyNuOney1dou9%2FahyXzoARqboXWqm3MpBVg1AqmyxoZM0Lam1zpFLB9vZ%2Fs7CDbCd5YYnC3Gw48zQ7d09FabsH2PsySogTVcdQ%2BCESyMoJmVCtt9cdsQkF3mbkD4rQfSSj6FpCsyr7zPNH5xTehFcO3zQeJot7GDjJIyLt3YFdRLNmoiqt4Lhx0mK4UOpRyUILUJfwJBa2irR5z%2Br79l8XB4bLLHiSFaG%2FLdRkp7LOAvts%2B6dSReSKIb%2B05XcjIj%2Bqs6pIme19IdEAAV6fkDTSp1CLbMs0CftEdZgwQ4JKqHtcrcICsFdBf%2BQH8ym2QgNKTwIdUTiax6D0O6Qx4k5Mj3o6%2FcY%2BLcuHeLudZlotz8kOUKWhkgszNpoKwujtODdcdNSL9tGlMIuVvskGOqUB1xuaa1jQhdXWNMWzMTksRa7d0yMogusz%2BvUfy54sDwN4uvaMhkg%2B8a8dABocsfg14SoLqKfOFcBZUvu%2BQ3rqhM5Qal40LNBSJBjhBPUPktmnKthryX3TMAGSt3O700K%2FA%2FTtJ%2BPNOsDAQPgmX9xsIbE%2BEiHN5fyFtKY1uXkFDPcFqfCFQ6jFf1iBL12HvVNQmz0Yu8bjaiOykyl8bSiy43XpgAfg&X-Amz-Signature=bf5d0765f0367fd94da20b4220bd9a58b90b162f95af1552b5caa4b21c7eaea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


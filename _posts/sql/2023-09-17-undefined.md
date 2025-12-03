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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLMQTN3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCICVpdxwTMkt5XmT%2F6Z50p5s0vaACESxfHxUKMZgDx%2Fh2AiBXak%2FegQbNDn2%2BB8fK1nTfc%2FFeyGDTsEufApS9WUbPAyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvP3yZEKUFwLz1Y0SKtwDiC5%2BYrGj%2F8a4NX14C4GFeMCL%2Be5vI7%2FLyRN4qAvGQPLCfm0l1CS2RHzCBz1U2kIsIl8PM%2BcJK7d50kOJ1tyIFfgLFuMFqELCRLg3%2FN56nGkJdiG4ygBNdJXXae7tMpVCKHS9juO0u4%2BH7c4oiEyommopWuh9E3CAdn6KDj254eSZ1WB5nQswFEiEp%2FgXcj4j8YGU9gH4Cw2TwzwaoWXxwBs5xPTTaOt7TAUHHvzvrMW3n8YXrRvwyUtXQSPkTEqDJZi4feCTWBCxCjoQdoKeRGtpiQKuOwx9jghV8X%2Fwy01KlgW0IGa0NeK%2B%2FuPX%2Fy%2BH3k246WDH%2FTugmn5Oau%2FI6LeN1Uvzm3BnvEZGqdj3C0MXXA0crud5mJHkQlicF5plC0m3pnpOPiH20XFvw2IBX8XIoRcS3XQh4rk4LmNT5V%2Fv%2BCF%2BJMm7nle6hJUQGDbIGIGtQY3bzDt1H57UWSXtJv4lZmeaP2nL2EOgT3GuEptuHUgv7Ml2niT%2BJ62OSxEdzBrpQlmVYx1AuABJKA%2FG3CHQnKfqNBcj928w8FdEAKctoxQNlqnPENoIwaRIni7j5KOxwX2ReSkcV5kGIqmVLZzG3c3xFmTGlCHjA7AKH5ejLf9ziTiPFXLGmE8w967AyQY6pgH7R5mPGxqY1WWDnL6GXhS9nZy3dw7fuq7QoqAZAZYh53CwuFW3NdYYCRQMMPJyz%2BdU8q4ZOTh9FNvim7vPYQbmWkbVhb7K3p4If3zRC%2BEZsAV9WkJmgx2WgO4brisK9IdhOz8zwinyNU3FPAIqEaqUQx2IwJFqhFwtT5%2B665h8iVNuCuwSGvM1QpjdA%2FdGn3lTUhwjgznlsfUCFu7HXB2OJwS4NAvc&X-Amz-Signature=d5eb9fc4fff5b1b948bae6367f7fafa3fe9d16f8cdbf40d4a8f51f92ca79ef62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


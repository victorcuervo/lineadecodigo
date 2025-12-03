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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3UGUX6F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFB9Lxh4f3JlG4YBPHlkpjx%2B81Pzwlr%2FY%2B3JLXPizqFiAiAX%2FSmSu8NyyRq3grv%2FJfb1XNIsqbXkLyARScQe7TwGVir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMOKTkGqCgRMqgds%2B5KtwD%2BPXZS7oSEIdNYxnPwmYBFNrflGWSgR6YDjz8l8jQ2mvHsDJpm3i6e1v0CGM2Q%2FzsnL30TkkdA%2F7s2abT2P%2BfuY6cUK%2F5FQpeRG9DslfCaDUKNDMJ3VT5ewhy0MMhuRdrsdvezmYPThhBOWQP9QTN2hRXh9uwngSB%2BbfWTD6PD7yWrjAYmOP8omBgWqnplRNuOU0n4%2BXwswsS6hqUfq%2FRHlBwGCIcxOts6vKg2MVDDix%2B1WMZLqHlTxXYS%2Fbf%2BUqgKLP%2FBuGa9xbO18Rawt02GVUYhRSm14XODSGASPSGO3giC7iRkJHthZhrNQpouJzx2Bara%2Bem8ncJtm%2FAS7XO9RURHRAIJD5qE6abdE2OyulKqnGnBi4rVUgiB5z8fUSuneT%2BIqCIYd0vnmmrxAhdkZvQBQtpbzmh2mzXWu0drVD8%2BrbXkdMDrwCrAzz57gxIscekrz3pkfx45dEN%2Fw0Zi9fFphuRl7oPgQQjoXYVVv7r0HhgbTRXw%2FtqzCqyzmst1c09PonSI7179fhHcqslpX8X1bAUfIeuALFKsZnB607GX22k2qEJ%2FxdTQozNhs7ezTQD5C43Ivp%2BvGhcn4WNYEr%2BhypBCdSqMqjYd9UxBoiq7kpCwUI%2Fe6Uu7HAw%2F%2F69yQY6pgFGI8ss%2BrWSA4nNeVHlAV37VH1L8ngmQ%2BDtp6aL8RtkF2vYFy%2BdEu%2BUZ2moAOgk7muHtANg%2FYKqZitA8KR4aJo21hQltckMzQ3UUymWtREP0NrVIVkudTMCQW6ODOEAiutp2WZKfOlunB3ihAxzTnYzGDGxHHlSL7oRb%2FclFFLr%2BsPGCPpOCUCHnGQwku52kty0Ax4lsv%2B5rcBWKzj4foGhb1PACc6b&X-Amz-Signature=03636f0b62887a3433346098938bbdc42a3dde001f71de7d7e155647392601ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


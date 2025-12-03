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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNCPE23%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHwmjZLTIm6Qf%2FjUqG%2BjszGgExCoY66BGExBUtojTYaGAiEAny1Eozb1UaQ6pQFPYgLrMw0VAQM29swMCRawAC7ZoR8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDG3SQfnHqjBDqzeW6ircAxQyulnrZoP3Xa7S0RyO1qPdBZj98a2%2B6mtO4NmA3PZvwcHgl4m3lLFUxyoO8agf7536geSpYHi8q6hga8IVt%2FNUzxF7aL7YdE8gYtmbRd3qwxVnArn%2FHDc9v4VD4fYqk9gZ3m6Dm167P%2B9kR2qF%2Fs1ZtMlByzeSUsvF3XVez2BF5Z%2FtxCzmIJXiEVega3iFdbYt%2BJnJhS1sMQdsC1U6kJm5knYezEMX5L3E2beSxdQlnEMQ%2FDkllgEhiy0drHSklxmkgS1CrI2cNCpDhI7DORgSm1n5HfOww9MSCN%2B1kdJaH2bXMVSAnr5Fex8mj0AOHMFWovc0Dansc7LzAfwsDzrjlROiK%2Fl0jD887PCdcH0%2FZEXYD%2B8qWciM%2FAxi52VA4U3%2FsD5CI6CpgLDpLaOMByBL0UTHEv%2FBP%2FCIDvEU2s66e3R%2FIDS0IkRBV7UEWhvbJlUu4EAnZfu66CrPzHUXTyTxWsA9XNPCVgIpAdUoXKXKyxVu6GlReunsaA9U9eo5IuGfT2SzEU85y2JwP70pLPg8XYKr2i2DaB5ATDFPLit0QYWfRmOYq9ca9VmhphA17%2F%2BnbS5ZZ5RtQGEqtwFEzpkF8%2BgSo2pL%2FuMirtZPkBtqt9neeYhpW3lajXZNML%2BuwMkGOqUBh4vdVAbAUUa3TYKAj%2F5TLLbcpoDJMbkSUEVtxu8hUQrRH8FdkegAZKB3SubjwGOtgBdOpVTsgaczZgHZH5OJC9HhO7cRP5HDGeVORC0qgBqNociZ7xbUisDD4GzAQo8jg%2BcMyn3fMeKIqEcyYUT3NKZq1%2B%2FGqwiU%2BE9YHBnCUN0LMTgftMQFnCak30ziSqHqLRedW2YrWSYJrYYSnGzX26XyKS9m&X-Amz-Signature=108285dadbb179370a98dca79256d3b95e7313832440556d72732d53f0df47fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFT4AIK6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEmdfUF8W%2FNjbEbaG%2FFxzKagQXuPgxNyQIzhWjuy%2B9IPAiEAx8qpAYhTwB3iXgVdVwdTXMs7ikknYZHUkHRRu3eNxX8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGPL5qIi3Mejstwn%2BCrcA7zNmeVResaaGur%2B%2F2kXJb4Mdte7Ypu9noOPp%2BJW59pNFz%2BcUJv9Nk7Zf4%2B62gTsRBuPQQ%2BzOmc9NQAE9OHKcrQDqeFOq9SR8Ua8gGpDP4srlAkMvw2uXTMadIqjPtjBmS8sL0Q9IYdSr4aU%2BDb2BTnKayHcSTJbvevjxpXdKLQaCM4mqfP8r%2FEuy7I%2BEuB8An%2FXll3FitYMMZjWONcefcrfC4bX%2FatKHR9B%2F1kurE21ydHob2ZhREr7G%2FIb4buhUk76qGKbjEWAW9FkwZw2e9j0LOTXJpLNMnk%2BM1JH%2B4e58G9gvJJE017rWPdQS4j8GUbIKOXehK2iLvee%2FmtG%2F1KUKNO0haPJTn2Gxs%2FFOoEBDYIkTi4AZqbetQ0XPA1UQWH%2B7WhTFpelzA5cw9vifuS7ACs1sOcRma%2BJp11v%2FHWp1p8nZRuKDwaQRpIRHazdgw8bn86TQF7%2BAn6m5k3%2B0AoOLm%2B%2F54AoCdj6JMUVhhufgg6nTWyMGSyxaaTsDlMsMY%2FItx60N3yGYf%2FXVBEJbnpMwBdI98YvPpTfOKqv%2BSxmgm9MtJsaLXEhdqWoIbLO9IyOZQppfdhTiQD8G3eXvMyTcU8HcsB6pXLdtE7PEDVUCk4mN2M0neM1N281MLOSwMkGOqUBby1hmLhfdmmBCcrqfDqn%2FbBwR8HGKOZyFHHo7dnTP6Bab%2FNzcSQxj2Icu5LZbvHFuP9CJrJFJAuzoNyYeUmYW%2B9tSA1kp80mT9GiX6KU9uqXuGM38xfCOl1%2FDqYO3mITBQdneZLxGU5o5Pt%2B4F4XPazAGL8Ph9yVJ%2F9WNHg8IysGTzUrwExGIRVr3kUDWh1DR1wNkHr281%2Bi2OJSZtRCiToR3lYR&X-Amz-Signature=a12d4d1e9bc2de281e4652d1436690ae5e4bebd9b3f0ebdaece9a75415aa4d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


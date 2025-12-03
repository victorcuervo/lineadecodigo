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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM75XSYD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIC6RKNJOOpklgB0ZcuHx1YF38hh5tAvG5hJpqrKJhLJ4AiBAYtP2IsGMixglDrUO1ovDspJAMWKROPOt0XGI5FdOTir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIM%2BtPhkduGRuvhd8vwKtwDLfn3Lv%2BiZe%2F%2FL3gx6xev69Etn2g5TCuOzjoKyc9UDClkRf6ZIYkq0mf6kBRWsOpOXKR5BsdruUTC%2FxHydHROOJhcPT6m2vcgLKg7MHpRU90QuE6265WcrMMocZmARAbUWE%2FzrSh3suwJ5A1ARZm7%2Fa6iZNmNauAg6sm0jEmEuuQYt9AGR61J4j4P0dPkEm7Rc9tIdigrbZqgIR%2FPYVyGzi%2BjSGIpFGUYDZeWGixxl5KiHmfL4a5TT6MJy0bu4EUlOp%2BrbJNkbzLrvRt5aFR%2Bl4QM4x20hJRKR3W0m%2FQFfKqcLkAFFDptRZCDp%2FAKzRFQsMl%2BgbbLyZgqMokTLra1k41198s%2B6feMdH%2B6TRofHtYKWPm1QnAeQ7d8%2BUfGHIllwvGx65euL0PYmTnqkW03Dfa4SVQaXf1UamOeEFwXaAnacQFQaWDnQ0lepvkmc2a1YTDbBNQAijaZqn3Ooshi1LW6HCdvb3oYyfwxFXTqOCLASeUsiwQcIPjlALO166x14P8aAR1l4qtBFNgTk7tdweNxOb7FVF%2FFmeA29ks4zGQbl8QXw8LfLwZW%2FXCtoKXxOUftXfW1syjU6H711iriG70UWPajyrY17jMJPtKZql4xRB%2Fjm7x8PiltH5Iw%2BqXByQY6pgGLaR3fE2Ele59PN0qgvILr8BeLRusZFvYmwPIbZVEQG9YaDNerw9iB9om7BTlPkUxTL6APAcweY7KS%2B4CJ3QiAgavUZ7TTWGrNKJUTvSBnhL1XL%2Bdhs%2FC8ihIlJOe%2BYlfh5zDGuEcCtsx%2B0smBcsqudpmMO8mvbGMUTnKRLhSnentO7axfGDKuxMdfSs%2FBdwXQz4dm93e1YMQHQInO4Qj2XFZQp%2Bl2&X-Amz-Signature=1bdfb615a42b31a143c84521d73cd947ede12fa7ee2892f76f4de1586763cff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y7B6VHW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCxHy3H9HI9NVRM%2BnCLU1ycPZkSguRT%2FzaNMusTVWkQdAIhAKGdotavBLvyb1u1BktJf%2FB8fvc70d9iyZPz9GPScCw2Kv8DCC4QABoMNjM3NDIzMTgzODA1IgxfDKW6JrnkR871HUQq3AP0iIcudddRRNLidX3V4clrgS0d7mvvMLUKR51wTHvbK9PcUzXq7t5q0bkDEnb4%2BSyq6IQmV4xu4HzvPWHPWV%2BBQiW9lJtZ3qtEJg1rusCr%2F5nh1w82TvlxogNC5O9wwFU9wYoLnIX8M5zBK%2BslFAkE%2BraX8LfFWiq3HPD5VBr0YOyZC5r3SQ0ORAccBcmEwpA2OhzBZjKR0L9JdFj0j%2FoN%2Bj33m3Odsfc3BIt%2FXgpit5V%2FQ6Hq9vzRzn9%2FRwdXIrEe34QNW18FclJnPeNoSNC7%2BdiywFU8vozJM1ktr64v2%2BON4Ihhq5Xx9ZQ6zR%2FT4JTtJkNbBHqixzDj1Vlt9T1lxBHZrRJhIbRinyy5AqfJc4U0bsgZ%2BGq9MU7mmd%2Bg%2F6dqumnO11hjrCUm%2B5IEDEMeP6CH%2BtwK%2BEA5FrSDL3u0UpupGS99ewwg8rpXdl6SS86KSKYXnBTPuv%2BsUZrLxgDgRraCxZ%2F0bo5nL2kb92%2BOWJtgF8zpt%2FmTvsdgV9j3QgdHB70JEBd%2B6OtcAMHBU%2F3Op6U55lO4hrf337ulUdqh49G1mI9lpK3sZ22Gssq69ciw6YZnHb8a2TwmHQ%2BO3o%2Fl58l8WqUlch%2Fbq0GmsaRN5AyYyZupAEZExr4gJjCW6cDJBjqkAb9HtLZRig3ihRGdNX1AWUX44dUvjP7TwG6tKXm1ZdobrtEUjiK5GouXKikUgkwu8P%2FfB5UHKXZvceh2lvSyZemFVoTvy5UpSCguzdgJBpil8Np4asR%2FMsSIUhHjZGa0yqKwgFhiNbGCRM6cKhwnjp6qRXz4vCO9AwoB7LKcaBIAv3LQkU7veKtCKRPJYp8JWl%2FwisafP4JAodnm2W7LzuU14xI4&X-Amz-Signature=804c58bf589c055e3f3f91e1aa2411e8bdd57b6aa5af673412c6b1d0b22ec894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


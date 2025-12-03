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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LLRA5X7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCICGxxWKDRc9wqMd2%2FMn9rHbhfnv3AIMXqCi%2FJcvL6B%2FdAiEApsKH%2ByNoHz9IvfC3mbSFrmpW1BlrrT9Q%2B1L6J40IW8Aq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMfTwF8eedegzQE0cCrcA0ukA5tGe9yZ7irsMoT8cP%2B50n25BF%2FwcMYDqwSYJIg8rG%2F7WkZ79j3%2Bw%2BmN18tqtNWECCzCy56wLD7ygs2vAf3CCni%2BV8BqSgaH0dHLzNTNNp3krLQ7nUWRLvoYgWiB1ZKjPSKiqRiIhmYmoF0HPVjGjBrsV8Rmp3cr1m2wN%2FcllpmSsfIQ6%2BpedI3PHnKVvv5IorCxbAU2aVcZQOgv2NplPmUErlofpiyGLsjB7juE9v%2BiSDMU%2BxtjUTh8MXsjz3jQ28XM%2BgysIuvpitnPITuOOGrlZc4tsYFZLZdRZSm6QN4tgQSYs5vHNTHA1mfkcKMgCR5TsTGZR8cruyTUcHFhUhLrp0mxQY0IoMvm177XdEtgcklkXQQpTJR1bRpK2R9k3pkYtc1x6hB2eRdl%2FcSifcRAVchQGnh6DFjfkkKIc9Tztny4guTfvHVr6SJ2nfleGfFWg4%2FWItZFnZ4X3Mur8HTz2sZHwghn16uNDytNbo%2FZKQmjW%2FaBxB%2F2piKbX6tZElmBNhCr2eAvmWsdsOK8Il2c1iKHK16XI64pytdUGHOdoNlQpmVoQHhWefEa1oeGR2cWKIDm4FlIFEL2bK4F8OUYS%2Bkiw3IGU77UWy%2FJVDEDOk0IJLNIn8vqMNS5v8kGOqUBVD0r9ojZVOPbjUEQoPzE%2FKf0Z8SEa6WPD5E2rV%2B45TaT5%2B92pCLrKToC%2B9bOhRPRua6MJ%2BztY3g8gR9iltPEnbEESGhwv322KtQc9OlgA5CQxs0H%2FFygvODG4CCIQ5Zb%2B4o5C0bPYL9FKFd5hGUkHDCmrxoWx%2BdYQ3%2FQyA0NdW%2BMpjpGzqbLNFazfRlSjHK3q0xYDDLzILsFHlsQB8BECrb7c6jH&X-Amz-Signature=982f589a0083aa75e18cb9d6d86c7740d02ad21a0061d4678164408f658e38cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


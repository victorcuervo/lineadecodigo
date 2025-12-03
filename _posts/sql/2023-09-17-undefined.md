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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOO2WOSN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEdFhTv%2BsCjXF6JbJoz77sOR7d%2BSyqskUghG%2BD0Wg8d0AiEAkz3CMOYbOM%2BrJmbIXlxNebBw3KQFkCywSP63M6nCD%2BIq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDJz7zrrU6HIavHwLWyrcA3sPPwnS0rpFnkWALssum8W3kBPGsYk1h8lY%2FfdXtSwbhYT8AUeojlA2MwEWBX59Y1bQHNBFKO68Nzkf2T9tXRztGdlpK4xWFGj2ZyKLxpG3zxvu01SmpkC8ra4XBqscjRiFNgO2AsNoSdtRoJGmr%2BDZR9pkdcRSSbkeGjhiVDlzzjVU5Tsh%2BjByRgLxxNTWNAUn%2FTIUNp4aFE9GKisq1abx9gg1pBFtnixMLeNFinmss5e0nheJDN6tm%2FI05hEHu3GB38igo4bOWs2YA%2FKiusrycf%2B8ccsyMkG%2B13W0255t8fWzGjKIwP4eTTvSJteimTyEiUg3V1QFO37Xq1PlDWwIbIP95zBdPyhg27HYAhxD2S%2FXfAlmYzd4pc7k01nNKrjsApcpNNeFQDjomcs24ef8bVrUQOVIZHqw8J40s35gGf%2Bk671Ph2sE9J9AcbXcQM9YhHLMbvXAUbX2qXbuJWBFg3YpZP5QSz6NgAOwx0tAoXYWTr1cxMZPAMHA0sqThZZav5bwS4F%2B8q4zDFxG3nE4O7N0w%2BzqRRzP6P1YMIN90VsYisaEe5W9aCIu%2BoH%2FBY4alMIj%2BlsJAKKhBS%2F%2BMPTHgOh66%2FtJMDQZtMiQ16TPytfZeEFM4DEIBe20MJ2lwckGOqUB1%2B4re6AhmvSUJY7oFzLGI%2B7umh1yQ4DFqUJZrMvtxRkeIQ6PKV%2BTxbLD0MhnmkQA3hjcxPlirjF3Zcru3gb7aZFZIPgdtxmmgwiKsyDuZERO1BdlCcJI8zeQ09ZPLZb4pvklERsYSYXAO37kGxXjzIYOfV0Hbr85OywsAqII6GSdElA%2BuicfUbJJB9LTe7RY5CZoyyh8XMfPVdre5LNH6%2Bbs9UA%2F&X-Amz-Signature=c23c17d8ee7da38c5e3366d2ff0c82507e33fd8450126bcdc4f3ecfd1ac1dbea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


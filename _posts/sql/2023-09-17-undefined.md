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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X25GSWJS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQD%2B8wKKpwW08FqDf51WEEq3vOwfpwh3%2FyJn%2BjXYynUHygIgZRonv3pc1YSsIMi8pZXLcYeC8Q6av3UKVH1Zn1oghDAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGTIE2g%2Fy4q58ctoQSrcA2%2BjZOCblOaAQCcHd6p900bUDsQDvXmoSMWSByMyGCS%2FL6yKxkryMXVCvVOFJxS5EORk%2BHYW7qvNpSCMV6PyphI851D08mJA0gM9LyAgCaPHZeimzdzEmqNc9l0bvqmN%2Fm0ST%2FMwloSt7sA0KKpBP7u%2B5xy9rRo58MAVNIL7WaOD5ykQBG%2Bjw5l3ds2Z09Xh02ZTIhOyuuaddBP9B6pBJyTb24HimuepZJ0AA0BMeZn0GnkI0G7melIOLsknbSlbjVJd4vZtmlVecZnK2PwVoZxloZX37joaQN3ELlAijneE9ZQ27s86jfbwjUFMuaF2yufQrAX%2BWvAssL3i5jgTFnEKV1aftZZ4%2Fix1P7bFY1TO7haCnXZjiQryi4zKoYrMxTuKN5UcQYKtgBgzd5tklbrJM6mLIWbq%2Fj8eQXu4%2BY1oOcw%2BwV4Laxf2XRaBnjm%2BlaCxjbIRX3nJIToc0PPM7bFM2jNkbxB65%2FSaYBN3dYW67wTD2i6twvkdI4p6lOhBiADGo5fJeA9ErtPcXnl%2FRYHgY%2FLeM0x6jPH1ZC1HAI%2FKssJXQ7%2BacSMsI5swD6WEpGjHz%2B9EIPJhLiicNAifTSzfXZQwxmIFAEuVzQS0xQG0nwE0UAlbIkaRO7kiML2lwckGOqUBTaCtiCFu4xr9EZulOTsf3XsFsvMHyX1o7MZm0ODCI5DV%2BQF%2FPXms75fEhUr6VnV8wnoSGefGtIMyPyfbLMqd%2BX4pOn%2Fz5Om%2BjZQ9xucZ9J2oLmjBpQXR8uWPyMOEj%2FHYy1OnKdy5NW4gW9iL6%2B%2BCUvr76Z1KPd7Uhb5dkEY6FoFycR6lUO%2BVfUb%2BC6aoYNJRmMvxa7nyjFjqh4mKKEV%2BJlgx8scc&X-Amz-Signature=82c0846ec4e17e1751d1e6b43715b867353ab119d4dcdc86d5f5fcc5c91d31a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


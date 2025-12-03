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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4P2DU6Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBnrNrto0k9R3Ox9RZcGuyfie%2F95%2BZ3WeIDis21s8IOtAiB3cpx2eDKYoKdy%2B%2BbvYnUlZrfDgcMpIbaF8iNQnaURvyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM%2BJ5znxLm%2BAbWFc4DKtwD%2Bvb0gMUIr3mrvZKCeVFDHpkZmPRBtblq2msr3uENXXUuRUKh7NLye7Il0zrpyS26jSE5CB4njxbuSgAQq4vVkeBSPFA7KEpFJ8lbiX9YoetQk90o6JNxXeq2zwJTNmIQwV2Mlr9FnxSQKhRPsf7XZbddLTp7f8qXbRe1BszzYx3eO45iBDch4hPh%2Foqs9RfBVuHwW%2B0h3PqEUBvto5RyLjAhWQrVBMa8OfUurqsVqYbIV%2B2HHE2Q%2F2fXGnUgsGiuDNNl0wBZHOQHWZ14BT607qzFxvs%2Fwsfmwv4x1kL9qhu26DH5Dxb9qRRNAv9rAibPOrGqEfAzP7HHtMYkgeedOeDGORU0V8J130akJw5f32BtJjXSa6074m43aqcWqUOK0Xplh9M9MLqHVZla1V6HSOV4EyKmr4xF4yiWxHVZpbbXqFGCshO9rPXH%2B4s%2F9cxsmLRlhfGpm7tS8NI6%2FdNAuhaC9SonbdacMAK2uf2BT9ofYmlKyiUhdsTgybm75dsG1f06TsdGPLEMQF6lKxtpTQtkmbQkkGFIpqQrd5PNyqwSt3hu1k7EyJfZuQfFxIZJz2Qv28HGBss%2FRV8tFm08OOX2eXdED5ui7ZKojMNHYpbzUu7spLem85b43f8wv%2BnAyQY6pgHom1D9k8c9ipM9GgzSoKifQoYAF5zouqEOTVOT8OMGrCrHTZkn1eIBRirk1qKB%2BJtbRVLJcpJEV7ylaPypc%2FaVhXjowZ%2BRY%2F9%2ByokvkCAnfwcAnG4Kii2rHARgD5riWJjRRtfEVjRoNC6mS6pjxH49hAFJof7y5V7FydLootFvHxNPjn2CM14IL5nthPNvSNZACgawbYNaHW2U7ymYJayaO4pwQ4Yr&X-Amz-Signature=4f970283193b42a0047e4be4deaa467f3a2e99d83c8349b68cb0fcb548c65bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


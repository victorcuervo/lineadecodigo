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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKFLYAIP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIC%2B79I3QH4d1aJ%2Fyo2T4trk5rrVldmyFzVyOrYBQFGyiAiApeZwUts4Io%2FNateK2P1gxaxP37AKz2MT0SvKnt7oNgir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMLZcVUcT1honhslj8KtwDrj16dCiO9q6j%2B%2F5YfAGBPF8qJ%2FNvJMzDKuYMzcVuS3mEBNVgVKsfs6ozp9TZSxQBdv%2BhkgvBlJz0BGZ83MTgvLlS2%2BOH9VCNdh1IqbqqAgZYWfq28camYPucqLvQQbnJyJsNu%2B%2FjMaPQCwBkBpKBLHwU4O5gy1pmcW%2FBEUvy9GFhghGQZArZY05lQUR5HzHdS8yrkK55FnA0KPiTOndWnGoXrDFK2mTXqvVQq0HLtVB4Q5CI1hXZ6W86plApSjjiqRh2gl2pZVKAKv929HPWKaBHu5mAld6wqfzqQddqKTW8PGxzK7ZaV9JrIIJ%2BvCtR1N6Nsc281FdJ%2B9freAlwhVITaYdloTFmX7AFvhPBkSkORGvBNv3N19WygP5DXvRPuX%2FXwPo7tqFuLzQ5CSuHkTQREYCfFqGgkgHRtB42T1QrNV8ZMn2xeHeX%2Bqbonlp1g9EDdpPI2o%2FBqAe5q2StiDsaq5O%2Bpwa%2Bg9uhS0NCwST5olIzQxibVl9AzGB2ASnHETiRGLAJA7ExWHFIv41f%2BJ1v7WdY%2FpynPz9OB8JzwjNFkukHuVaTcLi1fl9dZLjHJEXTg2dFWCvtVE3%2FXEpxhsNvHmFvCcjt5QPa8ig0iiKnNVVWIQhBGWiGHNsw%2FNW%2FyQY6pgH4bKaWyp2QiMOr8KPUHktMsh7HBBBEhtwBOYCa0ry7KeZCQM0r3hWxM6G1RIZQQDDkgFx1UmlWMbJ0uUleH376dSazLx0Zwg3%2FhSajUGanmqk9pMDLpAO1ShmEw6%2B7LTXnlM2sTdcsUbi5Nn4mpwH8xiQl%2BrsRwSusjPsV5P3EaPmDJQ7C2ZgQMOz%2BFKCN04ZRnR20za%2BPskXSj3waHvTX5R1skQED&X-Amz-Signature=ac597a41355c3c05435397dd10cbdb30331cf957ca5e3f8299c350f3322ee2c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5YJIXS5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDIGz6BqkGT2iIOACpWreN%2BEz2cv%2BC0LHBau6WENJ4HxQIgUUV15Uaxb%2B8%2BXS9L10LazEiqn5u9fLg4Qy5Co4jEvx0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDNNWjTvAtfCTLbd6jCrcA0u1JoexI7kkaDjyZmKuadofMEX82Qfz9PTcrR4KInsZRc8LJLUuGd8DE3IuEUiWvmq9MqYZAbiXEdlCOqg2Y3Sle9%2Bv6wHLmVV6%2FVrYfKwdTWYCJ6UwSy4VEsYY52Cug2iF555O8C3KVdfzNwt5yvEOEiG%2BC2ZKz4rn57tjPEPBieOvFWY1tMDiY46rfj3UGsxv9vpwzEaNBID7uLTrBDe6CALcdrUvTTvDkdlfWLvqQDJhJ6vQaafe4H609OKjLSBCubwn9FbD4C7aE%2B8KvYHWxwGqS2o2YXRMibUoDbbTe2p4YE6JxX8mc22tDVWEK%2B8v%2FyMGzg1%2F88%2FQxO9PcKocud1IkZp8N2UlOLkwW8OO0gNkv%2BQGO7wPejlYJo%2FtklXDNZZ9U6oAiibHfY9DgzCvy4gDgEGd8Z%2FwE99f8Qk9%2BuBwPyCUG8Rw6qZQ66dhwaW5uH6rigUyr3c7dgU633If1W%2Bnq6S5LYevy%2FaNTh%2FZnrb2JEajj6qzBJZ5oMqufZ8Rs%2BijS1fp8H3KgL146kLuIH5OnpaLEm5K4U9o1eFf5MIpVY93%2BSJgecuIo7fVkskvrSMZzOj%2B5XY9PIPglWkb8f41WH5I78PGpbWhzCDtAZc%2F2J3Gxm6QXGdPMMSUvskGOqUBqKLeNEHjE4q6GP6FNKQa3xTGkX5v2IiH7klPdjNft2JIjuwM9AlFrFx4NhzIuh7sOxY2Kd8yh7ZLAbgW5yNtWy9pUxU0sGePFJ7wxXmkMF%2B5M0UhB74tTEFUyZcLGW5YtHQWAaaFW2u8Nluz3%2FgRtQ1UhFndElwQOCxftZmgpZfXyVaAnN8cdIMwo3ScMQtx9ikDvsJCafE47tExJMEJ%2BYhuLK1i&X-Amz-Signature=abc37f352d02b45a02dd6238a1a8140de423e0012212bbc2e7040ef1fec4c9ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


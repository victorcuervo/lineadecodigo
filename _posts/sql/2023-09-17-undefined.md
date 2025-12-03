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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBGPMLOI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIBGGKtZozd554q9G8tRe1gle5%2FYQ9mr%2BysotN4MNZS00AiBZkObDiTCLqLChDkKVV%2BcLnRCfxMettuAzszy5v8FqDSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMpN1BpgKoiFmiOgLQKtwDuFIs%2FZuy14FUpRhnqCpBeInC2M5OzCEAbDWRs%2FYwJnsO87y1IYENAYFEDHKaj9vh6O5O%2Bj%2FQHySTOZjkONJyso97OElK3XhTCDK7sMfWX2%2FyiWYMu5PK2Wwbpv6Ti%2BdcQDpqJZNx6EKP9X8jkO9f2VqSAyu30UXnts5DERTA7uEXwhrpPLQQhxrY7yIQickGcB90nyqra2UznaiiyC5pcy8kvtKrK6k26f1KVBEBz9K%2B8D%2FfBOQUDE8obJy06S%2FLdIK1eVh3bTObfM8Tf40cbVQxk2PYdDwRnLpMzwc5Y2bScdK1z%2BzpfsULpkrmmZylaGg6%2F3yG18KawntNJlcklpahoZZ%2B6jH3bUMCOkxet%2BZknx9%2FXE%2FHxg73kldIGNDjAvyr1Lph9mZke5jg92f5ZcBZDaJWiZVy1kFs%2Bl8U2iEklPbewKOB91aal0QRI%2F5hvGsPBBjQ4n0qooOI930xD47hTKX9Ms5WS1q28eMGx2vQhZxiEzDd0JCfSMSLEA6E7A6hlutU4kvsgEj3HeC3uvoidwBKxs9dsG0FU%2BPrkSFUg3ZLfhxuAOhVIOWJUKKjgRLARSCEcswxzF9la6E3olBUqBkIcBZmABUkQXvUJpUrToa%2FjJJkPmkaVlQwq8zAyQY6pgHPoL7TcceGje2%2FYp31hmzeNTgrs55Bh2PnPwn4uc12S8f9mEUu0CtyfcqDWOqWc9vPB56Tz%2BpT7%2B9%2BuFfoyg%2FtZUai9zv%2F0tq93L0DFj0YZLGARkDZGjB6UfMfpAYbsOeXqSUA%2BETxQ4Sb%2BjOsFVWHjpxGtX%2BKtkwnx%2B5mnAm%2B%2B3P5ovEVE7123AtiPq0vMSkPFvf30aHCWNSPQXUS0sn62ODU0Ykf&X-Amz-Signature=7c965cfbddbba3eb6f3d61f9c23db3701b25cbdc2a045a76e12dab9640a473f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


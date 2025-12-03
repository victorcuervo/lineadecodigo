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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKVAG2N3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIBee7t2ZXLw6lEdQBrGwjC9FGlWVsWcNd2j7udw5fUn2AiBvEc8bAI8pwBxfOLjnPhIDHX5Ewocjd8XslISrym7eByr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMC5CTsYPT1Dh4iSWsKtwD5g2K2tbYLVGDByWXGDyWti2syUmtEssJ9Q2tcrdroCheO%2BEeaZNhIXgC9njtUCIJ5pY%2FbW14HBhXmwBhfovYGFi04X9%2B42OX01I%2FUTtKsIrqKODFsFwGxwdoHFhoYZDR6G1lbeqX0ZylRMMZSPJtTVPhgcFh5%2FOieYxdXd%2FH2hG3oymt01Cw1GF6u%2BT%2FE7a9eB0wkLugZt0QGW%2FwXiHu%2FdosQ6JTbIS88GywyAevIKVetsFAwVnulhl3un1%2Bqu9d%2FokB4ifV5HBBg3XeHbY57VOGqgnOdlnkMWhTOVFEEVbvBgwoKhHqZOCPZMcjQycQ47I8USBbMSAbaGKM%2BAePkVDxS9SkOdgVfT6VgQpAL%2BG0rReiIYtRb13uZUdTXpWmn5ff1bHffRafCNvi4oesuicRCAwFi4ntIyTONstTzAOwbAk2Lt%2BHd3%2F8T46W8ZMV6PJkhy1876ov32IIbKM6Ky4o4fo8JaEwk9NixQk8nU%2FhnGD0EYAX32ldpjeFCDP02cKWkcqBi%2Bg55RgpWZWYNrbMrWWstMsS41VvaRqsb2Zx3LEzLyoh7eKjXyiuMTGpgjbhEnaEqMilH8YlErJSrxXACkcsW308N5F1xwuIsH%2FPD%2FvcgVb6wjqsCaYw3NrByQY6pgHYS9gmpUh5SL9HGEDLZ3KDuSog9AEzOGmuZYd7wzxa%2FGyAD0J8tAS6Oz2u1B0h02w3WOs7XNRuDZOlOCGZlltb91cUn1M%2BYBQ7d7NCTSzc2ZJ%2B9HfTNh7%2FsbQLRXbGz6RCqrJG6khfNAKQNhSvY%2BunhIr5Fb058CIKaH7uR1BzA%2BnuTIzF6z2jCOxCI0eAoDvYdUM3fECQICyUky4NEhHggCt%2BAIg0&X-Amz-Signature=d06f9ddb8cd9d07f6304d16c9596cac9d89391be2ef7399d47089402b8a0707e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


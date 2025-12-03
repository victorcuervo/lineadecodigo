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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLWEPX3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T111117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCRzjXlCtaEjkFcBCmjuVU5yZ1h0TsJUIVwsjEyB2vNMwIgBAru%2FckrABkTFyTSRw%2Fz0hoS4XXC%2Bbj0gnqmHHTEbX8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDBo4fkw9wQpIGGzG3ircAwrhWc9cGXKX5Xh4e%2BReND8PVP%2Fk31wWuiOzJX0PDfqaxZ2HcQUjIx3qRz6xwnjzQEi7V5JJsKqL6zlKSGhJUrOMbjuDC7q96aT0kRZ2xBziehiGQYa1EwS1Bas7IzCM8Azly7Eaoh34IobBsfOz3WuqvuSFefEreBV3TQzcpKVDqbRe5LVn%2FhL2PTfeBLRmYwkAxBrG9QdC5pHSwEv3w%2F27eMDG9a%2F55aqxE4g%2F%2BRqyNF%2FmTKgHypfg44VsN5ZlKpJ6JPyNOgYmUBjoQ4kP3PZ7acrXKBaaltqeipY7NdqOXud1b5XVn0HbbCTlrH6CZf7nHHCH6E0bLmSxIlLW2GByxi0lDZ15CuV1uE2MXAOu8NRy8dUwC8zKXcr3zldIeHzi%2FbYy%2FvfixOeyTsHJNXsnE8Hwkwz2Rc9XQ9ltUW%2F472xvHaueZvVWJ3t%2Bbo7wK7h7Fu1QpVzl0i67ouQNgh3szBCY6WdgqBk5xaQo2ZvpLAvpV4iSq9CpRRSpTbFp%2BTNLmASOWtSR2dq74qY3v2hUVaaDqu7nsM130z3l1hYPjQZ2lOGpq6110MRllYid0PZZDJYedvRR3T6sYCr06xn9Ma5pHi3DKsiMWds8Qzrfs7BttNAwDk1QHrcCMNWuwMkGOqUB2iRKGkOHctGlr5GhJodDWlVgZ6iD6p34AeJKSSv4eVc0RFA1qCj13UqQX9d7xTmVrfQr4qXcg8fSeQkJpRxyvh1MFNknIZd71xgKTDeLJv1VM0okEdH1OZ9rkqHlUvJEGciRKBSbwcLprHx%2BzPTCqoprrHUs0Fnq6Ve68MlXGbsepDW%2Fi8H1B2m0MP0JsBnjz%2B3TSjimPPbEohK3p1mwNApCtBBF&X-Amz-Signature=0f6cc5c47042ab5d498771b67014c5dbaf1795566430849f0b0fdb5ad3b7ddc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


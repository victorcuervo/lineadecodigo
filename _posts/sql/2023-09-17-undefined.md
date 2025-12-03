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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QI5EWQ3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCo2mUId4YpEY23mQMU3H6cGuby6O3%2B5u%2BIsEAmgErs8gIgRC4vCC4W%2BILBwMLgSnnklTjVUz0%2Fxu8s6xYMQC9NZvkq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDA%2BNmwMdVS%2FHpFOCECrcAwouX8y9U%2BWp9sF2eHB2Gkbprkef2AMRVvZ3DgN%2BTAqomKt800VV6lhdIQxhWPHXMWbCx9IlC4LTZKhyTO045rBjx98X%2FEo2YlbDiSm4fb2%2BDNsAIPuKsGnfsqWpJc1eqFNpJjueDHtf2yR22%2F99uazBOt8huc%2BMMSn1zhtFIkLxoD6oeg2Ul3ZKM5M0Rwd84yQSTpi7F2qStPDyjtzIOJ2MMzOe4g4Ppb1mDGpK0pA8RK24cW5nbt55BgrhJ6xNCU6gYZX4R7b%2F98521wqR0v3up1MHqt%2FBTNJ2tP3BbB2zNOMl%2BAxVGtt1fzzesttc90fSY6ssE2pRgXHwwLAhh4vGuW4OLwOICTE0x3YAFxJPWUYkc%2F4Q68cBzdWDnYrweJghDoi4N4ph6LZx1LOtpLTuuISa3ptohdNdbpQ18aLP9ZZicV9YV8%2FvHff4%2Fvsm0RR%2Bq4WLDoYoDQw9cTn3cbiTt%2BfU3ZSjAnlL0YxLV1QdXQfkpHTeqLbixatGO22ZjLTPKZ9UpHTj4%2BxL2mn2JUDB4IX0FTlPmm7fTC%2BkYSLzRcGg7BXrfbc4JlcK%2FZrX5nZXfM%2FY%2Fn16m6uG9KWneQurxsyT%2B%2FKOEmTSRJHlf9vEIJoeLZpz59Rpz7PkMNWmwckGOqUBTss23%2BIU4O9DQxApbJtEnLRQgBfTi9dZUaG33GbLtpKFBkDYinEYbdc%2FesJ4nVjj73A9pupz237%2FK4%2Ff7sAQil%2BxSt8eQjXGeTMd2gRuNWzF2trnmPYV%2BFRoD8RdFWaLJCJAfT%2BUcUVs67muMlHFjZ9uKpHjPAT%2BEq0%2F6O1b31PkbPkMyHFr40wKUWTQvqS9qR3pk%2B7kAXe%2FnhptqPzwgp9ClRGl&X-Amz-Signature=8dd5d6886474f6fe6faf0b9a6dedd22d601c0adc07e068bad52911f87daf7f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


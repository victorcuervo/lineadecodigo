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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2EZ5RTH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIF6aoPanyUXgue%2BAQJB5JaWWU3Z2a%2BJ0DPfxt2ezBKwEAiA9mnvB6dcxNrHZxiTGfzQd7OAODiG%2B6QWKvcuytCb50Sr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMFJAwJkF41bQtWjVGKtwD2JjT9AeZKdBMkLjB%2FfayyrljWyDK8mHPxRumxz2Dpsccsr5GM%2FIy5BWDnuQZJzLZN5moV%2Bg%2FRtAaMYLe31%2BjhRLYd7C9NtWrzD3PMXpST9d%2FQmrpKGQaV%2Bnh2KOkv31y%2FRkBmrxnbSNeHoiXBqLF%2B9%2FLATm8SCtQsdwMEsDc9koGUp6jG2BOAVl73%2Bo8yJGLpRpZkW9v0M%2Bk1k5f9j5Ke10PZQaG9JZStMXNqTwAyvJhDGp73PbwrtHGxDpfRhlVFh7mNROrajRnoAsCCegoh%2B1fBTiZxMBCuUEEUqVoLCqQ%2FCG%2FsKZFdaNhaJGXPsSyAhYId0ozkOmKX4JubSgj8U8Tb%2BfjTnaMgecFacz2EgszzhgZsSH3YTxMZA%2FoPyEEz2FQMlxZmlcqmZ6GGwhtJL0UoQTqv%2FqYpTpNqJy9XhNA205JL9M%2BJSPecEulF7kqOOjL1H58wfzF1SfdDQfR8qFjp9KjdbE69hV%2BPx6QZ5r3j5MipW6c1sm2anRe8kVd%2F3UC5GI4AiX%2FE0zouSWmPZoaHEEGCSVDwK1unEPheNGW8pj8PoeV9Wgp60hPSrzCaxwpc29%2FiC7KSPGKZrI9ZfsabwWbJmUbS%2BAERR3fHVEKs35E%2BYemR0%2BS%2B8wwt5u%2FyQY6pgE5OrDEKwd5pspFtW0i9e5X6VaUspaE0mQw63cHhsgHBtKQ0ABbHj5T3o0%2B3RHNxp8kvKc1A%2B6aSGw5sWMqo2esTpYFJ8hGU3A%2BdZhG8M3pZl49HPzcxDQZ7OkUhBYXKx9N%2F0DWSMJDWJ1s%2FTu57jHuC6Aengo0e5fZA%2BB61A0FWWrauQ0GUcFgFXJZafRrNs8xtiC%2Fw56hc8WCqajtJkeGTIunqyOD&X-Amz-Signature=d06dde9bd75e0686513419e9ee55e6b76cf963ba58884b038a7db9907984a601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


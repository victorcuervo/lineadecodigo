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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLUNAKW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDwB0GuK6OTpCZC6b4vaTvSjRJBX%2FV3H%2BMbRc8BMYe9LAIhALqauJOFYn4slARw99hGwJgiJ7mVLPLRvPRKYJk%2BvlgCKv8DCCoQABoMNjM3NDIzMTgzODA1IgxxE99Bx4RBHEMXeVwq3AOrpzwfzJ7dEzJ7KUqSUHDzJ7Sgn%2BzPkYF2LOJ6DPNO%2FaYNMQ1epAD327ourzlj1fPdjspkyhZQlHILUW7ZdDNw9DOA80eD%2FUz4ZtZGjucNl2Rlah3oG5RFm6yoqfrNQGTL4J2L6E6Ejnbvam5Lsvx3kBYJyda7c6Ulk4gg0HdhU44zz1Sa2lm0bQvYMGKzIMe4wvIoDQRo7zCN3LszDcUCKLl1VGyfFTI5fvXV6dqd%2BNnmp92W2uOA2OGqKjhrDW%2F58v8XeZZIgRP9zTBTWLCV3S1GmMd1hgNoRTGHPVhLnI9XkpTpEtY%2Bm0O1O7KpTKux81gHjlCAq0jKo0nB%2Bbp2gA5MCZv0oaCTyfTOSMhZkDxORsTnPHQ2BJoyAz3KCgpkhdo7UAo27PJ1jbUBvavm84wR4xiVGlfyCRnCWP%2FISY%2FKm25azDjmk03DelZjrzI1P9Lw3ojiXMLIAm5qtuYw9EoE9N7zVg9zef%2B3HCEFmhwe%2BvqWjHvGkDwg8GwAodC2UDfNsvIOIi5SiHavkWoxwOp4Itu1HwZ8E%2F3tz8KMMR6SbjacHHfS7ot40gmbkD3CNw%2FGQd9t1QY%2F9FEMDYMx2ei%2BQVwMcHKVwgcBJwQ87BZFtm4thkEZ1vvn%2BTCb97%2FJBjqkATkI9DNWgYwDLf%2F%2BBeo6oYT8j0Mml6OEPnnhG5ocpDZmNYX0xGEF7Q6jyPDAhzN6Oz0GFSQXdfPnO5dpORCMmymo%2B37MZKNtRGYnyiof1DYcb%2F9qAkiMPJQgRXG5tf58ClGoNK3uIBbNgfBVq3qMlWxdIqBKmoZGCpQ%2FQ1XSN5sTRhszd3zTLjqbWffmvB%2BLnXREvguUZgx9Gd94WsFkWOXmN2Xq&X-Amz-Signature=6b211eef9aaaf4c01c9057ad32763530dd0e3e12707a6f94af6d61590d2185e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


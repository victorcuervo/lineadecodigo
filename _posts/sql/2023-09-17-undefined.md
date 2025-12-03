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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T32KMAI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAt02%2Blbixzk9dPdqzRTFP6DsaxApiTfq59CFsOVONupAiABymEjS7qi9jXWadIsqQxB3fyoInXUVebPksQCJrb28Cr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMCSNl3ZZwde%2FJ5XScKtwDjNP3XFLNe5sZAdBOLgJRURW0E1LOpVgfpbqu%2B3zaSee6%2BxqbKZeNGYiv3SR1oM5JgERLqsLnxa2knBa9WMuknwNIC52pqdoeiUYNkLYtD49OUCtq3pxas%2Fcj8oFg08uAPRQlaPTgUdJy0eOQiIaC3gQJlJYREJhnLFlzu1E%2BHM9VC2L7anV1yri1%2FnHynLRjt2nXMq2BORNEkRXPKrotpGFpatcvDCluRp6DR4L23RocXQsX6lsrTJO12tNo1Yh9JKj%2FWSDTs2KgIsO%2Fz0l1a1u6dBhxYZ%2BzbPBSSxFzLc9QGQZNBOweS1kVPlv4LTsZvSxM83qWw7rVHi4YVMk4XllRIW0ktKMtJ26HzKOkEJ65Z9CIQIBNslM2OULuWzpTgrC2MMKrAfl1nTxjCkZ0om1j4ygcXmAHzYHEn6znmjHkLMpjxo1t88SNCCKEBbIQhKggHM9IWEpGcWc78qJ9fuHpa812UZM%2FbSwDD%2BllwmxMMkx29e0W20jfScIDcGIO6d2wsfs4s28DZtGNn%2B3pD662O%2FUQpbek6M%2FejayCbr6VQoZhIJQl%2FalB76n7S3vG495tDHLQWEpB3RE2L3lAYGM4dUTZ3PTDBr98RYj5GaSkoAoheGGk5u2Pri8wk9rByQY6pgE2KvZZkLrr667PIlQ9Jw6xRkPLKyTSUDHAXTkpZFqqY2GtCr%2FvN7NNBPJX5wWrXBw%2FToLndh%2Bl0CX%2Fvo37ZAGc6kf7JqdpbG0wOQPprvyXVfx%2BMa%2Bc9rvQqJJYGAHDIylW7FxuvWYvHfmDGKRyWTcmHsob01CqXnlqDVyJya5Svgrbitb6oClAoMUQKIt8BwszU6hriLIzmZl2jVvQZnP0yN%2BPmdX2&X-Amz-Signature=98a6c6174673d2dead58d1480ede3ee973babf9f9e738fa8f314f150ed9821fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


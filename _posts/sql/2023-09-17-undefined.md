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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7QGG7G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIE4n262KSm%2BRjtDjU9SGVSDrCphul7%2BEgXhU35a4jaS6AiB8RdC8k85MqeeI8j8kyXNETd4Q1xKmcaqeOgECbfHfRSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMbkuocZf9fa8JqtXmKtwDruzkoKVE2BLYJ2SNs6G%2F%2B%2BdWnpS0h6jooS%2Bt2Kb72UIoFedf60NEBmoYuwaiqrcyFXvZVwZ%2BI%2F%2B5%2F3UtGOmap1cCpc%2F8gl4Eh6QebJ4FJbhzdPAXBsEbeXH%2FdD9mCgSiwuYpv%2Fz4O2zRrQWaADBrcZBgUCsIQzVWe1pe20b4NpDBrOPxISTGKHhtJjlYa%2B9ENkIijkbSteNmBPxW5bcxA15ko4nc0dHLV8dWZD7rq6VsyNdxuSjpmKgNeZbg3k5FWniHDhZYE1PHuwtL1EN8YGqIH8QBQScJ418Qp2Y6eRRMOruPTK0wcluyUTTtV6OTU3wnPl2aKrm8DKLS2Q3qW3fI1D%2FDqT%2FvuviFcTSJiI29wyaVCZeMr6Gv2stAzR34FoHjMvXh12%2FeiDzLfD01NbXIU7F%2B9ZGoElO1ZHyMboHyDULfa98ulVUAhZ6Sxhr%2B4GCNWZ9rXcgYZFiUUwZ0x33Zspy3WfUoydufej2HlLa2b9UTVFAJRhP5W1788ZoEwrcxgzWHqfTV821TatrMBgfnxgPpN%2BwY9PPr1AFgva8yfC5TK%2FC4LGIju4Slk1Yf53ayylwY8Q7FH6Kb%2FOh4p6bItaINlsFpQTMGxUGHSRGU%2FQ9kwW0dZ0I%2F60AwuJa%2ByQY6pgGjrUlTnTkfbKyS3K6OPoe9KYM3s%2B8rK6Xwba65mQrEPZ%2BxXU4MxLeWjn0w9WpX0m%2FhVywBjK6fAG8kcNU0fDcHIuL3LWxQ3L9h2UOrWu2XH5XezcoYfpcemSZ8Ijdkmoh8Zzx9En8MJiRNP4gX8TyfnxG5XmCQtLr5a%2FaKjT7ltGbPRagw7XKRkO651r1dEIWGPhfRpAi19NUm27hzc22I9TZMNiWm&X-Amz-Signature=a29a105ccff116f8384d5698c54c90574581594814a79120bbdd4b3cd883e07b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


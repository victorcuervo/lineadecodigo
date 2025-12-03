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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5JDYGBF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIG%2FrEBC%2BgCt%2F6mzwjuG45g5BanjdUWDq7uzJvKdaIhUMAiB2bw%2B9ml8C0tFzQaOcfgAOjvHYxeR3mia%2FxkqJFTanLyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMmKn6Fh49lHOMMxZiKtwDQ0QeXa7tSEfGzxAnhocr7glKaz61Qdit8CyEfA3Y5p8LedN6zkx3gED%2FhHkRCGTVb1NH2meSuQXVBQjM1NcsltxXuoXF%2FNpywXgAsMWsM0dOwKih%2B3l8C%2FiARkeTqNiUTKQ7C1t90JqOOecHd9AhuZB%2FhavgQd23kX%2BuAsPhEUJJlHM%2FodfLrJAzBidQQIKKkKD7FYabIgJj0g%2FPApuvCuKkyw2ZipednMiGS5mZDYVMs1i2D67nXsTRgKS7Pq1359QojQKsIZWhcOEkRBUjxKfl797p0oYgerLSROX1TIvd2ugBI5qWC5Qu30RFZK1nSDndVaVgyH8mXMPeX5wxcVcvO1autKAEBC3y2w94vOSr3%2FlK25PDIQyijjSVRhoFJQTEd38ksBsvnGb0sK%2B%2BKNVT3rrIG4A0sOOykski7aAbru5T9FKtD5updgmxk9iorh8Eubzr%2BdoKkYg%2BNHdHBet1JFDoiTnI7c%2B99TQ75cqdhWG0XfowLyWQWkZ0lqGc35wSEax83IQWt50WQvU1QcUHPMrFvfddxpsbcX7WkDPLvq8%2B%2BQy9pHxsOtAkGjtFR%2BHqypdyRqqB0%2FD5PZEPnYkYpLfZh1rH2Rbt%2BJDZgRPsDX4KeVhQiC52ZtEw8Jq%2FyQY6pgFkRCh%2B8tGiieYg1SLijx%2FOhXaozgb5qL1wvve%2ByfzHhXs0%2BUjtISXWzHg8tcb23yUP1rg%2FKIyirI9EPqjHaY2Pf914OA8IQp9tvtSmiZwtWtC7at66D2oE5oH0HDPEed174wQvXOOUy82rfM1Llk9H0gGbO6kRT3H8AaBEMMZ59U7eUdkhqaRwiP9iGB%2Fo04M1ZFGBhoESZ4UPksZ9idhPyWRk83Og&X-Amz-Signature=b6e718a8cc8ccb1df09cdd1d3e9ade198083940705a8481d66a49241e283292b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


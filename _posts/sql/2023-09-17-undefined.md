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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LEEDSO5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEXuNOGZaQ6Qip1wUN8Od7ORi78uX%2FyMZcYrkNhWLGHYAiEAxCUGjDttlBzAETEsBHpZExIyZCFzSIguIwrN1sWOxpoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBN9eYVFjszidJQiHircAye7zgbHoNOc0DtQa3iR0dpaj%2B%2BZGp%2Bv5Wwrm5HIqHuHMmdZjqebb65xj20E9M1sLT%2BM7WvbG%2FFsQzlwbBu3Yix%2B5n6BqpmbCb7b09Q5XqbRkRe1gKDcVLFbi8wmlJgna8qyrLQfe%2F8%2F%2BTFxhS6XSwfHMr7LHeAjGYIEl5O28reZDi%2BWKlIHzHcYo6GMq8GC4hTUVdhX6qouTw9bIyo%2FgNo15rIzhxxjRXQl1UhL05ESbjAto3%2FlJRKnm70eW7jdxoQEBF42FyWElLbUs4es9lX90mf3GSNVD4dWjxfToZ0vF3iQZLXJ6T%2ByruYkgvYeh9BWOOeBzfnbkJWo5%2FtY9FX1JEA35F09ubfxyGTSCaGIp%2FVsIIkVqhHcTNY8NI5JEcYK86i80f5f5ATdNXArtzgzG6iVHvnTxwpnaM5IG9Xbo9fTgdHziWbEqTz8xbEWks6QO%2FQSgnpfzbhzB9wjaaXurtT3BicpkwXGlFOYcCz1EH6dFz31H4R869LfEJCYGXOxTVk4KhiKssUA6eHPq%2BnJjRjHqBiKsF4M5oBG2Kg0jBlwcjuPI4dWytXncRLlYRnaqNL1eTBTyKZPjXKPeA2NXBRLrwpwG1l77S0XIxjx3s%2Bz%2Bxal2mT5unN2MMmWvskGOqUB3OPlRneg4oDkUEVFbC4LKsBB5QFmfACFM7VGrS67DZSCJ1yv7HR2hMJRIaXviZwFxcd%2FGOhJTf6m58z9Brh1t9er6qFojz7csBoJXhvSxyU%2BuT67AXXLeuGeD9zIxhBdSxbrnF6LrZLrOBMt4XiqRroIzFxp5DusG5RAf1pzqMlLjRhh6p6Dw5hnzoR6Anbv2eBKz29dQuJeM84oMW1Djg7ZIIM9&X-Amz-Signature=ad96409eef362ec0c31829922f6001d078c88571c841a16d0bee5a64c90133c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


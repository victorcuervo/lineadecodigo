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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRUNEEB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD%2BqGc9ScAONVTO4praxky5iZVduVMb9LJ4XGdGXu5NgQIhAPfmgtzOUnWb9bLmVxfPhQQTDURBNhsXZmJ91n8huHtNKv8DCC0QABoMNjM3NDIzMTgzODA1IgxrtlFgUpsH%2BeHySXkq3APqytadibdFFgeDFYOeW2NzQSF2Aveoj%2FxO1MUG8uUcop55kbwqloBOhO0Urqjbrn6%2FU%2FLzguemCcaGrWeo8x6tigfVqV%2BruKLW1eEPjMY8eqWKy7Glw%2BB4O6S8zXWVGQ3BjxkYoncb2pEFNgWh1cyXSb8A04YXEs5KpX4heho6chU%2BcZERA38%2BwDk7qy78Sha%2B1UKAH3aVwlEAas6TjO1vecbLLHwHIMXrQ3GN%2Fh76bC2dVbMF1awTfrqIxswO4nR7D7Yht%2BT7WP9Jl7Hk8QpawckwtuvGx8An%2Bb0LPYAMg4J8VXBCd5h5HK%2BRcpUXZZE00312%2FuD%2BjspIlfpchbDjeuS7hqw%2FDy%2BVkHJBerjLmKd2QkicMNeUnrt1HH09xL5xOwdFQMp5YfK15wISnIUCwusq9MDMKMPiz3YE5CnkA%2FIgJqDbliKfMeaCnhLAmPeosS6FCA9LHKb8kbTW1yRZVA%2BPkMVPUZrXg4DY9ZUeTVh3t6FhuJusqx8iV1OccuUuwYG0RYPFc4JRGT4F0g7DuoEVd4jlepXd4ubjJNlXCGJLrQV%2FD6JgEfk%2BpU9yo523Uf0zz9witxtXq03q9m7anriJh8iBcXrXDAutAqTipLe1KwttRaEFg%2FTKuzD0zMDJBjqkAV16TBm3U%2BY7J162MpqfQ2O4pkzuQWbnLh8tkslNzgG%2FiBCbLr9MzhpO%2Fz47CIbdl9vyUBlFU8zJROsNmsrAQXm6dbqIlnpKfPekQoAuT8gb5AWROtkZDzDKV5U3QCPkaf9lJVbbr%2BkEQOedTG7mb%2BYhePFUGDHtTotp47v8DJ3l9b5XVsEymRpJfZW3HgaUXs%2BlGFqjBI9w5Fk4SA1ktgwsRNTE&X-Amz-Signature=b5508ace7a34bc2427a35d8598a4e8240035a3c147d1983698fb67e214ffc086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


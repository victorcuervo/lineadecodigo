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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZWXPIBE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIALWj7%2FJca5MP25XXB0C4jHa%2FkAHMYNUQFO%2B0oiMWS2PAiEAo2LZIEauh0eQqj1oofQIcGZIdDu1eRHM9jS%2FAUDwH94q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPpgfOXLpOKoF65ndircA2lAvJt8R7nsQXYRtetN%2BV3nPxP4zkDxtaSzY%2FZzZ%2BoIxgujRRrGUxWZ%2FHKTj4vXccaTsMMpTI2ZLYmhcD2V56FIMgC8k%2B3JNChGSt3NHmQxWSMQRvY3ieONZiaZ%2BZ5n6OuV1MDz8C8R5f2Sz79u2ctIRjWr%2BitRxLNV2mxETbmdSojouPkLlr9SaOkHiLKqEMJiyyPg529L3ZHbJjF67DeY4IUL%2F2pthzXcou3OW3p1im5rEmoHozJ8tBRahv5Oh8kr2TKctRchSVzqNDJzA2n2nfuQ1jGMCMRJx4DpHuHM5a31cnFfmdv351DcFngMJuKqPoktR98D%2B7QAULhJbAJthZcxg8bA7aS9yhmPj%2BlKeQxb59rezr%2FHP2qVpYItHaTcKnRoSzeL8xbt8iX32yx1Ik6hmDwDlsIPX0BIbttNDNLDfPWHHjULI6XnymOJVdIxMmQuF0vknt29xU9vC2uihbYMtEWNeNwNOB%2Bm0y5nnTA3TuKcMfGxt2CSszRf7MfzbPM0K0Ug62J7Oc0TPZGenLxpUIle2qqzLNNMWjysjy2ntIzDZEqVJQu8nk5AsZPPVk7BFtLiF%2Bew4CTrAFmBhm%2BLf%2BH52kedC507hoUUCAKw1gR0ljCMxUuvMIvNwMkGOqUBqO3WlRvVIu4VQuuMYGPm%2BMjEr0q6%2BZi8rR9e%2FxGgK1Ec1%2F5MW5WtXp28VgqD3tVH462%2FwtJqdDqZC4s2A1Pz48VXnzF0J5O17VrTwNCuQbRZUdeucwzKhYD6ActIn2aYQYxs3q%2BRcSQwKvPliF1FZYKDIZqmW3ZiCGvXQJlTfDxp8wIqJvShPvnoAksREiFtxITR6%2BkWomrxiSEIOmbQb8g1gZ16&X-Amz-Signature=418eec660153b8935299ba0078d8bb9c0cda103e8a1a53a153f3bc4bf51b5db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


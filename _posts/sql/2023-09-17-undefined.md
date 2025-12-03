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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y64KTPG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD%2B%2FDOWDe3kFvLD1WUOIdQ8jeOAzBoPT5Ez%2FHiSbLvnEwIhAMa0hYrjYDgTlPwXMT%2FSXBJ1SsvccjhaP18TLN5FpOEAKv8DCCIQABoMNjM3NDIzMTgzODA1IgxKa1yuskkWkJSMpUUq3AMnJecw6w5kL64ZxAPC0DUUyK897SOiToJL%2BV1ZWmFkFiOfDp%2B%2BLoZHQ5tCKwRApieaz6h1CtIw%2FIPhXpEqOiBECKre8xKSML%2FZgz4AEHIL54vjLx0e%2B74x6HN7x0ZHB7BDd15wm6Uvp2mgCM%2FapQJ4FPOaZ1BLypGk5EScY5wkscle176oQU64RBRXoj4WJ4jRSgYmFV5hXHURMyrZ2q8RSmdYC7JCw7N0P3dE4fMBGUfZD04w1%2B7t%2Fa8RMhcGEMhRpSEifeRWqKN5vvAERK8dEBGEsEVwXN7xWljNKivCdJrTeLA2WUdsWcoYlRZjnnf0%2BLr11JPliHTQRDGo%2BVfr1CnjGxCYP8Xsp%2BPcaDfYRVKkb9bZ%2FL3QZE3l0%2B4wX5O3nUNbcI81nFWP4L2uSU1ffqg7CcUqZmOA1vQK8lc9%2FSKwKv3N4RT7OupeDc6imZDdwfF%2BIC4J0IgHLQ4Lmh4vxrJQfFCksjmMBtTk2GedDTZHCi7jZsA2VV4C3gbjbEeN0ZcVA5PXp5PnphvQcKD8qPo2FmIJnME4z74oq%2B0z5kCmHEw8NbsrDioR%2BeGYx3NxvJIOc9SzRUT36wQ%2Buz0xKzoiG%2FfpVimx7HmNvGhjYDf6ll5tG%2B4CR4KrijDUlL7JBjqkAU2Xr0cbUxkloAwsnIfVYebW4%2FnOrWbS4X3PpQSkwRVgXu2I0%2BcRBtvTy4SvqHwkG8T685sHtNWGGcSLHO5AMLOUEhuRj1J1RT2XTmKo39VB92jR%2FCwYSCsTNAUmmMS1pb01%2B%2F03JgnJgh4wXEU%2B5KykHgIv0KmrF3sd1%2Bg4hOKguZqnKqBwxeWPz3ZD%2Bh3sdh6Dz%2FLxEh70sx8tUuTkc75lk3W7&X-Amz-Signature=02ac724fc4e0828a916d3be1fbdbf485632ec84627330af50d5edbb7c01c3029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


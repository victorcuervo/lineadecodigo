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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWTOOLAZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBaNOHW1JTGwBoEEeuyYDzJ4L4Bgm6Vnq5Ik2cEcOSrFAiB5O00XI3ffrHPV0YmVTrgAMjdLUWRgt9nPjBlkTh7UsSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMsuP8GZqZ%2B%2FGINHD7KtwDyrEcJWXUq5Y3McGSbgX5DTyOdr0QfAOGuv3%2FFPs%2F3AvZvhLqzhHd%2FHhk2RHF4FcaW%2FrGL%2Fdw1uoon2dQ5jmJX%2Bv8j8Uaija5UULPq3QfUK3i4eYs6lSxeoGy2Sb2o%2Fey8IcIykjdo0uYONO1u2MOBxL9BtD91psLlp%2FpXbndlJbFBQnq%2FkAIPK0jl05jC4qp57vDGoodiKLgkhmYOTxjZN7XtJ64nQ3kEsPk5k%2F%2B%2FUg4FKlIQXn%2B5AvLtqVkS%2BGm9SRGb8Cbv9%2BJP78XxTb%2Bghxji1BCDe6czS%2FT0e586JOy09T%2BVKguRGALKolEZnw7P5rdS6iKaMsJulwMNcX796mCH%2FbZHhvw3P9qAttbtJudAXBIsHqMcbwYo%2BnTHkRdXjfY4%2BgB6mHjYMKNooh7w9vv9W%2Fq0zTpkeiiFor20P4eiA%2Br5ABZqsF73DLdEyw3XsVe7mc1BaTQ0nrnaDsVenIAv7IXfp90uVlog7i8GS1ZnbV5%2F6IyDUSMveKtnK9V83mUt%2FtsIks1%2BSXS%2Bqwb77%2Bka5myp41oDD9FenkchmuKo%2FToOHlq4nDM2fdP43B6t0uBHNh%2FzczCiFjSmXESMMWEFoLzlf71fVu1cSPXCJLjr24iiHaZadgl2l4wkJq%2FyQY6pgHEnOtzcRkg58DL4jLtfSHceXjkNqmJyFBleL3Ig5Ye%2BSUlICZQOpiEI4XQxmf%2FmQQ26iG4v%2B8zvWaS3pefZnb3faZEa0f6F%2FnmJKqfVHCBbTSJijZ73LFI8lyD2SNofoXo4b2l9qVywUMXWXAJhqlpOM1H3xcBCUVKIe3ieIaxd1akNUocqKVba%2BcL11gaYTUAoxoMe3LtZR5Q6IVdIVZ4xzm4C5TJ&X-Amz-Signature=c8ca9cabd3634a559b9360f755cd2379e3c7e0c3aa763f58306d844898753c83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


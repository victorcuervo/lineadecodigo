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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBJNDLH3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCICPocb%2BFtQc3AJ8GhmMA6jvK%2BkvEQuJCqXpMc0DIkjxHAiEAutEfJ3BQVGXTRkVIWLcWActFvyWJrsoOJ3ifwFlpw1Aq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDI0JBB87lwH30hP1PircA%2FvFubL6bpPMk7ifKNDyshkM9FyHppDXKjtq351LM4GtmlKUbtGdLXLs%2FiaVbjRKfZGaznB%2FMyjAKjAbJq26HWsC410wsDsyJFuaQ1NUnb9qpYfs1Idk4QSRCIz56MvrxcqRF%2FXnk6C5iPgsjFoeaMHbd7L3W6ytuaHV3ki8t1lS0jcmDukYiYWOkmW0P32yWsYDq2grRTYV8NuR2xEMLmq4hA8wWewRZnP8hhvJRzGNd61DlzUAnYLcEmqZBLynKeotbg8%2Fn56EO2x5IpGNnOzmEHugyQR9H69f0g0g5T8oVT6%2Bjho%2FHqkqXIXZaO7rTjKVBZe7tEsdGmdCTSbrrNK8hdnPg99ZTT2Gc3l0aZaI0fbiP744JVQEWuH5dM9xKINKHZ0Trtk%2Fol%2FDRiJe7kdhUKiqhEbI4ij2iO8vKkeM8JDv5NnH4IPZZlWsr1Wa%2BKtC8rg3fjkZX5XGUy2Pkhf7AqtJ3gznWDetYm8BAXt2qfg%2BWcZnUGDQD%2BLYEw1kYez3w0nzDZSJWralKuA2DNZlF%2BXJGSpNJ6E1NXR3Zbr%2BAfDP%2BqDrv9WSuQpZfmen%2FKxdVMpmsh2LTIvTDHeMPlCE8HWktIKTsMH59eMOVd7S9egwRRLdBK2U2lHlMKOhvskGOqUBf6wpqx0Y7VJdNgZwfMb5Yn%2Fqql4F%2BsQhsOWeuMOvqnu7hnfbXUQiVPz3OOs7zW6uwdNAMLHSlPkLPiXA6ljXi0pExijVPfC3PQ4H9VKSf6fK%2Bl7%2Fgz4aRZN9%2FMfjSG9bQtvYABaVgaQZX3pUjRb1KGKuusv8xTmWDQJ%2FuJkqV6I%2BP4%2BrVfnR5h8hgw%2Bbx9MSzxKhbgaF3URAP401%2F95b7adsVcFi&X-Amz-Signature=8f1ae3ea2138b786eb7c8af827e1ac7f476895bbb80df2e80535508b8ea8466e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


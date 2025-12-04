---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCRCB4BY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCvVyAdQBhN7GnjUUBbmCg6VVQrAT52DdFQlfsS8ZXTEwIhALhVIEXGDvW1567iVJ%2B3742ezz8ldcjpKLIvBCW0SACoKv8DCEYQABoMNjM3NDIzMTgzODA1IgzvGo5vwtuaVrUFyoMq3APgdVUYuP1yfmahPPHk0gGJlCYeWnA%2FJow3ye6qsy2GtPirUXaC015o73mJzY6Kt3MJ4ELf5xYPRnazlRLT5WC%2B0gwJ98K1GMUSXdQ%2FFhmCjnb4OOTRzEpMtL7A08M2XGOs%2BUEa8sxsT4Q19UcFRBysHenxjZQTqbPhB1lEIHdbb7PWtq1ChekkRr7rfN9WuahN1JZxHrMWO8Hb%2B7lyLzFksMNUPJCX1U1Vl1JtOAU%2FyKYakhw5dWwn2DsRGR6phKCVryA6PSMKV5Xld2gCp1WQRbZrxIsqtDOOFAi0HBTX8myBLxdp5jwa3g3W9CyK3rUNYMHLcsoIsqrM3BHnf2vMW6SstCEOx1wRZqKjFwINzvKyRhoL6Woqh04bFG8Jq87Jz8pwydr90GLBm%2FRq%2Fz22KBqS9VAdW91A%2B060prur9tgmEPTDHvcFwr6Byb71VGse7%2BRv8RnAu6NDsdxNZkA2zzEEOTv7pDW57fI0LUJ0SLbLvlyeDM8cXGUYjw3YPG3fGFdsu8OrwRi%2BmqJx5uqqE5ZT0Z31EGRUDzVPm9jXieBqRd7YirzNQxClTLQw6x3gW0vtILHnd6qXLNtx2%2FB2Koy3Km1DP4TkuVlH0I%2FL81pl4ita2ub0yJsHKTDig8bJBjqkAW%2B2W93lAfj9D9ShZvRA6bU%2Fz3v5zraj9LQ316lfP3UUqUsJ2rVTSIYa66ZBo8d%2B2r2dHi3J3UY%2FBscoraBwF5rE2yJucfsbKEtPssO0lLcum3YNl8%2FufUJySNAUjqwfzMMA3OBtsduX3g1dYlz0iOYFJ61ACDNBhTfbJa%2Fye3e4EwhQk5jlZKtcK%2FsB2qj6D4zda3F1FNLY7tKYgSmTbeEXCCGd&X-Amz-Signature=6eaed8ab8f02a7918838b11a45dcc06bc6e9a4e684d51a545b9adf1d60b837fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


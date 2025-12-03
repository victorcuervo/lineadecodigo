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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDT27F6Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDV%2BEOdlvVlmjfstGqJCd5cluOWuM86Hcl%2Ftk33wgKi0AiBs2rufueZvxOLDmXXwX52vfsCPmwPIG%2BMzfMxu%2FtHVair%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMuMFH1vBAg8x5G92xKtwDy394sfZvGj2Ph%2BZgKCTm3wmB%2BscnSHzRX1iZKJ6zRX6SfOh07C1FMBWPtxwT5FX1EQK3cD2sm4oAGGcwTbkeWpaufpSG6%2BAcVzjsjfzt75sI1As4jXKw8VPVCGbL3zTdKgzIKJHVctBBtTKPiGDduW8SvmD17vT0Vj6JUfYgJ9TFAFIHcxFh5tZWTHmhzbFXl2%2F1tmA9UiluxU8fx%2BXdSrNuaQsY0y9tIa%2FK%2B0O%2BTJHTcXwP4h6fKYuSUHA0MwIWX95wLejtEg4z9HwBEOpgrIKjkhiTUdHWBcuoZn%2Fc19CLESR0XOjYAgdXSJox9f0kto9fyUskpS1n9vqrc1Sz4JuhWZVYJfjeJczlMD2Pm7GeicIIxnBRi96rqVqzxr5vtyI0jrDH%2B4Yt%2B3NlY%2Fno170hQlZS7dvPndU8VH%2B2RsOKggW86OQ0Bg9%2FvPqtoYxwiGoQ9bZDefaHx5wzyp%2BluysZFw7%2BF2t8fCCoOsAbiwCUn5OV9pw7ujGEWRT8luynY71YpFmDUWiP5MjKe0PlYR8xMRIUR8HFEE0lIqoPmQjmHWR4E6JL9xFWuPOHRog7SJ63RL9SmC6SMWTnQ7RClU50leiaCS8amHFufIOXNFKsPZuPpyGbWXPPC%2Fcw2pPAyQY6pgFE9mxWljWLco7aOahI88jG0QEgS1r0OXqGf7BOLOcM3brG95tcUT3O9D%2Bozmsc9v%2BDbvcdMqvgCsrgt%2FqjeueePa8AnPHfaeGTBgGaVG5YDlnjWHGHHYZvnkHYtFaKxhq7DkiW6ET%2BUOLpylob9ETF3xSYkJOy9zBAAbLCaNATiAk9cX0XzKuyHxrrwkfmSdvkpAmtI1gEU4SLiXlPi%2FxsjdAqljVI&X-Amz-Signature=643d3f8be7753dd3a56551206b86434bcd297e47b99ba95a38c7311ed0a6923d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


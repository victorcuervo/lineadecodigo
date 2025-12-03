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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYAD4IWD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIE2nqAt4ydpnJNdM5EB2FFI25Uj79%2BcNx1EUQClONy3CAiAOxKzMA99JRisow1E1C1wsI8zGoHChO%2BXFnGXUvh7ksSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMmFx%2FVox0IlviGpapKtwDy6umz1TtIs3cUc7R0gIfftVhez%2B4dJDDI20ox4V2aQHFJ7KDaNaPluOqv%2FsWKLgmrI0OZdelfjkxKuqqjJdouEIvqvKLHxgitapqTlCfBAz0BQQvRBSDBI4NATJpKN2ThHSy3k3J%2BS2kWKOANxC8zHr2YXguSjiI3JsRgDl1TkMHDcd3vPo4791nWvEkwwxKcu%2B7FJCYxNCKGULimB%2FO771YUIpt5DVnxNvfgwGQ6PalCr4TGi6xnBBMxiTU2LbRxJyS0o4wJpJFNGi1KmUP22DfksKPxQ4IjCrLAfuMM1LheO7d9JP5UTaIJkhnKcEzHUGjuBgjV1y7d7S8yeTv1lv%2B9y2%2Bx8czgfuf6MR%2FlfT3ZmqJV5KlZRzkWsqxLsYvk5LJ3asXY1DqsfoApZ2kRT8ljWFXrjLuGzjOR6Up6PyYONgkvYD6wPOyIMSqfl8YgU8Z7pcEb%2FocGgzo%2Bw87bbRe9Ng%2BljlLv9EMxdZpncVMYbp9PkdEPZyqw07OCnVGl2WPBL5mvkhmuKvAO3iwfil1vE2IVCC4ipLz%2BRF9OLoJyvBMdGWLnBrqmVscGqsKC19bL39BI4SmSizPnIlqZ%2BZFVt577oXQeSG8BoWDuLYyPU5l84YFCH7EdnEwgs3AyQY6pgGYF%2FLQLbVOcDtxBtchNKBKCBT53uYFFVBMZJAiHFkDjKWHjJVjQi%2FcBZUbrID1DEXS%2B2fdCHm7Ha32FP6YTt80frJY0nQ%2FaMW2qYmaKveR3vvuNLnsSMFfPHTdiA900DD8h6zptoMB%2B38DWG9hu1GGW290BVWt8VnANAcxD7OXNd0AOvN3k2pPR1B8FiNMBMB4vlp3aBg4exfB0GM4tLan%2FfLZjhaU&X-Amz-Signature=b6e3bfded872c3e45e424f884907576df42aa6f88b58b97ac6846cc0552ab924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


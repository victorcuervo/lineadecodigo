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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBI5EN6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDmVx4QoNPHVqlePYvDYUPU4Ysq9RMtEr2jnFCk8u%2BvywIgKBsPPz7ZfKhAOpYyN1iibNJY2x53PvjVHEVsd7EFxO4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLxsJD8os%2ByaStr3pircA5coZ0gdyzlh%2BpEnD0k7aMI3PcxtLU2eBz0MyK7eeDZ7WBECzGVzPZprIHqhrJhNHrxE%2Bm4nn5Zt5YR69E4SFBG4uSH%2B%2FMb%2Bvb7JBSNO%2BD7JioE2sGMSK2esXZwd3wUP7F%2FnUN1nbWibJxYVBmpXZ0OaYKmWxlGGU6gvTpSlCktT%2FNyZw177VDc1S9wJYftn7DrD4pn3yNCKDmo7BAgEjXlOb7h1kuGKjUpYiYR4m04oSyHoaQierhnITSUBOEZMtmzgpW9L2nauHULO6DGc0%2F9Px%2BQcdKbir4ybG2hfF59LgFpPJ8RLATFgFGGSwF3OznzmNYO7NSPGLxXmPwfMdORqv0XinpXi4z0J7r%2FmlENKLD4jJpahzPyO8BZVAwEw410IwKOGbq3gVaPIFxrrvNGrmzCUdhO%2B5iI0nbvyuo44rPMjj8guV%2BouEsd0VSak4K7EBZaMuHEwULxnqWMM3AxW9U3Pa8B3kJkK93rPNKuYsDMQhXWW2HJlQmWGHoKL1qqok01FB%2F2N%2FPVlmojxxxhhV1hBOUG%2FPQjy4bJkeb1yBiGBLQDJoUEqLn1mRykhzLQA91JJoBaaptsL6phm91gLRZ7NsZOyWwYCm2PwLvJAX%2Fd%2Bqd9jnUP4UPbOML%2FpwMkGOqUBdr48gYSiQxHlIL56%2Ff03FHRsP4a9qBqxpJfpZl2qT%2BzHda47ACQ8RCkeHD8PIGhfVlBeYvtrVQgBis7iQai53ISfA1gh4sCc%2BpI5sUJ4qQx1yzQkySz5kUQ0P0AxcC0ndu41wU8vJR6tJPAP1S%2BBURSuPnP%2BCa7AgSKbI6vQdLk3fI2IYiRDobU%2FNUzS2sOD7vA9egfIdsHtuhtLmnhgHrOisRo8&X-Amz-Signature=7569f106b653cac9f30fcad2cf1e70d90d75be64941fc4b5ae3091b73096d67a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


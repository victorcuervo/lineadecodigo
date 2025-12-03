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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JC4HRMN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCe1Vkgf5I3ZovrM%2FvLD7yV8SrfNu492gvySc3tfvLnjgIgYycNKdsMcY3fodXk2rqIKgi7DKqT6z1FtsKdGDyoH4cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLBPZNd6EH0OxzN2fCrcAxiXTfiUvX%2Fv%2FX8xcnMB9tc9S5jUOX42tGTD0NS%2Bnqi62mbHf5o%2B4bALxbX0qa1TKoJPyEbgtYFSqnk10pgZNVyGHSo%2BhU28ASWvgSNJhMha3eFRxfTLsTtC96sjYlMSRXj%2BIG%2B6Ev0indhmS36%2FW8FCKE8G%2Bf4zpYjXDlz%2FBAT%2FfaHbnwKVeuckBZOz%2By3gJ%2BRCa%2BrugoDdJ1CfNYALWTUhW5tqxF8ee1XyR4q03whYsmK846FY3Dr2%2B4O%2FGN%2FbY7V6OIYzAzAKJL6Kygw9kTXp2WCKcYNAqCseMmFvsk%2B8M3aGJ%2FMpGycxvXlgGu2ZjqnAr5e8nLS51k0uodBiNQJ6YaiuZzosv%2FylrmTl9WmyRhKfhrn8aRPYpGYE032fvhVqy8RhIsYR3hbJKWscPWLvsjyyu%2FXcheGTodN%2Fc3zxypGmSVWFgd749RRjpAEtCoHe6FGdMyRjLt3RPILjhj1dI9jj4gEgJJ5SPYJBssLZIw%2FzoH1DaFXkHj5FlNupW4pc84Pv9j%2B2dBG2CToNJOZLlkKMS0U28F8V%2FR9TM1xaiKC8TZo4u5qpKIgFgm3fKogrfXYrY9a6%2FdsGtkllso48xvYSwGrkIh2Ce6hOemCjb45xYDNHB%2FGmChPxMLbpwMkGOqUBns9fXkOA3JiLH%2BLlDiSK7XydaB8LpbGvfU69DvToF09sj6hcnvoDJKsXC3L8rsrAoQ9pTl9S7W0DpiALF%2FlCTyoLgAVFFJ8%2BtghrGlgjKEZOpzA6K4oxo9znlVw1PoN94eQ9tS%2Fe9MpnS0rRSQtarCuTQp7JG8suM2w6WLCswmFlo2SosbK1l31rymAKUOxkdE9cGIvOtUcoH7A8vYoYX4drcfUD&X-Amz-Signature=ac6b653ccb7b8bb9b2be64d69d3458dd47a444c2e7b195c46bb41991c4377fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7KRZP4V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCCJ9vIXIpPtk643vzpQcqGozqGPEeC0ocQj3XSDEULDgIgRTe86YOT8Aox4YhAwMtTMX9uW0iLts1Bbwp%2Fj4lye50q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJ%2BsZKIQ0F0Qj7L59yrcAzegZiEmCEMelN%2FxjZArUjUKQUVBsc7IXCDWTb1a2I92oHUIrX6s%2Bql6x00tDy5vLyQQEBYLZXsky4WMENdMeG9GzSepC9whtkabwkVYPdTzMdMoYiorWd9Pt2QDw2gm4zPVHA1H5NJ93kWMzYcqKtwWR5V46YHrPKK0aKHhJm56JIykrVCAQMEJGgfoLijQLfgPzqilCvjNn0VmHEjiasP%2BvNwiuJ9d2PyvDmw1gRqfvrkzgagjQuKvvRd1wzOwfML%2Fm9KwCH7VMGi%2F8SC8l3AWDcI5%2F2BHKuPd9wBLOreWzA2NsGNqhctaWLc4xypbyUHk%2B7irQ3GorOF26z3r%2BbzH%2BTnZ84gOoXIfoW17vL9b4iPG%2Fjmf2R4OYpZIFTincFhtKDC6%2FJgfpHUYs6jiC48qc%2F3Oq7vQ6%2Fjyo0UWccqMwoegCUaj5u%2BXadNd4HQ%2FZASHFBugA0cMk2RSeTQs0Dg9iSvApv8U6dESAyxZkgNaDMs48e9Tm8UxmaxFsDGH2NpfHBZf4Sc94%2BIbm9YQUBhtoCi05Hh9mXby60N1MYOXdlxaRwuGJ4PGmfqI7LwRPa%2FnKCINXLZV8OO41WuIJIKT0UOA%2Ftb4PSTL6oOZHZwH5OwQ%2BSV%2BwiW2pSctML%2F1v8kGOqUB69xu3xvWzcQtZXwrzz5jZbTU05MfPNNrjdoJ3PRjqGKj28D27FLzxwE0%2Fzo3Vhqwc%2B1ue%2B%2Bq0rep9fKheLyMosGfgWF55tmwVFAAxPbfLBM1dUoX14Q%2Bubw8BU7GNsR%2BXkOq3vRPbKdh72FG%2FRHIuXvDb3HRD5n8GeHS2r8%2B2AkS4yhSnIeeGieVxW9xN3fTWbLkwQR08cz3cWQu6UODi6EwW6wj&X-Amz-Signature=5759abb923263323c7403d8be0056af02d3b5630d89394bd0aabb7dcf65c0d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


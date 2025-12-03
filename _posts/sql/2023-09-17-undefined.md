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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKLAPW4M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDgK59kXCXgt8TZB0yADUJupg03GoVRMtktQBsKoctJgwIhAKauKbHuwFcGzwJxdTdn1BUMMDgg6aNk1ISKupLFfdR9Kv8DCCcQABoMNjM3NDIzMTgzODA1IgzOcA0gSgMAdQQNbOsq3APMzp%2B9UMYlJBV5nXh1%2BCwYAuRdhDPrJCzG8Hah%2Byjk6GlpKO7hGRcfK0SLcoYZBu74DOiBNSZ%2B0JkETZPM2T7L0rCEqcvSpdM2zE7ORdH8AQtM%2BlpBtkzyrdxzNcKzf2Q53cbT3nKuMUJxfZsDn%2F0otYYIB9JfqdPjQhgmbwZlHhMtD78YrsXCvWy%2Fn51PUXmBdsP7LGy3iYCVwc2TJLaXx7Cyw46yGF2cYFahC9Svh5g34rZZSZza5IOiiKF1ChTVYI%2BPJ8Oj44tCHIjzXGZ3MRMO6JBs0SOQixOz%2BEOo1FC3awvCnX42uF6GbXdvPCkHcS9RYq0VEayft%2Bj7fUeOcrMbDHo974O8YORPS6xmLgYYjokefT59jtcaFXCsLs0XqgTH9U1W6puYzTbvJEIqzEfJjlFUsPHV84wrK6wI6C5jkrOp5qZs9R30g1QtgNDgq5pJeyXsnO5UyUVNCgGeQ0MKFUKlhfd8BYZCURpWCGZ8bcgRZBPxVh3I9OD79uzsrDLfYP8XWuUh7QS%2FWSthRcvR%2FoAoqaPf5rHj4YVoUqAZuz%2BCWAJ4U6deY21Wl%2Bb5IA%2B4RkQLlfuSJ%2F4b66VnIYBemGsC9rgo9zFUGviglcwkDSKXpwcR77ZQgDDnmr%2FJBjqkAfk5NcsXwA39%2BiZT9P2zNHOow1b7ztseX7iApMDCcmy62rC0lw%2BpTITRK3ByipsKBlIbOu7yghoc8TjpFCwK%2F48VOUUTzBjxqfcQ7uNwUZqzG7Ae7T84Q%2BDGDgo5KIG9Iv6%2FYBgalZrjBxu3dnbyMOQEGlFfWENSJgVX1n6SZIk9OhaQtROI7ywbtQQ1NeKATPOQbCWerK8VKmGmyFLSwCEU%2BrIb&X-Amz-Signature=e0d3b6266e6edbb247f3ac7fccf60ed368899790e9d2ebf099b5bcb528baab5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLYSG3Q3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICVwdxAMRfsjZRXKlGn177SyQUdV3Z2T7pY38Mrh9GDTAiBS06PQz4FguvPUukYFaPGVlOlrWueUNp4f6xfJf4MqLSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMC%2Fhii6LYYvCCQap7KtwDKkJ6yLXONP%2FCVsP7wNKAutcOqMHbhRl9x4i45bR9qRJ7WA6H7jY1SrINh6BAHu353JORQ6D%2BDBX70cpmJfN5TnV5%2FqcZlAPWbQAAepQaAtIrJIv%2BjUaBqYMi5mZG7TBnW7OxY6tfuUV5%2BjmJ2X6TU%2BTd9%2BBSFbJicsLYgsMFgsSL6h2hG7cXumnJ3n9tYREZgTGo3aTtEmCIxcXRDYS0adCTw%2F5o%2Fp7OGns0nAz5j2g5wufzq9Tjp6ei%2BL9LNTAHXhh%2BIqgYLpEG2t8OcMiVicsEg%2By5XrdDMZBP5sDPAKKilYpcW%2FJrxti8IxZxhEMjl5Kf2ZgfhpXvs4GcKchjYSiFdiPjS7%2BDzLhKx3AK7DI08FwcfSML0s9eiAJHIGOAA1AYhrBU3gRDPwAfYvmLP9DUvUwmmASmF%2F6XCJjjTLAWBiYAUwA0qXXmwAhGz92%2BlpnnGBq30xVRWkG7c%2FURFJL9dBJAHQXoPv4HQqy6Jdx%2F129Dc%2FEO4hbTkyxu7WDSDxeBWKC7A00Khg%2B3EO2DuFDY7Ycl64uFpPU3ms9caS2m8aS3NGtv3A8wJBNd2rbh1gGK%2Fo6T6gBZMwjosS4BiDhP9lMCeGn%2FSLyWPdXBpVkv2p%2FzWovrg8xpILAwlJW%2ByQY6pgF82batEp4HxPkjFi80czCX%2FctZaMj1LUeUHNADwWCHKJkc4pbTNAgA9STEScY3q78U0%2FDThwb%2BtJdlFJGg2mB8WP4uv1qJrJogMYMTOjE9UKxvfxBWCT6F7uoI%2FPQzoOFpB2pnw42mw4rdB7JSSzx%2Bb6iEbmN7fMFu%2BAvoD9SCULIpFLAR3F5t05uT74ZYV782uccuiSm4rK1QNeN7O6yYkjvlKLGe&X-Amz-Signature=e2332bb78b65b67cd341a20d895b9dfad7d40e3a9dceee57bfaf611d08af8b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


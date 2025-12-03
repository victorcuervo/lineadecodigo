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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667744DOP5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDfFJwBve%2B5LT9k8Ebgrk8rhyb1Lg9b%2Fi0ObRl64l5jUAiEAjvCIUo81M%2BOOsUsLlzV7SWoekcMQWbwwEqMM5FHjWqIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDAQ1fUqgRmuabDEuayrcAwkEUkQitLpxkHOEYuCHn9yqkXacEJTfyf1U6DKDjqaL9NoBPN0%2BR%2FSxgn4yawTSWEpAiFidD9gg0Byazo%2F5ZtJ57JV1IadWwzKqZcsrz3ZKnaGY9OZ0GvMm9lGS7Yb5kK78HCsnE8ix8dB6y1bLgNwImPmYTvpw%2BwUC4uPc5NuNeL8xqeKHuhij6JWuFxX5NnJRAyYylovAps%2FRZKAPhv8X0ALBQb14vZMVEYhY8QsFisi%2FzlZGCYSV2TYboVqVZIN6Ztcqojs5Vdi2vSEZJWYCH71lhIjOdzbcRNBL%2Fn6I23QxIeDFnsXoCzV0qRlJP3k%2F7iXjymswe%2FtqGokIBN%2FbJAmtAH9snjcoZLNtA4qfRbesFWthDoUvonJwC%2BLxCuKmizSub68mRLDz%2Bje%2BiXyNVNGNgGet0Xaf3kaRuJsIwmyMyYykbZYgjdpT9jnUJPuJ3r3VpZGimhPXWXXlc0ulQKHS4DuY349jYIIcd1p5RWMr44AT2T5YkeDwZbwwcQPvFOSEYwsHdTUlRfLxtYcPddLX91NJ52RFvJ8miqvCh05R0mWaUpwd%2Fc6GEu19hDiHEqFw23TT9E%2Bk%2Be1Vug5uFUjt%2BUuHy04UbKwWUAY7OvCwwZYeJW1CuM2JMLTawckGOqUBN6uY1MCDgh4Y9bKgfFdRhQvt%2BDSbTQkJFS6vl3HYfJeHsch3PY44Qyve4xminszcDApIkwwBFPAMlYe5%2BxL2w8rlyAwZA6KXOXpOJ8f2VrsebKNbwHm3onQsOVoS3i4NRqa7aXptaBWvthfeO3zagsE5lczMy9Uw7RTM%2BK%2B1J1rNb3qYPX0oiZJvPr95FT8l4LVOFdQfSAsxoReWAoTNIASbzXnr&X-Amz-Signature=35dd5bafe33204cc88313323dbee50d34ee074745564d444b4401ce6c57d7a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


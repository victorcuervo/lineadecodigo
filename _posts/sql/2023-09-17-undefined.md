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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDCC7ES7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDMw1IRs7GbC3JsGoipePIlChxgH1LMvDarVC2KJb2dmwIhAIxd7HbOIhvIJr5GH9Ei0%2BG8aYl15wUOReeLYQrNoxtkKv8DCCsQABoMNjM3NDIzMTgzODA1IgyHdj9nO7DqNgFn3%2F4q3APEz%2FonquEm82tFUypTdXtds6LbYjdnWzGSTrnPnwpuJJQ4J06cygCNyYsU2ggt87Y7O3twWQPpCzSphuyHgs2QMMxhaeY7enbsifoObG2qmo%2BcChXnlszkkg7%2BNag7FH347H7RBooYeTEd6iegnekLadaMIL%2BYmF5Xdjndqd2AAY8WP7F2kbcMQ5i9Asyw2qukcgUS18R2tG2dIawT8SIlP%2FdCqLMljsLpq5xuo8a%2BjdqLPN12Mxrw6hSuP1tKqbSXKfN196L6ZFBPXBLRlwQDG1dKvocx9fz8FHRNVnmiNGum5Uz%2BD21tqGwTb14DYd0bB9uRYMoK2%2FbGSBJjNLcjAZkITw88FIpsQD2pVYf1nhWk4sm8LTeyjNGaEA%2Ft7B17LJISmdQU7RZIPIVsdKjSZ3LbHHiQ0X7wCzJvPl%2F8R5N8gfU896ebv3wxcmKgUARYCfhKvOsHYT1Br4sT%2Bs1cx11KJIEcRHKKlsZLRsmUFvGN4P62GE1RAmt922vcKnhL7pNDZ13qXAt6GkoXK%2B0CPKYpVAiB6CLq1g2xqZgSpdzT1a3f%2Fh1MCp3uVymOfwXnjawd0CLhwSx3Qvt%2Fk47Jv57%2FbjyZAgyxI2ksEsC9a2T9KCEF1akZ1T5FKDDgksDJBjqkAcX3DsC%2Bz174HJFz0uXDwGe7jRXjYigZk5dM%2BRLvOiVprWcphYwNig%2BOhKgTIiuHOMeCCqIPeeTaoMAP4vTl2Yeuqp63BYug8n%2FMwWtQFoX3lAbvMur8%2FuHkbBoka81caA95WVCOBlCkhK7yDOi6XJX2LmJse1Jc7%2FZrZh72G%2Bid6GBPVdEKIeWxeZOksXy4EprC%2B66UbFUG%2F31Jzg6ByRmKEQNW&X-Amz-Signature=96e6fcf0d8b0250285d5ad7bcb61881c76c51b4cfbe02ef964cd5e3142a39a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SKO5AH7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDxohdLMZqhcxVl3U67SKTYvIxrX%2B3%2Fu3Pawj9d5%2FFK9wIgcscNbdLwewYER7Uv55SnlcIHRWIE7uB8Q2%2BouWJczbQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGLlaRE3QAy2zCrngSrcA0zLk4JR0ViksD5T0uHZ3vw%2Fzzc29yFA7B7UjpAQDR71lAFjOEM8p%2BrIgtPX4dgaAof1BWn2nCEW80WtR8wYsNNTA9k048MYdlWf8WAFD7IDHDRMa7h5xSTPlnZixhMTHH%2FKwFOycZAvfjfinUlY%2FO3bMjYX39EkzknYoQGG%2BBiX%2FkWs0p4fIHMZtk6c%2FTMI33C3rAvQeMWDezDl%2B059OXySlGyqbzqlIB3xqTTe2fQEWFXAllwPdC9aWtmIhBT%2FXQIYaZOcO0k9PX97UA9C4LNvItw5tQLJ6VpRmYhQ8ej1vCLWYZos%2FVsVqMSKG8eWKSzRN0he65hKocI3eW%2F%2FbgpN8u04lXzGsF8jRzLQfEgBErrSFcmEXkKhLP8bhpA6Ymd%2BwwyNyWDbzLIaQ30j0EYDY5LQAWHlI6M9umrr382mc79S9VCb9sB%2FwogTfRMbXEtTdac22zAuOYlfsf1r1RAgzmB9orUzrGWoLM5CnaC%2FjlAtvmkxOMPza%2Fc4%2BSCdKhPVJIdOr4JOtMQOG3AxCMrTu2FGvCtpOMx4ICns7UF6Ob3slKOxqZWtqBlI%2BW5zS137D64qfuCN%2FEBEHhQlWedRtHTw1huOIKrlWAae8Re87blrb1o5uw6nnwhyMOjcwskGOqUBD5Ii0vGmRyq5BArbbtrHTesJIPW6sL5bTdseeYSrGK1CtPAwXsrSI8%2FYqR34Ltn%2Bocif5xFzV1rL4OKF4Kqo2eo5VKvZtT%2BrFV0%2Bq2uJxJSDj9FEFQ8YlPDcac056unSihv1muq24g8Hp2o3KxErJOTPqowWq04TcITinfkgmu6k5YCjtlcgzQPfDDHGEx7lSQg9vjUCp9gzBeuDk6vJ5jrZ7Qei&X-Amz-Signature=b63e2d1ed2fc0e618f05fe115879786538b92eece6f4f33dacef4373144c633f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


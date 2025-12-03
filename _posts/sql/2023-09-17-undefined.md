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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBXZMO7W%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDBdJl7myFdqOjjTiU0oxJiU6rOiFubDB%2FpnLniNxj1IAiEAwMjQWgYVW0hyDa1drzOyyDCl3C9sMVQDbLsqPrR6cKUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIMd4RO2JxxQfhxhzCrcA36zvbnMjho%2BDhZK3SHxwuzTWZv5baEdzLLjluJPrYItYMKgVM0DthD5vr8PXmH9gju8JvBUjiH8wDVWHXmPk6yS5LQi5VTCu3gUzpVhkvG41EtmQHW5CUe2L0%2BGCZAJeGfSfwmGfw7dkQesLZf88qly2GLRIzyC4wGn%2Bc%2BRvgC6bHaTEsqCUbGIZ1rtFnjQAMaOHh81JmUpVvnxg%2B3b%2FVCAr8fstoTCUkgVq2jz6ikBhfcYAwrLBlLtqidoyRdDKHW0%2BYFlbaJbHmSssNnutHrKKRiQJAtZR3J4%2BqAQE4MghZ9%2FMr0IS9R%2B89oZQ2PmZ3%2Fc%2BowN6E5fmNgTfuWd0pff1CKUvXcqRSLPbcBv%2FrOm0SzWajOsKq3ReIteIzWfaMJ1Abza1MyW0CXR6QCPZZf4eJtMCwdR%2F3IYn19gitAELSJj6s7binCKQCTjaXJsViyadxqfer8d2EuBUCiux7EEc3IBYMbnKhAZbo7KvrD92yAlbSP5VlyYQnH2CExdmcFxRbjXrxQmWlpGOdZay3A41Jm4CIqqpw5QswgbAiGlbIZVZnjDIKO0rZd5jusQA3aMAo5ugLj4dj7cDucALDxKv3BKHegicMqz3QxLRSwU0EgzKyAws6opuVPYMOrMwMkGOqUBJ9iHG8eWDoxY9VThxrYJ69bgaGV2JYPZLDi%2BbgpPBQtXq9S0iFNj4KjBkwx9elAbXC44zsuxZOAJV%2FgqhQPtOJTyTPb2h%2FNis6gfisCKTJzOk6fy8O4FyDVu95sHsc5RfhJogm%2F4iFPNxoSELzomGsoAeOtIXoRNKFJPuBtsAu0GqqoNyGMJDZtfYyY8iprzwZiPxaXyJGMGM1W5qREz81h3Of34&X-Amz-Signature=f2132059ab61d946e574930e4945d750793a2a7ca606a5d357f2e366f7d91d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


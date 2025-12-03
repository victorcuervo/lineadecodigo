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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS6PPIXA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD249Xl7VxlZ8mdUJZXyD9lwDrTbYHd%2F66nP9R4XSP79gIhANz4E1Tr3rk7zBfwxSCg7U5AhbIsBbwYXJElG4jTNrAxKv8DCCIQABoMNjM3NDIzMTgzODA1IgwfuNcL%2BF1AQWCw%2FVYq3AMG2hQ5KaF%2FnUjDYTyHWLMS2vF3%2FmvhJFk6LCgZQjnEFEuYm9o0etP24dWvi1SkMrKWH4zRprMtOirWrdCyV5HxJzliC6GiSqNCnPv%2FSbzzlQ6lPHb1qvcB4bcaphAk6wI7vquqsmDKfd0kUnFjsdaNwqizYDhDQEQyYl7QZ0xVGUE1efjh%2BpM96CoTOwxUFZPUBlgos2Tq7%2BbXM0oK%2FnbN3c5DamvwavfOofvjveHrd2eWuegRYEYUUOHLrzV96ATR%2BcmbeRG6DLYZZaAIQQGSa6z0LhQPeF%2BJOO0dS017kJnXilwgdsDGJfdmWaPXUf38UozoSlT2uH%2BNQwh7rR582%2FALtOTRdOJnghqk81ZIH0tnFLqIx3FvSK67%2FTnD55pVXt848xeMTn5TeAnAwOD3hc9uziKbeuX8Zi%2F7rmvb1MGuJQqWzBH3TpyiBSyWbxN45TbxvX0WCxpZVaDD%2FuswvR2CdBdRZUE2%2BeINTS03%2FrXNYeYBQVwTj6%2Fq%2FoTaEjjdJCpt3D%2F%2BNz6oTNqG7xqhoPM%2FjQJHsKrPQB1DPYJQZ5rgD%2FLszz8%2Fh6qSdlZ89fTk5NtL%2B%2BBO%2FdqFin%2BySaBPtiOZmcdX9U1CuaOLsQ4yr8gjeVQalcGi908zZDD9lL7JBjqkAVga%2F3mzRoeHw9M8bRtPwMW54kMCzKfPYiV7GJUQufzCB5flV7TATX7MDAn72GxzUKf9qRr2KnDzDotG4gYq2Gx3xALFjTWeG4c%2Fu40u7MXEuPCagZPbfHPSa3QfsvNM2v3VjHCyAHXdzkuDJb5YFWQp43pRfaSF%2BkFdlPbTZnWj8t36kZBXa6vOUfCc7vvuqWPnMxs8vlFDMkiax6aZy%2B5xc00E&X-Amz-Signature=cb973bd76a28bdd37e6a169bacede3f3cb975c9cf70b3539fa44d2cae6136c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


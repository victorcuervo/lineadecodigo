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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNVHZ6HS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFeVbycgVyq4hb3TelWUyt%2Bp6qh0X2jytE%2BpiYx4uSSSAiADfKQkjVwitE%2FfGKNY2ltwkE6Xh7s3NTyHC%2Fgl16RUuir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMOl%2Bt%2Bz26gUXdr%2FtgKtwDXvMqAMSP3Cny5bjC4xXARrEJjyU9Jm3FEnaySZ35LU5Mjuivd07rYeXF0QQ9AbTf5BMKeUgj7UBcc6TLTZyvww%2BAvZH7df08lrHbGORpM%2FvlAg5Tz1tJbiKc2swey%2FfC7fUNl%2BvL%2BfEGWHayta5jeWQjxuBGrApBM1Px3TifalcZALpYW20xxg%2Br8Rk5yqEzMZ8gxdiELZ9gPw6IhKxXNYPVNL35kdNvMHaiWgh8mYQN29xbMU7MG4IyT4PlycCf4qB%2BQ7z%2FK8Fcd4ni8ch7wQS0edCen%2FYdQ5tJYS4LqsvP%2FCYjxbutzXfS9CS7FIkkcejfZiR4OlpQjxCEtyVzbu1waWb%2FR3Wra7O4NblmAx2I744N8gsDU58vULHcyqJA4QsffJ0NMKALJ%2BiZt1CJhOMpLMoku6CyOSUHYEK5l5mbciK3Zl4Ar7r6DD94YbawkN8v2omL%2Bxgjh7u%2Byb5E%2F%2FlGrByweKjF3wPdIE9uzW2E0KCC802ERdgvvDAd%2FGNYty%2BlNDB54mOgF4oqJ5huDhFOwkthjA2CopxRO0XnLgduAJytJ18fL8wssgV%2BGeuzUS3T49pCQ7kltX1IWmm0iT7YrMxeEbGAhMyxYcNy%2BOftyEtoVAmKlNJjqnEw6pa%2ByQY6pgGvXtsGu0lmAFpoBn2NERdFDXTC65o2Cajc1zB9Ebumv3ZUlmUBVf8WYYdKWWaBOMludrH8SLuOtJxQSaFPdGlva3qQXYeOpH0OS3g7Cjh1ZaInpmJV66fZf4dUceJUhxrx0GwOb%2B8Ew%2FIj4CT1oxVZVzJuu%2BvsdzoxLMOkYDN6w2PhzqEf3ZZ%2BWeUXOOq9xXAZaa6UUoFIs0scXOkxgn2pt4iyK9bR&X-Amz-Signature=c19d329873b38abe855ac75f3c0bd3808f193abd6492cb4e52e3eabe1744f14c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


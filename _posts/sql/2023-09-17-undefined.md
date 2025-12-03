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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WTB7YHD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIHldw3lxQvcO89UY6VN43f4xudKtT8zG%2B%2B%2B4WeAmM6fbAiBaNVu2adzxy%2FCk8CwMFqNQdgEUl1Je54%2FT66iz%2BK7wmCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIME8OjFTRyyVmsuG6DKtwDaYs9mQW1wJDu0jH1MclMM2WHAN56Iqy3eBazlHjU5CuQyWH1IcwpiM78QBTl0BsGLrAKzoLkpZNZ8NdfZu9d9TgEyuAV6BlkEyrsEjGoXP4c%2BC9vbeKHgzuYA5f9tIr%2Bh62bDxLguOc%2FXgRC1sZuzjrpyex9ePxAQC2%2FIjyQ4kxQXx1pPHUiFLXHHh0Or2Db47GKLUgQoovCuy7XTGBN7UwERLVCToe9EWBiu0EZP0J%2BrmA0iCkgylOyAzN6zSyJUfbqCSHhs6nhPvD6c6TZavcmBBu25LMjUQBu1M36r%2Bsnn%2FARj42g4MfxH9H6NfvdrZVJavM98mdgyngZCDppH2ZwkdQqtJsW6lOzLHvfGhCT9%2F5OqNaBIkKzbApsR%2Fx3n4f6Z1nQIwKFdR5XQgYU1ohE%2BqkFXdqqfKUVzaLxKX7xVxjv8llx20v%2F6ZoT9SmrSqO8wwZak87Ll4q4cKOSqpZGmsmODqQ7SjuwuoDC0%2FQB6HnMg%2FSUqxZbawn9FFadAZjYTc7XgaEWM66aDiPwOUyeWd1mCz3b0z6SPr9SN0ASvYsIZbdA1lqTT82NFHOs%2FKINQ8He2XpeYeOXXdtD6dqAiPhTG9zztSrS47Kk1kak4%2FvDa32tdOxXY6YwhofByQY6pgHGLmKpuOEImWTPZYiE2gxZrGu1Y%2FzJUDOkIlfGohPVqBuceUARCjhCpjvZwmbY6DrFAhbXhjDpRfaCvyejCB10ujjZiK13UJHs2kW6hVMpotqSCEV73xa%2BZE9V%2B%2Bxn1Pb1y%2FWE2EMeMOFa5NtOWaHKlIEiI47FBY7AMdMJfOAx9oSt2%2FvjvIfsx83pbTVMtaQzWRB7Gd8d%2FFh%2B4NuBxxEEmJzC4%2BDf&X-Amz-Signature=19e94e2ed7bdb7f39566dbdc4c09b640487afc47408562f0a58987d5a764eedc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


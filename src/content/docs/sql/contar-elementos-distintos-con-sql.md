---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WQF3RZG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCaHI7RG0pg1gCnScjykkDDSIueKiJc%2FrX0IUKnh4XCBAIhAObTUPcMveN1IJSe9O0i66js%2F4UJLYIrB4NamsehyK8JKv8DCDYQABoMNjM3NDIzMTgzODA1IgwvB2zYkfP1xDY5kpAq3AN3Gecxsp9ValJaXYpt9wXdjrEs%2F%2BQvesOUUbh6OaHRpGBxx8jYjNwBsjo6ZJuB5xMNMAem9ZxN2bl%2FNnJO5yD1OYPawJUDlveQwGLkJHhLv00GpDlPZ6umTiODBOwa%2F8wpXY%2BTIOXdy9m1DmKfKgQPfmhedAjLxw4rpt4iPltyjyXyzlS4%2BhCJEre5taX2pszyldaw%2BS%2F2EBbstW1IzLovIDq77e1OjmRgEfUGbHOplRzLHmZgyu%2ByfyKahwRgaLAiTceKRQFTO7cGcGLwHPOAH06%2BxpQ5%2FeB6etn%2F3SClo%2BY6ytT6oPOWGaMeYO4XWgOToowpn2ABLIvBfg8HkheGYEGCihDkh2OM0xdLLlS6mHOdessFRPKOOeSrWkUN4zq7iGXAbNB5mYZbyzGwYF%2F4DCSA4K86NDi3VzOMPFGVhJOgDweRhHfuQQ3BE7qLwtz9keorZY4LpkB%2F6MNztj42o3lX0Bl0QU%2FROYSsN72SJe4ud5m4uYYdnNRsn7w%2BpHUVZL1tIEMDNp639O0eEbRVtPlVf%2FXUou1n8aORK7nd9e8L71EgMPYRzuF4jeDC4kS5UOrrTwtaFf9S7u0%2BfssNQGrOQWWYWAU7VzpkgbMDY6E9uufXzyeMFjYP4zCyvcLJBjqkATTjWX4A%2BpwTVXpbsqBTF8ucCRIIVy2BQeODEBpjfaafFDMxGZYyI017xU6Ko5Gn3sXGMPk6P%2FgifU2hv8QGeSgHQPTwBx4h8gOC5yrDcX%2FJaPdbYHog91Ls8doC68%2FrZa5rP0ovL9xtjjAnVpL%2Frrx02ukYfWB3zzEHkgMxMo00CVaVkqpBxuYY9wSPUjgqws%2Fr5%2BLoweJ3H2yOqE9uKdm2%2FPwF&X-Amz-Signature=e8c9a5f867cd5f6989de0e00e1ca5a9c9805a34da8148c1c2598e41eeacf79c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


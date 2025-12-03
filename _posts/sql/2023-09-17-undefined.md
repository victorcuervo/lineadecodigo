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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDZNCNYS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBnwqcIZojdubNSaNcwsU7hFCZD%2FRm2qOi8sjChqDnjpAiEAnBEA6y9xPWWr0CaGGeePWzyvZ3lSjzjDHdzTjPxOSm0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCxi5J%2FKxzm%2BUGLzPircA3QVZ1XUhAmiTvfKV8DNIH4vjh8kQGPXVf4qWAkDAuHfRRKtxgtSPmAJLnx2fULvWlBgOIKtvZuWx5%2FchcVhGxjRYz6fnYfAuVa5TKYJLwjdM7mP8aGDfy0fHINJfqpdcsx%2Bz%2BC3UQq0htQr8Invar9mI%2FNVtwRo6%2FXbnWQNnuxpTJtVNKFEby%2FhgKUsG8t9ltmZ5f3pMwZNxMuSzl%2BHO%2FddR%2FJQdpA7OJxEbs8Qdy2%2Fp%2B%2FNoKlsqJdsaQllHmAwBe3Cw%2FyAYBMZC340ZBlGiYJ%2Fasx59E5fcogfoq8t8IHDfkkPQM9kqYw8SbBMrG53t5FY2u3iJ%2FYiZ1%2BM1bWE5sv08hB8PHWIMHEoq4ewPUu6NJMVDJdlj9VuLvEGWxiJjt2gA4%2BuKX%2BsrWphQu%2FPaTvsjPAR%2FUoc3J5zsRFhD2AbvbpO87hMnnjzXtYwiggbceW%2Bssu78X8V62JcYk00Wco4AF0A0J95tLocZfprFhJ7mg1u4RLwmi%2FIYVGFR3cm%2BsKBOcFQ1eTcmsDVpCWyjZd3zMmHM2%2BwuuYyT56qBlo%2BcuKSS%2BxJ31%2FlHJZINXKD%2BuOEmNu79DLEFvjGRplu%2Fr0lPHeah98qOJV4R80pPgbcHreBOi4QS4ehv0q3MMLpwMkGOqUBUO0T2TfXLEG0A50DBYwwKAbJkrJ7UAdpRUzy%2ByWNV%2Bytm%2BCouhtIFt1K2r0ai14fe9EhU14Qfr1lXDc18ZVolsenYlo%2B%2FVHdBTKqYXVJ%2BIQzeclfWExotLBZmpJ3kf0SJf7SVxiLJQ5rhNSrCH9ghLNsRR5o%2BbTQvnVWe1wkbYgIvPcqsH56Lf0ohTf5yhqlFWpmb2OjslGWA2ErDEP8NXYU0sZP&X-Amz-Signature=0f083589535c514e6b3625579eafe7116b041c26c62771c56749b6d1f932fbb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


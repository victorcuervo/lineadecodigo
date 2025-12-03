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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHLTNYZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDkxCdFYvX2jbg0s4SDGsRkCEc7zlJc7VlZVfgsPOY5QAiAVMX%2FL4drD2wYyW9JXVxRoqe7fPETrNJ8UpFIu6rGLvSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMp%2Btm70DnEkD4c0ThKtwDgfKD4GH1TgCMRZVR2Ybtv41ksTkFjcGSUYO591T7AO5Ko3d0SXfMBNlbo5dPb9rGb%2Bj1H6xgXAPv1xQ9Z2W2MeX%2B3G6nba%2BIJxrcQ3P0%2BdHgbIPE23AdZwDmCF172lXdgFWgvreDljiMUFRjV1fl6POVY%2BbhAdWDIaNsdJ1CO07j5smyy7CL41J2wD%2Bpec5jER%2FcV30QWNorYDTWUBhYuZgEjZRQGiJ%2BxKZT6qL81pHCLxI5P6D2LWwMHcCwEXVRgrTb5xzep%2BC7s4NNeH8nWTEMao9HWqS64MutGemMXDDjy2GivZ%2BCrODnhwCsYaqp%2BBxWkhUxpouJMu%2BLcWu57CTVuLbeJMTomkVMV6Bj75ccp9jf5aq4GHA2ViYzVLR6nMjU40ZEJ1Av8kqxFqwfN%2BkMlOV8HVxGcMBMMV5%2FO3wNiprr6M0GFmx41jiZlwLFGa9d7LpwFnz1mM27koVh6TK54RheQHAW120dRAFVq7UevmBZ4GagM0g5rrB67R7S3SngU5X8QvNyMOX0xpy%2BuCmpNlagcRDBWHhemc7fxVEGtdrrpUsdTq40I%2F78saospm76N73evQZs0B9MyI8cFdwx%2BzNjVF6tOTaaPUoJQ%2B2qYL%2BPhGfWaS0a64kwypS%2ByQY6pgH%2Bd0foq14wB%2Bdg9%2FH2H%2B09NjPatmgez8NFwy67S829urYJ8I88zgY0LrEvcWPAh16JgvFbuIl09xwebPGbr02sqFc6ALuVHGWNoBFCytiaUt5v4Tko9PZe7TCVEEeDogSA%2BbJOU%2F%2BSRWvxsb6XfylbisJynmv8EWI0Ktd0UucbhECAlGQbAd4issa6cKJwBVyWmNo9vSoCSCvmcvG%2B7K2u%2FErlnmCz&X-Amz-Signature=65b310477a57753d88259e869fd6e25fd26a1461fe6217dbeb9faead7578a2d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


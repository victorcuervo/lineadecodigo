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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJAJZQKU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHJ6YXPTcrskhnUZm%2BEo4kBbbKfNTvLi7kyK05ScxUCaAiBo90%2FVaegsz07tvYaMcGATdQMLh5PjjeSeCoJE3PloiSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM4WE%2Fe5Efhl3oE%2FgdKtwDpEJz4mEtK4efPWNx9inl%2BkZaN8rZUiIylcgrz8y6y7BMEqn1we%2B9YZt8T%2BgGFt4oRBStLyc8U06vN2k5OeO%2FqOPnFQlQ7kGEY6w%2B9M%2F4UJKtAHznbnyrd2y7XxGsTA%2FqotleRZje7iL2dBk%2FGBXA16ZinpxnHIQWih7pYoFafI94aEPJtPyg7KNDxiiA0lvrlhlCr9S0m1JvMvrKHrQJx0bz5wXwnpv8Hp%2F0wXos5xMvmQ%2FoElludpE7GqrL6OOMgdxzVnO1u2FkiMF8I1yxdNPE9%2B2ceelOb1dDcmS%2Foe7BWbeooyM2nTdCFOmutlHbwpbsymj0eckyGLQoJnzzfI49AT09RqbdKpddWw49xOSDMiiezWkymXH%2BIs2ud0kP%2BoG2SJMK470TOpA7gBVsExGlCZzCQiMXpGXPaZLKP7yQHtb68s4rc8wy9BmNk4b6GALl4560JarIO7bODaKUBDNwG3STGZ%2FS9%2Bh0ynate5OfNOobFqKjaw7gQ3aXNIAFoCOeJtr%2FZa%2FIcs7IcB3UtpnTUVPtPn5p05Fgg7KaxRmdgzV8xjdIo7XWmWJZLwet%2FpMmR8kOyO%2F3x%2FSYmJObmj2TxHsS7kq6tGz4wTKxl6ZVGowIjt%2FlLdso9Rgw9PW%2FyQY6pgF9FNdiyEAwrNQGTyI2JgJT%2FqgpalJTcpHdMD1boj%2FbGPnx%2F6Siq1%2B87TOixlF5ktaXe%2BFYGMdz7aXwFtTtGTXDgGJFglRGzr9V380MpL8SRbSvcx0dnxuEUm5NNWU2sFtVK2EgyxfVZashAhi2%2B80x7Tdl8VScwcQGuhuw7AwAtGoIVeu5E5TXTmgWCktqf%2FABZuH%2FzZhRE97OwbSPCBLpc1TRJJnN&X-Amz-Signature=10b69f053000c167d474534c307052d00a6f876b6dbc4bfa303707f5139ab176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


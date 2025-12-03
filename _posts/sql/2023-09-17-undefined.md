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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH63E67M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCICYM7apUuIb2F3G%2B0L6VLot3A28HqeM6CPxUuchzskiFAiBfRDDBkhOrcyowpeAmeHTpI1VD4qbXyBRAahkFJgnxYSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMRFAr8OT%2FOWPvzlcDKtwDBpGT6dD6amRqR804L8rc7BhwyiM27Hrbx5FACJh473%2F4g4ZwGTcbN%2Fp9hYLm0LFrgMmWaKhdJz%2Fk%2F1BPN86VwMkrLleHNwcIt9EMAPTZTpzrDiQh2xZAUbmtfdhRuuI49LWfuVxCdJt%2FB%2BiWIfxJllOtTypQVZ1Xj3nkDqjQQU4Dn4ZEyyjrke%2BVHUSbyVuPBUPRrqbjwc2Zw3N693rQ%2FXdRqyq9ELdVmV3nXblyy18BF2ae58vG38g0huUXplvF%2Fx25jayC%2FeAhBStCzxkLCNDiWiurQec0b8gaFuMB2kGSBYhN2b4O6XpJ0SFgEwZLJncxP9a6zYV83KelXx3QXxdLuM26DUawvMs0Zsmjls3fKFJuvP3rkNfP7iUllwfU0Q3Jm7udJRblNHyy%2FX00rwJ3ePVTgr7W1zFkboqCNaKG%2Bm60VWt22dBin2OjbbLCdqZZAIX2J113%2FfNP%2FmbPjQ%2BA8mWzrEn%2F8jS4vgaQvZT1MR3mAndzR%2Fo1B%2FlmR4CI5ifmsEG3FUbRUrX%2BbrQBHado1%2FK%2F6guktDNjgJCUhzBVXZQNT3qQQ68On5aOs7ITjqEKEWIkuTq1nDy4Guz8Wjvm2awOu92dTRss9N3%2BN1DZE96PBkgiBzmXL7cwopq%2FyQY6pgGeOflwbEC%2FV0huad3rjS0yAsbwcOQRDK%2Fw0ve9wJLL9CPZtJhMNS4mvNkkyoBMxCtDRz59pFHySnwlTSoX5N%2Fe5D7nOl58mnruMsqUAnDnQlcl54CrdS2K6onAgKsuPTfFT0YTdAAdqnLbefZdFok4PGKQX2OEn7lnp7Hnjo67sYmc2%2BDRtaXCHijv43bWf%2BOi%2BVVRiuwwsKamckd5IDbsVx9ulKde&X-Amz-Signature=8df7f8643387fa528c5a45abe6c91a133d4e468462cafdeb0f29ca5c22cf6c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


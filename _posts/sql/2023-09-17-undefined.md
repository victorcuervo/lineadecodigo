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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KBIYJJL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCID8CgkLrRz3WK9Imcv9bGcOyJ3IAciAb4J6UA2iykpeOAiAXl3keQa6P18%2Fav%2FB5ss%2FqgqghzOniyaBvqcNBdhNmACr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMRHmBapHfDyGQjtSdKtwDRu%2Fz5GTBSChU7GrdpYv%2FtbOvFqTW9NIOy6P2J3kSeYXqFHJ6LMsFXyfthMixXweoxGCmG8jrtLMa1KzJnfKgdCn2WKzJ3c8QOeTe2EbYesO%2BKFuqb%2BXEMjI6xhmHxjQrB4KxvhOYTVVYCCZQM7QpUG9k7PaqPFbT9z1HJQcK1%2BG4tZ7g1Sy5ZlY1DoKQr2DFXOnNp4RHkeCK%2F3HRxueSLsHSR2T8aB5XkeXfC1FF0o%2FKxHc8IM0kbnU%2Br7TthErSOSsHK35A4I%2Bt1%2Bi%2BdGAe4MSLSiqYf87J6tEWhGOtkGoG%2FEttQYje79AOrGo%2FpLA9cOJPc0qqPTlq6jSayPlOJGcxa5W86L%2F%2FSHrQjZYjb05IEMIS1gKDhe5EDSdgeoANDVPPFLUisaMSvEfKmgcTHid%2Fz2YtLx8xcmLE%2FToVE9O%2B1dXrGkOCAdClEzft8V3tT5PXn4Qx1BL0vDltPDh454imsAe8CdA%2Bhhm7wGEk7PZYzwufQ%2BAkqcdi9z5L0UOMpsp%2B0SUKGp76LDP6ZpSgFnU2DKavrGqhhJIItysY4nvBWOIt2epP1pVr6dj7dsEsan2TiiruuEyTgLJc3U0eGV9GIMkTTcyeJVUYAfl%2BOonnU14HVhrGrA6nzusw45W%2ByQY6pgFU5eqPE4h%2BfbNBaHG0WoGGz0YU2Gz6sIXtZaFR0WMsjvO6411YHWMDp8a2chGU7RpccjPDcCBG2HfB0MZqOZbD9iyr7%2BjuYuw7iCn2A9bSr%2BukiUo59%2BQhbt5s6lnNe%2B%2BKQslKUdr970xnlLSZKui8aru6HMBBnOPRw%2BwyKfS3oefDFvfhX1CBYSxJBmTextxhNlwfFndeg50ebXQsg7Cuj74yt0%2F1&X-Amz-Signature=d934d43ef9d0420f41a5c3525a31af88f8156b0db3da5b6c03d8541c40b1f934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


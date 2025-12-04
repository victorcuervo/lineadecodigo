---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ERFINOR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDiT6GzbtqeofsKDdxqwY23UqKJlh4GCW6BUN5Oiq9pGwIhAJWj%2F2ueUz2zB96ScayQA1kCk57jmToRYsY%2BJPF85sGRKv8DCDsQABoMNjM3NDIzMTgzODA1IgyifQJHXhJeF2YLWksq3ANOgBBcE0NiTQifvCavDsxCzePjiIGb19je0BqgnuH5uVeMRWpAtzzZrlFZqw6YLZ5U0cLnBaFvLMLaNA4SOn%2FRnhZLUDNVefvKtllWIiwEBo6iQg%2Bb1Z%2B6nZolLvI9fLN91cyY9fAuiLuBWpsKM7RFOYdlKQUEB8hUcnl7U2jWOXvkKGcLm%2FiQhotihwesu3tDmfyQQVwA6vVSDl27VFog9vNoIvxUwBO5pxkn62v4VDMPw5HZ5Wp%2BPTlUCOhNDbGXVscCWXkApuVeBO2GQ4JOVnLZ48lL96rrk1D3HA47%2F2IfUeowdE9gMFCzOaKCmUPutDgIlEepWgS7%2BRb2MLlgbmyPk7pyj5DrKTheFCZQLXI%2BLt2jNnT3MM%2FbZZmDnRWH8funme3gRh3r1iNzI3M65aUtIXBp5JVwDrt2FFxPYdabdPMmzgXvr%2FBAeD%2BKRBJGC0Wqy0zi70xVi9wOrp4j87o%2BG5MyBoNhbC6OGqPKU0euM8elhtdh%2BmhMg3TtQ5qoCHQTVOzVNElj1yFYhE1ICd3uNGC8LY%2B5e%2FmDRu2c%2FuHuLAyqMPdG2QiwtEiUCiqINEYI3rwQMANf61csZSLvSTTD5J8ueEzek69luw9PFk4h6g0xviCdUNddTzD21MPJBjqkAa0SMXzaZDD4BMALE5k343rXxlSmDl1I6c3LMrk6i%2B%2FcBt%2BUIOvOVx4fep0B2dIkTbU9Wu7530KWglIPQsUQmn5lIeettPGHBKCDehT33mO5eZTtoyWzQ0c0cR1BrhsJF4gsgeg5qVKqd2BuBRTsBvAv49JEgmp9PF4BoTHctNZ6AgBZgVjty4aMTz9p2wjBTlVjEBsbJk2G6JVc2YZi%2Bmbx%2BxdR&X-Amz-Signature=38c4c5de64512eb2f1c1e3b20503810680ee4aa0944b5b2464039126d8854e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


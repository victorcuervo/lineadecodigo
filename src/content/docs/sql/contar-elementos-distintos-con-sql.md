---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HG2HW66%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIAdgkpQa%2Fd4zfmBtQtXlarSDWQRLKy%2FEqxHT9K7kmmJXAiBccksJi3R9Ejr%2FE1XQpjNz0PqbV5%2FukJRWKVAnAeZmhir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMStJrHYJM3gy87cfaKtwDxx3WPewqthdMKll5MhyGRZDrcVBG%2BFuPT1flOvIeoCUDEQldN6UIhy7JFwnwBuj73B6i9ZRq%2FPCkyqeJV8GjjsM2b7ukVmIQX7RQR9Y3oAKu9AeqTW0InbNJDgjM967%2BkYBcIUstZNE0OnzF4y54Pg3TFodrVLGoHSpT21ES5Xz2X1FZt1KaaH%2F4SMxAaoopZ0APEkFHWXxDyG9X%2F6sfcqedhWSCRE%2Bemqhp%2BMU%2FVxt%2B1XR4Dy8Ka5T%2Fg3xwiY5frK3mfJ%2B%2FVlk7FKE0KO6Jqin4T4NSmMBbBCbtMrEKelw3K1iZueFj8tmf409mnr77dElcVXDHiVsBnM5DvUGWTXYcDGjmZ3DKI1YmMA4r4Wdzt%2BKEojdl%2BzUy5rKM1GMpxWjya6GdgY1OSdNo5ufKDo9su4YEdFqK8V7%2FD0O2BoyMdJOEMEfYRXlsUAAJoTDqoJpp4oLPrWmtliFz7Ht7ImAz4VzwIpM%2FoOUyqQc2SkbU93xQdDtiMLC7kxFueTMc3JDfgU%2FcYmrCQFP0%2B%2Byh7KyVTUufSHWoo2HNeN5pGus3RGCjy9ohqZIHTbnK17MZdEACJd3F6%2FJDy2y45uQK09r3GlsFQVxDUWfeWoTjD7Q1NOfsjWCOOQmd%2BN4wk7TDyQY6pgFRTuF6%2FANGrJaLv0eZnsqnhtfRcHtC834iJXMKTxtuIV4moe6kznfKf1exGaj%2BXduVZTUuYJ0LyDSxfS88uaDvl0ahr%2FM%2FpC9DxEjASGYbQ2Ec82z2t0nh9wBbQ%2FpDwKDvB5j5I4Nm0%2FAJkDVWpCjPIY4%2Flt0iQYrFlT5lfXYjyza%2FAb%2BqwlTb2U%2BvtM8baoR76syGbOkmOrGXr2L6SIKMk9AvcqpM&X-Amz-Signature=b35cc6ea84296fc70f8097febf9e375daa691dc4e12be8b634d17b3394c519c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


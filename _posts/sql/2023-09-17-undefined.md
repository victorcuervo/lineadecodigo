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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MYMVZHA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD9%2Bi8O2g1S%2FwjNm0MiTtUbIYBukedK2Ei6dj3OknLk%2BAIgJO23bbug1u2J30XkirHoKkSa64PNk8aT3GrM6eFX0l4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPUx6e2775rVQI%2BgWyrcAyykxiQ5vVwQPKvyuXb6eks%2BdyazwA%2FTdldHD7HPPwi9tYp%2BBtX5a%2BbwPqPTu8vK7qAM%2BZa%2BfdukFJH5%2Br2GfLXMjawEK1NDTM2hBpxrGukU40V%2Bu0wKaMFyacJzRVkbv8oThxABu70Tcl8Z7YECZJnt0cYrYxEMUGphgtQ%2BnsZA%2FVvWrdCckJRGKfpURoc2ZbuhRirCkIRIX5qwwX5k%2BpqdsKqO5TEAnaADoTOgr9iSN%2BP%2FshSyDLtEzgwrvUiMwJbG%2B%2BOi3XpnHNVltEiZEyiC8%2BFItyA7NGoNqfa8XmjEOLa8IMldXTzeOidOKrmQZaB0YH7B6sCY5qxh%2B1bD1eQ8Gt%2B9Z6%2FcTHXpegvaSCqmZcVJLjmfEeyrMLq14sdtRrbpYfUtU7omoCkjtA063ihmsLRruKAocna%2BcDqed47RbJbcC7v%2B6Zlv0xMBVsq3z%2FH22CyBvWWyCJx3TsuH%2BldrNUdlIqmd7VnrOYaSQ9KlnwQfF4A89ZuHfTiDBOREzETVxBTKwz5m5VXq4eeaSSvaE2vUy9YRFsVh%2FiGGWTaiKQmWTCv5Bm3xB1bSrP736ET4iXiMY%2F6qAkrgF%2BounXgfNXnLwyHHm%2FPDHn5Ec%2FVlzYH9po7FjmYLcK1yMMGUvskGOqUB77O2yXc8VnzU0y9Z%2FN4lwY2y2yFBQfOEhRh98cSf6k6urMvy7X9cElGHDHNGBHAk3WSHoNlcJcbnaWT4%2Bnma44AlPK7hIt7bdGfdRpljFVPA7Tnx39dABUXYYG08gcghsP5nilRck7SjPxBhi3LfE8IKnzvFOl2la4blRE1twZ72S9cvWquzu0ZkBVjSOq74QKQwivPjjqNcyLE1sk2SLRr0Bf97&X-Amz-Signature=40f1e95ba3afb21ff50daf047418bf5b04a1d3d54b3438fef70623461958c3b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


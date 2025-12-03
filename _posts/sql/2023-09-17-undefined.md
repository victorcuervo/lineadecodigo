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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS2KJDZL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCSYNXIoFLInMTfPeRNvcsMZGRXI7veGRW4%2FCIcZ%2FFcFwIgJp6yyITkVe2B%2F6%2BG5AdHcFriCDIG6K%2FLGWT4po3NsLoq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDA952lMwJvdEhzxIUircA%2Fo8KupbDs22pAVwAtJZsLJYxzSrYJQMLQedJyGMsFJmY7hno7Qq7v4cBVfGRMiHQLZ%2BBKzCINYee4OkaDgSF5NPg4bvvWYC6Yei%2BGcMU3Lf9ZXoqhpOlTCKLuDGfjNQYt9C62HYPyTNl0VWCAZn4dhA0WZD5kNRl4GYHoWgrZiu8U3OACHuP46C%2F8hg7dA9W%2FsV2rOkQMAIvV%2F%2FIPKabUqC0vFHZlI8LCDPpllE6HymjU9zSrbRVyusZKgrJ5O1EVSJ3P%2F%2FX0L%2Bcbtnl%2BHR6KC4oHWt9lGrbdtR7ImGAhbViiUrHRjw2hJx1%2Bx9JTa%2B2PGjxvgZR%2FkxYwo111mseH%2FsT074dPPZmg80VRrjOuoggDJHZ%2BKfIk7%2FEMaiJK%2Bf0hOGmtf5FwZhROXBopodnLLZuhwlOx4jQXD2e30rLLuVU5gRS9epJrqgfZkePtTbyYjd1DSUb5%2FaPT1AgDDUACQiJbRBOBzP6M3SmkxPBJ4fvnS1B6WfVggPcWjU%2BtMPkwhxOdqyn3pTkgMo104vNmngfH9dyFJB9YJF%2FkIYoTG5sdQLtdkvfk3QFde1PVQ%2B1XDFOocNW3u1Il5pcdr9winOGmWdmsEOFS%2F1mGPysWOqL%2Fg2JuACBwUWuLjAMK3pwMkGOqUBLtgJavcGiPTxVWvqk7v5OOM%2FyidxE5ANwZWpNTaxGXXppxMuovfmKlumDJmnbScMbwC%2Bw9YCgh1j4YzHICi17bQv9fdtPBjgKWwQjaMpJnPK79A%2FvQeuDnaAkp6hIec0b7Qh1%2FRtUMr%2FKvIFkLnkTpVV%2Bl1MX5Ewl%2FfZFlAPEdhsWP90pt5ePWgad2E45O%2FXcGHc3D2LagJ%2F2pSU4yjWo%2FqOvV60&X-Amz-Signature=8000b3176ce389b57c793033c40aa24b865312911c73d6ed766dec33c524c445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


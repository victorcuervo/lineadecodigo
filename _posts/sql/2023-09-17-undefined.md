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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5LMK4HC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHAR64bOZ2auUhOeWr5NRBTk52FcJPiXgVfxPQ2QdTE0AiEAiferJmA3n%2FuaMsAlobSJEvxCfEfUiTlUeUHSfvRC2xsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPiyv%2B%2FZuPg5mG8tJSrcA%2FnyLsSYjtpll4wqCs26qnyNPTeqXua6LurYNDfiST9KyO15Xy07R4UeWgjsNqA0Mwqh0VemDorAcAiM2YtRql7cL6zrYhuQo8BPlrjxctk5tk7KGZRT%2B8HJw3nP35K4cWclobXxnOCOcihFm%2BHr1rxolpcWhCKM3a%2Bf%2FaR4VTRjO8caYK0EUNI2PKamapfBQmc7PjAFqCDVt0GMuJWtqHnKkGMsyVEz%2Bxm3gKVAcY0jKjwFkSNy2vIBiuuSIp8maBJ%2Ffd8VZfAijwkDkDkRvdQRHZPx5TjXx2k9Y0HhgluASfU%2FHnsfCAzfuMVtHwLNe3%2F4eDywMCSbrK8yIeOUSrH%2BAsrpuMRBiPOUEwZmbZTJ5PjAhpV1EfHAJJB5rqqG7oDbxFPnmrtJIeXtdf87w9vmFcJ7Rt4iZkMOcUQSBqwyS3NQJ3pUdzhA%2B6QO%2BqIotj16CiHH4%2BqOH9y4vl6rQyKu31VgC5mEDqmiTdkK3Oz%2BxHGL5NATBEQ7gS9JhsXPH4qvgOhpDB3DZe1fIIAxdPkMBM6HD7DpQHE0o4yyipltKuZCWhkccxWAqFAeJLrTbLp2WPlos9QM%2BZ9HmCOBmZTp4YzPX2MSCoav%2B4VNZb2oi6Pase1oyIZ7GesbMOLUv8kGOqUBEXvP4NRmKiIbvELhay6jhk7NJZylPMUnQhj%2FfyRhupLgoJom0RyJqFikN06XptcnB2IUH8gFpsQQYsRMIyPhRZqZrCK4sQOdoFh36Th0Z4uhXLGieDr7LO7Ow%2F1%2B243B2XfyUQjSooFZC%2BPWtN%2FmnbWOs5KOeJkgwIq1y%2FbqmWs1bqIv2So3OisLdvRE6w3dTDBNIAuZJfbnAZc2XdQklvrkFDqy&X-Amz-Signature=626bd7cab51d9d1e9a3a029322f04e857a0fa50efef6728d2851e146846e62db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


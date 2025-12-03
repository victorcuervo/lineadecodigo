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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7564I2T%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDbBKvGer%2FwDP8ZivwQ7EhFn%2BWqGw1WqFKAQGuVRdI6AAiEAkwVPswTjEFvf8WtmKpo2IZgNZ6pNz%2Fdsz3QO1DHNwFYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBuhsyzXKGllQB%2BkkSrcAzGpJWbf2CKkDDrVAP6fvkpIiOxAN4PdBFphcZpX9WmcoblRwN%2BeZpvuJHitycDOomEiNRrdE66ZdLxYyn43AY%2Bhpx%2BKcOiQaH4unTZwacDLyCsdT%2F2mG5Kxz4G5JdBJLhMFFKx7v3%2FykkWbx4aWOc9wV8rssWA5WkeGbWd%2FanxzqJvWN1rK37cGcWzM7BjObHC9ikDNJFbt3Fw9FNHdAd9I1eaScK7IJOSzdLbw262UNueWtYD4cHJRsYjAvAV27rD2038IJMHIpAtWzEfoHQbvEKwtfRE9GeAXpGvBlED2pcHvdtY6jdbgeEXWLp2u9F8hgb6XAgFM7JyCSM2MNnALJigOz0n46Ptu0wqV8r0blbGIRf9EfZRUuH1iCpcb%2BCH7SUVVbEAvvtWl%2BQKDkgnfWfnvOEU3z2BkQQ7S4R6YcxUVzAZcMxy9rd8N0Hb6ohhNoy%2B1WsPFP7%2BTcDQ5OaW1ps34K97B37CPADQulp96DJXt7xBLFJpctWIiW6OLvLp%2B25MLhNDgF9%2BykevzYg75%2FXPEaZ0ztvskOF0sMoKs1I5UlbcMjAZTVHmSZGbIapxl4E14N2vwnjS3r5gxhb5mKurCeXAvSGgfdQWuI0DS7VCK3aS57qrCGTM9MJjbwckGOqUBgqs3JGncRdUajV65H7uZaXAoTQrOneo3tuQTRFdsAE6z3qTBL9ntXxEziT80wFTN6u%2BtHvko2OLscUq2EftQYbFNqhhIx7aFMRtInIurIP7CcyaGfTRQ3%2BqEj%2FtycyysN%2FS34GZtGbPSFKBBiZpSesmfShE%2Bh7c4ZRYw%2B%2FpahQWPAEq2yMDH5Z20F4WB6Hxg7j8C24I15as8BvvfrhrgKtxmvOEL&X-Amz-Signature=094accbf4d516d7aa76d56a3904c7c24172977f6953020b4909173e5b7a9b862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


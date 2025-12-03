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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RBVPFHH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHLvmgzRgIXZsAjobTXDdOSr5kXXrlXvE0be1lrrzzmkAiB55U7L06BvckWGakoCOanTKW4dUbIEmRDnGzH4Io7p4yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM%2F5vZmvJgjlCcQkdHKtwD2vNpV4kdZlIbBASemKdmKq32zPUAQkCZxHQYp%2Brbx5bXxsxXCZtatVir3kiGKAot9Icu5nn7MlHhZuMwDu1hyyKYR09Q0qLPXQIlFT8WlsgFurOB%2F7FTPbJpUm3%2FBRVqLgX9BUlUWTOTd8yTubSJfHMpFol2WlCeTWro1BXyNRAMKcREs1KTu9giHzdS2UJoYeP6vTOBTKNXGV9lr1hkAGdo9eyNxMINFggt5Q7FQ66PZZs2l5o1AaNPEf%2BZtWOQK%2BZH%2BaphLlvTE3X4p%2Fht%2BgVvzifwpnj6qHUayEGGR967B5GpmAURNj3iafLWiptlrKZnqFcf0VhSOhJQHZi88jIELk0CHpOix8SetoKECbdtBcmeSkkqsChMi7KI2pKV%2BsU6hzEDtXHMq%2FG%2FTHjR4iofNvzumOhrXspT%2Bn2wmmwE1ryRFmrYUT7fPxFl3e3%2BhCl57HH2zEsOfdTNTLto5m%2BOpG%2BY%2BsHq89hEJLyrRb4XkfwoSQt4w82uOYBMnyWtxsun3LMHwBdbF00vS7dAfm1%2BGPS3tMVBQRPAkuu6xZSKjGDFZ2M%2B1uQPESQruunatG%2BpCojs3X9TOiqphS24I%2B3LL5bciBotlYb5PgYMPR4XXGbKeoRYglVvMYIw8fW%2FyQY6pgE4jh7ZIqT2kqHgOkt2g2Gc1%2BQPPWNh1wkG0Oh9l32SpuPWn9ijswphrctZqBXgtkbF9WxnIQp4NE4%2FM%2BwqC6CLaUFnBfYmKehEvgHa7M8pCSUr5%2BUZ1sGPg5fNaKtuX8kzMXD4g1QXXl38IgHkpALaT9ZdM2sSzg%2FTo%2FANpZepXwJHkJONsv%2FJTFZ%2BK85rFFj2kF4xKtjO5kY5UDltc5WdOL6Tl6AN&X-Amz-Signature=561ed92ed9f08600fd102162fc275803922245b0533c23bb7e7c531864e1c521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


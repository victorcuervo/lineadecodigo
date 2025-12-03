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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I56VXKK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDBKTodr6SseeKvB4hVDVzWWL8aqoz17%2FKwirLgAX7H2wIhAJ17RmRP1Qp9xDfEC10QIlTXo3kzRb56pcAeg65LOrKvKv8DCCIQABoMNjM3NDIzMTgzODA1IgyEcu5XK1axwa7MobUq3APTNSU7cm9gO6%2BmlNvy%2Fooc0DbihxADBdUarIjGU%2BtORM1bUCv8a98esqNd4M%2F9rfOgej24i%2Bkt8K479VKOFu3u%2FMdyAmf3t4yzIDy2Gso0sXRDwPg746ncT3c8Qdxjx7cOmsVNwKthNIGmIeaowp3tdoFZ0MiVwhoihvif9uDmV159tSAe15ix9WbVHYK4T79gZOJ7bMz9rfWrC%2FlLNVPk3uF6Qh9jHnpS0iVqE7jUyxKuhfHQujj8pXclXxU%2Bh%2BBKffCRyg8fgVLp7inJk5M95XTLCWO0E1kqQSMtTZ3MxA10SnwtYuNFQI1eDJHxBeOitO9Ngam3v5goo7IEzi0yye4g0DhP3o1u7ufcCR1802JPPnX82AX8SqXEgZbUXYrOLqt5jmURc0DYm8iHQrqCmaERBDQuRSUKselaze3tW3okmBfDnj1SuenUAExnRAJfwIbsV9PyJQf5%2BhtJmrkpM3YN9JmbjAMCE4nftkcGlTaj49X0En62FORCOl%2BIc7PZSf3DmXK%2FtlN8rDnKkqhYf2uoYKOLoYqcxkpzaTxr42b8SHiISbiPlEwBU4cwKDU3OLE45LOf41DUrawiMVqRRyXVpFZ7Fp%2FbFf%2BxYDCpew%2FhTTyVraSqFMHRejDtlr7JBjqkAU%2FRtcsvklOmqmRbFBH68RkQSPO5pBwPmZ94JriPxyD2NqJfTfQDizzzUOglM78rb99JDNLrEQFouoPz3o6L3u04n2F1Uw01YFtsnPZIAZyqsEOj9tJHUfJyoo5DQljWCHLhBrDN8lDSIPueIu4GXariwT4djZ9jv08JQwm9%2FRLz4MCwpeXDZ9sehCoG7QF921ZbPTNiSItoTPMSZeeisD0xXSP2&X-Amz-Signature=f71a9f222ff49e9b7d500e1ff8a4ba1eb3de7dedf0f2e42ac7e5732bb312780a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


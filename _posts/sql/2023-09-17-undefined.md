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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV5PC62K%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICezXqK6ykxUfwTf4aTF9ahaik6tgA3hgu5Skg0xCApFAiAUnfALLA%2Fr4YS7ysuayQggwWyvuN1r42vfH8rHNAYLcir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM4OTRQ2YIgpPA0OHmKtwD70KMIUyF6XSeHozR%2FgOw6JR5mqWCw%2Fs5CO9FdtFrNCQmQ4btuEy4PZVAhvfrd%2BCCuCtkyFWUwZtKEKf2YWgE5PpbGn%2Brg5uObfa5POUBTgskf2Mq%2BQgseNdo297gHvcg3xqU9kzncWRw9iLuZVHBulbyxRdosiVXFnkpVhnPi1kh8%2B%2FHoFGX6MiAr1gMuaegJpxreRLk02SeVW6A5sKJA%2FAAtbUKlgMtcasQrhHIkIPmDQtKL4NpRzmDUxvyXjtH47qz%2BBz0uCIrvDwwomAIdoWRadxOyOGs36qh5q4wojLq0wFMNx%2FjQXjsvdCatLeAp%2BYEBuj9raX2O2fZxD%2Fovi2kmTesRFjbjmnjxMbuRjumqpusPjswrTwW1%2Fg7XQUgAb1oKLiV%2BlTJFE%2F%2BwVw4g7DpoLrduxoPh4GCTBF2KcHAbmRrYfSoSeNM6%2B6UO07wlzS5s%2BMVtplHByx4Bh%2FkyIliHr7DfBMvtS2W5Y5lrim2P6PO74YCnfhWty%2BzfIPZ3QCdGZapC%2BnhObwBz%2BY4ENZ%2BJatuQMZT1gmINroiYZzbd7LlDPIbpPc0HJkkb9WBSZbc%2BFT3Ks0OevmGEdXNSWOeftB8HIvWckgo5rp3fkmzPniFJqP3Zlpbu2Mw25S%2ByQY6pgET8mOs4ilixe%2FrctcmF1ciZeIu%2F9iOnI9JGBWOm7IuAUjnJ%2F2Z0QAuTvJlVpXOq95RDnUKKWWY%2F9ejwq6yDst0Xo0WOXr8V2RfPTBDNLjd45Dl%2FS9zvldA%2B0Vn%2BUUQKq7GlDz44YCwuU%2BgMulPNIfRmAYjKDT3fMqvpqwZnt2i%2BE1oxIW%2B9o1MQ98lnMZv2tMAQXL9O90Q8c1PJXr9fvg%2BzA9kVDPg&X-Amz-Signature=fa7b4d893b28064a33084f39f75995582ec29b2246e0401437b156f295e56d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


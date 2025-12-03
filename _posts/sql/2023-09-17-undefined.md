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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NE54QEE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC1m5%2FnFPsHT%2FnwImOkBuXUDIu04u7C8V0NCmE7rAWnyQIhAKqkepeNypKt6XNajD3j6aayitK6EjoaUd4G1VatILPDKv8DCC8QABoMNjM3NDIzMTgzODA1Igx%2BXnP1bHwZVYazGMAq3APbyMdMuO7zr6kxgzhoJ8TuBKQEkbIvQoWUgIkPQt7g9uJC6W8hPnk7AtW22IjobayX1%2BDbJTMNBEg5nkp130uOikyjwUbo4YkGca7qVphCBabv3sMrf%2Bys6Ge6qyF8VNU7Cio2%2BosaMTYM%2B%2F2fCayITI6rc0qmeWHYr2%2BvoIFuEHWrdjgj3uH9MeVsluYmA1Hz%2BtWsXBhWLJIWGzRe9UcChe04Ub2MkrNFCAW%2Bk%2ByCu%2BuP7qoG1wDG6feuQ4mPpah%2FxFwJFrAP4qW8NdOQA6p%2BsWCWvoT%2F2D9PeDrUcgKWhqCtjPYNfC8zbnEQrYUEgdU53ODDJpManldNMpp%2BxliDwlPxjD9GfMj0Eb6bpvPT5F0cGBDfzrOp4fXH5G5lbV3dv7DrdGq9zz2OxySWSPhlRkb%2FKm5GeDXXBKaL5PgSsRvWlleuKPJECN%2BVgbVw0F2rfClRI1k5BOriYM2%2BZDwx9vCoPOPJsvICwy59nC7WK6lU4G30fpYq5LfeXJwvLnEwA7ctA6Q%2BCsbaONaY8hara%2F%2FdyDHvZLip6d5TAm1ZsjGMj%2Bw1xdmAZzio8Dbw8QnuVpVxZdG40Qt03GHp4Uh6EyCnlQfnfICCN0R%2Bjiiz7HBjNHLPq3iVmVps7TDBh8HJBjqkAQWIYh9CvBWOc8QwphTAa%2B%2F%2Ba5t1xh0xMSm2R3cjC1xl%2B%2FssuUbHMQD4C6A7BY4SMc4UgEUXI0CJlr59kgu94vnnqsjHmVaH%2ByGWJg9YifyyNlqh9M8w%2BXWgsgaGMSJeZj2Lr%2FQEbFajLze9ywllGeDayLfrgSOHBq6ITd%2FSKICliX3Ha%2FzZyW7vjSZSeaPe6FXDY88LvyBmUn9C2xdaFp22c6%2Fh&X-Amz-Signature=077d36dc37000e5893ef0fe04d9df98dba985c8b78812784a0f8f2e4b629514d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFC5BYA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHJtb3I8Tg5m65jK2VLNkqbDNMiwO4OD9IyDj%2BB98BEHAiEA4k1GvWJl3hRaOjcNl5FPOSbfZatZOFOF%2Fmj2IuK6v6wq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFWyEMsg61UDrWFuVSrcA808Y7s6AtjPiEc1tm1BDhvBQrsahGOP5QdefFYL%2BXC4Bs9rJdfxJtzlvuVcTFkMAF39EF%2F%2B4t1vxyH5TdowMkTGypof1%2B4U4bEecBLAOw7nP4UvaTab3nrk3Lzakr0fvaTzB%2Fyva6p8%2FFNlm4MJDpe5CThWKLmu7eUgI9btPFk9GGLQh4W88Vo1RKE%2BzmFP%2BIvRQQEcY8OkRP0Dpl%2BpQDxK68n2q1pVT531TgMbgQ76QuD5WamP6k%2BmlBFUhP4Et46dvlmV6gju3Wx%2BPKoZS9yFNlTyGNQ1bJT34j%2FqCtFdP0oWEGRN%2Fwi%2FlFtqPvlAszHbmqCXtENXG6rTmoEkd0mbhixkX904nqSytz%2FxzTygHgeFDWn5iSCFbupxF01C4PgXJhPVZbwZJFAXBrIDoedex5%2ByNFxOAB2MkQZTPaTv891Lx1LRX5yiwm6ZTTiJMldUPn4FUpIPMp0MwWl7etaUqD%2F%2BOm1soR3RJrCdqf9CYsgrDWsElk0z6B4prpR63LcqqFuuoBqNSaCwlI%2FzFn5lJEcpnZufki5thMqV65R1erE6Wr2HupYFJGldnp%2FtGDZ4KkBIXvVWtGDPa78wxw6z%2BPe0RGfQqyB%2B5EjivBuLgrq9zdptvgCWSV52MJ32v8kGOqUB%2FO5Pn2T95QZkMtVewUYaATEBzW3llWTL2bafOU8SlvpNP%2B85OBRqChXJ9aCsvQ0UmxheFp6SrJZWoaRMRsZszXlBf92DrBUKNiMixK%2BOkm%2FUnwuibBdDxzn6ZHC6JeNXUzMSrfuA7WEXFJPC9QY7AwLq9LZegDo%2BuRmynjG2j8gPe3y5a%2BSd5oldM8ES2hWKHIFo7Hp81KzioQVFx5YABbPGEuMW&X-Amz-Signature=5f4c8925831b4823b72399b572fc4d656aeba21cc2c55db2b232ce7a1ba2222c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


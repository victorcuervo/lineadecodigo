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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSIDZGOR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDnt6AW4hir9bhDIsPTrtclor59wO5cAgSJPCC2c9Le2gIgRju%2BWkdWCFldBw94cWNXOaNNtQ4X7AANYDesur0e9k8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNn%2BW1Yv6rMtYBoTdSrcA1%2FDUPsee9uvpiaqjTaftRn%2B%2BcFpVt1%2FLZyo0yDCLXZup5RYjiQ9eUFqMyc2IUGQUxvM97rezzwyG%2BvYBzFVGLYAqyaUHWOuPf86llBcVigpGfCXt1Lq3OHzKo6v944Sy8b5jSu8UJIo8G%2FwCVaWZvcYk5tXfEPDO3sHnFVXNPQU3Xqx2cqctVNYhBsw72eZNR3KM0R1YEbTj%2FyHNLCKBXVs8ZwMJQ9GVtOMVHrtJhrJSBfmmpGAff9bAIkg3t3ZRXZkSDAMopkFkGn02Cw6zTPOCX0l0x4KERAQHlR9aS%2BiceFj7vMSxLFxNdNOFPZAX3V5hH0vCzcreuEuCW6N%2BZefO%2FbubKEOBWtUzVdo1pVT4A5HIfjP8hyHT%2BpUd0U6MXxQ46BvP5cvLA21DbkkiVWrI3q9qY0KZOh%2FLrOZANi0siDPHG455Bl928PM03IIbd%2FGH8Li%2FqUhW6aaLwAJX%2BSh9VUR3%2FJYB%2Fr9TgcluIx5bI0oGHeet3ysR1SGcnfI5IT%2FCPF2HFwyGpiNkyv%2BeqEAGVOnZTS4QhZFLOStEBq4al%2BGd3CajBwIp5Z913nMItGlCfuYgcRApZ%2BoJBnAkcd5X2lzgxZGgeK6eJiq9ZPt7I1hxR4X9WUnMcQoMLTpwMkGOqUBSfqUE0y9lnrpo6%2FQZVs5woVVo%2B4eogYnIPV%2F5uaYgRtxKd1MKYynQd5L4obAVKhm1HkZif385aTJcKqckNN3e%2FmUUjd39qiYUwCvlYL710nWJK6aX5m0bMZdyJjtyTLUokarXpTw1WLdwSS6t%2BYoy%2BLCNxIdKYWYOTK%2BWlrlIJUmc1tNTnWmEwksehNwT3zGoDpBZLEzGe%2F%2BJID5c3Y7nS7Uim56&X-Amz-Signature=4f323c8385f0e2ab298fa3705ea9ac3a8eba3880fd647c38f95eee985d03d8e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYPZD3Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDNgglEiFd98ZUrFUOOHKEXXa%2Fs3r1Y2NhE7BcIPpW%2BvwIhAJgpUAsNL50gC2k9Zq%2BZYdVQ6Utdcbi1OE4jiBznBJR8Kv8DCCIQABoMNjM3NDIzMTgzODA1Igy3diIb6aFWsxwICHwq3AOYR8TlIlcX9eOvzz3YHlGK57Rl%2FMny%2BVPw4SbxnHlFiL%2BpdT7XfvTFRAevn%2FiZKcDfXC21hxsSJ1I3siXTjjO1y8f6woTFBBNZmdHXMQSFcXZkiOZJba3KkdInc8VMGaZdgo3MHOV6pt245clZwaMgzqO4jz7s2UbM43MUadCQ2bCa%2Fbe7rhlCSA2F1fK7aUkQCEOI5HrgksRSge9%2F8ad6HoE9trDZ9N8a0uqsWGcoYHS9e7Qcw%2Byv0ZHRC8%2BXp4RCjp3zNv7vJSjtXEF2vLNKTGo%2Bjq%2FN3s6GNRGNuFem%2BynQMYA6lHwy2AHwEY4Lq5oD7l%2FhP5xyegHENsHQOjZarEvh0vhCGqI9KgnpNyDgLjrf%2FjXAsBZ%2FqZy5KROMmt3KOarsQqJt5uc15bFlANAB%2FFzjtKuBhDlcrhj2ZuF0ZAIaSRbH0bpcK8yv89qIPyM5UO4fP6m7jP47n%2B4RcsDR8dl03ka6IsDFZcJFu%2BmSCCWwDRXi0%2BA04A1nIcT9Fyg73j5DcgPQ0ozobUQiT5UFM9dl9We%2BYElSvzIMUobiu2OlRG8PglsaogsuOoFuUbO3cWpwRQEokchapYN4M1w6Az6mYTeO7c3Kr%2FWcFqLIIm05Kx%2BcCYXXiqz0%2BTDUlL7JBjqkAci2TrjbfBD4IoK0Pjyo7Hz0e%2BMNNOMXuam5oxVeF6z4e6ygbUsHIi%2FGtdYmjppnrqT77Vc1%2Bq38kiC5EglSxf1fVCWjCCbTiTZyLsIXH7z%2BZWcAH8Vsur5fqYP5GQN1s0ScE0FtMiZz3xDZgB15R30sj5aGaFnSeEJEv6PibRS8MqloJjFyKWxLinFOGTct4DRu4BTFN3kt2l6vmFSmD0%2BZXTQW&X-Amz-Signature=9f698727a708e001636d413b6719876f30bd29090e82b057ae82d9f27f6e4be4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


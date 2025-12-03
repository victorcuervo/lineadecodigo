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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNA4RJMM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDV0Bnr%2F3fF%2FJNndzcPE%2FWi4XxmjYBBvL2E2EzZ3Q0JKwIgQBaMnWdh829D2A9pSuf4Rxihex2CVPWHOVNJwSOrvisq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGcbxb3Q5lkhw%2Fqw8yrcA6GeYKLia8tIDUE%2FR0ri%2BIe18dhZPXKA0be%2BEvPJP9C4TgAC1Y0F3XjQ4er5fyUPuaCk7JyQw3NqA10ltmF2p3buecY9zmSndKtq7amvELB55S4QqJEqDUDdyUjGEKQGRJLzb3qh5fEiVCunE3KrxQLpJajNaL4m6zYMKewtvJhjBZTAK7i9yRAfog9VIpC%2Buut%2B5q1WIsL6CvpZlP5IfsGH29djEAHWZRDwrFK8ityjF6gB8DfdOEphR4k1qmSYh5db%2FyDsBC5kjKZ2UtSxTLT6rk%2FS6Fidb5hyNSNcYAdR58myDqY8Owr4O1z7JX4Eysk%2FA5D0kHhgHCtVsW5tM0BDpUYSp84he1PB4ynIs1AJLyikMSO7NINPRq3UVyTVD5gk8I4gmeRFyKF0bMjZjY4w7Gv3LZM%2BCC%2FXY9eWF4XjgbplGDfsSc5Qp%2B0vUXvTeVUlQsHy6OdKAfNqY16BbiJz8vZ6kvYpEM6XEZNtfuBHMOf%2B37SkIMDF83T0t3%2FWTc68sRN6GmV03FEVhl8GWs58zjWmzMLDplOnNBTIYl%2B8Z7y5%2F9OQvuVbjr2dnjVcVO%2Bi4tlU%2FptK4TzBqbrXwQ%2FulGbEELzKmrD0hXlPaHbHbi6eCeMEeAWl0ONVMID%2FvckGOqUBvLapjWMTHWKG67%2BQu4CS2oxINt8nFqkBYmhvBu9mZi5Khwx%2B7BQg8V%2BunNtTLFDS4zPHTYQ2HQU77MWHeh1%2F%2FlEtzwWNhyxlmxcxS%2F7Q9zJqWM88SGiY2jhQj0j5Q1YJLpMf3ZGzsCuOs9nGaeOhbMV7ZWIWrybHqQtDIcOXxf5%2BxwrLBIG8xRiyau9apxS8Z1JVh%2B46uz7x14bpBiWZi3oXD5D0&X-Amz-Signature=f46171487c9351c8898974432c843b362a30f0938e7c9857058dab2c09f29acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


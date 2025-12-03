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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDOTU7BR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIH6dGPx7SQ38aAqHe3OKVFahZvGgfcXfKb3QSKD8OJ4MAiEA4J6i3QrQNqIJMchNhMDnF7tq2O5vWRs0jgml5f0VtMsq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDIOInP73WX%2BERGyUzCrcA7hsNsso6EZnzdqMba8Ei49CYVity8AtyJIgVnjdXqMPunmlbH8UGioMr%2Fdpd9bTINeM8rnJWh3UAfziRSSDnjm%2BJaDAm90GeHJi7XkPeJVuHmQNdn3YQzvHfIFazzI3yr%2BP95WpFXkrZjeQAxmMmzu4T5T%2FuenKLmKEpX0zldy%2B3pBLBuuSmP61xd9tO4M%2BVqE3iUL0U8ucX2zW%2FFVIWTP0%2F%2BmAbA%2B576rACtS56rNYaI%2F54YUnfkK1pGdwys2997Px9BCDm3sc0kX0dfn0y%2B86o8XesNvh2UcsVa9qj3cntdxoG5lFx4zqGSedJ3wzc2kAn1XS%2F1XwWrp%2B%2BC5Rdp0SkOhxIGYbrW2YfptOtKynG4y0IrgVsl6c1V116%2BbYZkkm3wowqCJdgj7pwYlrP9u3gMwGB6%2Fri7w36QBKJl1gC3XMXR%2BWnIgiJRRj%2F22tnY3X6sMakryQdawLbpmQAvPnrQrbW51p%2F%2Bxj7SZpA90pVltTM%2FQ1xQvrCVwFMFD%2F4Yst2Oy7TzYGRY8THBdUNGt1iYMHPNrgKu0dL%2BgBYqhOLE1jjy9TMqhYPw7lneGkkal695%2FLR63qgTBdP38YHFd9TrOJ6Ucx3XkUdpqVZ5Hc9LHnVHscRTAr%2FYXKMNemwckGOqUBG9B9QQa325l3CkOfVuMSeK9K3Wpazm%2FT16D2AMjgx27yi7axCSMEAX6eO2fefTc6OPysEHdmLyLIKOy7Mn%2BSwvzQGM4o3lTnAwHFYpwkg8HipcjITnt6%2BSTvr9JOeet66wNOPMURwPppmQxY2X%2FznWypCNg9diwdIqN2%2Bg3SHFl3q6nzGcb4ziidCbExTP4AUQK630izArYSZJlCJE06ULdipjUE&X-Amz-Signature=157ef25f201d0e2c729af529eacb1b2094b3d06b181d792f35eee2043fb2a0fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


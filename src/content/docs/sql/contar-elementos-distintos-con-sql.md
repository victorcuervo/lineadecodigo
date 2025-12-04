---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZFRNIJR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDYfxXN37Tv0KUtbqeAJ1eF6Dvq4EcJ4Qcss83lhVIMCQIhANsPoZTn%2Ft88CkUJt2jGLrRI4PcrDJ3%2FRuhJbKSCsHVLKv8DCDwQABoMNjM3NDIzMTgzODA1IgykQNHiKQAfv62US%2FUq3AOJYqjGsCZeXFovsPDJS9p9AmPCgHaiIm0mxg7utYpOV5cQsCWS5KAQfTOjOgOsCvTKu%2FhsA9yEKDwtLID4wDoZPI3DTYtJSKqY0csC%2B3plu9n3HmUhy7QpgovKrViR3puejMdWgvGpTcMSMqnSU1wujpdbL%2FevRTxUtL%2FFSjuIG3xoF3gufi9RRCR9skeuaUkjr%2Bd4vse3jOT842SLAIZlmXaO1G3lTg3xzgLcYIe1qKPRusBjSO1iRXeWBQju0fDPLPky7%2BL7fgbjMuEZbowukW3HdJKMfOEnx7HEuFPbheD6umzZy0%2FjvyKVRcbKACU4R7Q4%2BJK0naRcZbIZ4oillGAf%2F%2FF808KL%2F1QmH58PfIA%2F5WRhgBQfweXjs0LrFLmyWW6cAIkdwEozeWqO74FSWwZJu4l25ZRtISJgH1J2XbSQPhVeZoqknXcSWed5dIezOTMZa5J6QOecHaREq8480cdyNDmoBGnNp3HT%2B9ZjYodzjfufbumILEfqwvI6t9mzFahly5xTs3s0zr09aBlKA4lKt48qWSDYTZ1JdNsNU2ePzr40FwoTpQuhkGq4wMQQlerywbLXorx%2BAGfcIOGhKJwitUNlGBbq%2FnXc%2BiQBXLgwfhLem56LUrhNBDDF8sPJBjqkAdIZESckGwcoj7X5KfvJfCsSwMwFQxsf9hGc9xoZtrIBdyE%2F7ph%2B38rdFu%2FhUSBMtdWGyKza5BaOkK7YTLb5jwlMmUIBgUN8l8gb4Nuow1sUyJ6wxrhmp4LATbBtPn35kLl9JIkVWmme0jLWhW4K%2FdLG%2FsjjhoDT5Bf6oUZ%2FCfVBUuPyPdYGOfgq5PbpCZfS39I5mIFqFSQyzvJWT1VoVPw1lsca&X-Amz-Signature=e8ae20752515d653146065ae6a10cd12be1458933c4674e81c248dcc61126105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NGQLBE4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIHihqxWWAGMFQydpvK%2BXYz7495KLYXwIihDK0rfZple%2BAiAscrQXTzSI37YPXrCV14w9lt3t3p%2FGt8t3cLZrKd8M%2BCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMMlW0MZu%2B1kawQPO5KtwDe7dC4lhRETobRYM0x5iqe5E%2Bg%2Buovc3CX7BsfspwOEtrOmTkAfHQTD6nwPNbnU2lqD67sKuDhwg3tep%2FmruLodil0WErC9a51IkRQf44oqfrgb1J4%2BEfhdiVG5Jyrf81M9sOYAyaGPqj31hdCJe1PpaIBsXlUB4BiSenRpe0IWZWS2J3J5NSSvnysoT6rMATYsAIaml0f08Ru9AY34Hii1u2Hl24LBFrHDGwtk6aIkrB2oTq1WR5tFspDDjxyu1Ga1QZm1WYhSlQMd2144jGcff5LxX0WdOtIKLCBrhwff2W%2BXebAxkVOXm2yL7JlAWHoenkUG0R7gYauJc%2B6P9ol1Q3xNlzYHJLUe%2BwvqubbvmMXIfa9YqdbqVXG0DwoiGKUpMOFD70MBYZAsL4mURAIt7J5flzbpHvwIPckVokTMisIYdB%2FW4Yuggq6XB1hTH9dnpEx2fqXKeGYqsGG0VRtQzE%2BdaFdXLoLuEdGW1Ydn05TZvY%2FJRRv7k7UrC1SgOLXcgS8UHuJLsl67dc6YSMy6RU%2F8rzfPY040OQO9emcTH35jD4LWaaHxukjyx2flVrIfG2pCsDgyCc%2FUDWkHnqHFjSTzxVo0O%2BIvG52pQms8%2BGzUJXJLrYtsaXX6cwxOjEyQY6pgE%2F%2FxbAepsfz7pPlAKBbLiK9cWm7v8mCtxf9lh9P8df4tt8bBci4HxoZqhmTb2eA%2FOgLb8HtYeK7MGo9cbZRRIWP87NBLl%2BE3VH%2F1py6FmIT0yrYhMpbU36FN25h0NnEsfu9DYskwkBdrnFqMkDJOn88Yjqnluv57b9CvE2Xrk670jDif%2F%2Buq4NaX8Z0aaWb8X6aHuan3yCbY07Wk2Yd%2BnSLAd%2FJbZa&X-Amz-Signature=6f87d7d25357df4b8a05addbf810b8c3c82ebe7dc1cf44fe02f4e1061ea97b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


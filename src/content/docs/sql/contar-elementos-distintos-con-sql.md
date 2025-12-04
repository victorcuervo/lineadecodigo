---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
slug: /sql/contar-elementos-distintos-con-sql/
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QYOXC6Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDE2NthNCvASLtVIaWfSa1Hz5zSBu0lGq%2Fbho3GJZd%2BAiEAmT3iqhom2HluR9G4%2FPXD0%2FOHMpsn2HlrS39ZLZKm98oq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFaDtbjsbU64oqbMUCrcA5VfqhpsCp5dLzn%2BaFLKoIHjVinK6fRKo%2B%2BRS2Gni393VW1nYIBSbRi96mwGiTLpfrtdvBZWV6OR7DI4NF0L7TtlMXR1xDdJoFv4R3YLgemezJYemqLdy50sFvrfKSZHy5G9qCIlYmJxFgI4xbFcn69EgxE9NC%2BOVl538R84ICXoOEwN0%2BA3VSLHP%2F3j8lPmzS3W3FmAjIUR7QnHLFfbtpmBUFBePI93RKp5DZTRWGli43VxOputNWqHKFfRFGh2%2FF1zZOJ42qjjMwTM3q1AbKyn7UjCUejb9na7h6JezF21xVpWszlor1sLPFdh9DQZbPkLbB1Weizm87UvKzRC7krzmX5MbuhtG3lFCYy90HwG7FJR1ZOHgeGzl9Yd0%2FT551ydqn1eb%2BWxC2gO8bhjUALuixvDG7CFBcOBpn9hM37V1vNl7UB6lalw6O0caBMCOBB%2FVGoO4dGXwU0Tw%2BoWPIzalj2OwGgrvjDgZLIW1gdBHLPpjlmISPa3elrLvOjBYJoeW2fxfQXhEJyZf8VVRQ6vbq1cnkH0Uen9%2B4oivM1xs5dS8pp63rgNfvT8ZyDV4mU3VpZ%2B2fMWedyH0NXC2fZJVQ6LXQHzDGN0stAoFaDbiGYU6IAOkvA7%2BKalMN6MyMkGOqUBXWEvG0M4piHcupLX8b1p00c0EqQZNe%2FWDETqVZGfA9Pji21ZFeFUbGqXThbiX6I1m%2BYqsRQlMfB3aLqRiEutz25VMYUYzzU7oda7YEaTopRtTM9H0TJAWzCaKY%2BGSI2t880XdN1ozeU3AwuplyDHJUUSwCnvxrhGYR%2BkAA%2FJUIplV3LVkoXmi5Ocro4S4QyC3aQPwJunSMm0Z9AxBZGV2ohD1Fr9&X-Amz-Signature=062a838e396c0041ac8447f05586c49e560926432e7bc0661ac9fa0e24d2760e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


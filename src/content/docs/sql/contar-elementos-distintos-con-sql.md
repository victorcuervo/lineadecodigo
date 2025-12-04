---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVGRLRGY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHTpzYeKW9c24UX4kwa0HWMQysHJLc8WaZAiM55AyvgtAiAcypKWMOPiv8fdUYjUJ1L5g1g5yp3dFTcp6bj3Nm%2FyWir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMzY5qIXb4kY%2FJJz6%2BKtwDTIvW3WNQqb6YE%2FgJZNSvabaVhHaUPCw%2FkYquBA7mB6nNKUN63ewi21R%2FyQczYNxP9%2BMPxcIzb7EILbuSv8VaQ5aA1uYT30aAcCZI%2BMghXblJYbcRyFyg0q3uqCRwk4h5TOCiaV4P5oF2J8D9ij0%2FpAfVF3tXj6S%2FDaszREcKP7HwhrLt%2BkfytLJXIi5hhzIUMpfIHz8dcd7y0wcXPwtMWWOXdn9n0ul4q%2BitWaGZs5zrnN9nMXayqQD3Aetgw0QjyCwpdwH8E8bkNeivYBkus9P2d29SEXBCmMLnCWE4uGn%2BbfiOf0z%2FJhRsRTAXsGDFRO8ChBMJryPgn35BQUKoP3%2BOUTI6Bs%2B5dQUj6k2JLbH6tW%2BfF%2Fyw%2BvM%2BzmsjcussqvuZhhL3DwTX1Oxtf5BRwvOmn4%2BG2BB9MjDMQ7epSbAdW6Ms0ZhF6m1iYdOGUI7dVa%2FkJWbcSshruu3TN7fIAUDmKD20LLNeWyCy3KqUO7eFdlZ5l5bykDaGjdpE618GvLBacptqUXTlwyPx4xL0aIMip3I8jJj3z5bFgx8JTlah1u7ptDqhTHA3K6LUT1b3lz1W73BMJWtaZyqjrGacnrhg2b7LFuvwoE%2FmjZpmBHSBFJUZb2Xx7%2BJebHwwuLXDyQY6pgF03o5TE76sFvPUHARJB%2B7dlU3SHfy44mV9XU7ikQQiES4lH7Qui4r%2BY1ySZu2ddnCOXqNqjzdadn%2FxAbwTzGO3WNfp2W%2BlXnW9tQaZGqAA8E2CbE%2BF%2FFoe7ArjgRKO42S0vXJoy0pP4StkTCVSYDtJLp10%2FVwkVSYwMGzX4bqyPYqHWMc6ni%2FITobU8lAtWU9OPtpr31rnkCoWSJ3Fb2uZclYR4Gwe&X-Amz-Signature=4aa4e53e33bab668f25fcd8f58183744662274915c7a1b2a32d2c74aa772fa57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


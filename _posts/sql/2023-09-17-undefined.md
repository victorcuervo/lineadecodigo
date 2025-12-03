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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVBUIRSX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDqWaMRt3GujRiPmRBOsjdt11Av%2BVIaiGbv582DuowYbwIhALvzyH%2B2qGCxQI2MKrekJghFQ4WndQXzoKgoE%2BoPX%2BTWKv8DCCcQABoMNjM3NDIzMTgzODA1IgxhQY3vz4tbVWbNaNAq3APgbgwCqmUYL6W%2BZSF9Qb61fWeGb3gIPQyTh2QDy7IZPCp11TP4lI71hRYXkVKf4kfderyJdniDbJGZ9gRz0IYgVvAdfJKBuqfyhg%2F3jkF6yRxDYZEcb73mFdoe2WRvEH5c1pTgWj37m6gY%2BKz%2F8N1wigCZIlu%2BwDfzDJt7aszC9LeLQNCXUmYgitu%2FiFQOqViF%2F8ela%2BwR26tqbfHOVx9Z3bCN85%2FaHQxv5yZXqmrG%2Bt4A4zZbtGeNFoOYhjHZXwFw4cdKg2sVU3RB%2BkXjxAwdsQ7hCbjqer58k2AX4Bu7GYZsfulqx0z726SMw604eBebNfy68McqzeXW6xnR1x05DFT9DAsfwHQlNg67T%2BF29SjWIZDSeepPaRjBaLa43BI4tb6UKnGFbykOGB9fczsgvq3osyAs8mA9lhHhfG%2Bk0Dz%2BoVMSF72zYO%2FfvHslPtYMnn8lSzxkZOYYw%2F62YqROTXCuTtYqKd5vOkge42orjneIe4gDgHpsCf2yIz%2F7P4WcD%2B7JTOEv%2FR5mzkWZ%2BtGtf5zvYyvr4ug0M1Y01UYFHKoHnCcIJqkXZaiJJ1gnm9scF1ioSwIHSKs4TYk7HsYuX1Z2AfcBmawQ6n2SDGmkc03qZBnyjeCl7nqHrTDmmr%2FJBjqkAb%2FhByzLGIy634i3yPJmtXXxUGhVBizeDFHCDMKB3z%2BEpJxtQ4LbhVoP6FSlqmARh5Zti39cKKZfUv1Nd%2BvCDwwy1o2VoNzfFW6rA27qNifeohVZHyQJGZdPna4tcHRA09TXT8EoKVqRol42UlZxCScM1b4xEVTDzK22RpH2seDO3L5RlsEQ%2BHRulU2%2BNvhE1LWCS7A6O8OJ8hvKkTtXyFLCvPt3&X-Amz-Signature=a5e9a536b4f45b150d822248d312b4ffe39d45f2c5e2926992affb4a03215378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


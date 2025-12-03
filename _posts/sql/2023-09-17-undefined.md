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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBJZWH7X%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2F%2FwAphrhts17IhFvp9l%2B%2B3MP%2F4EB49yzOJ%2FjRV9OjtAIhAPlLRoZP7k6jhIPkYChcVNhSRHoxsfmV47Dj%2Brh7V58%2BKv8DCCEQABoMNjM3NDIzMTgzODA1IgwJFDvAzJCIzx6wgDAq3AO%2BGhZFtHkD%2FoBLapQDHv9kVU3mmYEZNOpYN15OsPhStJx7oCZNruc%2BOuMNEaq1aLZpe%2FwXVZ984qwcbf2uwFVyYgzILJfZ46FID1VUBUBnjzb9yjwNA31LaN32K4sAyDZ1ank1FB11tERtqqsJW%2FTBRjTCU0NLWRK6tIqyIOpGuhBTEENeJe19%2BiHlky92QmDPYrZ0F2B5KijrJ3PT3WOcmWZtg3MVMcERARTJmMX%2FI%2FPVVrbdEzLM0zktUX5f6KnfFa0OcThqKxwPc2zd6VLWz%2FyxHZn78kHydo%2Bh7R8BtI0i5xDWBDCgqP37Y8xxO5SAT%2BkG49X0b1Kpg8I7M4kTp%2F0tNtdAi1PIu5YDJP0FfpA5qmBQWdsSwG6qBF2y7f60IZkvJk%2FwMIxh%2FqaDBk6a7wRCr0ss9xSuub8o%2BmDUfYo3BVEgoT5kbht9yICL%2BDKEfCV0SncVi%2BRqfHPDR9TAAzyoRNA4epKqpZyFlwhkI%2Fd9l2HT0h7G9IIswDaEI7puj68R%2F7CWgUuX%2FXwCAcXZOdTu%2F%2BM1l6ToIdrEnNYsEza%2BKHM%2BYvbeWeLidSJjeY0F9s%2BNr5S%2FbVfLLN9KoXSByyW4R8wP4snsZgbIAiZAHQ%2BdlcMhCfK7IIj%2BaDC1%2F73JBjqkAQtg4XSqFxmHgSZ7gt%2BivDUslqip1iUbllZlmFidPPLKFcWMhP%2Bs5dD%2FELN0d6oHq%2BlKyZcI%2Bf%2F%2BOxfsnKb4ssjzvOrjO%2FTWcf8KViaB9LRCe0DkyLg7Y%2FugfIpJ3hcE%2Bn6rlRo6rk1zH3WXun2eUfeWGDnW9gukeRI9FaPGUB8Cv%2B442ehUwtU0UCcBVLiFlfASiDNiFRkoccYmGJBIS3tV9EzG&X-Amz-Signature=71a3c2ac68514f76c83a5eb534e9a41c52ecd6f3b52b1a872a80dde6c12ed985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


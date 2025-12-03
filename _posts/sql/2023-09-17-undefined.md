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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ISU2X2Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEa0OT1iQp%2F3cpit4dcI4jE7deHJ11DLmWpEjlL0%2B6xRAiEAs423gy4G76E5SIGM7LSrJerT6RUi1gVKugcQBsD7S%2FIq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDKo%2B%2BBIc0AqbRuO%2BOyrcAyHfcU0Dmul5S2i7DBJ8S6A%2BnBQYo5cMcstVQs%2B622jgCnLr3fSIYiQa0NQM3whrxxa%2BNoOTF%2BcM%2BhPv2Tvi1keDLhwmQ%2BJJ57TYGaGtscAVKaFBYrqzuRNvu7ADIP4LYxDuCCdlSrcu%2BfHOWh6EE%2BdNidbumQckGxCJDFxWIp9MTR1Vx4xoIo%2FI9sVd1T%2Fsn0N9ZvKpKLgbmTmYLrI%2FDFkSVRtIODV5tdNUYDUMJNYAPAyUK6euW52rvKqvlWPJZHbdQHqs0GGFEsp7OYhF0B07LRQjwKlllL2Ihq6gOWU%2BR29hvRwyQ%2Bm4TER%2FR%2F3DV9Usy5RJZakgPXb6M1vY71oUneTsHpLJr%2BiMDjbYASCRZazkgPoqGMQlr4tU9rldnkj5ZExQGVBoqEWQ2knkAXLXpaa8DOoxHMBhm%2BfE3KPx36VRnQADlEF%2FjANfiCGBO06qNBNSEq4%2BNkgCBojTByBkzyum6Wmbd3qnJg22PouEfoTooCqndCy0x%2BfhKCqkYr9h%2F%2FOG3LXvqLvjSvaXbaZYNwoYVenbunClgJ%2FGCP8zO4ASHZoJL1akDYDn8i42DXfQiC32dWp7jxFwqha80IMDnLWi8aXQF74bewLACMasgY8filMKmYvfhJ1FMOClwckGOqUBq%2FEruAAagSV80x%2BdGTbGVUxKqkj4T5gmTnQg9tp0Yt1erp%2BDhhyGNmliSxTzPAJNvJFv7P1CTyEaIP61M7vs8A4%2F7UNSUHdlJwJtlYSQqnjUhR6MuAV3r6ZJmMiiEeJ6035RZD1LVDQb%2B5OG0BNNrhc%2BUzXwmZm%2BQDBCxSyLc0Q%2BEruLSQr352cdNPlM%2B0zN7CBoasOfWwTCqctJpVbupEZi2wXb&X-Amz-Signature=0dd35ea7eab56291af00ab5298e28add8e15fe7def7a29792783b5de096b27b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


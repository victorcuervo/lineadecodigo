---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUM65FFL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCQ0idqM55jwhlmvaucZbc5fMjC0%2F0fCV7cC4LK%2Bp9UkQIhAN4yd18%2FaT5ySgs%2Bi3nv4%2Fl4XYPhUc54kgHOaooEp7JWKv8DCDoQABoMNjM3NDIzMTgzODA1Igy06stwTBBrvJlvn2Iq3AP9TrQ94kDN1mf0%2F5P91FooreEpVpB8gsbxiKPlKlXxTszF9pF2MLTlNNnOqmw1x4mCQq5eSgIWotxqrJ7OCvpC5kd2pFh8xnG5Ew4UwceoylVkAZP8vsm%2Fe4RpuUfSd2Cmpc15WY82hg7SUIZf1%2BY31x0qgOjOqSvmkOdhzn33ECrwnjrbTnTOwIaiQuGjo6H4XPEjaQAisskJoydcoSruHSY2wLFQSVJeD4JhANq0GBxXlUEEJCDB2H3lCiNiC%2Bbz%2Bd24XbpBHXJHRItMQ3a0qnNxBMtAuWK7lKFOy4K2%2Fxm7jqGToL5sPva%2Fg987fyPlbbp%2FoSVJvZR8V5yZ26bKMwzRYQhvyC6564lqQU2H5x%2BeBJTMB%2BVMD6afux8MQvtFvfG6DlODbZpdmNvCaJJn%2B%2FV4YxYzMcYsrNilwIN%2FKd3Rr18gWQkSBTiM5fJqrvhXWhQGqgVl2nNkQRnjxsSx7oFekqCgs0BgQnAVjat3RTOe0TkbfqK47x5AZ5UEyKSwQ%2BvvOel0c94OTCFiz5b%2FY2bVklU9%2FuicM1OiX7uo3oPX48B1q73Wyoa4nn1Z9Mmu%2Fdh7n5ytkSjwPjZV%2FVU4N2vKilHrhUTh3%2BvA4mkRD3ZRVxIiSaL5Fhz%2FlzDmtMPJBjqkAQymGHm27wYYhF5LULlme5jpSBcu%2BcQv8nAHTHpYSQjhEcbNDcxm%2FuUzXgV0ROIh9WV6WFDjOF8y1%2BTlwfSiBirYAnOOizmiTuFSJGf2VBiDbVEKUCgG9ZC0g4oURJvZNQRhtww5Ryt6sjmQJbwxN4Bx%2BLXhjwddRzFgxhAuEak8hkzgjDI37MBbn21X%2B0UIZsvn6Rox%2FPUy2MBUjl2ILRnbd%2B0s&X-Amz-Signature=2699215b17f91d748912e7787154ea7f2ddf1a55350d7b85d89cfb9b013532f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


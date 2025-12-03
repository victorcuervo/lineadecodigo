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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPLPL66E%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAqHae9ITwIHgVHPH1fJuhxIQ%2FLpkmHGZBxB7QujFv2hAiEAm7JAsgbo42V3MJhJV0tPjOV2RigsETY0iT627Eb9qYYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDW9oY4C7c6jGNfiZircA%2B78E%2BCiIk8Z%2BewrYdOGGDWK9jqFF915uO%2B0seR%2BRMyir3LH0748isXS1ngrcfcfvMdGow8dlJCfwSoPObE6gFKCJvWidAvr8QvQiVb%2FaP4jSHDBB%2BY8LwC6q0ugerXXqpODIWt0KgkggQF7U8%2FskAWcnGv4bb%2BoKr6OBZRwRPFUR3SG5djkSAgHi9QI9m4tl4hxfLfCV%2FZIL%2B%2F55lNLVJhmyi1%2BlJUd2B7O9sewyOUOK6i7xRU2%2BFzKFgwG7t%2F1O1fimFC1cqpyASSz3h2ZSWpC6n04swYtK04r%2BKmJBIycGAD4ChTVWAcLmGPQm8f7OKNAPHPOxsll7q4ILek86i%2FAk8%2FVfO1vZnoPe430ZJfcaIDsE8rARebkR4Xy4ggOHqXBsKVbJPJv9ZnHFj74TAsSGK%2BYdBCmPaXxOPmM7O4D9Iq9Ux2QM03eSfRvP8bI5S6TBtytKnRH%2BdH7WwMO1qLSbsX%2FKhLkoPcQ2T60HlcIaglRoFqrVEwsbdsSRemUaAKQWrIL7e4EwzMFOcd2%2FlOoKHN70iwC8ALTpW81wHNdCP7Oui8MtwgosmzL%2FTEdBxgS63C00JQI1mYs%2BZRyzsyKYOvJPUl5C8p7XjjUqOr3CqPG%2FnL7SOKJTwWvMIKWvskGOqUBn6TXACJTLJgmaZ771TpW4pA9q2D2WFkegy0BSSSU00cenU9hHTvDMC9eoZUIpLcUMRQNX6NOWMI0YEmwT5He%2FoO7ZMtZ3eVa2qGg%2BDezNFp3S%2FIC49MJqjCRvft2wvYuAEQro0g61zA%2FXx4O%2FQKR1eAL9epJzUBorPaIzuC4PT4mNUFOFezJWAzkSgBT3W2h%2BOGnT%2FLqq%2BCD30qgtYjpY6h0HyZ%2B&X-Amz-Signature=9bb4125a3d188839ec5ddc3c379800960343c22268d67a0c915d21f224f97abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


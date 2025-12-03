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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVZ5UA6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCKdTfbgBVdzcvm6DwEg6N4fKqFkZ6%2FaBlIBDU2GQVTuAIhAMOrR9KrVBW1STQ50PwjF%2B%2F3m29fUIghALEaKp1L7MyIKv8DCDIQABoMNjM3NDIzMTgzODA1Igx4R5lvyDfa4BzxrJoq3AO9wS1Qsp%2Bd7GVIE9D%2FlCV0BnEciuMmqNvT1pvevlMc6KutcycNBeYUZ%2FwhwhitEWPkNmipGgXd51%2F5ZD%2FKrEL3GgyFcByUTbJH0u94Q5IWAx4E3SBZGu7v%2FELETPfycgq4ekAnD8WaXpY%2BUb4tEQ2%2Brkr4i0BE5dVJGwBYbVhE6J0MIEOmsO5NJbrSsVBc5P4fOTdMuAIViQ3wlkjPxnxsj415uZO2PeYRMADp7iWjGvvva52iRL30cz71uJ9kyR97H6VlOaRPu2IReXSNlO5Iv6Ze5qMoesoHKyFWLLXdP5LH%2FBus3%2FdF3Ol%2BkWImqRdVzRKkHLJcwO4OqcjFzKU4C02PTfKmQaClKzrDgDoaqjpA%2BzPPq9WH225qfwEHuKxKIQLFkzBv6CVK00ugk7sx4%2FcCNMhjojkmzi8QYx4eb%2F31eTrzJFVoMRpq3%2FOHHclxmTUOGGZA3mz5qzJ8awOR69y%2BZtnZIDLnl3jTkm3%2FhSMcJr43JuWsfGu6JPDcXbIbvXg%2F772Ne4ZaPmZud6SxD9bgnF0PAZfH9tQNbngPuF5YFKIWIKXB%2FXp3mDf4yoI%2BjinotYsVzL%2FIIKOprSDJhOxoFMqQBum7UjWAEWnG7IJRm2MdLeFYHjp3WjCY2sHJBjqkAZMlwhlSPS3m1aW%2BvQ4VwQ8zd8m2KMKVUyGPkYLHAalhLaM1n%2BzOezr6bTt1c3NDb%2FMfLQuKMNnvS57BKN1cr2b3FNcoBAQcLhqo9Ehdwz0KZ43%2F89VqpJYktejW%2FcjSmaUkaBrJlH20ngvnyT3CK4yKAjWU9cofaIQKDI93oqA5cAUz3WKxBjwr9sY1MKNGnSLsC%2B14LwKLAcgfo4swtQ2XptG1&X-Amz-Signature=04ab307a8fde1e00a591c1650481733639b4e4947b75e2bc5feace36454d8874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


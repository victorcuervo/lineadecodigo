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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSPSGOK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFmofwiuQAC6D8jRriXGBpgr%2BszIJVM8pED40lEbRR2HAiEA8kcMtFT%2BXB8mTfhjrCWcgOBCvFKS4jjK08XGFKlabT8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFZ7RFTpN33DkU5s2ircA7qFJPBF%2FbRXm6nZcV4o5EhopFFGk8aBg%2FoA4aD1A5x70wWoFfAj2hMCOQxR2waf2eltHHzUaR5Mw6jHN0fVp8krrunuBCpLIPbPDEshFICzM5O7pNknsbSt77QBNp8NOx7OeIchiFgfM9jjMVUts14yqexfVId3Ic160ge1wWTAXKkrk6ijZk8PtcyKwXaGh7F9ajGRQLjeauEb%2FN5SMDIPLMZRyd0uj%2FUtxuAFcGXbDzSg5wC%2BJoaGd2DvCCeJae9JJZStSNCETKfCG7J8fGIIg7PxudwmGr%2BPb%2Fdxi6agLHdc0pslr%2FIHuZB3T6tBycVsTlrIVrNd77Wtuk5g0YWKn4E9S26IkMTNvNtAYFqKajXli381jFvQzMwRjfAEW2v07wtmWRHpfYwB8raPnih4zl1hODN56DvEZzY5VOBu5ZFYYt%2FRpgsQ8rQLQLYQSzuqtPE%2Fge%2Byvy%2BPdHMYM3gyRRWNY4fsyuo0luiAyIQMfQ5CUsECxTEw7u6tR3dK6O%2FsD7taUdc5p3T1E9i0%2FWMHOFfcvBrS0RiphjCsPJEtbwS62mCFat90qlM%2FlfT5NzUxH%2B9bCrIwNvYBMv1H7sZpNDi%2F8Etu06XxV2AePFWb1QLY6f5VhVqLuggCMNeWvskGOqUBd7P6VtviBvvAU3yPD4NbPzh%2BXr%2FcrylN8VVTXkZiii6hK4byUfOpaMh7fcwfcZJNGtuy9Jr0%2Bih4LcZJsvTnCp0q15SHbU3ELqVXtYhWxF1mSvdLYMImoBkEx3mZgSYEGHaK%2F4cQcmwD4JmWbR5lks6OefIcOvZ69aeYqU3Io6Ir2Yvyf1mmWHVdSEnsEd0IY0QXKC%2F14Adqh513ruq7%2BRjlqQKa&X-Amz-Signature=c3c52de53b23644322ef3b0c81c4ee7b22349474282d862b23949171dd25fb20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


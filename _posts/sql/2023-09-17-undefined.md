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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZMXZE33%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIAYKyMkR8gxrhq%2FK5HT5KF81NdHGMhV3zo%2FIYITdGGWDAiEAnUvlB7NHUzkNbr%2FBPid2jrGNuT9Z5dSweWMkAxlDtNYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDLJiUU6W785Eqe1J4SrcAzyDvmTV67rwWD%2F4GInlDDnI%2BiSJFSNn3I%2FIUUc19CIYILcy1P78i1oJVJ7UPOLGxSMFYidNJiG7%2B5xSsCslno4fhjk%2BI%2Bv2WTmLg4RuQdJJtvV40noSkt41XFR39L7EjSSj7dawqCOpgbkBZH4gst5IuNgRJAL%2F%2FYnTHz6LPZk2Zx9tZxtWbbC%2B3M1CZ5sUd3Z4ZkIfVl82vtJsfCYYeju6y73QJShctGqp9VL7l2b7QAGTlcsg7ImeLSkcWIb2gOmzbQ3ZB%2F2GwSoqD%2B2FeRURt7%2BXbc7V5nbeO3xfQxydIMGNEMJtI5B1bFGkwDNARNExUqS%2B6ZFR8srQSAHI5AfI%2Be7pDBdcPP5wUncLkJQvgaELp6S8GPd1rxA9Mwc0PXoFqPYaf1A1FZu2lFSsDGyKT2IbiGt0bfOomt6ls8w8iwYp9WL%2Fz2K73EIE9Q9ox3ZAy1dOrZ%2Fv%2FQIvyAmXUTarF%2F1EJymDihHit8TVG0z9y7daxrWigdGGlqeiGxzQv5p4rIuy6opPzo1eiST%2FoZCLxcPMkXV6hVlyU61qW5ZhyyMX2io7LNeloQWAZo3R02bYpNuB2LZ1w9ihjcR%2BkR8Mdtq2aCoQvv0kUGLUOTL9VuT3ZPgGe9nolaM%2BMMzlvckGOqUB9sGaScXEFjK9t2gmoHNuXyAYGsQbZvOnjj6oBNDQrfNG4TsTzoLyLgq%2BSlBmf5rPKHpdaCSYLNb3L7pUpAipQ%2BEB777QCickwuJW0iMSYvK4YelAoL6yxnbRvBwijWPE4W6JHg9Oz3y2p%2BvFPVsfWxIy0CkFem0KwbpD8l4XLQzCO1rx%2BDbj%2Be4IE7xmJEM%2F36Zex0gv4HdoL6PKMOZy%2Fbl8xYmS&X-Amz-Signature=9967f5336ed2b3aa862dd4b77800cebfdc6067a6f4805afa828ad945d219097a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K5XWPEP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDoing5XaP60ns%2F%2By5R%2BOkR171Ok7MFY5TX2l8dF4l4kQIgBGWLNsqKCJB4e0o%2BGrHCi%2BqpGiqXzixDpSJ%2BxVHTiNoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOl0OzfBrvo2dXgmeyrcA%2FnjCaVEuQHGe5RcxnE%2FwWPlHnpX37h256KvKQPkfgh4hso663jsBu5a%2F93mnfYAHDAKqdLOKUI%2FL1vs%2Ba1iMBX80F0mOkyUsvp3W%2FlLIDrRFUtcvU9msopYQvIuuyt3Fcup2E5VfSqnZ8HjgSfE5nkyb8kC1o1lt0%2BLvSuhJ3lES6c%2FhBg9lfhUrNax2KWO74LfNncMBO6gR319%2FMGNDtYJLEDN62x2NNeRoxBmjbhG0Fx0PToM94OWYbgv6N5%2Feo7%2Ft9gWB1P3VODxnfroOsKEgjY9paLk1EtRKhCYIyoozJc%2FKIxOh4CI0z8Jh8CzYou6tixRgaX0%2BFOLFjgmqnuzxk60d97f8svQNnQTDsXl02Rr1NukejOzCcCGqnTjjQQqR4XXD8LjjTRgD9U5G3BH2WibulWvNp0XjodmHoMMC5XgeeTffvBnZLyKp0YEDSW9nTHQrpYAHwtGnXIgyAsJ5bJwigaMy64bDahGYz0fEVW2VkMZNMf9Ei55Qegp%2BeYZBtXqdGgaVWXSvdptZyfzCnxObwIcRd7gymfWVGOtnBpohwKhd3%2BrMDU%2BzgC9kMAorlgKqfSDbOJDcUTYa06xlYmgal6lOCb5yh0LJg93qotlzDWtx%2B4gcPdOMIXNwMkGOqUBDIOizRP0i5ZwQ0l294VOiStOpkw6UPTQ8zKV5xvacflBr5nOYmNxrHxD0kSSJ5mFASRzWbpZC6gZy%2BgEsqC7YxgpcoLDgrRtDoViHzV7XpkDVGKet2FY6v2CtCtMlwG4AjTClN90w5Y076X7Tfc5PLIWRohmXzHNkVLVZwUOPTvkl0mLXFweRupF%2BE6OqUKA%2FzppKO2UJHCOA2NE1St7QpVE2BnI&X-Amz-Signature=b974550ca99520331807e017bc924fa8c0f118904591af77007d5545ed868715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSGFXEXK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCq%2BVecel%2BLV23jqEOFpmxoPUDERdvAy0gm3g1osFyt2wIgU1Ec%2Bmu5nvbumPEbp8GSgSz4dGqklt6Ga7%2B5IleQNPEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFOoHJM9ZlzPpX8NdCrcA%2Bgziy2YQNJDSVqhteWEz12Hbl2%2Fh5fIgxBFTyvrdDmlQD6R%2FCCPCU%2BFTSAC1exGt0P7%2BJtLSL7BX%2Fd9EWINi2luN6wNhxVFeDMh7MxEK95W%2F%2F3Dw%2BRv%2BOuQ%2FunooUxV0KsxK9CBDAuEZex5ghuLwpmWUntKh3ecjBzk%2FIaVEn%2F2GVtwuf6uFNKY2dv%2BQXi8sOYJJMSqnfPsTb94VXGqB7Q65X2VY3qZU83BZklUOJPZD02y6ViaxltqSscr0zYPRXgqCoq7uVYha%2BpEdKW7rTJue5kqI0xNYSQjq9%2FppVtV8%2FA3AyWnHRhUaCF3I4DPiYUeLZPw3Ga%2Bgh3N6d8yjSOWab2Yp1icgpuWkKqAmC3KxA1y08%2FgJfPrcM3PxtzhQ0vKfuf2ZDE1sHvkiKPCo6aRkNb7V5lEBEE3iyKLA6v%2FCjmhWF37vwa52ubyF9LvMMrEAYE%2FLhly%2FLLxuiCeWS1kTZ%2FEGjDMYRAF8gHli4bDEfRoT80lW9fjUlXynqH65gGbIOv5XcOhr4OTLFBSheke%2FDTWrwUqfUc8S3%2BOQq5JIav1lnZJURVVGdjre5cxnNT64HC3Uzpl12fWNyagHPs%2BsyqppLOpxQ7XgQOl97n0LumkAVJl4DPW0LpnML2SwMkGOqUBfWQfbHLe7SKK%2BCtmJBvlLTYoPEGTtyTJ5NSLS253ZuSbe7n1q9CPasSbYjyEDGr0CV9fjTCH0ATl4T60ubFfVUKuCPgJi6Wu%2BaL4NlLZ4Vvep4iwjyM7Q0rCGBH8fVZR4%2Fv0t0bgNOpG85xicefR3pXFRJJDG9p0e%2FZFy24fKHn%2FQu6YSclC1cTz9LtDT%2F3JV09YXvvcun3u3%2Fg%2FReZeuCbcMM6F&X-Amz-Signature=a47302c1b3f82879fb6d85c9234c83658a41e83d108981af801f8e2acab6ec15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


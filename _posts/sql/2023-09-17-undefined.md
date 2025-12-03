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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QESJTWJK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIE6Epg2uCUpNhBxWTpMVopvPaf%2BDmVm2Hj7Pq7Z%2Fe3RLAiEA1l22E8SMuePe5qt9gQMzp7opm%2BYSSe7AnxPmltjDGPMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJ4RXGaL5Vxb6Z027yrcA9hwLEGBna2%2BGxdR%2B6748Q3JAZmHLLEX9bSfF7s9kDN9kYbREkK1Vh871vkh9%2BM8fa1PIMB3TPf5%2BsxES%2BIlruxJHknl2EnoZQmqwDLCNwF62jmbVNhrdpVm45vMizBHvZnBKGIOY5FHqq5CMmWNWlhMLHxC%2FOss7XN623HAOes5IvvuI0kC%2FOGNHL89CipKGuV%2B5gBrrY45aeatvZicT%2BjMU05xN0Eea6M4KIPRra%2Fie6nIxgBW4tVKvuNZePnzsVgoxsAxI10ZFcsC2%2FdFFsrvE3oh7mYTeMuaibdD3XQwY2vm%2FY794f5OXKgRhSL7Y8oUftcZgtTz05XyKbVVQ2QSHs99VB0Jp4PmkfuudOUSb2WQJJgD3p3JBgSg%2FDx7uuyUrlzJwwYQiDU8IefNqiw0tUw9KjtK%2FIkqx7Jn2%2BEpkGUos9%2FdCBFcQfvsMIAjoRqsyUtmgBRyXZiA7EClfTlwC3P2iJmFV1WDwiVB%2FMzscvhTCwZrXkOTrPCQIspRnI1nTCQKCkHntjNs0ISLcjpXCwPNQkAKTa6XisYjqPiuQK0DwHevwUMSLC%2BbIDEA7VpTwOaODGC%2F%2FslEFudC%2BUfNHL2X7KGAtKps4niMQwjFJm1GiFNuEJRpaxK3MP%2FkvckGOqUB9HKYjPAv2NxsjXhE55ZzL2rwXvKlY0f4XPJLROXvC7twncXM2rCycsK%2FI3f24Ast559g4PLhOrOWbzmMWbPT%2FzZ72zvX7Vi2yMR%2B3hvqexitg9cWPOsH9Hko49o0ovaQrtd%2BcBxLKQEyLBkxyaJ5dsZ%2BIa2jepsN%2BC4f87%2BeuOuNUk7G6YveNofUx%2FvnPTTFGIigNr%2FFsDgG6kejfi6Qfz5bAXXo&X-Amz-Signature=bfd44a948ebfcafb29cab28031be694c253c254a2822001ecc92fcea311b0dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIVKI6AG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCntEjh7l408%2BzFpTADSS75ogbnN6LzHhkKaWbSUj60GAIhAMAtCvxfGlzGrMhyABCvblrIa4BmyXtxw%2Fbn%2Bd5BWBwwKv8DCCgQABoMNjM3NDIzMTgzODA1IgywoSBxZ9%2B8DUyyPsgq3AM7UBGYM0W8NfzCsdOlw3DiXyzsFamLgjgSZFVYB%2BEq5oHnLBBHsy3u6VZ4OveYUU4ereSf14va4x%2B%2FyeaVySxHEvIA9CFaAH3uxtQ0lZf8WBIcApJ9C7WXzoEhevR%2FecjTEDAPQyGR9Lolrj57k%2FG1mF9R6ydS7uAGt9QhzzXt%2BHQv2pR6KYIxoolUjtMrugIRoTOoRZdiRqD69WlCT%2FukHNEUQm4nTXtd%2BQqowxtw1utzKeTS58YHv0q4wVOPSike4kKEuBFtN792kjqlMqKavp7%2FyrnOQoy0%2BjYna5CCreRfEGcN5IuoIk2uDumpm%2FIhHGdrCt3t1ezi0hhjMiO7sMLO17y6zXmvmDZRmrm4GGkwxiY0RHYmTcwgSFEsG%2BFHGPru0a30YxR1pYSB6NtJqj1ym5rjqd8COW%2F7hgT9Jr8eaWyD98fo8oQqjPmAdpTjJU%2BI2draFtJFBYq%2F3ZQu6MUotzt6JQh%2BcKUzCv4p7p8U6SaejX7hKVqX3n%2Fc6hr%2F2BxNSx8uOaY9c30%2FiB1Y2q2EevZWihNKogv6fbXs70GUqfq8EfW%2F37SymPtF0Jn0u0%2B6IxmXbqqu%2Fvc2rCznK2nY0ikCKpwV6b4wKg3STeOKNrpZ%2FvpsD6OiADDRub%2FJBjqkAR3SJrgLxyZ8bbeB1lL8%2FOXanzvv2I8LuuSqL%2BX4FaiP8qq%2BSZgI2kJKH3wovV%2F3yzB%2FIBAZMduWBEesyyQibsMW%2BvMEGqPOOJJXvnYvBvY6AwHxMmpBvnsbyyBdRZ5e9R7M72%2FbdSv8CgbkznKvInwOrrnhedwe%2FpBC15RGXkWzD8xwN6rdlnj%2BGoXmNYZcj6rIAv8utsNhJ4TKowBHyuJYyE4U&X-Amz-Signature=f7921336ba713cd66194b8b02f0659000b80254d7b46ef063e96ab547bbdf3fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


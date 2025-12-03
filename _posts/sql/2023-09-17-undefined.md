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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5UAUYKH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCMfcoxWkOzA%2BoDYRCcJpd6TLgpWEXe1CcX4LF%2FxLuygwIhAJsWGKSMVOX1mOQ09b4rIkAHamUIVn5qE8hBWJueAR4AKv8DCCEQABoMNjM3NDIzMTgzODA1IgwFTm9RUIv1uYfZSksq3AMLOntVfvu0SBw55j7WyEzpYZGzSj7uSkGR0ifgnN7z2kjbOvbj80MLouu47ELMp%2BlfX9mo2mNX0szjuC0nNtmJKJX8%2FQAGdOJUz5L0o0KAD1LSYpVVr7IvlyNb6NHEcPTqBs6TPWApSgwlnzsE7LMSYKx0siWDi1Ix%2BycwgUnxnksw4cpK3eBKRolzAw1CNPKsdYxCSAMmMCmZe4N3uBLI6xPHxnuHqCIZTxD3NQTIvGAlT5uR5igw663VGoB05QdmqJiQB61hnJX7eJVrqd0i5J028efBIsBE4xgjpH7OWODiatOCfq41mDKdAxNTf2jPoag4M%2FUlUY087CwUqTTFSdPj8tZsgUA4KZdZE3B1EqXjc51Gc1Uo9yDW1HCw7IvkXYxZ%2BLUN%2B6bU5OCYylB%2FaNY1MCK6SKERl2T6JaUa%2FIJVnFuaIXI%2BIYJSS5iPsnVB25KrA6KcQEdSD6kbZqp2ITIWjRNLBiCHXZwpOcpLVELyGYmzF%2B%2BIFinBpldC7LCcXtWLvfwnKy9lAWMCQJ1u5fVPg2Bp7hPJFXddKFQu6JqPrKAsCH0m7IQzxTY3rI6zXXE8szlgRqDEw8GsOi1E3BfQ7sNwWYfdJWEvR%2B5%2BvmzKaI4m%2Fny1lI7abjCm%2F73JBjqkAdBBcor%2B%2FvMRDKMAI7OYzkQg3PagKM%2B97hSThcsvWQ%2FIcvqNGDnwGb7dmeRUUrkJ2rpr1u8p064w4PFIE6%2FFvsxbVxNRD0ehFZm5e05%2F0fUDQTMWR6L8wduFSkZoryfCznj4YkPMBKNf%2F2YSncc22W3j07xtcO9ceAAuhnFROkElnl0M5CXZkaX%2B%2BhckzChs6N%2FiIn6cWOw9ar1ptQ7YpI5b46E9&X-Amz-Signature=5a2e1b3dbd3455a2fdbad85954d9b437d51e05d3557d1878f6ce74f45520a723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


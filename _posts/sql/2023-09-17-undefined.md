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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJDLQLS3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC9jphYg%2FLxF%2FHJ7CoFfWdM%2B7tbgVQos0uf8n5yC6e3owIgZf6DLON0Y9XytdROUB9Dnw%2BiCxvGvkZzCxAnBjKqdr0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDONR1DuDnjCUtMlYWyrcA0sw7Gz3rw8H1PSpvAAIXega8%2BICDAJpe26Mh8HyI0PM%2FI2hMNGomx9aCMWTcYG8X7pXmUNTEjGt6voEBi63i%2F40DT4KkYrKGHgtHA%2BPE8h5O7zRAIL3tKVd64Vvr85fp8pEy05b%2BFgdkdeAMJK%2FCzt5%2BVzw9DO3Q4fuJCu8FtHiT6F247PF%2FKzKdIHBdPXLEkCg1pQvHHC%2Ft5itllxj3eI0qJ6h83ScRFsavPJSHbkYonxuOf8c6C%2B14iA0OawJVRo3SKP0BbLuNR%2FgyOASFS9zwExhZno%2BQcK7W6VGG%2BiVVOi%2B8Mh%2Ft%2BO%2BhAxaHOq%2BxvTvqpPJ%2BA6GBR8te%2FN7vgoXvGaiITdRerMIRJO1hxe0QDidVzPA%2BlPpkvon7uLOZPIG7Kw8Szo2SXnl8CIqHkyi86ugDUxKfDlIJZj0UPxnUBCvrEKluE0dDZiq4ytddcJy4H%2FJDo4x8CQ%2B0xMEkyVqIv2DhYFe%2BlXDW6CooDpgKJ3nJhuUb2QRTwe20DlwzV%2B7Hl1gW8kalt9yDs749tvqwxY2%2BLcmQg1VlUyXxj6a0CXkKYPp5DYxdKY3WKx1HBeuN5BeosgPereR3Nnpv9UqvWtUZN%2FTK4U4JgQHn0RdrmGkbXg8rq%2FLH2cKMMSHwckGOqUBCkzyArVKuxYgBW1NOZ0tfm3KqNq%2FYLSM1inhTBzR%2BpoJh6pkfdSZCHnoe3p20WDQ886fFTroScNfCtzfJQAeS1LRgBqZx3nIKHirkRxm0dKIQK4Fig%2F%2BI41B%2BxuOBLOJCjbffrbWuIZTJ928j7NJgJS%2BcdxbMsOa6V8ETstxMhign7ri9ETpi2PgAtK2rU2H9T%2Fqf8jlHI24gZidr71dRoOebLG6&X-Amz-Signature=debf355dcefc3d7c0de7485ba0b7a1d60a98bb3774bba36b834a2e0f5f5e59b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


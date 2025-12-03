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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PZKCS7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T111405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEAeSmaT013RaHLxGsjxYiRpW8NH65xjJ9bpcc%2BKTXFNAiByPZG30PNCi7BoXRCUhHt0olaj%2BUD8R2kqj0fOYmGNVCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMdMWqKkwLk3uh6qMlKtwDo0bDya93TI%2F9yKZYGvXH7zYLtqjk6HXtY%2BmD8z1uZWbHJFCT%2B%2BrdDG%2FdnLWQfXnCwv14OZ9HH70HFFVGbj0jw6vn%2Fh5pchZn83a8%2Fzohk2qWT9Dc0Xv7zTDQj8HDSZ%2FvRAx1k4pppt5NZxR8Raup5WURbw2O0D%2Fa0in44YHI3nG4TEUKJ6RVu6pwdHZin8xXD7lyZ0%2B5%2FhXft3LRhoqei%2FJlA7SM6BFvaML1UhWl%2B0Mx%2BmyBtnXDd7i1QkirL0FCsvyUbiatVvrTxHYwJ2kppP4LK37e3zQFmLieJTnPyAIUwHD1hYYzC2WetK6fWI%2FjsWY%2B4RvuAe9LWEqAB4wQfznNXhd6ULpPlp3%2BPVwncmY8TgrfbHPtFLX7ca3CPokr8ktpLvPHnkCrMm3YAGdouzny3ZRjqtKNEVQJDlg7O%2Bt3%2FpShrL8T2Fu41cMaaHAmo%2FnYa9dCcOHZXRviFMgcGuFM5jwY7TkKJhoccnFSXtkGcKAlRipgKMqDfwCnM4SW1SFiLtD6P%2Bfh7Oo0LTMxQtFAZn3M%2FMfPLbuiNZbmfWszmmsCnaSIFZ2LJLG7Fpf%2BM8PskDqVaeIjOGSKf3OSF4R714VDhV7q1nxN8GKss0Jc%2BdhZ1tDWGz7enNUw467AyQY6pgHO6Zw7jID3QogXcA5GCcMvKS5uxa0IQM19UWJaWWJNjSI49doqLy7nnxi19elY7wsFphqaZDHDPjbYfEbbhRH%2BcuOjMYF%2FD4mlKYFFYwY4a%2Fn%2BqCtYO%2FWuUYpGT3ixugbIoFQrYnBYcwGalOI29T15jX23Zf7%2BA%2Bk1scuZv34Z90dJHIA7ROXLuFQUx%2B3AEAs8FhG9R9luCN7fuBgNoTCDW9ru1hjm&X-Amz-Signature=d24557ed26ba6c063c4f324c3377a9cfce5f016794f599280d00b9c963f6dd72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


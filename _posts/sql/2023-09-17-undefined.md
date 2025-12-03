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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGOQPTKE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDHvVyecJJh75rpVsrwUJgMuewSKATmbReTUJh8sy3QlgIhAMpqNjQaW6PX4rLQnrD6695W0QhJlbLJnEjU8WFpRDs2Kv8DCCkQABoMNjM3NDIzMTgzODA1Igzb67po%2BJVVVmYWuioq3APPEi4oSLP866388ia0lRlqk2mMPhnp%2FSeRFmRp%2B63I9VJuH3CIvgW%2FLqxgdjy4rcDd4%2BSMMOvcXbYo%2FhBJ9AglZGOS6q90u0VPBRoWa9GiQK7ruYgnk9iCpGC%2Farbvj8p0H55TT3XGioeTcZmeN2HVZRlzwCLq%2FI%2BI6IBLiS4JGj4HPbGtBh0hBMf%2FlBPzjxm97VL%2FKlEi5JRi2RrA23IZ%2FG22PfCGGZFvidSfK%2BagbiSnQ4ZcEuKOewkz8RhEAlUr8qczmUKUBRiOPhIgOyFiGD09nTtOF4vEGdueqGj96%2BoHb6roejattXbXIeWa87HA6XmoG1K%2FeyrPl36pb2bqJz%2Ffsx3Y5G9Vr15e5ugPwzFUF1nYkcrX%2FByPiLb8KnxxP%2FpWfzEnt8ktDGF503rdPTU69wOxXYEW6ibrogy377A2%2F2sC5NaO6T1K0zSfkHhYLj%2BHA1fQtucf%2BkglThg%2B3t3NBi3g7zLp%2FBi5ezRChRFWp5Zgnsl9bUyRxGTVaaLVO2Gx0MxsnxxNfSL%2BspFMW3LUohxeFtu1aKhJ9MQSk7AnUlk8Ls8x4xT4JnofW%2BllgS1nsngPeA59GWvuwZkU0YBYRnq74t1WOgCeLXGtktNnaVdVeq9iC2u8rzDX1L%2FJBjqkAfrjzBafyTb5NDaA08l9V04j2M%2BvF6urvW1g5u%2FfOkvJt5OZfil1IlWmaP9J4LesJtqHP5u0elZOOx0r91H0gTp8ZajTjTHEMLEPGZGWniPBgBnRNsUeLQn3OxiwEDd88kv0q3pBJ1W5JazzNzVVWRoccqMr9MvuhpBe7taNRvLn11NsPJrpyhse5gLNorRjcIZ1pZIwOnBvuci9FML%2BLrGdnR8N&X-Amz-Signature=585ccd67e352454d51e91f252b72e7efe426f290408b1793faa353347f04f0b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


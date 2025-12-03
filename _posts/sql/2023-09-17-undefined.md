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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S577DNGL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDZiIbluIqcGRoyQGxQkjk1t%2B62i8jvhs984TJ8wNMuFQIhALqEr%2BcxwBCpDVaSs9XJhC7BOG2LJw4QWOjQ44Y%2BDf36Kv8DCCIQABoMNjM3NDIzMTgzODA1Igx7eTJLD0Zr0S1nX1Uq3AOZCUm4xJOgicJhStNG7ImvhCJ2gg7GvqHsO4XVKB4cVPbx8s9AV0tX9NUYmKJnTKRsnfBk1HgfZnHBSJ0zps09ORrWjyP93I0a%2Fv1TC9CJuZFrQpDOeSYFHJ3sSrjIDqqqzVbn6yn9YpBE6r49xj1p4AzVRSsxZd9Z3Ip2yNMHfdag%2FnL6k0OCIvvFXUd4xjWjDmywT699%2BPxXbSUPU93fk8i9SmRMkGn7BJHmR%2F0%2BnbrwalMqBkQYXbDEajrVkYk0UylZ%2FMbwtj5igoqct72KZQ9f8ikYnqjoqv5vnnIfD8%2FuWp5Bsg5eg884cpTt%2F1UK9r%2FfxJPKbliU0t%2FCMFM5N9TzQEUEqf52alsA0z7WkuknrNRYXYXoj%2Frr5pmFjahcNNILjZXa5hsQGyVfDmh43hRsgWhgyjsVDqZpelwsOw3285fG1Wn3wOvsSjl8GV2i%2BZ47EVsBeL6UfjWCp%2F%2BxqQN77ajb%2FVzfkYylET0UPlvYNMQW4tiK9q2%2BtgHjUhhmP0gilctKwkzcMqsdzNcf3GuDYHk7OXgJMQyTaQeiBa6LuRM%2FX2Vp1C%2B2O6Y9EaHrlPY09ydV%2B35NuQGTy2jO5ono35r2lz%2BCa3zOwIjHm0F3WbpkhJsTffnkVzDmlb7JBjqkAfXiQEIt0nRkSrKBOjffSAsD8Js2SVW%2Bul0tLH7sxLYPmjhMfa8FT08Vao6ETk67h%2BeTOX4p8ZPPzgN67KFi77Ez8xnFi%2Bv8qgm5gPFD4dF%2BkfT5xtv1c6EOgBOhhxFROodINB08aGc8P%2F0GRwb1EfAgNTCwUEAeKugY86zi2h2n5umtD7m8qtDLrU%2Bed9mnh4veya2cJosKBjQDqUA3YQBCtGIq&X-Amz-Signature=8e0a047a83e08e0e6a08cc65629d4678a5a40cf685f2442a5b2bd9a3057de64d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


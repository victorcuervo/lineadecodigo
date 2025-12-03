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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKXC5GYW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC3Frb9okkMzdoDOLgnzcXGgciGkyONtqgIhAXfMP0jPwIhAP1XItad30fga5VNHTOZgTTwlM0X%2FUCnj%2F2MnqPUlHp%2BKv8DCCcQABoMNjM3NDIzMTgzODA1Igy9s1FlLQ914xj%2Byt4q3AOUcaZ3SQSxMc6MM%2B5r%2BiHgnaHoFClKBwR9CRmZTIVdsxJp2O%2BEFaNcaHLb6%2FaQekpDp5tQIh0hi4ebWbPEeb1WW4sp7S5begtFQLMpYIqwPNFHiDqrDkMNqkq%2F9fFRQPN31sxEm5gPJMuqKzjiEYoWvX%2BTrb85l4rp39LiRhZjzZVuXrOKOcpPvK77H%2FIPN1MNDvU3IfC6EK9m0XX0YEWjP1rmLJ%2B7EB3njXocxpWEm7SDCjm2VxQ6Eul5XLQdfuerVlQdHgWQFcyYMs0kyuAI6YCJAF0XXm9C3lp%2BntlJYfL04vmOzNbxN4qinWUffqxC9T2Uxwb85oENkEA2DcK3rIA8oQ56dKj3DYPuILlK%2BZN9nOwq4Cq%2FXUKYvItsDR3O%2B7kkSpA5X2pYt0vEYVktwDw%2FKRrw0Z0Tt5bo6UP5uYYx%2B6BIt3NNseUAtqRCdvHxWs4SdQimJayFeYUlaiLFXAGeAhInz446ozQZn0dllHyqersCf5KJx%2Be67ucj%2BW982uKzjNCEiS%2F6KPkU9unKrApNxZCY1B%2FmZnL73y0QFXianHnaNLDEQaHnX6nvZa9KNjrKhLk%2BqU3UODS%2FpHtJtBP%2B6qxpXHKl0%2FSYToZRy9dM84TXc9CG3gaaLzCQmr%2FJBjqkAVKSAGt2Z0KnBtjJbl0PZ6loFz2vJNxUPm4oSLN6rW9ElKbeBwp0v96eceLIqTn5oRPldNxFRGnZBFc336aw4towY%2BJyPVPwtXHa5YUIrS4TIo9e4x5erqSnkRl%2BvNes5o4y9PwVbOMWG76HAgfy%2BgHXXdqUwnnR1Q3dorUY05bhx%2BnCuh451GJ6tYxggWcMjKGZOfsCbHs8oqefEv1f1fOPVAvm&X-Amz-Signature=83a23ef102e5f9e32a901944d744630440f2b1176bd1eb165456dbda69f1ed90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


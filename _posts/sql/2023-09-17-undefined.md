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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECJVKV3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD2X2O5d93E4HUgBP8cWxqLKYKjhIZAcd8IXrwIh1%2FoSwIgDD%2FbY918n6XGBrMNw5UrShEbLi2%2BWcHWUWFAwD%2BuZOAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFxqmyBL4pomPpIVkCrcA9rn03jBSWWDlUoivu05t5L5uIu3jJpQ3wt8qw%2BQy5rZbJ2fhprR%2B2r18CONJA3i%2BMtMIpdZ%2F80zTYhvHr8ZZvjUsL3wuupGAVWQ2zv%2F2L%2BHTMvWzAx9rjKQN8lUErMEy9mVJ%2FTmjJI2Mp58xZqYrSg4Lc2Vfe%2F4ULzDlh1mbszO8UMxkCLJyNThzk5VyWH0v%2FLf5OySYOmpqBwH%2FXqUOE9vNVA1b2kL%2FlcBg1rDM2REnP%2Bl%2FdT9E6rcOqdFJ9U90yl917JhtWOOu2ouaOkyvAp4p1dblVarir2KLXmjK78V%2B4QRGTqvCQQwH8%2FaFpj9mW0nD9W8s%2FLDQI9mv7w0PPHA8SQuLYngPgRb4CF2voe%2BxphL80IDa55ns8PFtgfAwjOboqCIbOpy%2Fs8KGNp8Y9iSRgANu3ti1iDMwJY%2B9xLemwN416mF0h2GumdR3uVWpftM0HSoh22ZNh0LWElnN8EbRrh9lg5fYaxxm9D0PQJCcAiXA%2BlRcYy4aiJ9GdMakoz%2BJm7U%2BWGSFF9K%2FoFQVjWv5sQq3cD9L3pIEWCeKsnjfHl7ZQa%2BqZAJwraIT3qUMreytHeLROD7QPeOKqgfeBBqvC96iM6eKNNwnUYwDcNEN35Gj%2Bf7Lb%2BoEgZLMMLMwMkGOqUB8WVcd18S8ua1QKMxhDlmDWZHdB8D1P4KGc9zmzx80PnqBCf73Xd%2FOeCkpj6weRmvxBrlGedmz14OM8%2Bo7fueoz0b49tQl9D5i506GuP3rw5DbzTANrb8NIt518kOOMjJyAuwxUW79NTQaLqS0yUxDatZjXr%2BkelSLdQ8HhFQqclpqO%2FAL6VJdpDLhsraMkbhefcq7EWtKnR6El%2BKZVZSSyH7iUgh&X-Amz-Signature=59529da4985ba6fac29b768e3711ff55eaddfb8e7fa01e8bd15be2e4559064d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


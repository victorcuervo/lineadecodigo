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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQNQFUKB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGPWa7eGJjcgQdBs%2BwnPLE%2BEriOTtITGn4J3HEXVzov7AiBLDk3JpR%2FIy9MB3zdbDZxUAS4ADp6Jeu7q8aOdBslAgir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMyDbtbiTmpbJNPGiLKtwD9joy%2F0J2Ls5on%2F5pZUWFt6%2BUrncfreQC%2BtNeDRdG6fNaN887tLtLgv%2BZE1c8ISY2zjUNF6Ab11zc0zTeRnZs8dd%2Bvty2%2B2rTAt1Ix%2BBYfP%2B4RM8flDrsRCZcQLcjo0ztNgdWLDBdI2CcfEHV34jQ2ZYWpAjCINPs08IF1d8oReydobVqz3pakGwNrVGlE4bQ595Fsix5aYs9BHfXVqyBgc%2FnnuMwKpqHIlXp2qzQ8Iz%2B5bSRljbUK%2FSkTNf8ZTjqY3phgS43F4HUZ0zGuFlbj05DRRIzo6ixa2%2FnGtgTvJKfM4Zl1AWxc3Q5oAbk9XnJrXfMMXB1u%2BIotIjSEy%2FXmoT57pTj1Ka40SiThfXaio3HN3tQLpzbRESGN7DNSEaZdo9D2SU7Gp1vVUyvbX1dtDBxUa0UBuJ75poMih472YtTzjWwmwUjy3i38M%2Bqr0q0zDF5raxUjmY9t3UqU%2FR4D16lGooushG0Ycj2UwySBCrx0Wq%2FLMiU9v2RtPGy5%2FxbNq4dbQk5OVdZ0ZQh0ySoKzqBJLyma6yr3sXEp8vC6ihQRZBULfXCeqPuEIPSfVIGCM%2ByrmljifJhuBL%2FRuFlOEXPajsDAgubkks5uLkNZizZJAJhOk%2Falv6VKLUw5JLAyQY6pgHsIwpaIWZP8aO7MK0RebHh2DzgKRT5Rp7s1Ft6ER7u9AmW5cwRVqA2rgTEPKZr1WR9Jbb4nhiByT9iyiaJNIb%2FN2dx1%2BmumLFHL60RjQaOEJ1vkYhucq8Crfo5ZyuHnlQsMmSGVs28anu9QLWfqBPRm1igUK4FddeSpPRWKZrYMMd13Mwzp1a7xBktQzxqb375YBbOCnB7YuYGCzhTmCe61N9I9akW&X-Amz-Signature=e0ee77176d4553c6fede7c731e965c9c53fc47cb7edf8f79c47f5fce5c81af84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMD4X22H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIA41tw5J1ZrSyiAYFEIYmkwaz4%2FiRGaaqU6CAXCKaH9fAiEAvSgNv2%2BNF4h1FRPQfI%2FwMNBJVHf%2BaPk9WeR%2FES731Xkq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDG8O4JjW1uCjHU38WCrcA2cOBnutEXo9TKbx%2Fe%2B%2FedQYyBNygMDq6hUdv4qlGt%2BmKASK2%2FZEU6O%2BLPn%2Bcm6tentFxPSes40C92EMk3z210A2Fcv77yOSltJ1DObWCJYbOa8VdZ4ZeDNZefiMu%2BOOKX1uiqcIf5ps4FpF9sEziEevWZTsD1xhDA3UTL%2BGauJhIZbwFBa%2BFnnUAlE%2BFtqX8uIaTCrIuNRr2yEeM2cR8Mre6VhxpLHzh2DjX%2FTf2%2BDKdxwn0HegQ89%2FvCuApcPsmzZYZPK7kxHYdKNVtoEyylyv4d6vOlFO3t2u%2BydMQoOoo6yKcaCd8UWjmToS3mAxe5PBUzDW%2BKkBp3oEzUlYHvTOlMSVldJzM5NNrsiGWw3yyCf8iYiF4Q%2B2H3rNkyYnV8K8xd9L09UrG%2FIeS9geWptUO714lh7OYGjMtyUNrpvLhBzCIFX%2FbycsZ7MdfYdFPeMAMSzl1%2FJP0wxW%2Feu9FEdZeXHkZuEi5CC2vgk281Ll6bE1dRl36Kn5xMeDCq8bG0wGjGFMg%2Fhecqqij31eZVUgKUObSSEDQxS4jLOrrCKNEqeobZF%2F15Yx4tTLs2gQbEjWXEUBxLHMkAGIgHoXSsBqNJuXmJy%2BoioZTt%2FpgznRADcQsWWHwJdBPluGMJCmwckGOqUB%2BcAhIhQ4dGD08bImkfdIW%2Fy5qMnZa5JKnif6bhlKCRDoOq%2FpbOSEr92e0476RWKjkp6GxvUMlSA3foF1tbdfuHkJm0iDGraRck5MFe6i5FpjdKAxeSOuNuAmw1xZU%2BBBE0yDnUiYlzH61rRC1qpOkT8Msz1A9BJl3JRiLxDJFlut2UR7Fmfqa5tvMXFai7CiGlMVlV6CsIF2NVaVB9i8kTdl95EY&X-Amz-Signature=1e5efbefee505fc2b6f70cd896972150041a524df596d9179ee19f85dd976928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466372LM7LO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICp4ocCPtenOvWunj0N9W8ZrVlTXxcgbu1%2FJQwaWbEDOAiBR7OdKanKeW9e6g9Y%2B9mhvKC8Tn8GOi6IAQKQWziRkuyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMuTdNzzupbIe%2BbCjbKtwDWtfIj8ChiBmm7KRaF5zUedvStoqKZG3ndNuP68VukUKeFt%2BkKrPLAHaTch1IboalhVUiFyVNGmBv6V8eCJ5%2FSiynpGZzmRYb7iPnrilNnbkT%2FiQ1hsdKSdEV%2Fd5prZZ5CjhXlCDpoP2qfUk43k2FUDjmE1KREF0DFD8U4DLikuMpmt1NkpaSDQjeUYS5lzP6I7Lgsr8Rbrc9v6nj3Frhj43CpELucUEAj0PR%2B4aaGNWAkoASb2bJVuQ%2FKcRtx%2Fo87ArrxR%2Bw65asI482IcVGZs1S8I2txtxTvcjJ%2FCR4k9LDTCvADYbUsGrwmruoWUDH%2FYfZtG9uSJpRhLNbinoH9FUBFPW8sHY%2BU62AmRKzipJHeOLVwS%2BQh9jE%2B47FQok7s3YZu4XV5HcWy%2Bbb7mqsoVUkNGX3Og96JIK9pmAqStwsQyc%2BdGAf6cbJGOYbenDsLa9iT215oFZZzwCY23zuegnqF3ftu8U4iTjIIvD4p0l5geaGjnCxbjcEt9dr%2Fk3TW7CGZb1bf4LonPBPp2z8FPrc3oki%2BO%2BaZJ4HVH81pfXX7w8tMBYsq4RSUZrpJ8qbBJf5VF7neuFDl2R6IOLiHqFplI7rh5TbRdFL8cAG9TNHSl07pe8Dy6g8dWIwoabByQY6pgE%2Bdog1r1el5IOKRuWmXpar2uwg%2BLkf5JJmaHi3oD6No8LR08puB5VHLTguC6%2BuCN3iPvbuPgFmNZr4OleCKLILgcOP5iHo2L4A2jvYcHeIQp73OJRqQ3aMykrc5R6qj8MrpumSxMQvTgrPg%2B21H6%2Funf%2BA6ff0osuL7keHmlXm9SpfmF3kfkO%2F9PhYjoBGu%2F6jnlfshm9715ppoo%2BXkkaL0GZNos56&X-Amz-Signature=93f12fe5052f116397450dc8ee9cf25a4fb9efdf22a3aaa50eb55c0cfdb261b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


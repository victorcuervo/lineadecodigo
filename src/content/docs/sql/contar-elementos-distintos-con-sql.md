---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646I6K2KO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIANwVq4Gcv1THw0WlP98BnPiQT2Vkyw3bb9o7ll88UwDAiEA6H57pNzb3xHgKttF9cEtVjasQqlfcRJ1q5i%2BCFHKNckq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLOTO0J8piiZqZXkFyrcAwCuI36xCxokMY3abisLWyIliL%2BM5jxTkWT06sWdRYzB3MdMavzyROIXBgkAZyLk7zRrUN%2F5bP%2F10y4DU%2FdnDvQ9k1VVPmk%2B%2F1Q1tvkUvbxJVumF0b0jH4KqLw8Hkv5OjlpbMJ3HtyGGdPlEK5niSTdaNTYyMO26IW1yhIQ9mqqF9CDMxjLmDv38kZOREHxHcHIrpjh1ZhhZlSVvvnNBwjLkrYd6ZVF0mMuqbgrY8ITsLSATS5u0qfedDlSqUO1SvswRkyiQ3ihfHsf0BfzU8aJLsHHbB8%2BRCRsb2csS213JuQNwz5v7C8HfA4r8V8VZT83sqdn4Qcx%2BBBTEG4tgzeW1qEX9ODhvimQD6E1hvu4NT7b2diCmarRwDHB691nw4INDzAOZCKRSLhFa%2FDzDirBtPe3U3CPKGlU1l1P3HguLBUBbVQbvWbpTEN02e56cAO4Y1CPezDRXget3vVaj3%2Bf5DehitXCn3dsc195jE%2BTMEsk%2Bt3amqjmXDsA9u1Zf0IgaSMN%2FCN4XHBf8coWlNuminbRiauUdFMmjINWkxYMKBq%2FoXE1y6%2BqCO24vh8I2O%2FIGittFoziEhTcYnHxHQh2h0IeBEIdxRPHbeOoGRgvQl%2Fb0PywGq6DB5KIUMKrdwskGOqUB%2FpXu10zLPvFNKTA97JxAKR6Miql2dlO3W5F6kRGsFfEogulDZ7xj6KfibEjejDkcd42nUnJ8%2FkNwnwG3%2FNaytYooxZ8l%2Bf4jUd%2F6Q2NX%2FaH9pX6kgpi0xrg4vEIbLXk9kwewUzqXCFRtshZj%2BBN8lQUjl3brYJ4U6nODSRmnAj1S%2FZ41CUadrMG7HxIiqHx5P5BDE4RWcO8SGOmqjm3wjI13cFO3&X-Amz-Signature=5b423cae9f8033595132f7953f8c8bf4fbbefbaf3d9c5605dd78a3329a0493f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


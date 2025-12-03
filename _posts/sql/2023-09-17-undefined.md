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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAWOZEM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCfhI2UqTFl%2Bh9N0J7NIHMYydb3y3KGHdv9TYtyLbCajwIgV9cNnO8caXSABdKwlNV2W%2F4U5dW2seSa5q9yiqk6cFYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFPdRT4iO%2FaebPBUOSrcAzg5BMgIo6TbjuOsviIdTIno7y%2B5khar6cf7SiUim5PoJHkrdJ1yEbOxz%2BEtydwHG1Fu8ftw5LN65ckZtoMBunGUcJ4nH9w17ZjmzUdd3r0onwvrXghmIzjUPgS0KFaG3rXpbAT%2FBEoxYGgUoV0GZ1CSbUMCWse4JU6EU3vmomgTPeKZwiisd7xGj0uK5KlX3j6TJLnYPl0fINPuAb2A77JFiOzlsgXLTxlXrOgo%2BD2PyDomqu9ze%2B6xlOayxVBO7plJVXM5OqqniSEHFKkI9Dvs2jf1buo7zQj2AAWahRuN%2BfpAUCIJBLaZMf0H15IOtQCI53Ty0HxDYl5GrRIUk9H8rs3%2BmMbdCKcwUsv6JdjwXwGiBxb%2FFX4bFdQmP3dV9PG0uegv9gFvNbl823Rv6jnD57rT2BVjI6LnpxlKx1GEQg4gmT2QixGdeqytGh7sn9GaL9%2FjT%2BvErbNOz3h8J9i1zkblbShTqhBxDPfcKyTIfXmAxO%2FBgu0rKNkUkJAvgteggUZMRasb7sFhQZZ7YH5hq5zOdvcKNEVyyAagvp1zQyOGoq3oca%2F%2Bj6mwP9S7jEPfa1cxE6sWEblZBEhNf9U1va%2Bov3WWTo1RG584lsqMxtm8iIcNl7NMz1NJMNiSwMkGOqUBWZNsValvo4bTdLihE41rPGweV5O0Efv9NLI4j86%2FvuFSLe46A8zNGamBAkZd5ewB2yN1rTgAJhZPw93o2S%2F9V6POSUFwiVf9xV4ojh5BMnNvaoMM%2BJdhGz39JxU6PoRFTgdlvUvwZHB0dvydcJ7uljon1IydTe5GDAUTx%2BrZHr1rCs6zX0Rn9I2ymnmR%2FQgdq8wOBjuMFc3tw2PGubVxJTvgSY3n&X-Amz-Signature=5e93cf5978bb8ad855099377d75a59c3e39fc5d325ea9fb2a49c0fd99889b080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


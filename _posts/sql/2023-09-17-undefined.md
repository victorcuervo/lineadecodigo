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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOX2VVU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIC%2B4dfQInByCaC1TDyDWiv6tUKdzFDUn9klQNoohZcrlAiBcb3QJ8I1d3r9w4jqD5loq7jffW7z0rrT2zejhE6nlWCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMFyxQ3Vp9%2B516uqWwKtwDDOAlYM4V3OLRO76TG6ZjoDGz0GY5ygOo5KekVb%2B4vhyIpdQDIZ6nsqN3fO6jqD5KWlEGIiBZQlOS14y0ogeCntR0WzqiUiwxntQ%2FJVzw1UV89oA0IwUGCQ6TTe6AK7nZqR%2FnPgEAQy5xXpK03BQuKx0K7u4%2Bsf16A55PZSkrDBWQ4W4LYdT0%2FKI%2FBu8QqT3qKlXFl2SaJTlH3PC4frRdWySjcAaZmoG8nmRHK0Ex4MnVnEOexqRQE%2BJ%2BeIKKq3wY1HYmFkeMThl67c%2Bz5GoUWjK7w3BRKPEf0vtrWYU2FkghzNvLKAtl%2FBRXsCwR1%2BSw1HjT5zx9CUtNUM20NfzBPwYTGQ%2Bm1QF0y%2Fu8xZ6D%2B0RwI4ZpAjUIsLlQD5PMQSIMGT4fbgx0mK4MXrd0HjS07bjrEIaoEOYxbVU9dnJFleIZI18SQqLrrqx2U0y2exo8WBR4whZ19%2FNafGjDSTVt0oF78ermhyQzmn5ZYB%2FfYvDEib1ph7GRmgqXKNlTD5zoPs2cqI84%2Fi1mGuOibPZX3t9Inr3Ksi3kaXtUJasVLkhY9HLqiXfuvN7zV1J1eoH6gT%2BLqu384ue7wqcSRBrsz61sgfx9HS9jwd3CRKLa7e9dTv08%2BAOwuRqd54Ewx9vByQY6pgEIzLoxAMDKJ%2FDMjbFADFj9a1VzUfkbgeUeyvQv25dZ8QJSIfUDRPY3pQLlCSkaWDNM4btrwXd2oNJiL0ki2SjL%2BmDFumSN8FVUbY8osWUZ5SwwF94Jb38dwDV1GOxWQ89Z2JyK66CS8571DvvOwRFMFDvnG2yFWdgiN0zX0q%2Buuc6MTvrJR5CFbaXvVwjnCeZf5vfBOGfBz5sjFSiPI%2Fkwej1VMT5g&X-Amz-Signature=194902f6ae030bc5b7eb86ce29aa303f56fae2a243f77b438478f1e3daf73f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


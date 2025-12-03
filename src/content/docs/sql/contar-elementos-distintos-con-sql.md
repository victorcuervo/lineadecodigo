---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPGXTVEI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDAS2WU%2B1ZVOouhtZaOM97hcuxDoSCZ3fVDyxUG%2B5AGlAiATbK4FkimObiU2n9QApAQ3M9kJqvgSzHoLyIvfSWlD7Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMRBFHQE4t9hfSK7ESKtwDfTxbS3ExDRrPgVi7yyaiqwCuekr10EClfXWqJvadOzjA2Seqisr5JkISK%2BQSqfL1iPlpLtOzN3vmInnSz674IQLpwKXNfniBESuX7Yf3El8z9m0uxTcP4d4e7v8SS%2FZtOgPEyK5r6UUexsWJ3CyqYOdGQzGjj%2B%2B4Mj7ZYxNSnufhEOaOqsH364vAU9GD3J2AyWS1cOGJmLs55ECEugN3IJHsrXhMRGUWv6pP3zsvVeYI41Qj0kma043hc9VIm1M2D67L67rqbU%2FhXW6JSL7qnjaHTdyVkRN%2BPwzT6Bw57tgsS%2BNe9ySbHrWcXcAql6mRpDef0%2FCC%2FZDo%2F08pJSEJf5MFhtjiqwWQmxRtvTDzg7c3Qksnba3VEuY0YKWtxWpJaEgxcVAPEowipgqHuqOukGi8vZlgKlSLJ3OtcLdLyWQQ8Zv6LVHkKbUZn5xkNVAXCHZaQzuQrf5XhqvR4ccD47a97ThWBnxS0fKPUZp5r9omPET4209RzJo09TkDtJXm46CBfdY%2BGm5nidk8ummR4cCnBPHqF4ZCiuGxeKDUClbeF0Ij9eQU9xPA3f8I1hm6HBjMXvaYO%2Bw%2BaNN%2FWvJWYNU9UHEvTjcfhhZQzSDnCtg4k9D9kdwnSX4c4TMwj9zCyQY6pgH6fFxXfh3OOpI4niWCddxhLk%2FKNxAX%2BzqOSgfwzc8GXK%2BdssWw%2BPYvP3HVlDiAQBsFpt5SZO1QaS5a15gPxmDJGDjLzyobLmruXH9fiU6QadDN1DBfbcGiizQDmP%2BRGqTULJ6%2BhFz0gQ9tcVr5rMJX%2BYxooXUIVNZgLRyWaot4xOpYaMWw7C37%2FGGJ1RKQRGT%2Frp%2FGLD5SEveEYTTxSqSLr4bq2Dph&X-Amz-Signature=e21a74f6910a8eefb5986f8d8cabd6c93842125d81fd1b75c9d8e64d6dc8c99e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


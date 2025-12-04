---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DIR4IHZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIB39J7bLc6HubKqWG4NChBtnoWbxmMPvaG50kVTdHyL5AiByV%2FnqRHRO6HnVZUB4ZxQQqnIZmrU4XUCHopfQDKvz9Sr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMfsN3soyBhfcGS%2FjuKtwDL3trlKDa2kkR%2BzrahhWDy46B4NdJbocYCBD2A4%2FBtURL4bBZ%2FY0wkHXU8qShascpRDc7zSezxzqIw3ZX5BQXjU8oSKst3FGB22HEjlfJ2JaREKDxGzivOZsQVAiK%2Bn7U8eHVtBVO%2B82LKXzxPxKZusQbHKDCEEgdP3HssNYekoWeFmzUPTlJto3v8vETuLQaHArmx%2Be3l70KnRcxRlejkRRWdPnGxegYNGWQPHm2GNtyKIxW29E6WssYUQbm3n4l6yVuoDZLW4GLYc7eXoKzK%2FKDJv1AD4VTrhhaEAJ8eBw8ixEDDOjqjb%2BSusKgs9OLgEUHJvcXZ%2FJyie813davNOeokaO43mHrYJGKjhsjwZ1eQ5ylLXO6jvO4apubNVAMUjACTIM1VwZg1lWfYdJFw%2Fv%2BySJ79nhQV8lI6kP%2FacD4HLjvW5ZV25Pco0Flgc4SBn6LMmNc7QblIsQEZIIWqv0WtcA5FeEnY2AApz%2F1nSTGmVdxLgL0dRZqJqVR8L88z%2B28JxV%2FQnvkg8eQjAj8iqAudu%2BEw0GX5y7%2FkjyccKtMHKXBR8gPfmaCY8BY%2BLfX5lUYkrh%2BEp7B6cSrTtcH7RbxfTgwKxkO9GOsqJDrU6KDfbTriPq1pOVch9wwjOfFyQY6pgEhqndD3KPT2EUUxEQr4Se1%2FAW5KBCopC%2FIcT7eEMTH6aPGtr8yNJMv%2Bid9oLtGE7XFTqcqyEN329f74hLX8SeJ5G1OVE1knsPY5KxJdQ394sd6HISxQBo%2F5Pzeb3E2HDaSOP1Mz25B4hVcD4IUiYhV2CHmmPM%2B0hTZiF%2FKynUOvtpGdaDOUWvUxF3A0tQri7q6hqbbnwE9Abd3QWkjAw5UVUycf4dW&X-Amz-Signature=c6429c845308edcd40cfcb1e5dc1aecbdae3e9b6751d40c78e32b42818c73609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUUTIF44%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIE2uOf8bqNUddxrqlECYBbEQOF86PXW3FqI3T7wtYihuAiBUiJi1xEE31Nus%2F54hOGKJ%2FtFKsortf1xKvgW3VkR10yr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMFcffeSWZu2UKRxEJKtwD6kRI3%2FF3nHtOoI8l37Ivy2KqChCb9kdHrju2tXTNBv4tc7Xh07H9cZuyvHhuegF6Hxpksq7DEWRCRP0KJnh80n8zTQ6ZEnwIp13WQePXYrDQhmZujDVRJMqhVOlS0d%2BDP%2F3t%2BF20wn66dza8qDEnXZeEukBmRYQdWf05CyZrg4LgVpsU%2FQt%2By6s7UmvpsyT4inUTC4Dv%2FzABNpUMBa4qkIvBnv8Ej%2FfA16yze7qsAW%2BjPR2JjlKwOYNCX7pqQy4ZREFtJvflprU3mZXsTkA9YXAmAjbLu8q963pgpFM9nadzfOalY2gEC4zeIndlS%2FGk5OjdrxRrThcs0rpnUYlGLO4uMRVBV6EY1YkZbdK1bXdhDisZmjUYvOCLXPA664IRCfTvtP3RqzYVRVNVWQHo3YDfBo9XPlBhU5YBISoFTP2mbN6UagU2whJLYVsdYicPFJHMXrgQcuwLtYMXg%2BUs8uO8yQKd5p%2BTJVa3d5R5bdxBuLJ81uiFLMz%2Fn75aWS1srD7hmmZGw%2FkPUjB1XGyY6f8I%2FveqaOIX%2B8%2BGgvfwdi2T4HRwPoREZB3L0e%2BEeKaTSpL%2BIYOsL1qsaPxXJTd7YjZnJToxcPqtYlOVNB90Cl6zAljM6vHD1jRHh3cw5K7EyQY6pgHkW64SsBUPqcUDBrP8fLzl%2BkOHQxVloNDEWmxSCLsmu73a1oajcmXxO5ngZ9fds2d0HPXHqaW1a9lMyMxdUowrqnpNGnlEyXJPjW%2FRObnJLneRKVG%2BSDyfO4hQEMl%2FP4TxI2hA5N16jmT7%2FaDF%2FwizgV%2B1X5fj6utfEdogg7xzGM5eHhO9QijzP6XO%2FuUhRIacpBvvk4Ka%2BYgtVVyezQ9VYWB4tVk6&X-Amz-Signature=f381bc551cd2567ab6e0c156e5e387b97fbbca7e56863c10a046a956b07ad75a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR42JRJO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIFvBWS%2Bc5mdE9xdJgbOhZcJ3gnluZZvvJR50npT3z5DyAiA1U7ELgNcRVTDLvZnEbgBOxLPSEThzL3nemzKLe7ONjyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMFHKjryV0pwnDvlG0KtwDrS57LuDo8fsXRqDP9JgVhM2ITTAI0YqWmrJSvnkALMadwJtrTjvlzoL5NGvO%2FIZ%2F%2FedokQbxKuhTDAKny0%2F8jaLqw2tuEuQzLnUUfAkZf8uJgHz8xHe5kZ9B1JbifZmrdZa7bu%2FBY%2FbpSVCEoUXWdYbBFYT0nV5h9CfD%2BkaKIDyOTqKkIYItzCmMLhGzre46NSdg8orf6xTcGe16odoukcQvEv6jw4txg%2FewDMxb5oK3nRwvyLRsKlTkJyGBl90HFPusyDJ5B1PhVQumctzQQBcT9yPzbSpn7IGuZupC5GISshtw3Ixg8Hf%2FBUtp8uggX5f8rcuBJCa6U3rvPqpR6nOCFiEmnSa%2BvnlpFkJHYfWucUuH1%2BEW%2FoTPgWVzgljxl7iGIsb83jMRYIburDr%2B1kyUGGy6fS%2FQhARIfLR1wZZiBggf85uzsvG%2B8iUgbS%2FkcxADLWa0eh%2FjtxSuDBqAbL69rxknGyHacCP3UNJQe8i6QoICDvooaJ78pjbVPyIHwxTeBv1vJ4QnGUnsozVLz%2FIJqCjiyg4SZ6BRnBcV6MmEzAKvXzTu7Fs7jj4x8E0oO%2FoDMfRZwPHvDjPK2sGDdJ%2FGUl3U%2FvyTjv0ZqqMph8wDTQCl5IPsJk%2FHGiQwp%2BjEyQY6pgHI6ErLJO0MWI%2FbQDv59p5dROLH%2FaD0VCq1hzMdQ8Fo3OhQhvvkEyZ55N3durk1gvGU9qD%2BQX%2FOLkcmxTFCsmeQk3NxVmeqiO3zRXkazVQkM%2FU2IdPNEkXrVXDUvjn5PQ9sWCKmNHGDlOECAAiutAZu5D8XL%2FCqSUOzaZouDvu2WAdMwvZT8lh2FCMYqk%2BLN2z7H%2FbhOvx0DLtrUZQuJvgNkySyKj1X&X-Amz-Signature=e591487ed717a597f1302f21d4d1d50ce351f60846e57126170223ce1b2b220e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


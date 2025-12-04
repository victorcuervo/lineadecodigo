---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFXDVXZJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDXBhYk6Mp7kgMW9UB87zKbymS%2BQNjM65EnpgqoiNZhAAIgOKZ9bsWmGj6p1ZZjWvDuzgj0ufhexN75jqWAjd3kjxwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDN7iEodjfFZJQusT6yrcA16ZNZHx32%2BS52v5337pVbgqjqYwL8GOpUOvyZgE5do6bMR6eOy5gEQfUai62XgiPe4VimzIXPHwCsfYamCS7NjJjY0vGZt%2Ba6mB6ujp4ohictxltEH9JKRKnSR%2Fa8Gp7UtnfkXtxgX4zAQyzFSb0ND9k9EQxL7AW5y3Eidw6NtISJXggIuc4GQhG7t%2Fr125cBknoja5%2F8ZcEwbjdxNX8Ee9C%2BD5vZPuZdFqcspW26%2BVOPfdCM%2F0NPi7w%2B5JAdnQ4YOX33ekUIhvKGMuGXLOv8lVvCSAKXUmJ3Nr4NzyFILaxCmAnoslcqAQWSjOjWTM5Jp1a68ZJd4xLOMhja0SbB0HhTpDl8pr%2FF6qNQONVd7%2B%2Fhql%2FSf%2BTpnwQY8s9l5%2FQlXC6mR3AYssoIICoUTY5nUILLJR7MFRUyfYsfxaTMwpOGhRTSktc0Jy7qe%2B15HJ0fAY7qUkJAJp1jd57tYSd%2FZrfCKGAj%2Buqp15%2BE7xGg6y8o2mbDxzcOUNjspr8swOA2fORTQc%2FK8ogRPFpXSwbIE%2Bn4Uxeq0mYg4SjHLq0m5ci2Tmc8YE3yzAXhh1DgV%2BHPHz0sbPdnk3p7FXzLRxNqmx%2Bvfz5jy%2BtBjwC0JWnQxU2Yd6sz35DTuNcVzIMKeQxMkGOqUBnxufQsIZq1n0ULuqqFBDritb86Mfg6k0K3PzXCHtyKt1AILL1RPRO4oTKT7Gce%2FE%2BujXVtxNQW3dlH%2FjkopggRjkNcTs9OTZL%2FOL%2FWyLYnznjhD5Z6WnInIpzdOLIie%2BcILufyV4Kw333yJXV2yFNmXrlfMHYjXlYLyWnmJXqlknWSPNFvLBzyD3fJHZYbJdpbwGMN%2BKIyp8OTlJ4Eb60gwSsf7%2B&X-Amz-Signature=1ba5a00e574de4bf4cb0d3a80ee274e4216c8ac0b36dfee1b82f7eb8be68ad8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


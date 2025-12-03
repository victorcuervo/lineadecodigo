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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3MURLI6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC8W3RPRhGvvO40bU%2FD9d6HDEyvJbHL2LG08CUd9BwvPgIhAIAfJoQ9estdq%2FHH9Qb3RIgn5IuVwG0BeO9Jb7%2BcpNJAKv8DCC8QABoMNjM3NDIzMTgzODA1IgzV6uUzVj2yEeyTm5Uq3AMhYG3YwmMtJ1jzx8VJqWb%2FH%2BJ0sdL8xDVAx7vOg%2BoY0nAsY%2BcMTL43jZp7ERyKdBa8cDXt2NjaoK7d2v%2BrEWZJPDstTTxBcgDM%2FlWbvJogERVZU%2BoqUMlHnBHUbxolBOc0jywT5VDkZ5%2FZ0U%2FNX2PWWlHCn1A4JiILjC%2FJZn2L%2Fwr307XRESoUiWZgWsvLnlgmxUJCOiUkMqijy6XOnouyexwQe7pV1DX2cztKHd7o2biG0qanXXv%2BhKSHhbKUh1z4WKaoLc5yOg0yYuoZ6P%2FhLiP8svxv4sQ9dooVisBXlitfUejuBOFfG0vtyMwwK8c6xR%2B0Ghdk5YdoIQfct647iLcJmHRwP9J20YwyACe%2Blq12Mi73rass6Kj4csWV0xVoT6MVTWbsYKApCKx0vYlPJJUCJ6CEimoSN0zxERPFu%2BLmBA81kpYnoW1YuBZGvMWqeMmAI6h8at82PxjNLfpX86dr%2BFkh1YSkk0ozU0P%2FX6wDflKR2%2B2xlosWqyBafQjyZsOGBV0vVt613ZYM9NpmQT%2FWG%2FB%2FIOD2eOAiZTd7H%2FnH0O0Z05bCHC%2BBmXbNI6HcWYo5KWmxPvP3jF2Kdt0w%2FK%2Byz%2F2J0fRolYdJufYkkMfVCrbJw7sQCi2nsTDniMHJBjqkAc8Ew%2Bpfe%2BsDIH6nPYROJpR7506OhvMHSlOXQKKWf5X1VvYvOqHOeUmTkNWEtbd4RAkRxCb51jhslT3R3OxbDJUIiRyJ8yVr9h6psskHo9UMxr9BKHxIcIgO1p2nmSt8fSVca4wj9S9yRUfAncEdviB5ZpczSHkg%2F%2FZsd23MdXH9Z8YUrBWfvUt16eEo9arGl02tEGZliOALeTsF7KdtC7403KXk&X-Amz-Signature=f94d4bc7de7b727820424b772e743e24836a5603d9901313de63714d9c983781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


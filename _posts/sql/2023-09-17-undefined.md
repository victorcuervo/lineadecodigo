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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKLBAFMB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIBmznNPDNSfGtIPfQNpHkLpHZEO4osxcVXEcU%2BcNKCazAiBW0Mde06cjuVEzega99yF1McS9ooOg1gaVpgSOb7Puhyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMoYCgnfNTB3DIaKF8KtwDQcjN0zp96RV862lIBjQLzBBJikkHNnF7jqTEfHg2CgZ6IxXCsjpHQbfYNBJY%2B5Muckk4KrX8QteGekYcyZV2khVd7aLEofBc6IuW4yThtnWGmjJJtWOEJMuP%2F%2F%2FAr7A%2Fgi1RaYRcA2h%2FBp2MszVDQe3jF3hVvFF0AgS6eoxsq%2F00FrKwEuhIwJ6jxDz7ETmfX55N2TsqPNYcjTZB4gJE7nTfVvhywK0KZCbUAvIAdHcpu9dTSGAyTFgS%2B9VLjnIXFNiihOUaCUv9pRiLUCEl4kbS4F%2BmQ77nL3%2B1OtWpSVlfhhm2Ca0akX8BVHc%2FvwUxZUovlbE%2Bob0QpmJ6yoQmZFNLSAjYPRZs%2Fz%2F6BViBjHBhgx3I2d9x%2FRUkFofwjvxr73J%2FpPn6HPQjNt5Z2D7T0jL1JLnkbpnEY2rTafAtYglft6GuPmqB2uAjBqArOxY6XrGg65OWR7AXNyT%2BygepN0e3yPQSc4%2BH4KiZZ%2FGPdvw4xDfX%2FY8c2zT4JUEaeDGOAbGI1ctWgRd5xKGOZwrQTS3HtX0yb6tPg1c269fK3vSIJslIVybFJznfyCzCjgcDV1Y0A35IJPnnO6uPwzb0RW98e7zxA462smQhUKLb%2BV5bH9wrw%2B4WEFy%2ByKIwzKbByQY6pgFq9MO4fbLVL5r4bVIwjO%2Bg9ubrGmYKslz5o2ICQIbDJB%2B66HZbWcZsLa5rUjixiwfoF91bntkeKoe4yeKREOAV7jF2dxw4xhB%2F6SOUFzkA3ex4Q3qG5O2C8KN6d7BZGxNlDaYvUU%2BVDxnkltyPD%2FIbpt9D%2ByewwFjpaw3zhpiIQAjl90yYB7%2FjiJUEXFSPVxkv6Et4cLWRa1vphyGOoxhmb%2B0mCqNg&X-Amz-Signature=e564f1d964f75d931944f054a6388b350ba4b120d00e86b155603d3617e6acc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LAT2H7H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCvMTwaT1hT230c5A22Mck%2Fmt402MrVfh1ekyrXxhekYQIhAJYzdZKHEUbtVqK9pG%2B%2BaSX85XGd%2F9YK6Rd%2FlDOjbiYoKv8DCEcQABoMNjM3NDIzMTgzODA1IgwudsA%2FyLQl7zRyQLoq3AMa7LaLc5M8eAkj4J2dfqz0U9hH5XfPPe4Tc4V%2Fj98JCxHZeg1ZW87BaQI0qr4sOZr%2B%2FYF5iL4H8kGCxmqp06J5bRE504RJo8FX0g9ZXCimHpC4rm9C3moBmCE6KOaInkGd3r%2BhkRcPLjaqUt5r7nH4%2B4ltPWYXXHFs5%2BLc%2BstucVUJyimc%2BK6tpa%2BwqiUeqQhEUexJ4b%2B2hIA8TflQe%2F4Mgf%2BCHtLslUhsWCpvheq8zDO4sm4j%2FVH2wFmHkUTEEFRqRe5B2sAQYjGga2irbtRZv8BJ7dnr55US8kBptahipQLFaM1x5tc4FjImJBSju07z4ktUnguAaxqfYnBmb8dhibIzw8yJdqNCymzuXHEbXky6Uy5s00aKhVL34chZUfc3WU%2Ba8vvBj%2BQvXUwvvDVIrVtnYGeWpdky9EvGFwF7Ohc3V886%2FH4RiOBZvPqH1up4CiAGbfCB7%2F4vjTbYsPB3ZV%2BuTrFWSTvx1ukO2gSc%2By0zoXyNxHg%2Ff4iGr8%2Fo%2BwwX1L4FbtBnhXHqiV8NwNT7E3%2BiuOYD4OkYwYfTrZ%2BIBU%2FCaKgA6fnpKJ0KFlw%2FxfMsxK0%2FLpwIoueeqxh6bz%2FCBw8%2BPKe98Tdt3jWiu0QY42JmUNVGkn8jMqL7IDDMocbJBjqkAY18CjqaOJsIa2D0WnIISRf2QgpYuJUYfOQbk4%2Bu%2FHpMJQlTPXfErs%2FQy8aRwtqZBY%2Bjt9jSHO3eASkPcAX4tYtnuCnhF1%2FzTjpU2gWB7bJ4rcRJYhgzmYtL6ogL2e%2B%2BOC6vaDMgt%2F2K6wDLkbp8%2BDVJFL1pJ5YN6cJ0ysoJUE3siO5F66%2BjYxMfIfAsOJfY%2BLyfj%2Fs2zTlQFPcoLJ9PUa658wj5&X-Amz-Signature=0195e13e17bbe87933b3552ee4e3860278c5a37f792ce6b84252b1fc1e5af55a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


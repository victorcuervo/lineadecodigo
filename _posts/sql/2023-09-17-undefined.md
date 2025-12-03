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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGL5LC6X%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCQu2rqw63qouWJ%2FFFsZnGhwf0okwMbbb76emiFdRSHzAIhAM7RkueuNeUMigrRNYC5iJOn7Svmj5zRBQNzBvdKjNlIKv8DCDEQABoMNjM3NDIzMTgzODA1IgzVEKaKU%2F9KO98mlRAq3AOB44g8afyU0pQv6j1PJvm3woxTzw90n%2BtkNCMyA5RtsLFxQ97qYY1TtJ75npCZ4tNXw1D9EfNKzIx1QfhodPvzbJWtBYaz3XOLnwW8vx6Bbl%2F%2F33qbGV2JJiZoXsngztL4Vev22XbfxNKaJ6EyWYPHIcOn94CQE4ZBRBddcSGQHDh%2BO40bbIlOzd40Yi8Ak%2BA%2BUfuHx2cd2tnGu74oDPMqfMUgHbstTPTRNx%2FjLRszDMWE9qYo2tK7i0ulbZU0Ip%2FThPRCccfKCA9yxtvWTA6AK3yjtr%2BP3kRSzZqu11BiyezNa3Rh8JvixzDoqiNQPmOcKJIBIFjwPEzx8Sn3VN9%2BWdawS7e9%2FXg8YQ%2FBPRVU%2F5AMO8S4JcSd7rDkvfEGtD0HYStcxsnJzcGQBZB1OOB7MOUcYvh1zvk9jRucpQU9JCes4YK%2BdDIZN%2BEC3RETEGLLg0XEU1HkyV%2Fd9w4TU4v2T3npLlwgXVL5ghFrZRS3rCvkBQM2ZLv%2F7j8LzlpfltGkVPBZRr6q7vMvEyQIKxwNoqUANs6rBSXEvcd4eCUwPTcqactzptcGLXN7M%2BDVuGZqaq8K2BW4QpGVRu6PHeJ8rdyNEcF%2FO5MoygFbHSJR5V%2FKpJA1AzvrU%2FmWdDCgwcHJBjqkAQmvtNJ5g0CG1%2FFfy9qvE7nyJjNBuB2RFNozNaD8aUgVJBotdtZs5nJaBmdTMi6Swtdn8OFastnWOZgwu4saSGSfpGPrJVbYaV20bOugXA%2FYbROr%2FIDGfIFQV%2FfAvNVh2LGXrIVQnKOtyddHh%2F2lwUVKFhHFeOI67X74AHI3tclZxwvQ3aAPtZZ2jblRlthBM8%2F2O%2BRZK0WMA%2BTEMZZxRZmWomP7&X-Amz-Signature=ef9b6446a363596230648fed6c65c4e266a6b8552fd91f1c6065996112ae3f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


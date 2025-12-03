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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZD6UEI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBVt4MwGTzPj0zMrSjz9%2BoWsVD4r%2Fh5Z0PXkEZc8J1heAiBcmtftNFzMlSEsvm5gDk5WnTZImInd1mi6GA4CJkKrZyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMHWcAiajuKfzB88UvKtwDaHsF%2BMRMuqOIyhZBtg0pl4cYhalLesSBHHmZYZ%2Fnf3zx3vZUIRw%2FrJLlgs84U4vhQNQmUeDmvGS%2BPueM1Cn7ovHR0xhV3UAzactac7%2BNFA3kIXJKVCIG%2BHGBqlqMaZFzPdTNvBc0V4DmSWbz06lpR7QnWjpXp4LvmE4Rz8kj7R2XLzdDzRV7XIoarmzlsIcqaVliuJNKlKHdDfOUFwIypkh%2BUbg2uUH%2F7vEVbdoH0xqf8bTjnkwRj0XheeKu%2FUaxvRRq7Q%2FTOWMQF6GyuHBKK5ewF%2FI%2BCiJxFKdZG2aI4qZfRc%2BAxqR3hKAaHOdEXlYDSs1WC0Y2Hw9AVZfmJdQNjCGI%2FDRq0v3b6cheqnnxqBJgNLqIXoT94aUOGzqZSyF0oDfwRXyDhW5UVccfpKBUgH9PRH5QTYsrscp5YET%2F6VTgLsxhmJEpIqo9viMuCPw9ADIAX3qg299nosesluGi843VcQEpSfry84hFvxkAzDpnxpuoANQnP4BPfVkcTzlCNAldbZ4lP7C8fNosforghZus6VCbA9NwAyWKqT2gRg585%2BkAhMv7SPwNS7yf9Dx3FaAa3v8JgTXw2XilK4JjBsYZc6huXFqz2XnmPevk1JWprNoLvpJJEMawbzEwwZa%2ByQY6pgEMd4Oh%2FQ28L0SXnf4JC4UPYTBUuiF16Iio%2FWrh1K5rqL8Rt2K10kasTPWKL8%2BF6bzZdsmYZOaEowOosP55I2iLu05lshKkdcFeRe9xg5z%2BFCemjBmTCQvcAPSQ7xk0LqPxkrvVsvjnB9jQPOqjGMQEv7soFtL5JkFz%2FMKJBxSPl34XCOyhoVOnEsDhHVj%2F90HTH3xRCz6gtIlVdQSRlAts2D9tRfrz&X-Amz-Signature=77e503c97286fd492032f4a691dd2f6ec20f73c19af527f9260e5e20376f674a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


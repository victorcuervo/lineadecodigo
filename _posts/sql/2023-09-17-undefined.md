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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ON4QEDX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCCvu6Uv5Vz0I7bVDgX7JB0SiTc5TaZM4pItcqDAcrjUQIhAPT8BjsGJj3sR%2Bj50mlcoMwDGtkmv8ITh4McypDnwgOtKv8DCCIQABoMNjM3NDIzMTgzODA1IgzUmxzSRylBe0CRsx8q3APYryKfaVP5A2wnHKI978DLQwbccCJyKjhG1UbtpwqOIyw2CNdW3sDUZNSZuyvV8FKYUq9nLIh45cEyt2Ov4APtRU8CNvBti%2BVnExIpLpp%2FsTxL20JuNCyXdI8v0GLWSgHTo7rzD0svEQh%2FHxAjv5wCmlLfat7%2Fw8L0hT4Wc2BQQ8Dnw4m2TUAF3GA2tzGpu0Z6TSYwSIUQT7DGp3y9kN47J7kDOYuc6JESPO5wmeeJEgYHNdesEapSx0TqhXBNsU09JvUDZyombp36YMVrcMCw4gnUwWr6aQY0wJz5olupyRU%2BxX5cu22z%2B5AZ%2FHE4DtwDMg8AVecs%2BgRQZ7TdOwaRJDWDQ7w9RXZfo4enq%2FQHE5tCMue5ovPIAajTq4HKZSPmUBE8I%2FF%2BhNSOiv0biZ%2FnjUvCU22380l%2Fjjz%2FkDQqJfbictEgl7bVNHqPzpQ98Xf3HC%2Br5EzeSwuKQ1uuoE%2FhvDs1NFxImOM6NrwVDwdmHKhgVE9Gn91LIOXYiLw21Nulk%2BqQmbbrqpispBFueyjkMRbshaiD%2FlNyFjO6ifc%2BUDuQV4qoReNbdYN0dlu%2Bz9uYubF1dH3igQ4ErrhyHhyiSsmv3T3j%2BBNh6u0NZQcRVtXvjpzkm8KRnQr%2B5DDUlr7JBjqkAdJTHiVulcOYIXK%2BeHLFtiHsooRNQrK9ROK6S7DtpKm1MCWqmmKFVTCDXgtDZOrJAcXPVhUnXhG7GRQBn%2FTwz9LQAPYnThLESGhyiq0Do%2FJbnPXdkuNMpwdo1Mt7f7GTcdx73OivkaqiGk9W1cRB2PRGvwqlparZG7G45Z1hdjakpxG4HPiQCzTjdY6%2BSB3gRk3vrUkdn7B%2FeQFiRUVIkcei2Q1i&X-Amz-Signature=46cc7fa477bd7b6de4b4bcee32e32f1f82846603b88301dfb610666838368d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


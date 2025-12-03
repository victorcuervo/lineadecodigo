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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJ6YG5Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICEz2xpHaPl2VZtZ7FnkvF4QFfaE%2BkjxUUdLURBYB2emAiAxwSA1uWn0PuXk5wlvi8dFdzO4DdM0liCFrXHS41LwJCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMBoFtT8hngwGpO6z7KtwDXVGrjfiRI%2BS3bDtPGEF0s2dldJEhhs297IlLnu7uoSMIGgKgGwXJKIHviY6kt1B%2Bd9Ny9FLngKlFadviCa0jRwqf%2BElV%2FXDu6jv6BLXyvyjtAo%2F%2FdmiIuUmcN4AIDEMv3bsjiGo5%2FZ%2BfrxeX63VSjBiXcEIV5bNrhc0Pa4uCs%2FxAFkNxU3gnCwEE3ESXAijYiAArfWjClzfaNB7icRoDXjB9HydG1GkOYTXw98g2h%2FeaEEOKOOhKv%2FBA%2F6R0A%2FDcilKuG5YwPSsyLuIwPJ%2FWb7ImPSaSM30%2BqshxIOREKr4FUJnSySxOXo6gNp7YfbTWPQncfUySAF09G0zAgjo1f%2Fc8mjhLEnNivb9bx6MaCtNzziVGCY6VtqfFaEggQGpftPysJq95rp%2F6XAGK7qs2ULewVnFzVf8DJUXnrITYeOxG8abgub9r5bROMHG1%2FPPiGjCHKPTGVCnkN3tjWmJKutpUtfjdSeKOc528bqxHmMyb1OzOwUD6L3uTs%2B246mJMQ%2BkSMBEyoLELIJbSatEGe21t3JlBerKlu9s5UkUtlFsCZYeNP6zwHw8pMRkvBsdqu8Xl8LpAIxJlhNvC3ZnoZGBbii4weDvNu8xcVVLv%2B6c5SOwv0L%2Bwuo%2Fr99swspS%2ByQY6pgFRT41N%2B1DSsL59IgkJLWuRbp6QWmHZdFxS%2F8UIsXxRF5l%2B3VTzZYVFzpf24TsaUMaD6ky8MlcmIORkUVinyaQvWAHdO5fow6JVX6R7EsL%2BJYEKELmQaTfmOpSZLdjkJCFG6fLuH9cf9vqiiH6qkx%2B%2F%2Bmt02TencM9cWRlc7LoaXaUV%2F1XPZxYASuBcGu0a7LvayoNlxjZYsgt2fQls1RQN0k74CLDD&X-Amz-Signature=d0433471f27eab1f921bda660bfd65ea135bc0539ad71d6db53238deed7cf7f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


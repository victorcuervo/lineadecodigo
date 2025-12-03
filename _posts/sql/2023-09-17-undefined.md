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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C52TQRT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCICMF5qk1pYGjPyLeuNxx%2BijN81eeKDVXpi2opzWb%2FfruAiAm5Z4EjLMyqsZcLeVhIHf4kvypRukl6qv%2BEIyv1rPeESr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMroppJIGCQs%2BpK4kCKtwDFaG4adRwEBCoFvmSXWS8snq6tJ2ptx6xjtNHuxfAlaP1%2BtVyoSPM1FoH4LTn22%2FB%2FeGviXYmg9PjXyJT0u5ztTx3FWijm1nNLs09UqhnwOSnnc8vz7uvfwk3lc62m8Tu0b7GqLdL1Bn%2BkEsDZOgUDfAMHt3dwfTcubY62D4vH99BDjcD3qXPVTGbbGghucfVKjf8vLFlqyV6CwFtzcDR03ls7iq8c11eCXXoqdyX%2B5%2BtAAy1USZ251dA7Vn1OEVHsHcf%2FUqrMf%2BnY%2BiWqY8Vef9nCdewVEHS5bqv3BFfK5d4%2B6oSJE4979HCh5hE3R6FRYX%2FmRjTCHkKa4qQe2Tn18o1AYoK1wee8AWxnu1vnLIqhykmMqEPzsHtzBh%2B%2BBwX%2FU9hjIkjHenGbINfXqQ0WNWG7smiUL%2F5kCZvp7WoIWkH9hgFx59Y6t5ho24%2FFZD5fYxTp%2F5sMoVGN%2BN0KhgtX0gqx5dOuyDlCrWS6f6qZuBfs0HYUIWF2Wh%2FBbKpzJf4OW8vr8y69gaJ5rcjKIBGrDRVZ93u4j5vgNB3igU0dpRoDIpdH9ZHcrxErXWqsFgtWaATgVKT1Jp8rziD4oJKtuQAP8b7jrNTx3wal7hscvTECpuySOXfyw6onTkwqKG%2ByQY6pgEo8tdNgsLn0h%2FLQZBldxyCGO%2BDX3i30f93yRTFYpEH8PxWcWzpzcF4kHjHmHLtHe6wVxDNZHCDmQkX%2FIMITnnSBujtnFFkAVDG%2BqrYnA1Kj0fsUTWiQBLRMj8kZ%2Fsh%2FYGKsrxRPfFcgGkSzDj3SkgUPALnTucaM68%2ByZYja6mf6bKYqmIg8GdFUrxNTLxh8scPVeXzWER08Dp1wBExmdcwZ2bAoH4x&X-Amz-Signature=f285b46ca00fd51231cdeb0004b9c3fa117b95d5a0abe4820ccd99fa84b5f8f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


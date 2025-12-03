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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y4PEIK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIA0T2YU18xamQMsLLH%2F5DVaBNUIFKlvlDfXUQsERMZDXAiAkUzqrIH80R%2F3fisHIOO%2BuQNZpnaImjsioIu5XXyodlCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM2MKm6KrhQyZRFiu0KtwDmk769vY96S2XLeSP4BLwWyN7A0WvHIiOvQaUgfZDpr%2B7dU2X47pkMRaELsJuYNv8Ea0jS5h%2FUPrphAv60RC%2BO38BZIRwtjMea7EvNWtU4Q7o7DNN%2BnzrXmHs9Y4ouqEfm0WtIy6wrAKXDNk3OFZnnuNITDlQvDPi6WmL%2BwuB5zVeIX%2FkvFEICkk0EYLO5%2FBTWjBSg0Sxwx0P0%2FyicOChxOJ0ImmcjITsNZLUVfDgJ23rGGLSp7lEpDqXZD8CbsWbvER0HptUftyH9eDLQm%2F1LKCevKadGwll6iSpt0geIm3kN2BTtmFTCcYx27XoI%2BBe6Q39bkN%2FVSAsRbAj2kE%2FELLJCx5lAGFzwvRcdaVrcSIHW1r4lYtolNI5eiTT7rC7J0Y5GlYu58m3LQB4jkAbzQhw%2BXYjbQ7U1zrTcLZvylERKgCTPbAuziUeLj7wt7K2bhdaCs%2F7QXH35QfBP%2FUTiHj6GPip6u%2FHpaMDkyPqsktAmLexj6Joq2EOPh4HLOQ60cskC75zgHU3sn3l3tP9Y1WRkcubOPIwrlsGwdqEl0rxM40Q8ggDSZUNNpm5zKmlxA6qlwgjvcJL6mMrGTKLkjhgub%2BIWrR6T0jfYapZIk4r3Iu%2FjJ0CRIipXrIwg9W%2FyQY6pgFt4QP72%2BygOFveZ7VkU5Bmd0viW1sj804SCZKDs9zWyS%2B6D4q454sqA878EV8OvNHZ8kUqvIXJFTLX9HdKoRcra6mWgzSn96XOM%2BcFC%2BEJiCC51F8l139lMTGFKM%2FrBbvuxPhjoJIM7YkSJx6OXt6ZQx9OKYUIWsTc2IVMJck%2FfpSdoJDqHqDUt%2F0VItDvz4j8TrLu7dE8cWMiBglDDSnEXsjkIDTx&X-Amz-Signature=1c0ce5d8f58a8a5e3969ab41df504bb592475ff537b67f167faf6e0b1e21743d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


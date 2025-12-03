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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GEGXEBE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCxfe%2FeCWKy7iVVk6tk5ab6mLUm7FKVhdpMVZ1qJCjA5gIgBMBi7EwZQKVrBgi9ctrSWEnoygkfjTqVYRgjmwfXYXUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOTOgmKliNeUexr6nircAxeBG9BLw2R%2FjAszgJ6d%2FZZKmbQwb7KUfJqeTsB4OJWBmezYr%2B24NvIxpSGsRP8fVb1EU2H7EkDP0gJFnDzmCDGPg4ZzStDK%2BKJQKYTLqH6cgGM814PPGWxN2etS6DPLKe7ilF2rlOuxQpt6WPfn9qMLgJxrF7p4I7XJgQDiDL7iTjHPf%2B5YXMezKs23UHyWmJFmAUisfOxqomV7Epsu3WlRAJ8Sc%2FCPrnK%2B3kTe%2F9%2FVKYcUjMLzM3rqmHPS93JbuwvKBsHL7OYKFSGXF%2FMF4vhfJxRs%2BedvQGlLb%2F2N1mQSNJvAZZJpeOfpaf7DBSI8T6EqZ%2B%2FML7%2Bzml%2FS7IfwFwx6nLkJ2j17T%2FPqxlbdYmXrnZZXZih4PCvWcfvgPph2xF%2BMepqpiRux0GRkJeFArQShpTsMYMPgT0ck6GACon1%2B3lL6j3G57MNLHbrTw08GlTR%2FaPY6ZrYkO0WAs0WZ4jLKA1427VS7%2B%2FSPhQ7Mqxc2NkMLyUdqOo3SCWCCiaiGvK6Aoxfmvz9%2F7v2sEZSFQlYYrHmT66XEQ8z4KqfzHggVVePQkUbSRFtQGAE%2BcYKTIKs7NeSobVY%2BI6Ixbyu66Okci2grd7a627UleRRtsOnaa7Fuvl9joBJk6KxLMNiav8kGOqUBSl7bIXHMM0gQSfUYvjWXxz7pMaxszcp%2FkA%2BxOI2p%2BK8gasY5toGqNhz5uha2L1LeggGNCw5FeU8%2FXOEEg1NuXHPOu8lySSlnElq%2B244vc0IADrSXV%2B6SQi7YsoQrCYx%2F5zU6NU5mpc8%2FEzD46wfyE%2BXnmyOKiwHjafe6BPpDNjaUT7u%2BV5jh8%2BsuibC5u9nM0e5jkLrTqJ1ywCcp%2FIKnBpUxl3Bw&X-Amz-Signature=4072c50530889a30a3b26fae08262e7602a047eb41f259a3f179d5e21408b1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


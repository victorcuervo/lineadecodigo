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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GTC6WT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T090121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCTJAt%2B0ydq52th5D%2FMd3d3KtNvLGdGdALrmt7H2EcyAgIhAPElyFJhKn3mQRArpf1JaspbWYHmWe0KdHxpsPUor9jRKv8DCCoQABoMNjM3NDIzMTgzODA1IgyxAq07akFoXqymaWgq3AN9LmU8W2jcLgNvZGcknGAkZsKyOPdNnaxSDY6ccvgs8p%2BDaQO1BoAKWCHOHVaqrn11rBk1EX35IPWgeJF9AIhD2QlTcInV%2FAwvcX98RUjHPXf3PT%2FqFq3SgvJNKObBNXPWaNR%2FswEArbH0VJNQXRZmciR2%2F6riaDma4pWtwtVDbyDR%2BRnI7xc5JhGlUk%2BXx7ozA8eEDWSN3idyud4B2pi1L6cqqC1CtZEeYZMmEMuxjcQRMLXZ6bBcG%2BfgNqqw6mISLTX4LRDCScQvkQIofQNjlOueGdbzPX7GHorHJPiPbmRY2kZnsWdOws0AMXlKbV32BBxV%2BFobLP2aeHA3OZDTVlWXr1k6ejJN8WeudB0ezaCKCxDsodBXkUe4W1zpcRghvKYXUATh7NRCQnE73LGJ0I1vUGr%2Bu6dLWniPmAbLplChQxiklRvOAf%2F8LVWd8f0uWv4MdUyHpdVJOSCmlnON19qQjzvV%2BaiheaWNtbwEAkQBv1Ly57gaDxfDPucRBOISbFbjXU3lR6N9LM0oz826YoP909HAjXUT%2FDgQ%2FtwRN%2FQEwjOB%2Bad9VMYKDmzmxMPToAXc0FzNvkoGEO0Kpj8GrPuupsCoeuwksMDh%2FNTmrz9T3QjK2R7A8ceeUDCd9r%2FJBjqkAQTrp1FqSUuy6WYqi%2Fqm9KyQR7pTMpSeyVu6%2FtquuV2V%2BMmINe1TS97c4ZIex5ltV0tEg9aG8IJaWjmtT4QfM8Vf2FhBee3u222ImbCQZNHr1hrzpt%2FBUgVM3B%2BkEddJpQrkFJCkulDPWs9a1a3mRaQ0tW8FA4o%2F851cFHPLruekS3FPpQmc76G35MNwTSmpZFFNN1X9JrOL503T8et4Qct6Jbnf&X-Amz-Signature=aaf5895f9d1fdb774146fff5a2ea7cb8e258902c76e899b7f759c120275c2f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


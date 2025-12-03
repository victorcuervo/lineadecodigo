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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WE7LGO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICbENKAbnXh5PCvftENkXuM4r5CE7%2FbFyjsSlE3VW73lAiBDn%2FDtqoVrm3pQ8Ef8ZW8nmHoyXuhypOdS14qjHnCXzSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMsOPYPQYtYt%2F5NlunKtwDGM3ZgTsrGnT4frVrIy70sP3bN%2Faho6KpVZo2lds2jcImNriWJom0%2F8pY%2BKiGvhTHb%2FKkC1ZvOPJ%2F4CA1PxY3snpGmAP54wKHkkb4X9KGnYK3nJCpLM%2B2H%2BBHUPjjurxZtoKBrM9HrqRELyYZt6dAjM%2FRNQFOA3aRfWCgfTtNTeTWYqbBkX6X1hJF6FYp4pta8cpsi%2BhOruMlxPwbsH2vNN9V%2FkRrC0Od5tCHD7B4QlgP4uaJFCkpxM1RIN4haONVCLBon5Hq%2BK3PBLfV3nsQHtB7ToHDt6SJjMfcaWbRNZFb5ZxVc9cL46bOPgC6Ex3CJgm%2BQ2%2B11xn6u5%2Fk%2F%2FNTZCfqqsfIJiuJ3tRkcNr27B6CVhjpRxb4Ltmws2domu2wHKykWx83%2Bu7jTaByrtliOBHIaeBDVcyEwLAi3dmSznqYLA1342PPbfKL3Z3%2BGlgeLBja1k5K07q6MZbFq8E3pxiGVRrjUgPUvJ6tSMt%2FDLlbf38SM4zes%2B0bpLePA0ddLmlxfHONJWX0heDY%2FMNYLEGvr1PxDkMZzdUbr40T5FTl2fUmo53Skgbzb9utetPmI0ICQiYZRPkpGSPHjFAlUEjEQ3bbIUsCDjHtI7KN52Oc3T%2Bs%2B2l8vB3coQkw%2FP69yQY6pgHNEYw0Aml8XBGUwEF5zA5ah%2BJsDFiB3oFDSwBMg6dHpbp%2FeJwL0S%2F6NrR%2B%2FAN731tjfA%2BO9FDzvkLxNd%2FZx6Xm3WlbJjAeooEYzNgEoCX4RtcXmnLETcQ7zW%2B3YuWt5HUCGlV1kFVeJUGdxmMQfvKwFwioO4KFNFvbw2yaP3IYvu%2FJZZod9zxgSg4XBdrqSSxpXmO%2F2Hcznd3coIPWLwcQPXvGYyom&X-Amz-Signature=fa9d2934d7285545a4bc3f9e951d414622e9b8920c7592bab14ff67bf64e7f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


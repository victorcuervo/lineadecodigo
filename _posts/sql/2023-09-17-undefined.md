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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZJVSM4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDy%2FdVrdHbnjHNF%2F83tHwfgzekWnmBO%2BgXOP5VsUQWJUAiEA3DvshOxsXRefsmBW94CQ4J8GNUbgAgqdBm41t0khrTgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMfdtvTedP2iHiHhYCrcA3%2BJmEmsO2EZRU19flwlGkvnEE8Cd8Xm1CMk4rJnScs5bmTy1y7lZW1XW9cC9XFpYWHfSbbGDgkKvxgU9IbQmDCkBDY8tRdGoq0B8zDb%2BrB2mf3lUuw%2FYSy9A1DIIrhJFYXS9RSXPlIsZhai%2Fu%2BMYiRhAUvHR%2BSKrAGlSwkuH8A%2BwPqPkaTNUfzCKlWagmTTMsJauWzOSoU7W6x0sqBrUSHPciNnfLmjn%2BwP3dYxqJXeRAT4zNJGXJTARfM97IhdSsCYsa32UL2433%2FS%2F1nhkK%2F2ZvWjNeTnObRUPBOYQ0B5LUBSUnu%2BNBg0qs7wWeZBwuBVKKjWWGh%2BqAGfzlGT%2FBtuOyXio2ecCBa3YNfygJifdh%2FS%2FmQoSGLcgS%2BkSB4mmuIQrE6ZsJ3q1r6pW9t9sjQny3h8S2MnsybEkT15X%2FXmUR2WY0Yk96O7Yv%2Bq%2B9K%2Foykt34r6IG56wt2QN8DkhbsqdCu1JrLnlBd5nTz%2F7Cx7045q%2BTRl%2F7g0zC%2BXFis2QUhNYFUaGRtMznm0Gmr%2Fzkaj6UiM7hs8NrWfNj9eppKkCNwHJFvKy4otom%2Be%2Bf%2Fka1DnkYksXKRglIi51w6FIKqsaErLy7qtsZy6A1vC%2FFzwWIyVeLFB2vswxszFMKHpwMkGOqUBLIqQEgYWFDAs1A1eW5M%2BIkYvSqG3GFl3UWGg2Ne0LfkmM%2FOQvZMaiS5GzbYjM0XqDFu6S7nF4h4eSRoYUrGKShGClALNnQL1wPezooUwYcab2j0VHt%2FgiunJAmJA6Ybc8PYWx3Yo1llO2ii5izHxCSOq420oTXn%2B%2BXEG6u73ssGcES9PZHOSnevj7ZpUXBwVkEI5boIUQD07aogHhLeqb%2BQl57vX&X-Amz-Signature=c68c962e119d5d5dcc07f115a44a1f88a67c449a4c630270df26e006ea2efd2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


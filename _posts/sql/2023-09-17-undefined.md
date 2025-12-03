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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVX6RNSU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDUE0hT8JhiywY4XqDHBZhDUNYaDsKW3NP6X3tV8cGIdAIgVnxkcrTFCbA47bYjkRX2%2FuFknM20sV3JMC6pduJfaioq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLJeqfo4OHzLn7rzAircA1zbRXh1BaNkV6myue%2BNqBhFsTWSfFm%2BjbFdJoSYMaU7D44xlzqI78ROuF4Fv7kn9k8j7RMBZT%2BUoK%2F2GDnoQA3g6DW2nwsqh4npZXmPvei8qFxzLbkJRmfc8V%2BwRXTNxOtr9uALD7Wg6zMnf6xCXmjkWLzq4yQbM5kJlknkvOaWmO18FiHSNo0U%2BQ39Xd%2B0V83F2gG%2BYVNLZgQKJmcmVQh7yzdFAEX08skSb%2BtTB%2FKjpGOaNe9S71OS0gnZlnKJoEPvwWbsPkXsjBCDdKcR8cpl9rahpxdmR%2BdnF2jfco4h1thdIZ9Iu7PiZuopn1Q419ooUVgbK5%2BHfiowFR3GXKiefJBeTzAc%2FMmN2f1vMIWXdxk6r6Y%2FJXrEBC3pxBymfDdDAE3d4Y6wGX9FJ%2B8X9l7lXRVaInlJVYJPuB9rApxHfdbN0NxphXPgH%2FZVnDQ662A2O99CHUmL4wrhBnn2clwBUsvqWagVsPqVlU77%2FSVdWjCGgW%2FEWKNOuSYGDV72dhhT9v9E0mGrjBUj7KJ3QeDtTZV3ZPjKff8NokFTcGJOeRNJQvtDXkAGIfEO0RK4MIJ0dYeuuCPwkN2%2FDtYhppGPEeylhMc8qXz0VNckuhge6fFZ4KyilT%2BhpNgnMOiuwMkGOqUBsPi%2FHDd4OckBc%2BWa038uFJupG%2BnB07Y1dnVFX3pyGFIMCmVoo7NMXbi1jlrD75KAEgnQAhNcte0QlFYQHz%2Fu8n0QWC4DeZmHN0iwT%2BTYpk5Ke%2FJilLqW7JJ7q5MBhH%2FfQASRipoLyb18q5Zb9KDZPeJMSz1MVXFL6DtSQhITcI9tW2N%2BOzNGlK3fAzxQXs3v8db%2Bb5mimOzOn8cvyTW2pvktgp5Y&X-Amz-Signature=03eb9dd2f4017ac930d5de6d0262db7b4a327b9de283ac69d4178ee45cc7e414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


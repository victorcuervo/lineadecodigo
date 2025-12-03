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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6DBJ6NN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIAJ6l7tV3pAhc1cg55rv08fZGybk%2BvRLgB8pFsCBRvQyAiBqqFqwuRtwtqZzjXVgp1NwWqYc1raghV9oJDge%2BUjfWSr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMwNNcCWGS7AnRaQUkKtwDyAoiqCO50KYe0308PXhqFsbDYWjJ3zd4xk%2FOjFek1HNqgg2751EL9mCb0d0%2B0KEz6pydRObcDPJlKlHZTSjUfBWO%2Bwolz1wCV8lj2fgD21t8r%2FXWGHv5bJNN%2F7eiORlqeURa%2Fszf%2BGokRhKIoslPxk4Wn1DtyLNeD9tBYvSnzNTXm0uGDM48yeEptv%2B2bWmSpoYHllCyRXiSEjhFuFifw3QZkH5pnnL%2BwD14fpgZYEVAYwLRHVzsXyJZxpBDrmzKN9MMVIXl7Qvykbxr4tmUqDOHvkoaWeNegHV7c%2FUEnYNLhaX5w8YSMc9yIiWRGTWGXezNxMCxrLsSxBk2jVrrQuT2ikHOULTK98GlbaQBf1gGC3xcoEUaIvlNdWdWezwDeKzF4z7bfj2D9r5vl1Oa240Yb%2Fq8iz5ptu0ZoJwIvxu1vzfL7tBe60bjRxVECk5pC%2FywjHEjp%2BqO8h7EoK%2BLxflKwuNrkHdIH42Oq6q9YzAckr7lrPsJRfazxThc9Dw2pf3%2BtJoDqdeyV9O32pZGZ5yTTYXE4b55Of%2FD%2FxHLfVJDSgQJPXQxjXR57TwokrMd8d1asa0OHBfgL5iMwjXqN94RLNZEZoPbzJtkCGWhLx3916f6Vq7GCPovOaAwlabByQY6pgF70CxNI8HLCOSRYHVvvvCFIBNNowapTwpHxY%2F0NnsYwmk2feTnQ5E6uKFl3D%2BJcV8od2R8vdK%2BiNPiMf1qcZVXd6%2Bue7xCbpVASgiuCy1Afpu1fhM1EJWZn5uKOxH6GkInEoz0hF%2BGQlQ7pd%2FukH9yNovzwwt%2B2ynYKKthx6%2B%2FFTCduz4joSTx2jaGW1r8jrl%2BYZob3wUyZ4SzrGHiVZ6qMNUTuPEA&X-Amz-Signature=9079ebe046a969895e15a475fa2873010463a09d36819fce77f3b50bbdd640e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


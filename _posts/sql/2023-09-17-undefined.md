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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUYQTEO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCnXAE7ZZSZCjOI8pBBbNAoe8fVGiBMC%2F9Hsj0DmKB5aQIgAMB%2FN344JAJCjkORDRQBTUfUBrfI0rXilvqK5GaKaPkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGa8Os7MnzT26FH3SyrcA7nw4v7ZrUmmXo9hDEC5O0d7kEdDmMEkKKSaoPljKetmZ9OBby69Qdb5Fty8jvpP%2BSRg6CDdFW8ITJwdrF6UCyiFsdWRhBbmEUGLMwu9GAk%2F1X9bkslM2%2BsRJCBnBvQAT8zcGZ3IoLbxLeVcMzVVofqtDYImAeAjA5NAjdeftFUEOZguw%2BsOO%2F0QpdwWrW6nuN64rwRaXDROFPfa%2BQto1j4XYQeYdXACdDyZuSQGcMdzt17KVMa4g6D%2B54fqqlWitb23FOO9auz31Af9uQ8tFKO%2FpwocnnsaQM2SDid8E77jw5kwnHaurD%2FV5aZo4hNP6lK3LXb5iG4fflADvoxiCZrZ%2BsIOT2hZ6RtRFGUDEvQZF1QHvEcSP6Y6aOeujLA77dgmEPZ5d8wgT62HxeJvgY%2FZfguYBS%2FEJCPvXtujLWtWSiRGZY8CCa82T21FAVB%2BPYUnNABUVJdvrWpNWBMYe%2BVZwiCrR66vcMvXhYT6BsLRn1YXrz96Tn4v8FftZnIx8duqaTW0ZJzSgCpFZkoRCiTc3irTAoI93Zj3ESuPCuhO648FPTIzgFaX7KXx4LencdY%2BDvQZtjnqOLoZylIdO5wD9k7He3Sa33CXsENFJkWPGdJ5lqLPgJPTLM8rMMf1v8kGOqUBBl1EwTJ%2B83jp4R3U2P5LdcLffUIX1JP6rDymT%2BPWkaWJ18I8GhbK5kfcz9%2FOH4utb0KylL8DDOcyl%2BpYjpiEeGG4dRZDbz2tqNwI73yfuDfeQgcDgUKSGeYzs6pqEuqefWf0P4nIP%2BR%2BEq6VWmJnrLdNpfCouXCUlQ%2Brvl6TcOyKFLXuYCopQMCfSISTm94r5SkuKg4HG%2F5WZnurt2RMa3e6V5IJ&X-Amz-Signature=c59621d083047fa77056424f4cbfc742693a5100f1f31e174aeb0922851aa72d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVYPRWD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCDHmNBhQgQ4qjI7G2zjbf6Mkmna5n6wU%2FqGvARUT3WigIgdKVf8zxK5Lkd3IgevA%2FJP9qquP4S9zt%2Fprts9fZdMmoq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFFer43lJnEUQeUmqCrcA9NtsYiuhQUsZWBTopdDlWhepPLOt7MBLOM2xzyv%2FK0hYXfu0h7z1YcrqbHtCSMzYxo6Lpx%2FZXgjj4yr9HrFG9EmxGPa9dhDrnVg3UFHdgAIXILhkdjWYeeG3Dlvz3rtDZ83ZcJG%2F%2FHuCvwP3JaOauVrwnc4bgTAaX4SFD%2BDw7Z9WkT2Z729P8KEKrht4F0sJIEorkJQJ42nzWiOWmBToIT%2FoFx3G6U53E0CSE%2FmdfVhp0asjtCFEwxbblVf6XeixwLc4l0QUbGuAOoMpzei0%2FZ8LGpsTsDFcSCXcQq7cN3y%2FvI4roKRPzgd5m5T8POGL%2F7lc68HvdAwRMwdt5x8sHA5XpqX2bR9tCi9mBUtYQbKVA43fKjndGmO2x5c6TMDsB2R5oauqyeLEDxWsnMuHvE2nhoFl8R2TcGuMfhJcrwzDekejw9CQq271yc6liH%2BbgYXWe6pQV4PduIHO41puhOViRl0A8LdUB%2FZjCGiyXqVBCrzbO0%2Bkq5E9ZZIDvdb2HF0S4i5KbLBW4imvGMMNyFLUQi6jpQ9ckXGSTxQJn6PH%2FcYWZzE3Uedxi1E04ZIp0O3li97mRYBY4Bxu8xnQGcY7vGQ7sVYI%2BswG%2BROHOT8sieNc0nMK8jvgekuMJiIwckGOqUBpVxdq9KPcciXM8DrqEwjIdGpieN%2BZf0Y%2BIWNp8AwTM4zO3EARyQG0Ei4aybOV6vHjfsuYlBaQF%2FwLDNf4Y9UFWy%2BbAoI7coKkwjHKS%2B6TjNLNBPDPvyG5EX0mGWlqpfTPti5EQIxiXWgVLfwc8S9A2XNsJZ7F9mZo96ba8FTP%2FCdpmlec6TrzJwy0%2B%2Bair%2FFwfWCZA%2B5U%2FAEw10oBrN8k8q9Dyw4&X-Amz-Signature=7fd5a51198590d48b992c800f42985de8678c13c3b91c7e0497fda4a3ab06cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


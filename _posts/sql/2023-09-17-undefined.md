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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJPVANZZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDw%2FEJsrOD46zI1DK7uytnHXkzUl8l6%2BcE1dDz3qmk9KgIhAI5YLFETIBeNyDN7Q6%2Bq1KIBmmR3Uq%2F4NcoPbm8DYyuUKv8DCCgQABoMNjM3NDIzMTgzODA1IgwbVpu4Q6wJXeeCYxAq3APdN%2FvlRXPzqnh9tBzvhjwD3o257O9ztKG24EEJ5%2BXTLO47g0SLdlwA%2FXRKyXhNdJ1E3Bx5uREmX2nqJ4aLCyM138spwPpShDGGUMQF7WrlXpiwXYKFtGG88dVsD7UAHB9e%2FjBmAMos%2FXAJ0Jl0PdhFzAR5rTVpUSUYOAaBiMX%2B9U8B8WL4V8zoal7TMb%2FNVPFiMsHY9zvAsXGK6dCX64RpJlUdENomLYzuu0vUb2sOEZJrWWLNh%2FQNLGfzLHiV7JhCfZDYoyF85Finl28j03R9BtNVHe%2FW08%2FTMbr0kAHCZah4YnbHEpp30qf7wefQ3Rt6oJpQ3NOymM1AhGqi%2FEKS8KhISO%2BL%2B9juhCpHqI4teFBVrdDiJIY0v4MJmdotKawrt3NTsifjp%2FKn3ylxMZQM1YXmSpA0UkJQucUMxiH7pURadpYADm8SJIYWIS%2BYgPLS1MrTL4Dod6SHM2wU48rAE4VAtq3TRYqHMpIRIWItcEFlwpS0UXiJhcZXxuSSeNnIwpchO9AIcaBgOwoNvfXVskb9sVVUCK3BJqQAcZi%2BzcW5vGlAfYjp4CwAyUH0iEnoKxu7NnEQfzcBySrF1ScCCPDlRJT7MyMcmHs2gDOsx4TlSP%2BkFwLCFUPLQDCIub%2FJBjqkAQnBLu7uIETEn9hFrDqGYUNqvLPT2WTj2HVa56GGuLJlhNHHn3739%2FzIrRRUIcaaupHgOLDDNPmRcaqugQ8y8tco8nOzaJhgcKmT%2BOr%2BaHgAZn1iQIEh4troQXxaHAzoYtr7Hlrkxv5RkTWzEjZmHBlTjgV%2B%2Fgj4NvzyWY5dXP5zbyjXAOB3nettwRW7IKNofFW0QWKBIVTpSjU3XAkwQal%2BZtnY&X-Amz-Signature=03b23486393a4f5771831a1848f25de163353040eddcf6b3b70d5fe9aa435c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


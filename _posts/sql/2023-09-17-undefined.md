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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627NFPU64%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCLjTcZgFGvsxv24StpU65JeZ294HZEkBlLD%2FkeTBpigwIhAJSAPXCKaaJjrY4dnCEcilXM9nqaMK0dhpGUavv5Gz8iKv8DCCIQABoMNjM3NDIzMTgzODA1IgxcULg%2FcjBbQfFJOGwq3AM2P9nowM3c2LIPposr%2BkIasUdi5FLiRhG%2FjVBfsgHrgYDJL0htOlV2Wcio5yCiSCVQsvJ2lTXRinR%2Bw2oCb6G6nlmUVFkdAdZA8GeUi%2BzeSknAazIaO0br15SMDWxgltq9jLSwiNio2cik72EUjBhqDEar1TFM9R3891Qlj9Z2w70zZFpxF7skce8HUMlvPm6GHo1KCaxDQj3ZF8BKCfMEt9Igm%2FgfgEsEQN6TQ6jG4SPiW%2BpdjizGC3e%2F5S4%2B4SW5JxwbaYzz49SYsloi90DuyCv09Y5PNnScIL8shyuaXx2vr4QnVx7pBmYxFRL59xkQk26MaS9hn96wzVw6naH9bcpCJ63cShaqF2q25baruYRMmVFVPF4nU1xU2X5kVf1BnHwughPdXvw7i2lNSjWSGvafHvD6Tpswz3VXmWsZmp4FDAR0M0uqBKhSa%2Fk3gsYZxgiO6sDVxoYgg9F%2BN6Q6WeGAJVdUaZiEx21ryLFAQdYMM9hKfbQupwBfTcj%2FKVIHk35Ns%2BVmX%2FTdIXRwOrMnOsanP0J0N02gvcl6NE10nYLiFXrfJ0m5zkk1%2BlNI%2BqMWQooYB%2Fmkvl3DC7eGb836V2rpyBgLU04FiFzKbkUkboNBNIGRgZK2HHY4sTDIlL7JBjqkAdlG0IQPCoDj6gccXrR4smHJY0rVnBW4dY%2BWUi77K8yh1smeDisma5txZlyVmx4ctT0VnPkKCpHd6hKw8jB3q8MQgVYCLKSsh3pfNKTH%2FO89DVD4y2exLxu6u2cTA4xaYPXgXNIDIGRPZGd7ODqnGggpnN%2Fp7WfwkFq4R1zfXi7kMiUG5Oy1Z%2FvDKDZ%2FII%2BXLPRywvG5TDzriffiOsip5mMMOdwQ&X-Amz-Signature=fca9641d0bcb3f171a70acc0f622686c36ed9c2acd5daca78bb43c6de7d825f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


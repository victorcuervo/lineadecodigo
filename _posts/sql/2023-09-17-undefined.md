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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJWDR2AN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC8QsjMJ8MWXmwKP7MJPml6iHfgcawa0Xr7zcK1ujl5CgIhAKY39Vr1DeV6G%2BX5j9yiRG3eAo%2Br0Y4xufEfA%2FYFhVQdKv8DCDIQABoMNjM3NDIzMTgzODA1IgzISShW7C6z1HbYQ2Aq3AOAKoxtBiKvMQs9%2Fz4FH2DAxY66FXsdwz1F9TXlDjeVtcM9Jrjt3glTVtpkFi56QLiXbH4k%2BISVS9m5Z%2FqibHaBpN9wGY5VgRsBHS%2FIZvvJfr8cN%2Fw2l6xw2tdGx%2FtX9YY0hwPWVfbMnGqGt0hUPxYivgAsXlH6RXBbTwCAMyJoUQOXcxQb9Aj4S%2BJBhKze1kZQsekkXo%2FGsiNyF3zhUtGSvjC7DK0MGjU2vpOwPOJfjFgSLZ7hSvQsYZteFh5OT2gf9mMC4WddMWxgDWeY6sKl0dzirDq8LxXxctkmFVV1mtqwE327GOjPNfFmbm3tOYb5r0AaWfCOlfvU2%2Fiw2OBP8uvMkVaxUzXPLSMYfyIdZ3iPrX7IcmfSAMW269Vi3Qho2aIeuxkld6ywS9kbJLDk%2Bzz7G7RxY%2BGrNVLuzQ%2BKMtrBN1PhjTXY7nMQBbAmSwxbKq0ndTPqzrQb2hQdavc%2BtqgrLVzAtmh4rYgzQgYgD4odbUHprq%2FFYdTRxHkEBVn4ADXteiQbkCusfxTU67QlbkwfPrFGrNkQTLTQCh5BnS2MVkHeyFrkmMUqruMScT0pZdffTTmnbpwICuS9xvWKz4XDAsiNo4KOPqabo6guZa6c4qZPkP5Hwv4E3DDr2sHJBjqkAf5zsl%2BKPZT2V54NCVh0NecmfqY%2B%2BiLmBtpgxaX6sqtnvNSkFEaHw6xJB2jAHUcmMsNG2RiB8jcWHpd%2FVbKnPOgpTEwlWCHdQe3gYQs%2FnTqSwELIQel55UT5GLmAYh93W41E94%2F3jwvpQvQ8YQS3CVaTZ8jG1imcwVIu96mQ4sFXHvFVO0QsB%2BRLkmAIlL5RIOM9jO6pzqDX5FKGixdwn0X7dHkI&X-Amz-Signature=1b64c66990e5bb577728817530a0cbc54a5a8a675b6aac014e98af5d3fd210bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


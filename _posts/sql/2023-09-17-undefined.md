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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP2ASIDA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIH8fW2eCJzLWkj3tSoXWhQQz%2B%2FsL%2FmgLjwG5qlI4PmtxAiAgtJvum8gENQNDhGSgHFunybSEeyboTF0v0cLJgRut6Cr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMf3llOtPF%2BvwdZLYyKtwDYy7MgbXG6ckNGhG4MUuIfHo1mbNLQZhEmfhbgtAgjgQxhLNen9XcMAlsQ4rRXkd7ULdtE8v9gmMPxx9ZY27LGDHaJEw2ZX5e7EEdo%2F5u2WAmu9NflSdZlqK2lxHycwxpEx7LOKsd9%2FrR9UbiaPA2xXEiJG0ACgj7C%2Byk3aACRIZWWGPqx3WzWQgh0lMHRYGXtKIUCjr%2FoTcoV0N%2FXc61phMYb6ZTxbpAZNBsF06tp2xaIuxCnrdKNS2wP8tXfgbqKskmVvszwJLaXD%2FePI3IGfiyUQKMaKvuBJLW4yd%2B6hv%2Be7IBVvQfJt3gwOByDwKD3oMB9t%2FoWJOW7pfpAzLp8aA%2BsepP0ZhB0l9bkumE6E%2FAGFF0D2Y%2BDV2cbKFuJk7WgP731iU%2BkYtMAbZoqVV%2Fsi92P%2FizsJPXt4c39ZlL87qx6usJVhCIOM96LztzQV9R4%2BpmRi8WdANFUnI4d73eA3Ha9Fh4Xj8n1cdss%2FKYqd9c5JFmLztpTgP%2Bife9wZBMG5Kvdk7rjjB4%2Bt33JwjhDWPeHlPQ4gkNUPB3tNmg%2FvYi031MBpct%2FzQeFoEZSNSkiyampVkR6bNXMVy6X4koIsr%2BfNNIJDaPoZvMECost6TSaguj3aF5aL19ZXEw3bm%2FyQY6pgERjfoiF1rs0MV5BhXlWoYUM%2FyBKTQC6tQIHla%2BRIU20aAWLVXCc4svaCIfZioptXbDYmc5FZABSNLE3%2F8UNGhcx06g2PH2tTeoLrYrF7mk%2FocQkQjPdbXYz5s6d5M9VoMLlqKwsrLPiNYjkx8R4v2ND4jOJVWU1S6q20t1QwAKRJu8azXDR5NsxFeywo%2F8RbOfTkRSm%2BsxrVzLYcOfELyGYTm7PcDi&X-Amz-Signature=e2af2cdf71fdf6c2a7e92f3b8015c2bca7389e22ccccd414d70ebb83194d518b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IOHYRWI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDIs%2BngpxYiUZ66nrpYawij2AxyMExQq%2FpjL7R9qbG4zgIhAIioR7aCj4TxU1O7HiCKgf%2F73L8LFzNLbqIAV%2BEfM%2FPoKv8DCCkQABoMNjM3NDIzMTgzODA1IgwXIH1Ho6gxGcfQk%2B4q3AMCuRkKxBusOf1FPU2BqTxFVVRvEpXvDu0zI6HV8M5CghpD5YItKFDsShMz1AAvBLT65UW9HzwU9WuQPAYNoLjuXGCYnDcVGVT15vwc1x07Aqkodmbrji3X%2BIxiIfBVR1CukDZCBecu%2BE8%2Fu4JyVQIfoBBG5kTpRY8N9R6NBVw8sDD7GSTeYgy1NuHx%2Buw9sYJ88AbT9GGV6RaRDIAbqNLRaeBz9IJF3RUoXAVN8hMVG2ZMM8Jdr7axvdX7jhJakqjsO%2FToxJZ0F%2FVQeQTcbiyzgryiVabKrnbk7VI2y4Cgp6AJMTj9cqq0xeq0qnwWh7MX9FO8mf9RGZcvgkAHNXnM3EzeQOQQmZs2KDNWuRte5BcBMYUIqef2AQivUiQ3a0lWv1oyjzEZO5TJ73U8bLkzyFwRtoHY7JXfIuzBa%2BKXf47q0FHOKarYV3%2FV1twn9jzNAK2zm5x8jptQPjaPXCf%2BOXmonrAx0fCPvKFiHKg5lZBpJ%2FJklwZUet1IFFkghqLisiW9KTZL3orFl670gIX%2Bz5A%2F7GeYIqqm98yGJmTfoIou5uP51PRa8Nf8ipAaAXvBWJ0aSlVIozKpKHtjvIPVhs2KbZBNXbwLaFxKj6w2vNav8rlnp1Xxvu%2BZ1zCk1b%2FJBjqkASC4KXKjgRJvHa9epFz%2FXuN8dOQ8aQULdj4sWi1XvW31oSKdqnyYcranZ17Kh7Wyw6Ezuo%2BeBk9FuBDBPTM3JOf9%2FJUebPPHoCmuobdVRnAlqWG6uYo5lepEIUM49W7zM%2Bjrmw0taz7WJWUfR53xhV9cQ%2F95npCLcnKl9M2szMQbjeseYkZD8cb%2F60iHI6J0kFUX%2FJy5eHznN3RxqTIWgaSKV3AO&X-Amz-Signature=bd13c5592da4dfa868bd792bb65a44e7c0a81df30e5866321a19fe55c9b866f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


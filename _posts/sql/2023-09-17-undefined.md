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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYFLRM32%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIB8TQjFjazCVLtOB8ft2trqJOm6E5zqnK9VVUbXTecROAiEAqTFGf2eX1sYG509EsfRCY2J86XgDhvJo%2By4TXnZv3w8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCbs0kzSQcdd4METuyrcA%2BnRKtZXVY1UVsx1e%2FCkLqd4mHyQHhKSZBTcWn3cd8xi0KVzsN8jocwwyDxfTjwcx6khYm0BLfmcNmjdszd5U7OKY1nZoBLZfRyY0I0Hz%2BHyGjHHTqsPY%2BMgQf8GDoRzLstbKqXLOy%2FfePyRF%2FcMZ4qZGkv%2FgC58h8jRzTkxzEgbZuk%2B4dtRSYVoowsdNU4Pc7P0OgTz9AXozH2mtx5l%2BCxxFgmKZbawzasJkjeUna7dmHVIK%2BjuGkG8wGD02ZdlmkF%2FVtRD6SieGxng7HFtEMLccYWCfHejkpcWhNTlHP81xHNxOv9KxNozy662wM6mjsNHwhygQNgqJquq6M7f7ZJ4l851nGXnpx%2BSEaobJj1%2BI1I%2FSF71LyRXSzSsqyVNNWz%2FGZGKgG1IvVD3KfOz5isNvkate%2FL2F22Txm3JjNqdVlm4wc2cvVQ4PqsvBczZLx4s7YMdfioirLRZQAiXCMn0PKXFGEYITTSuSCMYYXLYen86%2BnyehRnHjJTPH9YoWVGWSvaupmM9IqDTNiisnnt9YPlx6bEBcULaxMrN9FWtduQjZe0vHD6Su4QO9109v4RR%2F3zaIOvk%2BBUrOzaOictB3si7N7NjW%2FeCmHC3a7b2%2BAKpgb3rHgPxWmc0MITqwMkGOqUBVQG97918MMoRu5InSBvZl55Xcu9rlk84MiaalfVviA%2BKfaKEO%2F4AHwI0k4Zq9gZhhAhud%2BBqVdTUgSGgiTMMK7wn47dPHJEcV2JDRY7RTZLtR8j6aHKERZ2pQ%2FfmnPRW6f1HtTzFYUQyiuYfa649RaBWcEmFw4jL%2BN6Jmupmxs5%2FRCDiVeB67oVVZgu4ILczmRjkdjbVmlGTllnKqOPczTYlOcDy&X-Amz-Signature=3367c05cea6efb9c9f9f2830870e25c792029d8e59ffc756b4a9584ff068d528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


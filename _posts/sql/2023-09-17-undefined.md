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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO222C6C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIDI9TfsyGsKuCWzHLmUc8oS4hJYFaW0S7vb07VrhSSL2AiEA%2FhSPIGSdXj0AsBz49ZZu6ZoA0SKi2iw%2Bv%2BngkHcfy4Eq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDFix4MGkS5jZAlehAyrcA41E3FVLX3hx%2BVi7VCMAIW9hLIIV%2Bz844EwlW%2FtIot9wDZTGc1kkQcUywXr%2FTDRpk6ws4tX7neVCufNBWCaO%2B5GSptMtu4QW8UCP%2BIU48pIsFnHZCM6tZMBJsYgAgjK%2Bq0M%2Fynj6UjtGt4gtiMSeS46ixSPW3%2Bm5ApE9WuLwsK3MOiEfzdDppGXI3oltvlizFg2Fk91wQ45LwDo5sWXP5Maq9e4uQ5yAhTMufqHbR9XU%2FbYqg5GGakV61PAnPszA81Er9soC70htYvtgMsLc6bwRhs6uCkEehWCev1jKIYTtQA2EzwtOckdLHPKpHwn5BvGBD5%2FRT973vkAnsabBhocmaUHMyTveDOUxD%2Fain8q3fUG8SA2xe7SsA%2Bhuhmiwap%2F2%2FmzwnxVXtUEhMnYrJmMqTTLxIfq2QZ7NuVq23FRVnS4KsORY60e3lw5ddvEGOCckHy4jgOyUECcyRCkm5SpnmVceykxQvkNNtEpit3Em4%2Fr%2F4xBjbq6ShR5GugTeeh06yXG7RLJNuOgQtYt7JbrFV%2FJFzZaFbY0TIW4Vb9cWb7lCtln00O1xgR%2BSbhkkXTJ60aO5IWBfZgP9k2%2BT7TwKQW3ajXPPzbTEB%2F6bKwWDE5v2hQ%2BEXovMqJ5WMKmbv8kGOqUB5wuXvbL73Ix99c5qLis9U1WTFLJkT6z%2FHGReF%2BYUKMmqs6ACa3YUTaHl50taJSwqM%2Ba65zhRvyFj0FBpj4qUx4Tl7avWiWO2UoQSJtfs8i%2F6WZ2tlPbdemyGC79riotws7plUd4AhU3aNLj8nuy0tgwnRvx1gh3m6GDyua8KNUtuupakyPxY9KPRDcxj%2BJbn1aOaWonG39oWs7RRSU9y1n0T1ZZz&X-Amz-Signature=628e395adcdc1a5de8dcb449ecca708b264cc4e5c2103bb5ddd5d6755c7cd30f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


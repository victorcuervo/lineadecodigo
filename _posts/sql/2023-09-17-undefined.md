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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN7LK6GE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAj%2B%2FJP4DLy2C7rEaC6Nft48wXeixlCdlXLXQbOke86rAiBtwKu0bvqyAX1BJact9yuCeI%2BwNH7YZE9BXNE940fvEyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMinf%2FmkmaPH0R4S5IKtwDfVYeZ6pOfH%2BEiDsh6Q%2FN5g81AnADqowSUnDPFV%2FMkLz83bH9MTQPtP4PuCj9YH3NdukLe4%2FN9Umk1438Ma%2FPC%2FOhOK5U1zPqFPGOrh4Ik5llmFOdmnMXYorKD%2FW0WuEcM%2Bi6M2Dl7x7tmsolNsC0mW2VJf%2FJkACnByQD29m92KOTRtE82gbXOh91B7Dkxm%2Bwd00UlBSildVs%2BpyknWng8MSkAUA98juD%2F0oJY12CTbKDhQD7A%2BBhKe83%2BHByNoBW5oZf3TnJcqewdfFMjm3OZMweyES0YRF3D3QSZ3a3o5YDp1WKeAOgT8nCNWNZMqCHjO7g3wOZzUwuFBjs%2Fx9oBj43ZAALCp91n4SU2CW6Ek4EvlC6y9I2FLiGM5sASg5Rh0jza%2FO1Wj2N4BJXQmjOHdRFCxz1MWlfGt2aLAY3Q8Sb%2FuuqXi7jdV1UQG7ju%2FYXhLsPpNjbJf8MG8B%2Fart6r8EN2HZ5ccmLrFzNDzXCc%2BkBXG1de3MOQ3OUwrAOYcmRjcieRIQRLFTTRtRTK8KkiTJod8XAgsd96g8VfEWWrzBUpZ9Ai%2FsAPWHPEmbAHpx1Wi94qXDPTYG%2FmQwvtX1UsKAMwQtAjrrGBiUw6DecjSidVdirI7hYPpL8PfQwpJa%2ByQY6pgFRlwdM2oAhMeEbznpWNRf388gIGenaHTjEOpDyzvaOX0FtTQa0aqG3zpwNbccQQUr12X8wCldioTVwulz%2FGsw7tsfcsGEZFy7YuhLjMoS%2BKuv7sYZQRNj%2BfRbJdtqAhIH%2FUwlpMTmjJcKOUwhuC2FSy%2B65b1yDNyAF7KGhcp4x8fzzF%2Fz1QtuGDHAESpI1fL8FCO29I6Hwzh9dNjh%2BnKRtOSIirJA8&X-Amz-Signature=67bcf26d4ec9d1d51e65df4c4ad2b5ad4a4ca8ea1b3adca53b089504e2edab86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


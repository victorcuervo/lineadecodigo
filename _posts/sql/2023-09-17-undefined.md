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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBGR2OCP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T045931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIE2hAf7wHuOOZ9Tm%2BhskD3JX8JL5YblcQWOKSS%2F1Y0mWAiEAx67PLA4YjRswhtuiOSeWguEE39cwHrqiJnki8wwYCcEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOHt%2B2A6rXbt2vf6ryrcAxGRMMY15ZZs%2BtHuO8Nb02eCJ9MvfGRpmcmVN6WGu%2FqV6Fta2YqZcGpRVrcN9iHydNvHsW6MNHPN7IWyG5A%2FScH4px2pol8lcRVTIasnsVy%2FJlrOawbM1Hr%2F3K%2FkXTsCI5WUStsx0UpOtJtbmlsDevSYpahtNv%2BSpOxJhWARnKGzBlRNE27IWiSWQIvL1Btojn7NnIr6DrYq%2FMWWQjAAdonqNB0zvy8zjw2DTDiPDQxOJElkFWEen13rx78DKHbmMyF21gsKIhxyG1xomCqbpsZ%2FFzWd0Qzt%2Fu5q7yCUazAC6N2GJDp9WjXnh0FiwCP1gQtHlvQKEkDUNAxDkiGDvi7G0xffZ2qMrXIjTHaUml55cCh8aFKYsH2aoPaa3rN9QM5Smu6xbwAgrcN3i4%2FPYOHvvb%2BAVGkIpi3%2B756KvXbikdfBkLwpWqrklJodC15p2xHE4qZTroaY%2FYHOAhwblvRYOxKwpRWgssRtwHQ9K9gKuDEmzEWKeuoDmBQ8f%2B7jIt8RuiHWjijoVOS7xTLlOWUjfOCYf3Q%2BTRO2NADRRsFmog8PkPP1xjZExae6S%2BPAWeUo00yUbwkvh3wPMHO1%2B5tShpk8CIxqRBSw8fOn5yaDMXpjtyy2BoJdFSHZMIKWvskGOqUBg7CfIJ5LSu3e%2BG8HInMjsMyPzUoc%2FYcRM9OP3r9XeXF5HrUquV0h7Ho2Hj3nOXaqkn1PoyH2QyOJdBZZ9viaWToLtdehcDZD5%2F5IMxrM7%2Bu6KZAVbRzpz3xshN0y0gBJOE64ITi9%2BY5guqMfZYxt5vq9Y%2F9gQv%2BXIThoFcIS8m%2BOvKWGWPjYIh5rV277Tp8xF2Y0qSMjPyTNEiKVUdPH5ouFx5VU&X-Amz-Signature=811a906506ae91bb1a7f78540fb2436ecb829bf79c37b366d72c5a6003d254df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


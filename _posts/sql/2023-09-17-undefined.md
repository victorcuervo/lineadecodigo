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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V3AHV4D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIA%2FR04DLiCh5RLtmGTRsPl9%2Buo7i1teClP2cag1XHYG5AiEAtF3Jks4WgUh5G7xD%2BqI%2F%2BnDwbNrDG9snLthZjHi8OC0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPUACTDFdCHr33mlDCrcAzCPSKUwZWlLYuZhTh%2FUuNr97GVEknCWUGEr4veEO3T4q8gmPpXVu17dCS1aDN6dj%2Bz44LWuMFfeIVwZhI7OWFuCwYLsyJEgBKxBSPfKkKFjYVa%2BhPUlt6k0DDAQKXfwHDDfGXlb3nqXzyHvIXFQT8GA8XC1t8TBBSarPyHqcXcblTyFaqpwKZb8GaoPt86Ci2W0ZGZMvFL95rba0qT37zRB7bS3tBilu9KwX2Vt9weRHqe7DFoy9mVX6K5nMD8eGB3e1QjM6JgGmuHG9cuCynTcaPpXrx04pXObyR8Xj8QroQMyFFoQCiEGHTxZAiTapdt5xYR9bXsBlunGIUg91pwHt%2FqPZI%2F%2FZlCtSUbNSST1%2B2DoASUAX5crgqTy79OfswKd9QejjnmZpxYF2FxmpeRiY2DCVaFJ4sA7qbQdqeAcJQheECd%2FtFFNZQvGkncNVwykg%2FzFOENk2Tu3URNT4F8wnnrG3nsFVHYJFWVRYHO46ILAIEmpLDkdP5kQE4P9LYdQ74n9ZPUUOZEx4iu39pnt1ugqCRXVfTqjEvVg%2BBD4Gfb6HIQ0K32dC%2BzU9kJ01MH1GOga6slkHmQoe6Ba0RmOv2Kq5bZNw%2Fr1V3SmI%2BlaENOyP%2FnjaLiV3gFeMMC5v8kGOqUB40BbVQfnWrRkW0JkuBx%2BnIXDEm7I8eNGIKn%2FPyjPsUOxgvXz7MI%2Be7QvhAhPdx%2FuntX1phXudQKFnJbwj285HQpMPxUvJfpWX%2BbfsLF%2B21%2BDumX33aUUxzZ3xJNdrgtXHrJgYxAxnppMpLnojJDq3Zi9XpV0%2FF3GKIX3Tj5poV%2BP3bPGuhidsS7QGOc8bGAp7HiNGGxqTw1%2FC9e%2FixKbaDVWcn49&X-Amz-Signature=3f28577f5fa47003358ac4e1be253e3296667af2ae797c91af20ab56d2b300e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


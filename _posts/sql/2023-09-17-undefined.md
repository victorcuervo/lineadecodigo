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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635P42BDQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQD9q5oN%2Bv6UMn6pl0C1WZFSFnY6nkhv6vwzlj0vdJlRgQIhAOBbIpfBetPGze2SM6OYFi7S8NaBlYNITKUiFRT9LVegKv8DCCgQABoMNjM3NDIzMTgzODA1Igx4hyOJR99BF5FttiEq3AM6LjiH3hFE5YKNbS9ARMf3oH2eN2Dk2rniyFoleKZv64jZN9EiX0LVai9NQll1HieFaovY8xQvopBd56eY9iuyMUBNFULvERouh9TuzPN9X%2ByzloosmnbOS%2F2kSxFNGahZcQxz6oWxhDIlIwNYrDqHZRWyOWSxbfEyCLjMCjItWkBBf6xUSz0LUxMq5zrsqr6TiQlm%2BCxz0bx7aPnG%2BHj856BFAx%2FDHbUJi%2FYGobhNqD87T7u04jrC0s1Tjd9EsOH6heMkW5Jyn3SDon%2B20RrUuUgw9HJFfmQLUa9nNWrXBLTROZg8aR3RmQ61pYSVEJhaqPJwvLu4hlaUbZZkRlrTnVi%2FxwT1Tqz4d4vfiK9LZytpyAm0IE7INz5A%2FI66xwbnIqB59l7AMLr3EpO46IpdrOAgpdKilnTnaXggpdn7Li8h%2FlkYeXbfcYywKzOdO6rQ1sLwBn0cnRFwgdIbHYb7ENH9tMNYh%2FjtBUCfPcSnaIJDjA9ca2gy5h9bOl9%2Fg8kbt5c0ajWAA0lTKJJHxW8XxIfGQfW77fOlDs80TSL2Nhj771t50NvzGzFB838FSYDezqqvaTvnw2hsRDjzQKu005UB0KCziJ1UZvmTO%2B6PhWP2G6pGlBQcXMvxmjCyuL%2FJBjqkARvbZmvHBt52XOvry7CyqElB1Ysf%2FVJSh7Ygnxa6nMpjdGasZ1XSkickt3nOLiZj2gUEB8Gk4ZliaAjRl7jFdl3e3z68p4B4PNig314cXN%2BcKg1P9n7AWyoTGMq4MTg6iRFOtvyfDgd%2FphO4BzNLZ5cPYlCzATu63LtdHFMbTopOj3o8Ohgyze8ZfLu3ThOAOb0pdvNK8O3HR5hYv%2B4g9sQuCr7x&X-Amz-Signature=ed7c1d16bf19c6f02bb6d9416f171f3cf0827c335b90f04765b99d06174d9d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


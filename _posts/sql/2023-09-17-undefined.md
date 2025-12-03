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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WEUZMCP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFNyRfpv1Us65ArTI99bsjWeF6D0XQJudhG0OBy8VCk1AiAapsour1AjBK5K47nbQ0EenIjI8snppwWniGWzW2p%2Bqyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMIQfEDnMD0MUFtx3KKtwDiFz6U0INY3tAc3JgLPIHkZ8y%2BoHYwBbRBwpaWMEE1ANE5p%2BEQJk6qqxRIjaiAvg5ByRz1On1cY%2FQQGCgqswr8gRPKTZzweosINFhotoY8I2ZuRa2teH%2Ba6H1zWa%2BniUOf%2Fx4ce%2FXTX0qPzdePkIb5N453HvwfZRp4hQ5IzlrQVqUU09yGAFlDxjxodsFNMg0xjzGxvE%2BUlElm1GlGu%2BIOd9a5xKdhQtOs20vChQcbL162FlPl8jJgI9HhlnryZOpCH7ny%2Fa0fFXIdecIABslc9C2AJtOQZf7SeBlhCLbGwQJNOM0wxPHOweqfe8llcQhpXITh3AYhrJuhoRbl%2BAg2%2BCeQHiIKY4yM4nM9RoLW0dpXKJrj6D0ovIteLk1cyXcq8atxs6ca4k%2FaD8ro27Kj65aunX7d112n5VfoKa7pHY2TxJPyeB%2BZqsT9p1z2xr5wGuFeIE8VFhuAuhX%2FPM9UnC1vVqkFqToTRtXbRFfgHyxv0WxLbhh8tL3l5bTKVjjHvN7KESXG8R31jiosjOXrxHptqMxF2MM1Fut8kUHfZx0Fkqdo48GCVZQHSytMR4gqqXveYk6CFxjo176P3TBVwELotJEANhVi2%2BPUGARifhd9BcxMRdTXnTFAwAwwZa%2ByQY6pgFpor6ipeQ9tUr97tuZkQHcdU4OKGNGiTjugIAVrHy4wpicFU2X0m2RN%2BeGJYrKwmTfer6Zf7YtukJt0PAV7X1FByD8T6lSOpmwLnj0REy6%2BAFbUrnAfco%2F0YlxrTjnr2YeCZeaiZK%2FSIcmoW8UsV6fmWOD7ISAlhacGs9noQkW7cHtwnhO8Dr%2FlNtZaB9WyICmyML7xy%2FRk67H3dWIqqJDXfZ82Cor&X-Amz-Signature=f1c3c65f6ff99655a6a7f6ccad5d89e8fb1108663a5a3a8e0b55b2fb3a04ba55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLSXYZM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCnZGEOEEJuX%2B%2Bv6g4slT5WgccEP4ZGoulAla3jeEWo%2FgIgWYtRZtlsUI5I84dX0bhPfdNXiw6XKVgwDaZqc99mpn4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMy4Dz7NQ3tV1wxQvCrcA30QvX6mPZLD7cdbZNr%2Bbq118Vxr80dsNxMG5uP6NdTjeNA2tdvEw7TGM1nyLN3OtH6mszIU17fANiOtEYFvubkE5dB0Vfom24AAktsdolPPpUVo7sAUx0D9%2FsEgAE7yTbeyGBGN2sLp2MKz1c3JOihR4kM2IeTcHtJ7t7g3j3eB7QgHWkyGK91XFBpDklHTKYtL6aluUBu9dtJaQ5dMAIR%2BeMomxiqvTBmpEXh1jgk0IJdI8Pf%2FVtM0UZTdRg2UxVwL7VyniPRuIjSqwC%2Fdo3GW5z%2FRQhgYLIwMod2bs10HSL8luDi%2Fc5B%2FwX8jn8BzTQZyN96rTEx%2B0oBQa1HZh4Vxhu9KyW2SPgLOC7r0P1ApsIRd5VstsG5ZP6jzIqoEjcc4d6grWGzDJvnUFMIShLLVHfceE1ymzm5J18exuNQGMtXe6ATuTK0mmctfeGM7CjH%2FPkBaoCZ%2BsFVeX9j%2By4CeZLrZ0S0OcnHbNgyEDXu8O%2F6z6hsD4LY26aBpSU9C2FKxqWoWt8dDxRLINRKiYMYE0ALUp5zcOvvD%2ByHD%2F8Fd9OQ1XaIa7hQzISoE68HxLFi1%2BF8unuzcTR%2BRw9Gf0yrr87b8YBN12jOXi%2Fl41vFj5I1gW0lgCPLYpfXeMJCTwMkGOqUB%2FlHdTnwJRl9zHLUPkU%2FkyO1Ud%2FeIep%2Bt1PPBWqAqPSXrfCdnY1AFiyQKh77NpfgjrUSNJXhvwt2afjnnmXl15AXOG8o5Rnnxz%2FZhYY0z8IYUmQQ%2F7kWlDHwrPQ4JKqvejYvh84EbQEv5TNg5ERyDP7fpfcXnjVi7CE5OvFtyVxwY%2B%2F%2FTMXrHozBzLiHIQyCskZE2tr3dsdyluBVlknsF1v0%2FMR%2B7&X-Amz-Signature=c9ce962e92836c874dcc50e909eba9c7ff39584ec95b56a235bb075e51a14c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UARE2AIB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEENHRAqxbDuiqDG9jhSzRwR6PQyVtZZJs13%2FDDyGYIJAiBMbhdQlTyTXyGRBICUNrv%2FMeg5jG%2FBDtY42BNG2lauFyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMAFEbWChUS6CspR90KtwD8fzbH3xF0VtsIqEYEf2o6GT57dakMoJpEv1fEZiFjbgEmJv0%2F3cA5jPH6T3epq3VL0vY0kPO3k8Nni7cGE4k6AQskKfxEa%2BgEb37U%2BaxYoIf43L7tOmhaJpaX%2BARKQ7Rj85jtVin0c8%2BxqWKPKw32eEQXaDN0mBp5wzDttOUyOwCQmf%2F5qy2fuPQx%2F43b0xvpPiWvA2X%2BNha%2Fwlxy5z1ASV%2FOKRucjMEW2QiYZETOH5pkc3qOGAhZlmY%2BhQUr3ozRKh551lpHLFBButzkawv%2BXiZZTKm3%2FQ1kiTCEjxuxfVYpm6iyPiDgTWdSvgJGLOonH0duSe6FGIFrwB0uwavXuXq9aE910SITWKoSDkRpKd7DV%2Blh1gw%2FLzIaWYSPECY8PiR39daLEW3zCUCplqM5MMIlXcfM9I4ZsDsb5gtrtmZsMiT71lOLsgPD50Dvv6xOxEwy8VVvNSk3qai676iIQ2ax8a1siazqtxIuq0G6%2BKO8%2Bo9qXObMjoPya7gl7SgcX0LP3iXKDTUE5QJT%2FkXR0O1UTMlBoqhIkej0Q9mXPKwdyVINwGMikAlvjZL3pqXz54XaY1rTCl5Kl01vgIx0%2FJNcEf69aEg%2FaKJoaRDWl0oWZEnMNB0o6OokYUw5ZLAyQY6pgH%2BwH5V0T8uGMhK%2BooCKf70YQAAMduPr3IaqYAoaO6ODOElhfqR9oOrbEu%2BsyK9kjY998T%2FZAdT7FvcCSP6W%2Bq7AbSYyg6VogwgEMwMlmI1AKDuvV0Z%2BcEwRV2gcMVHHCYBT2XsAf1Ci4c8OfB1vdqIuqlOaBLBfAL2WyR4oSjYPteJuzoyo%2BrwxWw2XuRr3jugd4Gyh2mIQpEbEwxuPbYJtMjKi85n&X-Amz-Signature=d7b1a4ecdcc920445470c2b59e1b017dae101db7d2d5ecbf9076b716f11d26ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


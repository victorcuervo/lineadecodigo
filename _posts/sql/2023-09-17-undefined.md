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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q3MLCVP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIH%2B0zdAXgkG5HHgcH3voiEjcalphPHQsX9L3pQS9SxNZAiEAjqCKZEpRAKPe%2FLIshD9PjxwalBAiJRnJN9Gtl2yBRyAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH0oZa1ws0MMgmcIdircAyiNVYcOwIsJd5T436lD2hiH35zWu2lb5V2Cg5%2F1s4L7SMMY%2BFgemOLGc6mm%2BVUtSATcyrz1As53zybZb4wVlLJl6Eg1S3FdQiMCYKtETjKI5FEASbstsAkaXBStx6xPnbmoJeHYSdZXWJzfZT7HMAfGjga1uUAWuXUrilDMI31O4x0uYgBAGu78ZdSLUbMAlc91sudWK8r4e5PGMATM4AtcCbleIy%2FMlciUkgPlcud9hHPbzFpaLPFZcBeX13AsJ1j3LCnV3M3750TkDIEzKoAoeopYO%2BYoNDjdDayigTFbi5xT4oQlvZVqX%2Bn5nUhdf2xOC5aI%2Fp8jt64c8ivbht8VtHctxGaiYZioXD3yzutQhhK%2FuwLRlj6j5kGDjluAuL7EKi7%2BQVwzd6Qg6vlkAuAf2VYg2cVgo8lN1d%2Ft1MPio0eY5u1uyJMkS23EYImxPAOftlHFofDSvW91qcEgfb9XHUK0155b6TKBCBI%2FlfTbLk2Mb4vXNpkzAg8s%2BSCZAHk8c%2BDxgbk%2BxL1a1OD59mfW0lKICwR1teDcKVWkNcJ2MlQmA2%2FgFIPwMFiZL5X9k0pMTxWkXR2aitfuRMmkb%2FwPvrcnq9guiRkcU9d%2FZJ3bo%2B13Q%2BHBLMY6Qup4MLeevskGOqUBQIfZdsNtjj68xg7iwOB2%2BVjAtD0MfgUUA%2BYcBz8AXtklcPMESWVBSe0%2BPB2Jy3bgNHYZvFZJG7zQvfV2yr9BpOqqsT858YK%2BnKIvmJiBO9do12iaGh2W2fSILrDepeRJMOZnKxHJBIyskCrE%2BWLEeDEA0HMdyWvn6nUNVNop8CGUguELefUWmn%2BvFYM44tWOv5TyxX64QH%2B8moBYikqlU8fp5%2Bx4&X-Amz-Signature=a499666d2ef12e297519a5f46ea1adb8164c100cd4cc0ada7003f20c0bce18aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


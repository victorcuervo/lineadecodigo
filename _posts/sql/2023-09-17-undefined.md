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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654EE63GZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID5KGh727yYPVSR8PahKYmd3qVuHe%2BSqIs9DSPWtSKDdAiEAiqYEpRHar%2BMgwUdGFUxqX%2B%2FX%2F%2Fp0lhsyztHJks%2BBv4Qq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI%2FrdbVAAZMoZIe6yCrcA5tdEG%2FXhezLiqphkRRuvefLmvmcVyF5iRO7bv56BeTOR7Mar5nhszQwovZCP8e2BNbmRmtidDZJPBtFZuosAq%2BhwU7dqIV8FKWJ1%2Bq9Z7gldYxhjGBvc%2BVEDgnONzUcMoZpAtP%2FlRrEk7Q%2BZgMNhXNo%2FX%2Bs3qol4GNcgaO2vef8Xqhtv5b0ZKFnX2zVLGtxR%2BhM%2FVu9Pk21KNE1larmXpxgNHWbopn97Uu0hEv1weR9hqNVzNW4p31NADJzAz7kCKxaGo0ugBPRUkOaWxCjL7M9InV0%2B7HD5wT2P2TvT3sytIJEWPzGPiXe%2BCh0ATwjaLfVprGdFqZYZy%2FnpmjXzafBy7tYGxzBS62b2g%2F3WbDCRSnfZ1u0qB6RW9AoTJRMOoNGvAKzi7LKKEyty3f455wA%2BqbdnWJ%2FcCfmYgvKy23TkKAgQoMnmZQXPaHNwlZrGRJVzNaDJnXPuDk4FhoSA72kzsumPLQnuqOqdQgt2joLW9GdipoKhAD43XE9ec6uh%2BU4DdZvpqcgn%2BLr1QhK81UHrZcA8pWf%2BAPR%2FbiRxwS9%2Fe%2BBAH8trDgReHzO4ELOq4nwuSuppPxMdzbHw71ox9t5pxakCtwJj6XYafcT0soASnbRhQiIincUtABiMIz%2FvckGOqUBTxxP4CKb162iyp6fHgMTq7vQU%2FDVhzxVyjO5k6Jk7hEq%2FrA5yPA1zfwQo1ewAahhnLYtTUnVUNBVi3wQXOTn2mx1WXdV6HkZrQFOdnAXAHdFSajtRsp1LYo%2BbIN%2FA58RaEW7%2FqjvfTuFv9VdAxQAKqEhWy5KaqVJT6Im2NruohDd%2BsbEF%2FEVF0vcYox%2F796DiRPPxkMtpW%2FA7BTo97Yxk%2Fd4Ey96&X-Amz-Signature=eb7ba87882d3435c6ba334a6ec0f641cfd9b552671257877e34f5144e0c9c395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


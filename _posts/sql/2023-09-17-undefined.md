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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H7LVXS5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIGzUk3wlm5l82JfnRJF1skyPGQpIF2QN83DomOhlBp3WAiA76QbH1cno76D1eBfh%2B%2FNJQQ0NQGSYd2snZWKbTlYnUyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM2tKZJ3Fh%2B4BTt6I0KtwDGnInI8je5A2smIkbHeyXq%2Fx8YnufTaShDLZ3mBZotV4%2F6L9u%2FJxHbbBu949oBqQhAcCmorkwkhJbl44%2B51OLDenOPHH7o%2FldxBEhZeW7AWLl72NeoFix2ityUoitHneDMP2nXdvN6Uyjy%2B5DyQ7N7lM8YAZ0edSCzSdTXyWeFTlipr4Tj8odwAxMQFGv3A%2BvbPRV%2BmzKmwRiM3SLLLNbdD8sUIf1Rqx99uFUi5iWoeTYXSUwFsYkdN3Drli26DW04ERW3L95a5waRBNTz8qjIhTKOY%2F8JWL8YVrim01%2FDsW9tvZ3KgQx8IiLupxySVb9CCSpaxZhiP2jXqt612YnqE0gbLUoMChxF%2BgDNNpNWXKwK1LpONLzldZLYCLbGISpE9hqpX2TKD1w4Bid6dgNXLek3hwuqokZSIZHNMwMsMjv8yWaX8SQQMJsYlwkaMlNhGaG66fVZr1QRShRRTiTE%2B9ID2WdXeHfPLu7djXDpyUP%2FXRixk6h7zLXKctjOddg9G9LaNdWYUyQpapHLI4bb1R2kbSDJA827YCsAko2AktvFYaVBpCEuI3T93RL%2BuizpvuTSgsJaU3Awww2ZCaqAhs4jBv%2B%2BLE5HhLZH4O%2BUlc0sIVZ0iVJH9WZwhMw2sHByQY6pgFyaMGMCaHPxSB4ZKX2%2FWTS1MVGOvztT6FGthMknOtbo%2F%2FjGwL%2BDMrn%2FlddJnXV0JXPA1yHY43uWPBXs3luBNzQm3EpuvwWyGD2kay%2FsdPu5N4WvrjI2aYVTmtxpq8ntg1GJz4BdNWXag7ncsI6YGWbg38y%2F1o0PTLvlLG5s4mNg5dYyQFpMR7vOmXgCmDpcizFrHtNsqj8lL2Ct%2FtCSwHqXoIHFzSQ&X-Amz-Signature=02dccb081c0294479c2299eb2714820a39fa82f2485bea036ea276f460b0f6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRWUGCCB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIC0gVWq8F3byRIEtoec7VwWpFabLPpGNHjfBSQzmYaD8AiEAqjicFn0QXbkPFQqB30HipF4tFDzR4eD3J2xJThcFP7cq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDK%2FgsPW2vN1LjScl8ircA9lMkbuGetoL58iBIR2jN%2FyzQ%2F4EjlJgAac%2F0s1%2FNWuoNJxVTlAGVDPe1gyx%2FUQXWeLf1yeeUvS1ZhI6wRsukdZxiStbgtRkHGaGH4TScv5Zq7F6OioKUn03dITKpyg1NBxJ4Y3uroQJMbJ4ycyZudywE1HFmDUx1qfQu5mMvm4HYXxoRfmNeH0P5xoJsOEQ0NwIFpaddBxkNua9qsjyckAe%2FM6wABpXNPSd2YIFieXJ7E2bED70huEvVbRldPTipu6MVOBHLMvJ%2FOcdkXZxzNxAfjpn80FZ77hVhzueTZpI8TyDy5fHxMR%2FZQ7sTPa0ieZMtObxF30d2%2BDO5%2F%2BwoZQVip4EwqpcRF%2B5UGNzrwKJCwl4r4Ngh92QEw6eRwnVG3ATiB2ykm0FdjdhFnNIvsQodlzlJTUzSdtulOX0%2Frkz7DsJtzfOjcZ6uoXwM1spqQRpM71MlalUu0NRSRuI2%2F9CW9x4Q7WpH65pzGHWmWVX4plO4EwDRFJsv%2BYMz%2F7ElMiAh1thqyZOLLHiiSJIL8EhwT5pZlrayGzYiCqM9txMJ%2F%2BZfsChnzFFcpw2W%2FmELuZaj%2BFp4F%2Bwr%2BEwFJleONcvIneUXAANjJhE9NiZyEw9on3vkA%2BMkV%2FQ1HbgMObAwckGOqUBVEB4C5XnGFP1O%2FAuHNaNre%2FhBOAeqnnfdnvilKZktGvO95%2Bzd%2BEr8TyMlFcdmsG860XFCzh7wYLAx4UlolmC2%2BXRyWArlWaXX9QGVQAKout8T7t6pX2MSxgo2NyJIWCJzfKkLq7es%2FdxtrAeLO6Mkh%2BkdB%2F9cb48k2j9BpjYeiY6n23yUyl4WOhYWxBBz7peZCHVIbEpScXlEfTOkUlYPVGOGeep&X-Amz-Signature=b75fe87194d9a7766ffe687983ad8adfa1e61c9671cbc9d3b135425f616a2ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


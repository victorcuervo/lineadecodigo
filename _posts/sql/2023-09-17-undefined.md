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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AIS2IP5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDs0farHYvTG3oTTdlVSbZWyfdDaQ0J3t%2Bh0mXKPQrCHAiAcGHSrbifEiMqTA0oha%2FujQFW58qlR8q9lObGrH%2BDDzCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMWDWJ7ud1czen5%2FgmKtwDMnExKOach49u9M0qFvBTUXAWyBLYa6haNp5ULJxxsmhC%2F%2FHzE42OZ%2Br544cvA9t5ZkImwKtNOpbuScAVJeEvsu4%2F3ozxGADykRhRWXVsi8xvy9ky7BxUXDzb81QufKNtg8ZGl%2BTCqO9cWWDsRjGyTTidy4sfaP3T%2FuvTwYueV9BVB4mYUuaTHLyl8%2B1gGFAnM%2BYlppQcljZfGBTRdYTTOdpBvw%2FAjN%2BTY1tNjPPc%2FVldi1FYsmj%2BaqPQAg%2BfRftBCsn8AObHkCwxFQi1Z92JbevLQEUA1f3pVH8B5bzF9nBivZjCdyirboLASfPun2z2SMwu0XWZCI0GK%2FyRK34u0vaBI8DzfKb7jeC7Ng1WM15EdqlMQglJA7T5UTfhETlUK1nJqywMnUTw%2BujEI6xrrOQtmMLkV0EUISBSWoolJavgcUJORbhDUiZK9i%2BBdfNiTLxFC5dn0MWDgRagammMIAu7Q%2B%2FjBaorwfxyiUjL8sA8n3wmRX4%2FNKGiETwd6BU%2BFFNqaNN%2FazSIj2fllqLaPSt4ixDyvEINqsv2EpNXjmmDkqIg5DLz8VX0ljt1wrOVnequM%2BVsOS4E%2B8RA48mTCtM2GhvkX2i1So3A8y1SBO1KTW1R3FpHfFHFVuEwyvW%2FyQY6pgG7xt0dj%2Bgas2DPMFUJMwbMdL8a5c%2Fa4RE%2Bt89vznnn4aBbI81ETN%2FE7B%2F8xsU8ndAmCeP3kANPeWlRGOXsmNd2y09Y18Nkzf9qu2u7UKMyqRHs%2BbwT5WyNMkbT305wF8HeI0OFPRvl7%2FX%2F1YVqxTg%2BQTHkYbJ7xopcS4G%2FWVGT2EShyxO%2F6BOqTYZe6xe0DngWr%2F75a4ihxHvRrXzcC7PnLOMslPqg&X-Amz-Signature=afa125fc6cb5c10563da7bbd997b5376e76f1c68cba079a1e5fab9edeb94f27e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


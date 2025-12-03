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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVMKEITH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIHkGPEyC%2BsBD4qS%2FdXPzhYsKiHxMXej0LXY2q3I52Lj4AiBrahkH%2BZIFSt7fR4gnEe%2BqYqBPeFjuejmPpWruQQ%2BN%2BCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMVTEjNLxTB6aBDXZRKtwDGQ4Gc3BnrTLtrEmg2dQsI7vo%2ByHjfGS9LIPsEhaSdTtOpzTSMiOKwf11NWwW2q%2BnwN6FNW7QkS08pfTw3KwPO8GGVmmICHI2yZ%2Fyzln%2BmVbDh0M15XeIf9N%2FgrGMWe018PdivHWTjGSSY94GeXtWieAdj7T4lHH%2F9gQPDg6IbzpsNxYgBW0j65XvHNFlMmHro8ix7RsE1D3VOjkcRi3CxgIdDNEBGZGvZCcgF03kuEV9yFV1UyWE6dGPq18e%2F1H3MGw0kBdZW70x8jCRsMKksi0s6GB%2BXD8WMEufL7pFzdX43IdsgQpNq1X7uEYig0N8UDEVYMpgfiQkb%2FHyHZqygjYTBqoPSN3OwldW5orwv5H%2B13LQb8LBYgJ58MmfcDw65%2FfeUMWfjx0FOzZcpBdNUuHBT6eC9f5tzLxjjshKVqn2i47qiHNfYAA%2FFfLhIV9hBv%2BDBfFIdVEQw6IJ3k6EQ9mRceX0uLNei5T1LJCF5Xkem5QiCTSCivZL2iDDvXFquKWKWSOz3Ap5gfehXAYyk3nHgnfLGpCBOJiCGPSDjZ7AzTKWeAIgqq53jG2Dn2toAeRW5eUFgWW%2B26wcznJUUatVWOktgs7IE%2B70Ar5PssUf1TNuns%2FVwvpgcMQwuMHByQY6pgEjsMVOwTmNy8BqQTSvWJ1ZYLYbDvSNhOPmPEdrrILd0h%2FShThhvehawNqjYpxwxqKeZr6VvteK4xvo5YVAUNiWxXmdThE48T%2F%2B0ujbM8sHzp9MpOJ5aENTRfyrjW32F9TPjt9zuttSuNio9eTZyBiXjxS%2Bpamu43a8HhTE7pnL4mieM6YVkVWoteTfBM0b%2BfxQFLT7eBGyTuErX6YNAo82f94rWGI%2B&X-Amz-Signature=c388cc994a3b179769427cc9f71466c107868f1495045dabd80aa23f4e75470e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


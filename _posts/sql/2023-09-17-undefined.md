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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZBTOK4Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T011151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHY8cfDNXY1n6ZQdOHjgCxu3pf%2B0uScVppWvtahq7mxIAiBd5avxcZ8OQYt55c7NSSnw3WmLk1vOvsE3bea9O%2Ftzvyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMRlsUz9ji5UmvlzgKKtwDr2lQiXEovqyKJG1OP78nXGBT2F7Ehk%2B6DcZWk8zJNsaVORZi02U%2B0dQXfKWFMzFtQrVLDdPBGAzYSfYNI%2BAeDD%2FyeiS81XTtGhYWcuy9LKNFEZa0gFtivmM%2FNa4a3ZlDBmOkmkA0c3%2FI1AVbsIS%2BBkRK4PnQ7B%2BRNIRkOLVLinnd8tzM4z4gfxnpER3T8Uac0Dhdq%2FjKn0i9oHBjnAuOnHhGGX3fSw1PA7NJ5wNhSyhKEy0jzEOPflJUJcUl7ZmD2KHnlFjMQPCTOWo2MgElr7aW9uuRsTaBWIYIbBMHIFqOquAuyDDcuyNJHLOfwCPVMQz2DKghUeeElNAucYpUVpU9PDuLbUFPJOCVmjiDkeOB9NrYCRr%2BR9W331K8e7ifmPJVt5XIjdT6ePq%2FkbkhOy0HVzVkg9OOCeE8%2Fv%2BslafNoi%2Bz9b57LzWfg7QhD5Fih3uNPYS37Ht2piJvHqudSq0U5uKeesOk%2FhxsYeet3zAOzsjtW9fvezy%2FzKNOI3BC%2FPxwzMA5y1cTCTzUF1p3rmZ79kWcxg5G6voXJ9GcgPZCr8cy79nTcyJTqGk6hr9WYpoSORr6q3S59uJ2rM9WDq8GYiSbtWFPWqvPHjJW934RXBHVvqBsJPUp93sw9Za%2ByQY6pgGK0Rks15P%2BtaNWVPRLEXwhYLDdsoznCOwnuPrdEI8Lxl5uDaLg9CUZ52SA0xkAHsukOzJSgi5lJqr2oRolhAbPS2%2FK5g8nxyrXJGNyCmv8eBtBY%2FrT0RcsopGZBBCzdEv4n3qlUmYrxuELNGaKPMGXPtaz8Z%2F6qXmZQYgmDb9srKEkx2yz7S9YFQStCz24alm%2Byn3KgAocpor796Q0AhIER%2BUkm2e6&X-Amz-Signature=1eaec332d01a3b28ffcdb5279e0e80a4773469836b1e2dcd9ea9701a9de837d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


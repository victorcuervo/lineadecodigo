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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYPYYQX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIG%2BnnJT%2FF1NZj9gkcoq3kskxu6RkCE5d0Q%2BmW28M3r%2FvAiBYodxYonnezON%2BBiMf5L5hykIyz6Zf8J0Z5A9lzR3JBCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMa7NY9Pw96TY79vvyKtwDQEuBwZ4yk5YxnD9nZXPOSNk0lKHTUjIlfSEcUWoAIhM%2B6YvJBAG%2BagYJW2xEI3KFcTTTs95v8flJYxtyY%2BZmVBU83x7FuyNKQAraPkQH%2BKsepoWVG0BBKYKw3yM5CK2G%2Br0tC79krmyJdQhMVOJCB1dEFDNfLGqv0PUuF4vBjeYn7G6wqQK4KXrihwHrcHdJH1g5GhK08pV8px903qlJ18NTEC1CSuUWas%2Fug2oWAmHcZbmrTCNtyQwXKGUZBarVlD%2BmOvbwuhvQxgJE0Bgl5%2BMas2wnPmgI2Bn4yX4Vj8StfzP4yePGXTiUS1HRnCkmBk8HpvWVWk3OK0MGrUTyYvxbapuMWbMAUPIc79fMXgscCv0TRBOURGXZsAJ8kd0WzObUdEnxRY%2FB5wvEm3%2BrTruvq1TEF%2BMgCVW6%2BchZ%2BJmj9SGcApECqwMyifjbXubAiqcz1KLdxKfwed0cXhXkzOfCV1%2FM%2BFCxivOA4vtSTYJk3RkngkTdbWCFsmnBoeEgSd9fT%2F04Hyjz5Qrmh%2BOaR%2FJ16EwH9UncQ8RUFR1Jn6H6g9uemN6WO2VMLe561Eya5Cg0CNNNiDmmWUeBEYTAlbl3X1iidtZMnknj1mh8JMRSvDQz45cv61hL1M0wr5a%2ByQY6pgGOOuV7wapKJed1rE1O0WUhSCBTaFDami3sUthgI3GToqfs4aMvfWzt3k%2B1bNVNymJBCAK1576v6tpVXWdf9PN7AvzHrOI9UASHzAQCBZJqffbJqGKrLkToVZxKfeMtWVW%2FM5vLTe%2BfKeHeMp5gu7%2BsZn4IpHFGBUfWHjrB3W791q6ydFPxgLKQK3GeSO0UYeFj3vIjQs7wku%2F%2BqLt7NzFGk9MaY%2BvI&X-Amz-Signature=f4ff88b4feea643eb599bd453562d06b75366b6895eca659b8cf0f7e5524ff5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


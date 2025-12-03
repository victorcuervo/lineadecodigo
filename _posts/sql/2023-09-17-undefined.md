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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDZWBTGO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC9JBw95QYk7qClTDOVDl%2Fh7XmHDP9A8BRS2q2y5cAO6gIhAIDj3nwpRkWUc1V5UBtyP61A%2Brrd7CLgYxcTfcoZPfj5Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyhutibFpFkgdwOSfQq3AM8lT6limjEv3omt2p8fI4Wvc0kAd%2FGCT%2Bh0jJC4d2eWUT7olN3RI86DeY31yrjnOLygfl%2BzPfJEYU4Y7KJ0lQnBYQ4GBKHZezl5VNnxdMbZVVekS59%2FOSaOGfSrlGVuModAhTkl9JXUt%2BKGauE2NNBpsHDp%2Fi3nmfUc3Cs%2BhonHZd7%2Bpovye3S39S0xtkzqvRKBq02UINmwa5JKmiUYmmg9YOBEdG2ozoGsR4EZF0rOrctQsZDoRhlh%2BHG1L93plf5fSQaHjGydO2WHjSzIOetfIPWEmJFdMzPKQlloIynu4paC077R9RgsZc8k7NVGZTwACRwcGouB02q6t7S86oyHLBnKpP2IgMDQwLZSBJGY04Z%2Bd0XSq9vZOT7LcK2bCg31kyKLs30SUt2iME5Y7bTvIOIhdGemBmQcHWet2ZKJ76IxC47Y4TNnRYyDsKstpmRJEN0d4%2B1SMcgiX%2B3dc0GNxloCTQhH6uOEU4EAfPrmYH1uSGi4I5PPy9CgKiUiPAkpxmwxZZxw0yYhUo9AmGMudtdYemNVrO1C%2Bg93%2FNsB8b2p4k4oEpd2uRHBM8D1GR030gbXTD5avfK1AcFn3eZmviLKqWxnBroeu8dPGmft4t6V%2FM4M55Tc63NUTDllr7JBjqkAbv32UtcCC8XQmoFZ%2BzcNJlg7%2Fn030Hat9NBcIt%2BVWnPFKJwZ%2BbxGxyLfCeETMbXFtx%2BjdUcP3k04XVUThrCfh9y5hjS4CliKEmbDPPYmOq9U0fUSpbsJMkYK0baF5S5%2BhXkus3LRIHIgK3N5szFGP7HMxr%2FrRefJeaOYNpZB%2BqLG36cam%2FNwv3Rakj8vipjr1p6LrGXSVO5i2LHbsF9sNVatlBO&X-Amz-Signature=53cacc5a4106da59345b46df94dff4781b19086dc387cd6a0bb32d1126e55602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


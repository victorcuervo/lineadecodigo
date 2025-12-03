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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQBSAOIX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC1KF4H%2FViJolEy7N5lTAYqxwIH2EB8PkWTZec5Y4ETPwIgdtMMlWVB%2Fw6yziq1%2FHb1p6DVSNJi7wIv%2ByjdoYy7Cxwq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDH6IfGqudUPMy%2BMZQSrcA08qt4ss0IO197PUiiHGkF227hLzvxWGUKNGj5iJZiiMB4MIxscRUjkwiRAl7V2rXjOXElN1ndUZTFvStizfFfozfbQXZ%2BdTe%2F7z5BvQBBE2Z8lCzv6x08AbFu5Kb5H8lFpKP7cWGFyjA15yg9MZ9d6%2Boq3JcnKiWmIt5RPLDKyq7nYxvr%2BxZDoj5xg9Vsm1XTRDQd%2FynqNj4YFUSeWq9t0XxAluQZIl5qNTTa5ZS9HNipqbRxM35wrYjxM7k5Auo5VlEDH6WqXXL3b3jKh5OQC1nFaMrmdUvNClagUF%2F%2Bw83a%2Bycwa4tJSEU5nyGiM3VneNyh5KuMEfMHjLzRBgLRMggZyV1metXa7WRPobZ%2BoTaEofsUYtFtQwYB07tAl5fjVvC4aV4s2cARGM8AziGYy8HMWeMp46tCnsRIf0ASnx1bsNTh%2Fx4MwOlimd1D9rexLshOsfiWj5RSvc2ZHWh5DkivAVEpO4%2FiWT9xJCTY%2FSZQtksx%2F7p1fohcqKsSN09%2B12NMBkn1720n4AS5eqiVIK64eh1UoeHurDudwFHiKX7agYkQgZKmMoC%2F%2Fc6mBV9CUVgRzsKt5Nnma4eBc9WAV84gNOM7HjlGaNBK8q0gjqlyVqpTx8P5TVl9d7MPuZv8kGOqUB37ufmLfqT0HZIODVUQTyToAHBFjEchvGlpNE24X8pthQhpIsS68HnZYzE%2FSK521mPA0%2F1bcU3VCEev24i0Be6KjtfR25qAQWamT0HAMVxR2IXcO90CrhoBDGUz%2FIDq%2FfH668Fq9bG%2FR%2BqBIXELunn46HDiXMOSKiUVsmAUwBgnxEjH3EvJ9x%2BjjQLbMPNQ3X4NNRSN0gulrAEX03NXcUA5LOxfpW&X-Amz-Signature=a479031ca13cee94b7e1694f7b44afc7b32446cb52be35c48f8dbf3326e7eadc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


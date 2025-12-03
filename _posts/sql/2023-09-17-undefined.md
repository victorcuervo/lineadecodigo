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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DV74SLK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T011815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCG3q3asPMQGMGnC0D0QSNUTW%2F8baErb7bdzghHiyJUcgIgVUg%2BGCs6XReNiC5tLYto7YqEsSYtpTK1sWB1qlUSEDQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDI2AZTvso8l6TobLQircA40%2F08TBtMTETR3p0qFu8NcVv342LKWxju8FpB3tPXy7n2VA%2F3U3MezPrKFxiF%2F%2Fs3KpG3ySF5yK96iGN9sSLFHU3rOpfw54EEki6koYcC23ZDxOeGfrLX6JctJ78tjlmsWbUreENoX3FlWUWe8yxCdo27xE0h2aUQIIzbZk4xDq992lu60h2b6u%2FuxSnp5HiUrobCprszb3BAEoDG71WFe2pg%2FU94rPZdv%2BuOtBf%2Bbr1iN%2FmaOe05nKQf6Jg5WxwtvOKjqUFEcTR48AstdhZ6iI7UeEI5hS%2BkTtQEcYGicOLkEEmJQpHRgDjVEazxeqi5Qrx0n4m1UdfIUL9jvl0EiyT1yUVHUyz7RuWgeslWsHXakiKmuAUezTtdq1i3Mu6jechRaSY61kl15YPmA1b3JmObwiLW7uBkT9hdljDt5YIHTfH5RtHW1gIiKiG8HSrK40zQwN6Le53M3n%2F%2F5EgbQ4LkNuzUOV6nkDKrV1SfBW6%2FC%2BEGH3VPQnY%2Fw1rWQ517n1%2F0LVJT7O2KWwBDT4RNTHUXo5Zy4pwPXW90%2BR%2BxVZNaOrCPdwF2RpUYpvEwVgOHKe%2F7Mr%2F4iQQJbOzJugwknlHvRjEvAORhZiwh75ZtN3ZiwFgOPn8fidSImqMNuUvskGOqUBG%2FPGOCnEUPfSLbJ32rd83tKTydiMM27TbDJ26vkn3aOc%2Bv1cqUZG83%2BDRZo1PShpRzniUiEhoXHtCHeLrZPRPtFYG0uWYIe9thQbo301khU2fHhJmlzfgbuSABm7MX6zF7q8u1kb%2FgQlGnnXR%2F3qSEVMmIt7icPvwS6PtaReG%2FnEvv1krUzejwIU%2FNNzgksi67C%2FRmAsUoWBOIeLHBaSGWtHK8vx&X-Amz-Signature=56a97805a381fa33d85a247d49be22f9cae77800c364525698e810115cb79b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


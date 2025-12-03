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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTAYRHVB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHB%2F%2BoHfX6%2BAoKOyvoYzf3Ny0dW63YEdf%2BsGCa1iGVgpAiEAgmVckhjs8MJxdo7kGmypH0piRWothlPH1Pod5UfLQ8Eq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHErjk1QK%2B7jFnSisircA7tg445ZE0av0aKWE3hyuksxvd3%2BobBVF5y0bY9tvQ1mxjFOV%2Bi8c6SGF9Hp9bErJzAu7FqtR%2Fy3Y7micwbYA8VT8WQrlLzpgWK8fNLt4wZm3oxPZiTpBbNcpedS9gEsyEUaPi5SrG7DuzVrNK08Uy9jx%2FlDqRzk48Iq2AAm%2FlToQfF4bI0KxW3eNthk5mmg3JDr0isVnIP9Y9XFwHwtrC0FUIMH%2ByEaxh%2FHGjNr%2FEXOBfdve%2BrP5VXKlr4bjAa%2BDLlj%2FWEdtyepy38SiVwPEn0LbEfEb1jWB1Iv5lub6t2YbzJH1cesb%2F1p0XWw%2FzUskspw1gx%2B2EKE0QLi1TkVOgegvkoMUSoMxBR%2Bq9f3CGXE%2BqZH91jrJDVHFVW8h2UdLGgsuFE0B%2FI6hriFlGCqHVme%2F2RPL3BT83PTzkdU%2FZvZfkmcPNDvBxXCp%2FBk%2Bjz3k7UbuIrcRo2VTPPPhFC6EmV6kLiKA88kp%2BdOAQ%2B3E1wNXSN17%2BS1UKJvtDOoS%2B2Y08bhh1exc7MemCFW5MpMdOiavdJPzWR0rPcG%2BiiwupcX4SA0U5X%2B%2FTxyYYfXayXrszGDYIkAzM4Hngp01tjbFCRGfSxATcHuC98zs4WYygrdHVQ5%2B%2Fz66GjmcMKpMPOWvskGOqUBiLQQVFnZLxZxLf5%2BNur1XrTZ%2Ba0Sm7lLkQgdxQuVqAcLtrQAVc%2FjJLDntn67rewDtMKbziJuasIEUispHMI3PPJ0tMddAWK5d8mRXwfzEHYieYmNwMBB5dw0R7q4bcb9R64cM67%2BXoXwYnyh%2BrWOpVxfnFJTZQnQj6%2BmZ3pJrFUw0h5FJfvVZSV1nlwdEDtALrGJMTuSY4LEk8%2B2vOMjhxn5t1dx&X-Amz-Signature=97dd01899948442214ab92c01ab1020e34da43b59eb284fc83ef5ab818b5e8c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


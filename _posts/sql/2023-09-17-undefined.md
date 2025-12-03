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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQJACBWL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIFbcuOiWoRzvVZGUsyvA%2BL7G93sNK2gm39wbeb1I4IAyAiA3zSEsMZuLFGxQSn8ULh97XzYclFXTrR4U6FvNKjPFZyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM4BYL7c0wVfg1ZdKlKtwDAKnAAj6kvsQV3e2PhNROHn%2Bs2AHDWJTVoyjijurs9jQlmCT4k4MuqQdFxhTH3BRa6%2BWv%2FJYE54RaEuAzfuoJpJ0tsDZlmeDDXCxjDLkoDM4h5PCh16WCc7EwVlz8Y15VgYH0t0dyOCN6Ghc029FTXc2RqpRTu%2FOx2UM8a7IgVYZe%2BYanZdZyAZ6CbPEtefEz8y4M2Udy7d8Xpdw38yDNcoLyOpzfzfo13a6h9NZs%2B%2BDHEmUyFgZp0qdoWBuNAeEjgbiO8lW4A3AlqQgnNcSyts6A%2FcSBhCp1LwKZ%2Fu6twYJogaN2du8OetzUzwma8Hp7kBDE%2FvNoCirDv7SLNILNIxRwdJvfS41%2B9BmsuuHpFitT7oc5AbiCmj%2BgNLwYq4ElBu%2FEbWj6wMv%2FhklIU0W1am0rD3DIUmnOo8pcLXdl%2FJ7QnQaFUysG80LKOk5eCOephr0teYiF0IvhFGZqpX09ewB47Zy22m%2BGmrw6ff88O%2F%2Bftlx5uwjcCbKm2BYtQyoLJo%2BxKS6A%2FyG9e%2FNdwYRzjXlX49p%2FY3GsYXtaNrP%2FbgKU8GeBkBAmOAnbHPt3Xk2KmHBa3Z05RXzTbk%2FcOTvuDU2yf%2Ft1xhZLIoax7rOuqRyDixxIBgwoQc114T0wyMHByQY6pgH%2F68dm2SWrc12BTLHayzTIUc6aG%2B9fFmFksn1u5dvqyM3N96COfuA49e7au%2BO7QWxHRY%2FFDsQqAk7OT4F2utrO00%2FvY3k4yuUjgOtrmvWk9saqxDux9z94ik5zJeRySFtkOGkg7BPDZqjcCskTIyd5zrKIf6x%2F61W%2F12P226qrB%2FMCSPQPWsoLfDbHWi1MHhRwpqAq89swaOIYAlDxQH4Z4iAcmh8k&X-Amz-Signature=27ed42b0831b95b5384de0e70db3f72dd396909fa8b177f1c42d776173a3cfe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


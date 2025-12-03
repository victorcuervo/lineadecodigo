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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIJ6GXQB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDbQf%2BMJ3LAse1nTNyIc9uNQt%2FqZghC2jY8EV6f%2FbFxiQIgHn2mvgAQhPZC%2BfpICfvfzhJNW1cFk2cBnpU%2FiyZjKXkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDINyCbz0W%2F1zjCcAOyrcA74j8VYwaLARpXkeXcw07bUD3A8kZw8Zo6ifVyr%2BOAO6eiV%2B3aRZo6AFnVo61UGBTH3hWuHt6VdDFkaaW8NtO4OIuvE9ViSmZFmbQs9mR0X86w28WKhf6A9G8V%2B%2BsEeemBg1DEHtfpWW%2BK4bgj2ZPPUv%2BpMPBIvQ2dbq1Z%2FV9qLqlaGVqUHLyX6LVTBmCvHGbyeX0X2Nbi4NLg7Q6%2FwlyCenbs7BLI6cqsx%2BDMbkqEEe0x9r114bxbjTkSx8HduPmPkKIwdBHrPKTLZFBYyIppsqKBfHuBWHpG5pgRh2T%2FFg1HC883vnjWKvd1AkMIrKA7oL%2Fq2PdvPiVnVisbhbEqvmGCp2A5hxRYHkFmY9wkLYJe6ZUrAFs3BfxFDd%2BvfrttgmcaHFKgyGJe9EOnge5vHnCWVdicz%2BJAKXxXz5jW%2Bg4PKT8SEn4cwTyiHDrtN8ssrPGbcQy%2BXBExcFkpkPIrYovz26KKCiNnYAW2dbExmi3ZAbQ7JjzAwYaTDk0VPbtcthZnefHxEFGOG8f%2BZzjxDgIJzST7YBPp3iZl5zFRzoFDDxd9NnE01QhjU%2FXQKGuwkIC63T%2FoYPxyC35%2BmJmE%2BASVHoRVM97ShuNx8TPYSjow8ZFcsiAIQZl8TxMLyVvskGOqUBq7XT37v11y5MAB1fnip%2Bl5A14rfbv4eqxyaa5PockeLZRl1LjGsoy%2Fz%2BbdPzKrIxtPgl6jpBfAHxTdwRMQyfpfFIgxlMJnzjOxDedHGuTEt4DDBJ0%2Fr%2BkbVM3BBNfWvwjJiGSMLKc0Ap%2BLVCJVjJrGpXbtNJCSJsojAxFvwl9svTubMPWbuj5lHrq3jPLEcXt1GBk283XhebFNmxKpgk2bLNfada&X-Amz-Signature=b2582a7b38f71f794f81151f4f1c9396af21cb76b8ab3be4ca58e2ecf5ab1492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CPCJIA3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCw7K6aiD0G1okN7A0kD6yOs7OI1Zjm%2B1umfxzrR7VIIAIgZ249BjbowcJ4gFnS67B8OMZwCxN4r1QZ%2BjomWXBvuugq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEEVOopTfMah%2Fkq4iCrcA22RvRSKSoW1rbZkYJNRCV7ofI2ob28fZh%2BDXZLPePMwNsdyufDiruPyU6COrCrKq8T6Ji5Ez3Vblo6lEesVed7nxPIyKQZDZ9mCj%2FrPcVUCIOeDu2IsDWOJTvGxjYq0ami5o%2F7cVNZuBuLIgsilNvkryJ0iyb8HJsfSw%2Fl%2Bx4bJxZ7rP%2B3LRYWOxFJwOSf5F86%2BG3fmkOncOji7rMmfG7Yx3%2BlWOa8ToCJ6fKOjPbS50p%2BnFdjD9LjBEQ9Qe3uCFhtezgZGG5eMaNIxdy7TQbFT5bcVDtluXlSBoFKEHgtS5Ie%2BK2oXYGK1fDEw7uXF6BQcHrpglRvNioszRhuk3Z%2F%2BxwqBrk1pHIcOjKS6yk2R6w5Rm6pYXnmJ8vuFCdzCJ9nMwWNASWh%2BtUEio4vXZCMgfwoMHD7mcDlpTveFzuqFvG96ALzQ43uRnb0OJcm2E%2BTCemhdRNBEcEXiurqnxHdmqcC5%2BwbU1MNzdU4nADC8o1p%2FqDB2n0gSxKQKngyAh%2BCFL5YG5%2FjEkCCLjlw2mWncoaOS3rdLKU29yrJ6Jjd5eWfTmiTs%2BVMi35DZwMQuIy0faQErb23UNcENjSavhcGwwpLhn8xnyICz3AmdmVheXJcRelDHanzm7DfDMKvMwMkGOqUB5qIDFXUsOP6LNveKn%2FPT6AUwFA8yTbImtiZkZfqSDYHcUjE9jVxqpgwJy2DqUZWrKr%2BdQYXaM0Tt8TmbKxbAnbcBb5dPEKMJVrBIj1wKl1%2FG8WFm0iD2SfZD1ysKqDd5GT40fdDNdAQOYhtes%2BilfAu7ysNsl3%2BEGlQ8KTrx3N8qtsXDQK5NUHzFX5nmPagqoS4v4btAe9CMkGvHpEYWF0WCxals&X-Amz-Signature=6b9dd0a42688a2865c6e2035d2fc6a5d7ac3b8423b345619be3ace0a2a1cc486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


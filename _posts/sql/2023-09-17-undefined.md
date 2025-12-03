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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HHLZRV6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEcsot28KDlNcrbXqgoLABACsaqspjD27XMwpES5%2FafRAiEAxUxXJIM8q9haEtPcubX%2FR0jy%2Ba8lQJYPj4F75q9v%2B64q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDM8b%2BiBQbpt8k056nyrcA3GMib5lv8TYQf%2FX0qivG43%2FksQhyIeT4WSxjcslGM9atiFscJUHNnguKbnbRzlKNR%2B4eU7id7JXCzqtu8dtNPE0sy%2BhDa959Y1LGNng519kOSe6QN7ewlxkocd814U5oYq4tX1EJR3hK6hc8A%2FO0vl4u1tapSr3fQg1t48Bhnts4SQNgsnG2bFD6ZG7YZ%2FSxKvgLf8FPTJPHgx5w5lW23VNrb6nt6nOTku7N9FVh2DEMKk46jOhDiwwq3tw%2F8TUzBYGPplqhZU8qoaYK6y%2FehazW12T21R%2FjXa%2BRF5D1D8ZrZ7NoTA%2B13upokiLfaeTX6OAlnqNw0%2BJ7MG7rZEeW%2FG6f0fI75VpkOrIIngqUyIKh6qd8uDR6b5skrfIxXumAsS1rEd6qW5aljylk4m5Ag50BTi54bRG60X7YazKy71hnL17t%2ByX5v5yeYv0t4Qdslkqk2xPVkaTWbIWVL1HPhvlinHlAYX1z%2BO9tJsnijeBCtduKKs89UW8F7sM%2FFSRgJbjx%2F69CMpYOv7ts5v6LqSSHVe4520t6qyiJDv3gYpCvOmcOmxmAU2vMA2bp3JpelD%2FMnqgYbbltYgT5xZsnmASBJl97xtdDTQ9IBjFtm03Rll1GmV8NlDaufWlMNimwckGOqUB2KZ33tNCEN1KnjfBcnV%2FF8oYoKDI7dLHqCtc9aPv%2FfzoSi%2FdZVcmCtrldbXKf7sTiLD1PNSHRxe0wCKvEb2PW7kkVpMmWCeFDJjiHi6MiqViTh7yyqXCp8%2BW0j5OurYJlSM%2FOERIqdaqAvh8YWI4u1AX14i4gfGn6gPW08qLyjy%2ByheXOOHyM4zarsen2YntW%2F25LBSoI2bf66bab680od8A1On3&X-Amz-Signature=993c385db9d7cfc5e728cd2124202e402870b6623554283c0c5082d50a8ef522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


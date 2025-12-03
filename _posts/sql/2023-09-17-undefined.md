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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSR66YEE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIDOuaYaqPMdeSuwYmRNH%2BcG2fyYY0IjYKzzXvdZvsw3oAiB2n2nwxQCtcpGhJdOxSbW6Cmk1FbpOQH4DUl1khWt8FCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMmL8lTx9nywyZooiaKtwDi%2FZd%2FFpSt9ER1hyJ6qqMF9QLgzz9tkTX0ecu8q8OgevTj3dA6agyho0xPBPwYFKHw1dzFNvN%2BP5zfIVKh3MsFFvP4hRO57y7Ymsg5nC5ad13Qm9W3ch5s991ZCPa4W7JRykUmCknDmgXbcqL7B14HP7bgalnzJqme1sfClOJJAjQhYF0nKa%2ByhymKEanwe%2FM%2FRiIf%2FPILbzoyCvGNjKGU7FIzxU6tVSqZZmn%2FD8r%2FqrsAeCx%2F6xQ5zk56idLxU1OoLmfE2MR8K2GcjTUAN8sW5GfzRl17Axg3devCrE94EKi%2BA2dUZH4aEq%2FYqYwI1n530Zl47OG%2FvJbgjbDYLc30W5%2FZzTQUECpcKLQKjSPHB8AIIRskWKHacdPAEZDFk2jh9Lh8cARa1m6yp%2B%2FQhDa4y6lDaZaNys367uhDFSjPYqzWttujq9ig54bUkh5OJWki7rJkxnEU0Uyjh6G84gpDBb%2BBzyILoDdORa8tYGAHzlWddtQYafMi9KsACdfGHTuEktZZ24y4aZQOFnM7hhsKashEMiYnrrGUX%2BOtDzi1WV2uvC%2FxyE2Ksg3fBCdJjAgJT%2FlO5nb90LvwWjqMU4RukoiVHLiPKtro4Si5U00NRy%2FtEwYRpmJXSZsLwow95m%2FyQY6pgHDiSirWpiDH2z0MFSYjOOK522Mp2ZLfYuXNYk%2BU0sq5Fh0G5ZP5DVq44dnDeAATdgl9nOMzTvZztoX0kJI1gGH3GgMZ0eyxmLsaMQXk%2FjIw1bkhshUNvOhfmPZdunYcHvQnSYb%2Ffetnt43gsjK%2FelKdg7sUs3DdTI5v04oP5ace6BqgWuJmjMp76mSxOwtAIe7JG%2FcbTIQCk8Z4JFbWENSE3%2Bw4f1W&X-Amz-Signature=501749d60dd7debda241cd66ae1a7a4b23551184573dab58b45f88d1efff1d98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQGSZ67U%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDA2gv0BoJmipoFiZcFIMP24iOTD6wuOz7NzgiM1CBzmAiEA9vp17OsQ6Fiti2e6iW872bMUGr%2F%2B0qX6NfA50DXhf8Uq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDB%2BjLu9tTYBwWAFo2ircA56gXEeMBHCtvp7Ai0ohpi37nB%2BmXR0MrOmyG%2BsUXhcqT2meuBIYygJvYN6MKDDgh%2Bef8pJEiE%2Bzb%2Be4kikyb7K91lH1EhUjr%2BMlwrV9%2BPOU2x97DrmH%2BvW9EST3bMUUjCn5hjQ36od2znD8qs3DFHPsfPUO4o5VeAhFosX220iQxM9%2FwGLIM8S2GmuXnXgf6x%2FjNfg93U33Lmh6mERbEkRhHjNll0XVggpWPebwudaeYULEtwoucbB22iF4J3a6P5H9UzUIZ%2BoLa1UhsWTq95cxm3XSWdDrRbcDTGIfUlg8Px8o1laDDhqwPaBp2rYBe2XMmTX2UIvvGN5CrmHdwyF8Jk5uBmxY%2BiUm0VMHUHDDru8K563FfzdtpEcjVw%2Bc%2FN%2BhPdx7LMeWFuc5sjJRC6hnOP86OnOGk4LBb29LmLMn%2BxO3RXTU4BtwSw6oj9Rahmw7xi1QSvHSfapMniIjLAPjitANa117WITrwaNklFEbnR2BzhaBPx7jRmUr4gNJeZLDUblGHxypY70J76%2FGuF4kTcL%2B7Ee%2FmKy%2FpQNBeJtseq5nNMlNDwCf7Q0EhJ5dtbaSmjWhJcY2mm65jxbBd5BwdKYZ72W8AtiFZE58D%2Brw25WEioXPg6TV5ghxMO2lwckGOqUBrD0Aia7lFqIJsbxtu8JlFwVG%2FJRpxg96MbjcVvJRkBk%2B1VH%2BC5lJi1tymZnq9sKnfuoV8roNvBJfYwffx9UP%2BUHyxelIGzDDJpOyoq9m7y%2Bgf4g3QCX1DP1YlDJ0DKidqxYZx%2B9c%2BjjvYcXKEonTN5CpELO32eRlMZg8CL7I8OA4chtOmG6keYY5FDKXbENdvoIL8hsZiFqT35QXwqFXg98XD884&X-Amz-Signature=b3d28d852a3f28083fe781bef5b6b26c484bfab74321a0076c10a4ebeedccafb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


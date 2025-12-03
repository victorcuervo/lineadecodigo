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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWDGBRBS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGKByh9Re2IC4hn8gNno3dqFdpf5znnVKpRYsc3eUQbvAiEA3rGrJcLmHKoyLijja5%2B474fv%2FoDMJ1vOfWwe2Xat%2BQIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCSs17l%2BL2JU3lfizSrcA3usViyyaLB7htBnFFDdFkRHU7AgOEm2FOJ%2FTGctCq%2F8oXWwG8ddekZtLDpuG9Od%2BR9lh0tbXeQ6QAvtUK%2FITYLZwl3ltQ%2BUpzgBj6TgMLGkE4i57QccqaPvF854%2FrVEeqLAQixE0DVJxQ2d0Ysosy6nrqugbISeT6mksLoSwyDUj98e4RDQe8ieHn3SKhKVUKTvmd7tKjBhb9VIiZXLb9PKLuk%2B0anaJQ4sm3o8d2InI9PXXzxHjmVQyvqHo3Is9cKdwnvY3K7aq6bQIx5%2ByhYD%2F5B9tiumBuGrDa5PRyFSdRAsEvcsOg4EAbNB6c%2FmN5s4egtbSVGph4BhygNG6QB64V16fiCtfOF3GuzAu6WCxUC8qahMO3VRPwGCt5yXVOUu0ecag3Pn3RM1qOCBEPzQDfh8WoB3Z09vJazleltC%2FXQjBlsnvJhq6yyQZoDF3P5SchWDM8LnWBNb1v79pLlcaTFsH5naJzZzWqkv92bhv8WQqCz7Sn%2Beu3SW687it0s9LB82VnXYw9qo3a3mN0C4t0rK3jMoir%2BEA8mk9uvXbQL5Z9OmLDIwoNQWDD0ArJczcgnVjv8va1sx3n6t1NtXKEPJHk1E6lqLO30vGaSqzWh1MvVZOr11o%2BEHMKXawckGOqUBJfObsNdcSV5l37gA0QqablpsFyuZDPL%2B8L9Z8j19MSlxHcuIvJPzfkTCgQUQMyd7Yu%2FZSQxwB4OIcQbc%2FEsXGVRvLNMo8qDdfkyN%2FVPdxC72Ae8NmPALe4rSvk2IQoyYB9KCh3gFjVjpjkvxb6noLZspwu5gKt%2Bvl2%2FNa8LyTRhXwKDiVj3%2BW%2FDE4vexfcCFl73xjvr6n5AFByapSnQy9WSy0CBe&X-Amz-Signature=a4e772d5dcc4564034fc4aa1e8eb181b9e86b0978e5531114c2ca137f0a33889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


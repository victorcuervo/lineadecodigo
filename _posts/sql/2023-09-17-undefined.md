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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MXBN7UD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDKfuS3LNrqywhl480P0ArFkJnsM1XFcmO%2FSQOLHsSLQAIgeAUdKcrcBL6WkiyAry62TuyKUW6eBa6HejeGSXkGgJQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDAsX5ycj7ge4xzL%2FeCrcAzxd3G8J6b9%2FbzPj7r2g17Y6tn4Euc%2B1LtRq2bC%2BDXUez1xFrL%2F6f8FbVu4uQY6Nk%2FSPmXETD5HepiOsExFhLgcooDkv%2BXCQ%2FVdr4Z7bxQBAateBdSxzlvTckm3dhaaaAdRmqak%2F%2F8a%2FAfFm1uHYHMRdMouayAzE8wWvtE%2Bf3ErCA77p6Oj5qMzmBuuUOdUSTV8rL9iy%2FCqSxMDA190VD75GmjAuoofMUzjIX3hX7l7hy%2FgVuA7om9johwTQC%2FaWD3n5Fznh5khJ0bqb8tcyN3pd3xEzpCST2In2wX1rj%2FdAP9eiah2280ukuNm99y8KuPSDZe%2FKqwDO8zpzt7kcc5aOOOg6P23IYoukp9iRGDqdXxo5nEAGVm%2Ffct0iScpsxZvtJ%2BDAjHaKNbJwV4jJ3kOYOfd%2FZTu5bsWNkkL0MTdgMK8XSq1HMqrHIuvhVO91an5er9R5yupOUt%2F46ceKQk191Bkxj2yBth0w8aGG3jgnDMeUAa5KySrRdZuPfjTugGbah57iEMYWy8Up26WQcwMKuKEwsMV3XZqS6J4opM15ZmHNPGgJ%2B%2BM3YVgqSa6FkRUTmRxD%2Bu60X9V6E%2FKmQwq4FTM4oKiVmYd1EHsRCmiKhGrG2%2BDPk2QIzBW%2FML3awckGOqUBSjTjsrngtyh0InJdNZ0vWyg2BwWs7GYV7zGICGwbkBYIkwR49Qe7GujlYEzkKSy3541OlZiovauMwWPxMfJ3SlLtwm933mfG6T9u0O%2BNw7qDJF4VJIcbiBpMBvm%2F17GKv2RPBDf%2Ff0GZ94n9XR%2FIltTCo8mn3%2BzPmYmrNsAdYfc3d6AaJexsrVGejj1rl%2BApPnw4n3J%2Ff9iLQwl02njuDYoBpNXg&X-Amz-Signature=b488b4e2847477e582bb98abadd711d66d8881d7f61fbab85c28edda0e3973f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


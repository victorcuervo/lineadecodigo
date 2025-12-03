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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AVJYEE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBvYEHYtsVpg27jE1fDvbvqBEPYmguG51Bet1hF9nzCAAiB7CVrdgNi9ykLBnPlcaf4FeikOsyqQfeJS3FaWl8c66Cr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMkIuXeiwiAVjTKghEKtwDAY7J0N1C4nO%2BEjsZeQvYTihy%2F5jcka6L7yvGq6IvQoEZEI%2FEaxvfOhD0LzAJjVyJKvUY%2FhefezwbCexNSnliypChuwn3%2F49LAtKNTPsKgxNZxvP1GDa4rEPHqdjNGot2wQaQc3jNaYXmmsTI2gYJ6OjGQU%2FnvSCINwmPvGqFmQ%2FxEoaN4KJhaAPZPc%2FdcJ%2FKBYc518tWPwroleBTPYLSSHHRy2W5bs0bGWp228o3tSRDht2BSz3LbwD391DtQVttNunFN8T%2BtPoWHdE5pmgea9MGD%2B6UXZMmJ5KiOFzI2n1GXJTWesSBn4aY3DP5XNy7KHhEONb7L79%2B2qDXSIWxDoWzcxZLA3B%2Bp5Te8Q2bt6PA324gAwHVo%2FEGZQEe7zk1xZau%2FFqhqJc5J7bVTNVKI1StB3TtFpIvSIk2dipuM6kaxMi%2BGFof6IMwQK839IzDSsrk%2Fv%2BYQfVhjBNzBeZN4xt8Hjva9OMqS8SrhhBX82gjevLC%2FRcMU5bAezivbMTAWHsCMpJNy5fa2wcMkO5SomRbdhK3f%2FF9pAElkoENX1YMg4Kzer2vr6V1BAdoirYJbUuUkXDLOZ3V2dVoTT8xgXiGE99J%2B%2FsT5n2SvAdE6EUsUH5vYXChj4Cq7p8wj5y%2ByQY6pgECZiXG%2Fk%2FgGE8L36murKt4fQcl%2FJrxIfHuOpMGwnZt%2BwvfjPD2krev0OPBphG2wg2aAqLg01HqnHKg%2FSwd55vIFOrS2qqR6ihXTFkqb6m1rA%2FgkMzl7aYDYj9Ld6tS%2BimnWp2hK1%2BRdTGHbbzAB2cNnSgwbSeePpq7Fk9y2uM%2BfAS7C0swRNYTR7Lg3fqWyUWnPmJzhRp%2BtcY2Hs7udkXf05auBEN6&X-Amz-Signature=6edf9447696d55a287c2bbe44bb3c2b0a5e50e06d751541d3ec11c8fc75fffd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


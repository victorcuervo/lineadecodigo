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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A6JOEA2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICyVYCf7%2F4A%2B5wjRUiBUFwnUuCK2g9LYL7t%2FwkbUHVzuAiEAuyj8qaK%2B10uXELOazjTnMMYv19eMwMgIq8%2FkaitMlrkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGNQckGF8uHsUs7wXyrcA2C4XUFH6wT5qjbPmiWC5Y4HrRZUW8hUUkdaYBlrlD1zK6U7FjBSBOM9j2tPTLOg6wqx8gRgZbSyV2GBJKV%2B7sFEBxLQRAqFTtiof28jHd486u4jdAM%2BrklHgJXJP4xOlYuHFgoGw%2FaUmXRs8CCqekKdBS3kYIOEpjjDYxy6U%2FVWioqaxwFYtGasdnu87pLV8Mka8iGyvVikUXb9TDWyLYKusBO%2FZD0pfxjefrkETlWdIb%2FMalvZmO5bNvuNe8oFUFUq9dxngK5C8H2KskI7PVQi%2BS%2BAqBGS4SZRs6ZQkC9VXz%2FVRPIwTdqGrzl0Sn3Xr3A8HFJnqBmjTcR1cGV%2FuxJKOc6K%2FgCWqmv%2FM5QSN2fIEaHrTH0zm36fgaOhxO2IU%2FhL8L4EgmjZLh9mSdw2FA2owVTvrgpv1EURlDHfVPkGAifgg5dqvvWfYd74WPH92O%2BTtrgBECxpgvMqRZ%2BzE8RkUpei4Mi5EmRk0YPzH7lPvWCiZkIFo0JqMX3pcib0xWC2ry2dtwffNCH4kWexD510UBatXXd24%2FlSTX0ko13T9ctGWpti8dG9MccrVqKunwXgnHZ%2FPUti04aEzJl4Nbefj%2F9%2BemjlH3ru60yo06p1RQDkjeSqPHVoi4txMLzNwMkGOqUBDOp3XpFi9FKvpA925Y982%2B1krkqPkPWbAHeXP%2FCWgKFaMTog00dd8PEq6YyomPN5jhY36WoHeSm%2Bs0SfTo3QVxMzJ9nXiLc%2B6s8tEs5oqvwbM9SLRIbELScLbsl0aKQynqDN5%2Fg%2BDZI%2B9E6b0pfSmXIG5CcY0Xj%2FLDbf%2FkWbCiCZ%2Broy9KlUgY%2B2rlx7%2F1D0nv5CtsrYFXjaUh2pjDhgqb%2F3VXDs&X-Amz-Signature=6a3009a946365112b250cc563d5740a67dc7f22e0eef36fa88a142bc5e88b60b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


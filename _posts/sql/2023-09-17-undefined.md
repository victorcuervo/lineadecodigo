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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOGTD4I5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIDXFqDgaJA%2F6ah%2FXcDoGm%2F%2BMsfC7%2FU9s9oE1zNUjNJ3vAiEAtwg1WmfFw2psJw9b9Ixp12TjQXTH961xYQx1LgaG2bcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDN9dxq8ITGaDGWeewyrcA4%2B8XPupN3xWpFlNUqB%2FSrNwfXaq6XzLv8J%2FIkjVV78wyjcxjrUamRFkLiJb1RhzzPKv3kG2lxiHnwLvpg3fJlLeutKVJQtdjb9hzKX%2Fb45J37JilIbqAVc8eL7kTtiASIayHzOkGVJM7MDis9yW9XqaL%2F8K0GhebRavKUKdsITS955vn%2FiG7Bx9i5kGU0dBAak8EWvj%2BNC2CrFaSCr82bq1%2B5snViCpDzW1nYTwg24fhvnT3daW63aTPrEYd0lhYDVZQ3hmSGiNbHhLLY6DmO%2FcB4gzorWT%2F4M4U54qC1tF0IowqlsBLD0g6Mk7B0sD4aAe%2FF%2B1XjI0RK2aP%2B6tWzFC9hbxBF4bGzk4%2BYyORCsiVPW%2F2yCpHLWa9O1EEBWivQHLVKewjJFWkPr3SDvkiv%2FXidBZiiMJw%2Bea8WNRmbIh%2BLPhYimHucPSjgafBkotMJvCsXx1H1Sfhf2to1Tx887WYoTt%2Bq3Ebo31HrrgPEB4vBGTgjectRFanzOrfs7xYC1J6P5%2FdUILfHMLXh5Y6lFy8Q27Fy3iQibInmFojLyC4OryPU6Qucj20%2BWwVHIrYlSXNOAfKAXW1T7R4%2BM5c0FdgIewwXUdVI5NjEdJ9zfhHBKq9D4VgGjRtLxAMOjUv8kGOqUBMZ%2Bodmr1dV2KG%2BnlMiaMPkIRAlDHaSm5oiMX7Xnjv03ucuQS1qMH0fmwMpVhH%2B9kPger4anc2hHPCNURVi%2BE0mB2z1E5yl7yBUtvS7haBRx%2BuExd692XG1SwF7L2c%2BfAhTUHbWprq5R%2BhOCpR3%2B2KyUqjrvoz8bm0zgsSn9MkxOZO5Dja1A3j1SsCmhJr2bzbzcWQw%2BQEOUeFbcprWHxI94sv8tb&X-Amz-Signature=da5d9adbea4f1b5c8e0c7e0e7342041f75845ad498c2e44ecb6a69034fb894c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


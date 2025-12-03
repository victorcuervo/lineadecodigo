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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665752NU2H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T083131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCpwgmIjvj11e3SYVU0ONEBdKWqqL%2BB58fBIq1G3IGt0QIgCdybdiieALs9PzdK4aoOhkZZ7BSicdX%2FN%2BzIyu3HDIUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMcurhz9GxtqTAMPdSrcAyyBsIDqYOcd3MNbVhSzrPLOqB0UpB1L7WhEtuN5%2Bk3zCQ7Oy7tBUiyEjA3Q8mLsn0A6zCMvhCKs2r8jhivHbLgQeZoXBlwi7S8PuPIEGpIpL%2FtlDOAEi8iEy39uOXMZHzLOKA8Q0PQJznOSg9ataE9btedQ24KqzR3StV0BJaCdAig7BE9Yf5TcDCJ2J60adJF6Qw8OqHDq9M0Lxfpc705xHjwdzLg%2BVlLv3tT%2B9tj%2FKNnoWS6kzsN9HqHG2KKHWjnVTiqs4%2BSQBLmP%2F6DmyRKfiSGGM4Xa%2FSFTM4uLPqTbOqX319z%2By%2BHrkRH4Ym8thNEW%2B3ImisfZ%2FOoP5blj793Y7mh0SQzJVmB7lr1izzOkkABX0VAgY7%2FMi2nEE8rMomnxX%2FjDm%2BAeVBXu6CYjPE3iyGXidvocoX7XdMZTjLZNW2r%2Fq5hZ32uaZ1vRtQUgFPHY5OUpUoFBDVOZiSlBhV3i7R9zhM04RvvtWB2Ihr%2Bt5b4DhodahuibjVwDf9MUhucZ0zV5FFbjIMCZbsMIkgRQj7Ko3uV2XXoav%2BXffSb0yo1t0Q98sBF60%2BZsCEUzbUj7K9N%2FtYIX%2FVU%2FrEbxcJikFKzMvQv3vEAMg36VQj1OVnSX2X1qcxP7OwLcMNvVv8kGOqUB27NtEjk7Zyb7O3KYuTF1K8a0XvIQ48Wqqb6gzJomwmwGpCI7qd05IbFAp5xvDvbKCbE%2BjmUD8b73Qy75Rk6dks9b3nS%2BIwhV2M7rIu4vmqCq1DwmrExAtZy9%2F6UUMRUdFOXAYGAKWUYgleuKEBVSPKr3%2FWJbc6BvTnASuf4jx9p9CCJvNBJ0U6%2By8Cf3Ojg2JrjZ%2Fg%2B4VzwErJMNq6USaJia51dQ&X-Amz-Signature=743e82af32077aac280b385d9dbdca76ad9379f27972e8ea938ea1b914f96aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


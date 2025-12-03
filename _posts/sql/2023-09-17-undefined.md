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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVR6OYFN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCUExku2fb0zjDynjiVkRAjLszrISza%2FRhMwBrerk5DCwIhAPP5%2B19Xw1S2iZdoqzWwVs5VfGQ1Z5KfwR11u8IsXgBTKv8DCCcQABoMNjM3NDIzMTgzODA1IgwUMLonTs131Th%2FMjAq3AMfXXY5VyP%2B7aYLrDoYXTenRIukyJQT3EtUPz3fokOVMELW4Z%2BsZojkC5f58CUk0ZsCnPxtBQEn%2BN2fZg49731nLocfG9ckDLWsgIKBxxxHcm%2FoMDX8kHqqV1e664wsfpm%2FRk%2FDpPI04%2FsVgA6%2BHs%2Bu98OwDvLbfxSZ%2BXnW0rQmflpDfqUqP39zMBFG5YSwpI5S0culK8SXiCuYDSZspAaqOwKnrih2COFMzOXbxLx27rHNnjHkp5ENbmQ8J2vXUEW9JHDWLC1ePMw6gb47PDl8O81ebfMWuVURHqExq1gmJT6N3it7ZTXlgN03U2ZaGJ%2FsliABv8lH0Kg4HPG72Qze1fn3QJe5AyBwe7AoFZYSTbaI9xduIcHLI7V%2BppTX8SD%2BadHJaVsfsIe2XVR18H%2FdOF0cZzl5a6UTqPDdhrcxDGXnHEFP1lppD9gAlgH03mn%2BLIBHDO59efRBSxRLyvepV23DFdS4UoWzb1kp4PSW4BhX4fCie0JyPcif4YnoQEWy4h0ZmCq0E%2FPu%2F99KwrttwlDIc7FqqD%2FuyOMcLNo8Yk7vlqc0y6GBY2VHZ3T8NLj4cW7IpLnlGYTDEzRzijErd9qxSz3OBDxfES16QzTCKETeltlBa2U8YjkeYzCkmr%2FJBjqkAa7RJd8JmLW7%2BKucIvlbLMj3CXO%2FOrvLjeDksZU5Jsm%2B4hMJXXblz7kBCkon0tsJPvHMHq0kBmYBLn%2B0K50Hx16FVnuPVwNocaYHAoA%2BzUawlDuAF68OAIduOl1fq32GVsdVsPUizFjfgYyeaqgyXzM8kpZ%2Fam2zaD9O5g2OmPkNdJEL6mIrgyIpFNabFeyQS0zvZvFDPJzvGtWOaIPEI8QCXUUi&X-Amz-Signature=fb9ceb3c6dc602c778df69f5bf66786ce38c472a99a6a3a9e83c6285e04f10db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYCY5CC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCgY0yn4XjxRYIvi89b%2FkcniIpy3G%2BTnEDBCzc3sI1q2gIhAPU0kqY9Q7raLuI4ql3KXQwIOZbApx%2BBJDWxRqHYkEAhKv8DCCwQABoMNjM3NDIzMTgzODA1IgyTQE6tPVigdtyGddkq3AOe3oMdrCTAiJWQtbj3EDmpE8V4V8o2%2FR%2FqMoO%2BEhelr0VzeFBnbxaoGhJj5McnB1%2BudAec%2FUrvMIPFkyEAzuufhjwdv5KDf%2BUmGTkyklGScYsKc33JP7Y6MmjOh%2FzKmiAtLWk0eeP7FePip39jJVs4jYs1vU6%2BjfAHlpl9vR5g99SzN7K6yMNV7IROCI52t4jl0qStwBPVOe5RypOjYFUbCrldSz70ey%2BqrSZwmCPMjIYVWIdrtZQ%2BeECv4ObSmG9hzA8kv6LkAbZabOlv42u%2FW4SyIqdku0aBi087ZgRnsxQM56inbegrBnnXx2XOLsOzp%2BNqzwpx6c4Rlcq3k2xIR7YXx58x5dLXv0%2FjUogoZCZtQb8%2BbY3KcMHRTz1iwDkxw857iBcmwfAVAkBIXjqvAtssfJHbdoiI92K937cWZO5aM4kIIfcklUyPvr5NZu0NaFkSFGavB%2BH5lhXP%2Fh%2BynPHtvFt0uTd1hdoUeBxxUpM7COgslp58GD4qS%2FlKFVxSWaj%2BB25BUscDxLyIMRY4OMdv4dnWcQVo5YiU3mWCp%2FF3g1KdOWxcOm5dgXtVUFIY%2BoJGu8BI4Wy%2BNKDl4LlrTbBfzPI1Nux3m%2FaR%2BU7cKS%2FsLJs0yVdxUqMY4jDwrcDJBjqkAS2Yy1WwSIVZ2yG9fv2AKZAympLPSlPfm6igDIa2p4oCe38PrHARCrQy2cCBiWaXgCDDmajPOv5i6ddvZoFankasgB3CtXig6PCH2lUL7que36OG7RK%2FAifiJxhxsN0drs33h0%2FGJxofwCoezWFEIw8%2FbHo1AIUOyi2Y%2FMTtNWMPIpbsaJ2D8UgspY9un00vhLI8kRLriWVDTG33VWgIBp9QxR5l&X-Amz-Signature=11c1f42378838bca4c4253dad943e569cec6cf2be6b50a3fbce0af1d11a2acd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


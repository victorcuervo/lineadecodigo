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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X3KYVBP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAcS1YzWOgJAxe7T3AxoP38CHg09bFYM11sHIu6SrzsEAiEAwQxPxN%2FryjJIdi%2FkcCbNo9DIXojeKHlU2TmtYsl9Fbcq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDOi17lnMGPjvB%2BfS0CrcA2MVDHZRIeJFWESke82YaUQFoRL7WOLUP79TVQGX9mKHYM1vab3SWUbUUMmd4PLHqQ1d7XnE1TCdFWSW9wRt%2Bu40Kz5m1WG7W0woOB%2BJ24A0ZPPIlVFXHD1U%2BqxfFjokbey0g9LZwMYfctt8y6Fqsw1c07L5qBPU%2BgDQUGoLR%2Fsl%2Brj8gsP5UTmduj0YqIXCxVg9%2BQad0Xa2EaBV5zWHPtZV5F1pcizukeVoa06VET3tRZGN0QfMXFG5vE7iHWgpKuU%2BB0AvIRCWwOVG1tzls0RqCy2dToNjjqG1OCeBj4Q2xEcxfnKSDtwCZi%2Btxa92T30HthBXK0zsNHqW1UJBW9gaDZ219jYB%2B6ROh711LvHx9u9QVmd%2FDdx3PFxxxqCFhFRIEWGm%2BccRhTDPhBVC33gfNUY%2Fev11lMNK9BgzO6wWagd0t8e6XhC07myfJcOdrJjt6hHcQpRZcQ8eBivwVrYBx3szQthS%2Ft8aaEWumH7J6P0MnwyiJ4EdTJ2uSjd5XFnYhG9TjSWywuuMrPK3WtOGfuVGrDTR82hjeoH9z6xYZrhlCyrxaCDtMMbDdqW4AADPOxNCxLcd3cuDagkB6pS7ot6MnvpdZgHeOc6obZCFMSNNJHuhTLFAwPMDMML%2BvckGOqUBJPo1vsq5iX9yPrxMBUqypc%2BMzckyZ1CYYtGFHcPPg4Ru9jC3Yb0f%2FuJH%2FjdurLoynhI%2BKg5xfPNAwMHJnwSUVvmdbSUQNRCJor0tbUvonN0fRep2Tl6It5ZLsCI4y%2F3%2Fbqq92PIMugPaAvADkSZpjJiAEUw2V3OsAOLpUmwjwShH%2FTKtC5ydwL6wGRp3uxV2Iu5pTCtpMuWQZ%2FutDKnEUOHOrb1k&X-Amz-Signature=d84b272de514725867796f74befb3633a1e8a8f9e06c94f61750d88f82174fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


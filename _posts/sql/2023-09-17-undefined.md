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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE37D2S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCPRGGqJ2q5dylL7AsnktQWWCTMF%2FeHD1QcP4mtC1%2BMcQIgRV8yRR03swQiyFkSz0olOJATQQ5tW5PGmyrdMrHMRngq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDUwcoW5kDEBzSUqRircA1%2BUtu8KhMUz3mAjRBHOTI6MML%2FpTyBSAbl8SN91RhHoCggGA2Qh7iihAKOwTAG08qn1aZRcImvRixKS4jp%2BbYfwqgiUbST2k0gWVOigVC6r6AvdobaPzixNIkfL5erbe9JrCdqwAAB4YmTv4dARdqeGL6xRrBLbNawxVUwHZjxa173ew6voC1%2BG7m5gQcCbnhAeGhZv4V8dEqPvOEIWyfvEVtV%2BZGvqyQdn9O78KBd6YBJ4WhpU6wNM%2FcVaIR7bPWvt%2FAIe8f5waVGTaVFIz9n%2F395lo8Y5Ghfut6vrKGosk4xR1etI0HFM2SSYU0GdkKnntBwcDfLUUZ5mtR7y1DxLTVpEIV3G3ilTzOV5vNVmU0sRqunVzxKtWmouEImWvH3IIhI9OAri4sUCBEqDX0YjGWm2TXWQ%2BhLoMEoAmuw69cNJlBNMmx9x%2BQ5TGar%2FyaJEpYtUTHKgnUlD%2BYZX0bHhPir1mjxX%2F2Ehc3Kj1iAjTZwxUrgQpWw3xo1ejKW%2FcoIMvF1r9ryQgp%2B3M80Htf68kB9IPIKC7wHcX41Cxor0gVUDtLsNGNA48nJ%2FYhsUhUf1ixOD3IeLfra0yERzZKl7dnjGB4xF8dOl02V0XiJVcJ3bi6n5OnsitZ79MPnAwckGOqUB8OJbcdnHJI%2FathuG3MdX8NPgJYkpxNvTCbIJdt1sh69gfcLOMHQD6tx7l5q9D7wWil5214TKuFrBtJQUoaJT0LWKoZZojLG7uheRLxbamgWBBcMsap22s5kFUfDwUg5KSRcfM5gKPh0ljmDdd%2FXCiEtlqKk%2FxvsN6YaDXsrIFGUojdS7PUYz%2BfloC%2FHznI%2Be%2FDK63PtBzapGuoX2oYMGP%2Fy26uYg&X-Amz-Signature=3df5859743f3253e9bbfdcfb31543857e198bb99d939f17419b37f000adf42f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


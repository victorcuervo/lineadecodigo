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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWMT7QK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCID6IHcll6ADWJ%2FXFFuoue27jKAtMh7v4UfoYAE3WAUYJAiAPe0f9rXWsuMECDHZur82TFXcWJD9PKwG5mpui2SqkQSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMp7RBmU2PQTxlBrpoKtwD0sH6rvJRrTHG9FSglgAbCCiOfsuvKGUpGVO0GD%2BKFv%2FLnG0%2BNTAaWAb39sEtt5IcM8FggKvmhyz1D1xoS1QAGHHa2Qp9PKbP3iJp1sQIBitk8%2FWd%2BlUrbxXf3nAgHChh2Jg4VF0PT6QBKI3CtIwe1xRcG1pYJm%2BYQPp63ormqoBYdNeSr%2FNTCmbORJwFXvEKM9jRwur7sXmp9RyvhvezdOu7lpFQwz01bZqc2PvH%2BswYZbV9eO4uNTeyWzmTlCunwk3DnK1qG%2Bo0O8WqvIChAOtnWJzTPVhobQHIXV5JBYiiYFR1hh3ZaRMQ7tV7PBs23MOQtg3Rwy57IUusvmbNzhXHbmllPKlTs9KaS%2Fdub%2BRGePJMO2CEvqCXSvpktliTWc0oWeZRh467PVGzR5EvjauXEzIsRLiSR5aExZBSARApHV8CSkOaoQjgsIFRVEdoBpW1LPhI6PeUMmDWjAOItmnsyaqpYbDtv3Ev66Gvd9mbhFZq7rCLqiixHoKg%2FUcnSLJ0YMFZ4HIgN4s6J5Df%2B1WTYXJ4Lp1%2F%2Bi5oTLtAgk%2FLXlwTAF%2Fa4eaZBflbxMTpX0N7viY9%2Bo9fKEEeOY7GWILDT4rY%2B1q%2FnxDSCgp18abjaDz6KQDV65v%2Fu6kwwYfByQY6pgHaJn6br9OmJ4K%2FIfCfpZ9v77UMuE5PX0dAE5h5kmRuOH%2B4V%2FR9%2FQYBvHOBGLaD1NIKBw5Mp1OAMS4FJFgLwCX%2FPg2V9GeQSA04Ayx0YvpZJy%2BkZLwI9WqVk0p2XUO0t9jwQ3UNjZn%2BwqobA0feN3CwlZru43gABfU%2FNPax12d6UFZLKVUJtR9hORRZ4%2BZHrBmO9LZWB4enR8FmBhJiLKApATjNcimr&X-Amz-Signature=9cd234769c83115d77e7809fd762e000c7380e0566864686e2deb2b61dd40e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


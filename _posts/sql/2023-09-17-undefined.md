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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVH7EH73%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDZWRa5kFSh9DYtQ8Znofzl%2B0j6RpSBNDDXEKqVmroSpwIgER5%2F97uQrU%2FWsY4F%2BAN7iQ0jUlcL2dxy%2FaJkpIDWmUYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDN1lTLeEjSPbfFSl7SrcAxMcXCOToF4m4z28KtyJLIqMv6LF8oMe7n85pOWQiU5zcCz7omhebGdjtemg%2BHWdX9iMTDQUAM9%2Brt1v%2B2HA7OxoIkAY7z%2BTaVT04qVnqWcZCYHCMHjimovJRoYKPzv6d9fGSRvABBv5ck6XBwXpgy8TOBkM%2BXuXxiooBnyF4hiV%2FQuw9lUWcRxxKPZmbMm1aReyQzTFPJjmQWo6k%2BzKTTm%2BG9%2BXT8dgRw11D%2BhOhotzrVhH6ykMspGgm%2Bf6fOofjcPgNGTB3TR4xDHsiXWlle9NXou%2BDOPLcvn81dUTM%2FZG1NVAz1SrUYfQ5f%2Bo2AEsClbW42nud8p4SZg25316o7fiPpcsDuEjfxOWRsJlKC2c1Ltj3nzX2YH5LCB%2F9wkFp7Hg%2FnSAxPJEuXP41Oaoh1gD77wg2RDudtcUp29oj6HF5MlQJB0yi6c2OoMigRG0bIRYJJUoKYC6cCR3ZlYjKrvhmKnomuBASF7FlwlmaVmcSmQuio32MHENo%2BpeS69av%2FEcTq6BJw1aJYIyMO6L7kFQ2Px5Tv2krsXL%2FIk3PaIl09w0RHFQmNFQ0D90nQy43i4IGIBsBcyjaEZ3Z7RioL9784PvPmLiFUj7a%2Bu36TvfxLh0f9oAWq1qMlsmMM6uwMkGOqUBPXacGOeDaYQUn0eGlxP%2BO%2FlqAg6MMC%2BZ8d99PS2EF8oyypEbNfZoDHgwctQK4ihNOcDs37iTAbbeGCh1WqKg8Qx1lwEkqnPNF0BvepzjW%2BUblOtTZCCRvh0sUn8Yt4D5Sg3tUdOHwoMJV0qr5Vr8e0%2FeLOoYUKMlVXcVa1j32R2T49VXOVvH4o9SzM%2FDwL9TRJOL1QkFKNKw7FW4zOn%2BtDHxCXYN&X-Amz-Signature=7a393850cac7acd34b712b0caaf0f55625ddc73426d26e061df2bf518dfc2ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


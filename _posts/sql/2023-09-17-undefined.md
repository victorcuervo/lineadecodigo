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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6VJB6R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIBamu3yZ2xMQNqPZYBxxsYJnDDdA5pRt1KUn6xbLH0TYAiEA8V8cBrehw%2BACY2PPdOG%2BSofXA3J6j22o23KWC%2BYZzuEq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDI9dgV%2B4FNlhACQ9bSrcA7%2FotBlRI%2BLe37Jb7XLs6Edir9mTqydMEFn88Imd6cy4RwgUbSFYNBpYq150u7kYayYB5EYVUzYp%2Bkfq9G9MawBgnxdU0CZSLJmUY2wtzWEZpe5qcFBt9uHEaUDodwoR1vVJWbEJuliA1jt%2BxQ2SwGUjlMZg2oNc9FUU%2Bi2XcTj9XSaXamVve0Hz1QoBTkHMsopYDW2edK8jF%2BGnaxau5MkoTRwRC7f%2BkwV9u8RZ5PpGV%2BEYaLsFSRMhwMfiKsBpo92O42th3UbqrJ7QRLk%2Frp4Kr%2FdGV2uALdOKZOvtL59I9uvrTsi9wJwsX%2Bph2Vc1iDg7Y%2FqbqLmRMaSPLbc1qBbjTQYyFYY9nVC1xZpuSl75nrnTJk68YvbHScNDpbDg1Oo9eDlIiBc3geplop17mqYSK71BSIOa%2BWezOuvEacVRIhafMV27W2kq1EtCMnMWtpsklnRyW3mV9WQ3kfcUFskFhwOC%2B0FWPXgY2YMXp4cqIT9eJAUlml3UUB9xK5DfnQyQOHTuxN2glOL4SjXZrBih4f6ToXbsa0%2BzUQwPSt4YioJ5wfqeSjtTolaXSrgoezn5QDgXGAtFrQ10zMxImMrtZRB13wCkjWuukYxq3k4J4Hp3yEfkmh8p%2B5i4MPekwckGOqUBaWEZ7LvZI87LsfDt4zfIakpWxO4VvrYtszO8wGTAJ42gVxFma1GhTLP%2BXzthRj6%2FnRmubeEOwLVcQcHCVEZb6MLvT3YyIS7Cuy9a7RQ8dU2CZ3rnrgas3Yk39%2ByzNibvUn2nWSEOMb7qzsZXA7pUR2kBWfbZjPOkWEuEh5bXiQjzfqLzgC8fXbyyXHGyj3eYmsKZWid0jD%2FBdEtGhDuEhu1D2j3e&X-Amz-Signature=2446472cfb1a8c3febd55fdab45653336595032898311c94b571182303be7a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


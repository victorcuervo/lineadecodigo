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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6E4AXKK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBNDm6u9nFSdV1jFfwf5ZOtp3s2O4jdvokhrnbaIJ6ABAiEAjaNSsSCyfsOmEJcxM9mvbCse8%2BIDgWjJj9fSb5ZtohIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOVFH7ex1IsMSq0KASrcAwGuj3XzIQabq0x7%2B88Xo%2Bv1fNLj3Y4hZoreDzBr%2FsfDaj9%2FNFoJ5dJKH0HFZ5Cu%2BlV3snkL%2F04ovUG%2Biv%2FtLnxMhC3in8qBQEyrJwv8aH4S0UbLTcgx7uh8owQm4yCas%2Fzsgg%2BpMKqSu6ba6tSb1ww6V%2FXiawyMh%2B314rt%2FA5N59UIdGF5v69pK8nYxgeXBKPkMP4p6dPRT%2FDUAMMNXohrfD798523WYSJymE%2F%2BR2KakNYdiJsi%2Bm1x8I38d1RSJI0BTNDSlNL5R5NwGkQOTnFyt4HP2WN5Q%2FBepQ%2BV21h0TY2mNXqODiWMaJnrIIM%2BjgHj4lWLoTG%2FXmbAGSnOdvOshu3Ez09CwqZglVYZl0x49lhD2qO8Tkdx%2FkIocBu%2BlXXxv85tcXm80SUT2g2Y1df9HbcAJbHxPsPjRtghxhnNGF4PrEWyuoRI5srVVhJ%2BOE3RHumbQJWnkg%2F1TOXwPM2eadYUFp5v%2F1e98yt3uVvdm%2B9YAOsDiM1jkUQW1AdRdBJZ6CN1dWPuUxVT9AfhCDepeRrKe5CxhcyVUqtiFnUkDVeCRZoDr92YoVYBJsCizxntDLxmXCkL4v0%2B9RFN9zNnrnjry8spj0%2BmPynM39pAI4nfdce1gU2JEJBfMKjrwMkGOqUBbXY75Ce%2FjUQF6F34tnsl2ZnWBmJMQq9GQfiVX9d6Wa%2B8k2uvNd1WD04Zi%2BVVWR0BlR2mAA9%2FpE%2F%2F6R2vUqHbkpBu5D%2BV6wecw8h6MzbTEM9wUep0o83oWjfMxnF1iTvdu0hEDVcxTcpN72MAA9tXVTnmTtGuASBaW09dvDICVwbTrqlV7XdoUadbfDFqQOs6DCwqm3eFTtLq0qlcrhjhG0Lnpccd&X-Amz-Signature=0365d08af6271cfecdb87d890361669dabcc23a4025c8b240e22465b3172c0f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


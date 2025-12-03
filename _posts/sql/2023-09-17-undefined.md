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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFYPOFX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDcz%2B%2F5rOeCR6ZebxW3InZXZz0GPEuYJ0FOMW5km%2BAMFgIhAMAz8SzklVwA9Dj%2FrZP63sf%2BosNRgBy6nzlMjoQMd0oMKv8DCCgQABoMNjM3NDIzMTgzODA1Igypp9uaMC0oL9Z8MGMq3AOwRoVAyHlxU%2Fe8kW9Auat91EGlfZNZ8fE%2Bkofzh7b9P4XZCiOdT%2BzE2F8FSYsCOoWfatjDx16%2BnBXaqVZSsrQIKkZ0PutTKRfuSzT0aUhXFRdxKHODGwnjk9JQtiHBmpNwYzI0nW8G2LI%2F4RIXW8hj0zK9mhCY6bBEyUOEwaQJ6nzYji4OqiFIM8v3VBZuQYowkPTnvw8zVBISEFNtWzj0qy8QNXgag65GVVMJ%2BlAn3rZR%2Fn5lBo77mGR%2BnUJNiFLwlofqy5IBXID%2BmwvgzYGHZHqGTZsK4tJeDbJ1NL5eJEm6BDc2mpZjeYCN9JdIU0q%2BPitf%2BWZWiQYsg%2FreQgz8YvzM7EdQlwGKBetSopSef6ewA%2BqZbR%2BLnKguyMng8bJJ7ruKM9i1256UPRSUzWGfiTEMJ2gGI3lnaZSzGelGHx8E%2BkECFOJqq9G1p05%2BXfeuOVoo2SVqq3CCU66voWww7PdMsjLEWXR4PM5hZC3UElKoTKQ4%2FqnbtatO867scF2jXE4Fm2oVBWM%2FONT0jouXusPIJjH0h1WiIjACdQh4xwcVwW1S4F7vo3Dkz7UWInQHyutlJpufnLrWHyuAB2lEbOK85aSELWZm4nfEBbhPnWXFfVupFGZCr8pbJDCFur%2FJBjqkAWDTy2iL8FYhWW7W7LagIzYtwSqrfk5tGoQgogGylQDrtxiMIgst2spsVaTXBHMOt8cB7q%2BgqeDSBUF%2Fg0guBkgQ0WPdauSfI6fEeUZI%2FwdyJllwkE%2FQTkcq9pFMQbWAM0Pk%2BJcw3XvyDZZasi2slJvIy7KlLd1uUdIbvGaMwSHuoflscF0wflP6lR54e%2BGfUgyYtt9Gxt0tjXDy9Bxa2S%2FP2f1E&X-Amz-Signature=b2d9483fc7f530a785030473d6d89f84b3919373606bcc669b39cba1b9a504ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


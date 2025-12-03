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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWUHGBPT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAkQy7%2FysImddFQ1ULyXR2mg5M2gAP4DAukZPwtKEMAPAiEAoGi9sbgfF4B4%2B2mTKsmBO%2Bg5BTaPAjGR85Ie6iIn5FUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGzOKge7ZlyOYTq2ZSrcA%2FKbvuk6t5FhyKEt3NZ%2FslG4HM9NuFuzc6idC3HYLaMdmA0fox4sGYPCIRVx%2FP0eSYf9jcpR%2BbcviCs02F1z4naAsHFki3ZcCaITo99%2FbVl41qRil2wYZomhJI0aGAkZkNyv4YLlQSx%2BubRUMWat6HEVPXoAJX7ACW5APRBDhWIhcvgR8yLooiRFndix7rxtZJC7YTuK1SODRWfmk9DqwQtpeQrtFKawsrK9hRU5tntsdROFcOxnoTzl3kxjz6iLuMsJ34bToYUsgbUkrG28Cj43NnUbUN4Fs%2BzzlNO0%2BDXzgR7XWMGX1hMPM3n7vydIEBBfKa9gnqTeSE9GAD8fNuYZqfyO8%2B0SmMDy9dPOVb%2Fst3WzKedJY4FZhn7nFZOW7WSnKb8mhdK2RWUOIgXxdFeWpIsZCDJ61eVee3KiJ%2FH5j2ffNaEbemByKjKUEt5jdCUrCMmWFaaWePJGq2lo1CeKJJqpgOrjpgxt3d%2BVD4hH%2BQQ7mGuaUF2PJSwRK6Q9fO0aPQKy5fi10%2BpYJlYXfol%2By12XGTQomfztiyiJlkdgmSU2XvLd6Y9l435NjjJ1lgrxP4DVQyrR0KGwcUxgP3h3Ft%2B1PbNFJ9yZmtW0Obnwe8%2FInHmo6zPQcXzuMM6av8kGOqUBCCqkj2Cf4l7xcBdEbguWnQ6svuItejSXvY761YVZ7zeV9I3drcaMqeiWzUzbbX8p02gTdS73%2B6E026i0S%2Fo1f%2FOHd2n28PzMuUul0KkCq0hMLce4nPS0zLfwJZdyBADS3HPfzBZXLE%2BidZ4XKTCtiqeSXOK7ow22Wj%2FVhaeOsZwATkXr%2Fxq1PccjtzGBu8uA3Jcf6%2F19C%2FPJBj8KbfpI9NpyF4QJ&X-Amz-Signature=448f6c0088b668e5483656dfbd026646917585d6d930b8970714c8e094e9284b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


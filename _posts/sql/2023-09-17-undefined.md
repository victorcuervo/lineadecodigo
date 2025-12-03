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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STAT6I7P%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIERHZHvuCKA9f3PE0ONjYpql%2FYiixT%2B6yRA7RgsSFZqrAiEA1n%2BwN%2BRQGob0gSBijvc1qvvwv98PkejXZekcFI7iwqwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDH4NysjGqw7wlIFvtCrcA5DWnKuJnOwrHDBhGS4WlDknKpM1n63U2tt7YqCTr0GKBJgoXYInyVNMVwcO0%2FuYI8q47NMyOdLwxNb0uMsI9DCkaP2BAFj04YLRZXn62Pz0lHfZEd1CSkJvs4feRHpTn2tquw%2FEr51Br4T0gTeGxY3Mrq2YB%2BeIouseQYvd7jFvRqTpXTrbpACZ4IqcPBInxQUmQIDR03mofu%2B%2FWGDWPHIoYL4mjsFBgOcW8usLXn%2BziVPifDyXqeCbknPkxYv84au%2FNVsks2DzkEgIsz3%2BOcg%2F%2FvfpStY2UH5rLBBcSCixdUBkaDXt2fKWAZSweRy231S8InFFJ4l2VLge88KIardRm0jOi4DSpOE2xUH%2B%2FOeQHeKLoRRf%2BEZ%2Bb3UVZAnlSZa4YJT%2BWrr2iOAeHaI29huPbNuoPzBVwX3OsJSSkS7nuNODHlfbnEVqJrAJiEU%2FfLhwGkAjBk19pYNDc4Oqn0PDxiXbs%2BrJdPiyxZR5Qp9kw76RkKcZwT8mR7%2BISYbiFjDvZOf1SIhzyeeNN5VWu6jUnHnD87XdsatJDNftO04NE6B3H4vanENqAmBDU7KA0tquGoZ2osVk8pYwFFR5arKPKNYpMg6bXNjhS0oW55hcs5QNA8gamlUq3Aj1MI%2FNwMkGOqUBnFXsNkprfS8O48TQhmwozPL6La3AgE7R%2FbhBp6t%2BaTrgiPMLdin9VumQF6BcsR036W4yDlYyT60VIXTcm0MapUIEt38cZtmWDvK1pqVm2tJPHtmg6Uxov%2FKLc98tpQa6Piw43KoLYaD2r3EZKkwCnhAqvjgoQh7q6twSWMmIQyPInln0fQrWCnKLHUqwlGcTcWpd5mEMNUcH%2FwHoJ99CDbL%2BBnlj&X-Amz-Signature=7d96296c807ecfd1914d954367ea8058b45d823bd5b6a63bb9a0bd511b10fcaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CTF7GVP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCxsotJTTw49pdjgjwPt82IwF7GxlpBjW4xkVZ4LC2lNQIgG%2FdsaIt99%2FuQlVO90uzCuV6lcCtn%2BGIgYSkHe1ngGxcq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHKf%2FYGQMIxRQ2rPhCrcA%2Fm9cwBZpdEEh8eIst%2B%2Bb9Fc3iWkc8JP9B%2FiQg%2BXbDIsQgP9Abpw7W2vnHKlFgkaVaVykmnJFac4C19iqFObv2QOI8OvLv8ozBRIrAYqgg68Vi1C5csRQvEmt5uW6R2AoN%2FLm02QeTIbjlho%2FpiJV12a9u2O9%2F8mAOW3xNCgBE7bW15WToQ2tyoXKP8Poqqja%2BLTd1BpeksXaydKv7O7kB9CbMl6MMjZlR%2FlSJ6bIFjiyHutfsS20h6o38gRoJCfjXGqf%2Fhhy0Q5F15NVr4uCUBEVARSMjjZTmVx6tFLaXT78anp88ndWppqU%2FKKOsvr8AExV3nKxW9R9tDZni157VkeeVrmwgB5qySPgwFKTmWSndT7g1sD4bSogfzQQfNKhCEtYlVO1ngD0T2lgxZrUsHAMXz15Pkf5Cg%2Bh50kJ3FsRG2t6UrYQ3wpfPiFgR0Yp9aeBZjgHrWr3%2FZyN46yCbExWQuAFub5CanyaXc0UeJGdVlnYIDlo%2FW6LEB3KJqZSIy8C%2FZwuDFv%2B6CMbcwnW87blyk5bAktsJtEe8fHDITb11R65LhOh1HtTviprIINA7KKpEwEBSvoU1BBpp9Hwoym54h63nB5OjsxcIR1AYJDStC%2B%2BP0eJZmywuesMOq5v8kGOqUB%2BU04bJ73ILkWZG8BU%2BVU51u2N1%2BHOlIfE5wtBhLNaQGy2QhXMgWU4oL4ES057GGdmX4roV47IgYFURfKJZKTcbFKS8gHYBlgZ%2FFdS64BM1WfqIdBdS3uqSNR%2Bn8omaIW%2BgAjXqcI%2BYyDb5DaNSCUXKc6j5Ux91ebIuOBdo%2BXUmEnjcUxipYoDIyVVqgVAHlSEnUyekxkzBgB8BM71ViH3odrVNjK&X-Amz-Signature=ba43fa1c638183839150436701f9625ca7e9730a85b581b64390c3fc1a77e729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


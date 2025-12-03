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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQANTA3Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T111943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDns7HxQncPJ4SaWX5yNgF2nZpxZvmf9Nq9ZqJqGTTKSAiA7HEWPjZ6NhTYFiQAdv9Yp2GMfsUEWPlroztGeeIUXGir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMuyyaaISLkcROlIy%2BKtwDZEL%2F9KbbWzQoyvu0X5Yu6TtG%2B%2FyvAfF7UxAQcMa2lKfk36%2Fwgu0phmJiH%2BCxNLWAznKvJykPlmPEfdPg%2Bk0%2BzQ8IiWY4YWCJAzcvT6yW2Hk2aLD4yPh3dOqhXCjwgKNr%2BR6c5WchJF8rSvBwHgfMj0IDVLXHovqyITS0HjNRCSG9qsaHgDsYtNUK7ZBZTmVW%2FSNiBOqF9wGKXi%2FSoAoGF9DXh0z3aKwrjQG2%2BapiRs8TtnHnvUwZ6ocPcB31Yf8AxBo5mxnr6raQNlI%2Bno6od%2FkYarWh683WcegTA%2BDQhYMWCZP8Uoj987x%2FLZ%2Ffh%2FaWa1JPz3cF8W9Gz7ytcgy7BfVu8I5LvqCrbr7YpTg1oS0dA9duaNfHKGxBH0M9jjqOyaNFr4f%2FrHxo3rIbdj39F6bl6gofmJ26XpE6%2FMWLMF%2FWvggwolCsngNg0M%2FTsdOyqfV4vSHbstIw0JtufVbfdVBdImkAL1CTEvqKk4zKNkXtrys%2F00PJFC18DlRg2AqpdZ8M%2F5K1oZjfQDWXTra5OCPBKvQEzgMoMTXjnsLykSf7YzHRf0tafbyhMamzuio0ZJLT9M5Pasu88yBJBiAWh0MJbSyhuCQZA8FciaOe56yzzHa7jDORqTMnPMEwga7AyQY6pgF6Pi9lJRaz82Y3WkBgn5KRaM5zgfFsMK%2FaFK3oYLWAsTsOfRCr9mJGBMvoREHj0f%2FSQjEHo4oxh29UryayoaDISE7HyqiyeYXSOlvBuPp1SAFFsDvY%2BeYCjBTbVDdczg8ONo8LDohnopKDaXEM7fQYg5gp0HKQjpdAPuB58%2B59Ewr2aWx%2BexZYXxxhgDsFElenvHy4j6BVSceXnVZxPcqxYQNyI8%2FG&X-Amz-Signature=3e863fe31f8b7e5b1a6dc7d90714bdceaf8d6abdfabb09d4ced74b067d1658b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


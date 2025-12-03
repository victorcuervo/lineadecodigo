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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ITRTKFO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD4t7UYpe0sBAAY776C1%2Bsffg97lhHjv0gyRBGKTnPXhQIhAKM6TfT1hahD5YBX23BNcXdfdqg9KOpQ7cRR9lIS86FHKv8DCCkQABoMNjM3NDIzMTgzODA1IgzyDH6esB8MxXqIiNsq3APsgYLoYP4h3iOS0SiiVBfrgUQVWKuY8XZ%2BBzaLO2GlbTSk0zuZs5cAAvBXN8AUBR%2FUoW38fO3WaIGPGCdMUmK1H1nTsikEBJH7A1kY%2BhktW8oqI1Ew%2FEhmV%2BtzEWAwji4ysbT1YB6GvLl3aUXnUUC23auUXJmuNi8cQo3tABrhtZQRuWPLubUBqFwi9TdccjaecOqOGDFKJbZNTcPgsjBL7AZ%2FZeu2JxvS9vwjw1eBSGrcVJM3ahF8lmBHItbl8trWPe5z84JL9PcTp95Fu04lDqQ7dwBVcj6LiyGWED0tx%2FUbaN%2FdL6dTzJCZywfFB9nGT4aGQq90EPB3agF38I2BK35zflZl2uQL1l%2Fyfwh6Ner6QSOhVhB6VgA8IhSCUck1lNjFXEwi6G%2BmJbtu0PGUV0UhmDZpGc88XK%2FCXUwNXDUM%2FRXUrzb3Dfqn5X8%2FaHt3MLB%2B%2BuibndwygGEBfBS6u9eqkPVzTa4ExpJxFGnn4pDR%2Bjh9QV3lGzpmHd0rJu5T5Enjpc0USj3AonrBbLkuaZievz7mzDYz1TTL%2FDKU0kmTsBEsJGCiPKIpt5dQCY6Y%2FM9z9mh7NKGNE9esGHjqnxNcDT2G7rhS5YDbmMuEtDyOlt9HP03xP3wHHzDh1b%2FJBjqkAU9asJuQgzD0LnacE%2FCAP9WO3lZ1PtyuTDZHuYS2jU%2BJ4g9vIBbpNeEBC3fhoLtY4J7R0wut87Rh7C80nz9d5mv2wYEe8fVe72Dzar5WkwDws2sHAsXVM5J%2BFYyT6tPXpRCSEh%2BfyQEdaieyzvo0TuEnyn986ZG0wzePqJCcJfutzDNIdogdvOsZfB%2Fi4NGUzutSbM%2Fv43qLcmOfQ0jPOm0sJcaW&X-Amz-Signature=df58b2ec8fbc0e6bb4d49aadee7be778117f11f6c1780ca2c5ff6da2da219ece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


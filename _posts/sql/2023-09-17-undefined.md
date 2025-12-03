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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4DZDZBO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDB2%2BxCtZNSxMdwsgKZk4puK1ZVjccq2eX4J4XwwliB5gIgSRlHQVKUGsPe4P%2Be%2FlJmkK6P%2F03MofTGmPtqE1kNcR0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDDcznVLj%2FLOUw8C%2FircAxYgxsoM1i6fJ%2FVWDUlKLizsn9AMOU3pfzY3wCxVnlPXzh5E6lja5gI7DZ3wnis2rK39ybTkfzim0Xjc6OqC3bTIvIcfepj0MKYa0kGzB2L1%2BzhMLNxWEfQbx6sSnBq7JWXqvKqs4k79gIQETMThXwmnCCA9AGS%2FvpDJsrw%2FG8HbCWR%2F9n09vm9OiwLy9L6nHSkLzKCA%2Bfco7UCXSUYG7IiVHd%2F0bTbaxi4mLxq9NQpOGgPoSpqfcT1z%2BeoD%2BN%2FmoiplM%2FFJ9sKe%2BwqCPZcco1sk%2B9RjNeKvXuaAIcec08AlmywuekJDEtPrv2qC9R1b%2FpATnN1Xy9PA0rsBaGZolPCxrLrGfP%2Bx1vYde6p%2BtOsIYDyhOAHDX3zIE7Kkiw5i%2BcmJ5hcX3%2FQfLJT0rR73JG7bhM%2Fz3y8CLHnpq06aYmcsIwS6VwFL4shoAp3s9XtTGvKVBoW1jXrg6D0Cpbob5Ro0907gcbI9DHcAhkQqAu7t6Bxgg9g4OFu%2B1O%2BHyTWBCnzsbZrin9GQW6w7yHnDcWw0%2Ba4%2FSKJYF%2BeEDyJACS%2FRLMbRnUI4TZQfHeju%2FKKfHbtCn2X8C1X5nySpA78TvaLfYcfxRPtHmzaJTGVu2Puq10OyyePzl7FYA2R8MK%2BWvskGOqUBnAnZmVWqoeoq21%2FyJ6xVmiBYT5x8fmXl9fvYU6kRyJjUnv4avRTVqscR%2B%2BNmKvpwdGlwHOv%2B6uoF3H07NBkLCe3Feipy%2FAsb%2Fbr3mv5FSsRNTI38YxRvI%2BOKg7yu0qmqe%2FOdJaNkGdvrjznXsJyjbWo2mFIDK4xXG1CwC%2BOfa3j4cE7Ij8X6Mqs67zgCqPHeGmrFjbVYClayfy4D0t8sFymUfVIc&X-Amz-Signature=2e1f9b0d5b2bc0163b19259826b71c3790412ca61fab050ef353e0ae293d60e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


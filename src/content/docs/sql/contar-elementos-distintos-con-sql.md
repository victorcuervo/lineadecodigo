---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PZC3OYT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIE6jk6k%2FeRTS7xRi5lcWl6vyUR5slxlwAh2wmw3jlCYyAiBCCJScpVgdhJk0dV1rdnoSeQ3%2B2D2PVyCaSY97c%2FIYKyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMYWtgwJXwGqY1fxbRKtwDoto%2BVZj7nZrcRpLvdPogRSUOeiNAlkV5wJLSRPndkL3U4eJky7p%2FZB%2Bl2pkYYocWCYHJqSHJiKw4u91yEMb4BRX419D4ARNedFSYHbWKFrkG29xR9%2BZ0T%2Fpe5oHpyhbM3CByZybEYZiow7iIwWMaSL9z3EXNKjTne34AKL7tkCy8lYz5shATreDIibGkACw77Q7Uw57zOTERkhXWo%2FsHRaUEwARc%2FWQ9ayrqeZD4r4JrMGBucyNjudNxRh9i0KfuI7S1JSFnu9aAoiZ3LvidK%2BO2LL2gqscETgo20s%2BzyxU9ji6BcXKJZ%2FnkuK44DE3bosPDBg0%2BTMmY%2F5OxPRyf2t6BeEiVjRFOqfATm%2BC1vdaUh%2Bwpy3CzfoKhB9Ckf1Fig%2BwNDxjyRw3oUyxnAQIRviVaFubO3ov4EuHzXQ0JJSku60QS3F9YXJQUDIswvNynzhlOcepC2bHOeyV%2BRGamSSNdedglJh3UIipNE1l6VYwisZIM%2F68lbXzQiqqYZ8zVfBIOSzR6oQ7B%2FsGqcW%2Fa6MfCWZ7ksPyxZ8cE9ITCLoJ5H3xLh0FTzrN1wsFAS2qbR7thl3hfrhwtdqTKdY8Sip9uZfbJlwFUQmHjb5%2BQYaawScuOivBoUsMuPMIwl4TGyQY6pgH3xjqz9xzKDPDJzMSlod6v0lKzOJvnpGKWw2J8bKX8JZYT%2Bc50B%2FsZcqLzPqntJ5mPiXU2Is9Ciht1nB4vCSC4FlGHlkzMxBfa3tOWHbsI5cqV9to1%2BiAhSaQmIo2BdWgZR0RQe6QS30At43mmwCh%2F3BGKmnOUGMHLm%2Bz8Fe6t58tTVObb9caDB2zRw1scPhjeSq%2FLL3r3Fdj%2B6Jpp8qBGGBrudjLD&X-Amz-Signature=0d05266bcd94343d7b6dbbe511a8ec4de86390f9f7d6930084ee489e7f51af17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


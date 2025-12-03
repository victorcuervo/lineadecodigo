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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWQ3IDG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCYVTJUwCvnGijML1bCmqM9LkPnewT1mye3S8%2BAddSf7AIhAKEJJmUMhVFxBS1dmslQHWaZjlm47eFkkX2ZSPBEogmgKv8DCCkQABoMNjM3NDIzMTgzODA1Igxx3TC05nBfBIFdENkq3AOMWSCDB%2FtZfuE%2BssGwB8ryjaDyvC0eJ28Pt9sYv%2FStHjpJzOsNHnN1GD%2FTB4ivGt9HXuECpNkDN8LgyoGo%2Fu195OJ92EAVPsN%2Bco%2FXrEI5Qd0Qq3UVafXwaS1J5KDtOjSPHHVviMCn2mJyBp96lcG501YDzHyaPgxS1iWnJDPbM7PA8Px%2FyO82UliPBV0dTYP3p6Eai62k687AI5v8grmmzh8%2FqBQvoH34WBLQObrPJKO6g5NNQRqmbNKTwxGDMlnFgqo5CBYlV0Uaozs7%2B%2BMgEKiw%2F%2BWiH04TmKSgj0TwYLrlrj4fWfuhw3%2By7qU0romvfFXX9iESmlTV0vftLKDjRWe2xTNUbNOuxileclxB4YSTD5UMZ1Z0SzWXTx4xYXj%2FYCnlS5JJ08FCPtmuJyR5Us2RGdkpSXnMiuiQRnZxwkMbmwg41cnvDklscOrG8bOPNRN2FRj5JJHKHWAYqkP6M%2FsQNy6c4hZLvBmi5c78uUxXu2T900XI%2FxwgAqhw0W83nL5WMop2ikmlxthNQ4AIs7jCUuPEHH%2FLWkmdigyRpslArA4JR3a%2FFrGG4wFGDYij669XCugugQNiX%2BjQj0g2f1QjYTvCI67mOlB0bGkwitULq86pVykuzrEY7TDb1b%2FJBjqkAecPayBEuLhWDiNsCodKxwHWz0FYYyBUrT6Ts10R9I1dsQ2GdoAM2CaTy8pjDTqCcwuEuQqk4XIysxDQGJxQ8LpJYv9BVChYvOJ9X6tlbd2PTAkar6UwsYh7zQIo85vi5zIQBLpe0YwjYq%2Bf0dO6KjJUnsF9oaB2h%2BJTFpYNc%2FRv%2FMSq9D3bKo%2Fia0t6di%2FtSXC6VWiaYBZcbmyLugeiIMNoY15%2F&X-Amz-Signature=f7f7f6e19e5f19d82dafd53f40bc50eeaf844ba16d9c3cb1e2916edd60e93e24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


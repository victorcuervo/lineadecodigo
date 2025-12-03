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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUV7ZNKD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDkIu%2B%2FTpQYkkBzR32CaoNiEoF9FQVzZxop4Tp7m3IN%2BAIhAMkvxfFnIcxYybymyv56XZEInH9qV2r2L0DoRiq8IxdpKv8DCDEQABoMNjM3NDIzMTgzODA1Igxf9OulAnT1sCWf2DYq3AO6uvaqd%2B66HCx8Fgy1BZ7dWcCS4mMIx%2BlYkCyIxWcMDIDUAEz5R83jW%2FutMR9tKL%2BC6vR%2FsVXnF1GAQaAstnYllOMAEXnKCzCi3goQ7T3Dsg%2B5bdMKRoDvRUNnho2DaXePSfF5zbDVK8o%2FX%2Fm1znN6MJLBsX%2BvaoT9uk4IoKllKQrQMElXxD%2F5jyaSQBPfkq5slTMi9r4iC0B%2BPvDgxn%2BYVDN5gvheqE%2Fjwxb%2FYSoNO%2BrO8O80SqyrzTBzzz8i3v4jvUzOsGTx4FfAyLkKR09K26bljlMmxTj0alDOeBJCsnPVQOV5p7LiVeYZ0AXyiTPrBxfDX4k9C%2FLXRCupVLbxmioJ1m8%2BA9MX13dVvIzmCPyRnvxcineUauEEtuuXxE8cuJuySH6YFtVeQ%2B%2B0oYx7T8qsYoo6xsIliDzK9DDsJjRMjmS5XWm%2BW0Ot4Hl9aaCmJ2%2Buz2nG%2FOGIkBHgZjRlhUQdko0hCFsQiVJ%2Brhn%2Fw%2FPLw1lzW6fjbouPoKGqDIsnuK4RUB%2B7oV39qLXsY%2F%2BkXE82PAZGDD2%2BXnaV98T3m4rh6K4yeHSvv8WaZmuSLPpabM4ieXXJpT5fBZp32AGUuuWY0Vr3THtC2tdanrg5uIi1R2w59kjBnyRMpTCuwcHJBjqkAVqKnrKc4wpkOZCY9nvyqoFgztjq7tFyz9ffQ%2B%2BkhBVhjkSP3OVai5mP%2FyepXylt04pBafp1WKSXNAGJRELhvvjHXj5ghgRH0jYc%2FUcRrlvPdN4qqS%2BA3%2BoBmyYaEAreG6q5cfkut8DjTZ9kgtCAm0qHZ2Qkx7RLsL6yXqroT5zVP49kKvk55aC566vSvIOXuionxid1Uo3nGFVS6qHGDJneEpi7&X-Amz-Signature=76cdeaa3c7c3749b9338285c48b40c075f78495b8596aa76e0b781abe3631cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


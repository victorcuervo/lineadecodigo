---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TP7HUCH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcGG4iislMRW29eQCHz4x8bxSUnuJYGrWqu3qpm8Kr1AiBNLIzQj3rTDOJMpw14B1uIB%2BRhNCWyn2nUDDGdbLhn%2BCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMRssAJ1gA9zp5RgJiKtwDopV7rM0N7HML6w%2B6Qm5nwCkNWSoX532Js0E5jFOj2Tc4IwYqircZRBfn1%2B7J9jajyyMaMN0JuVe6XrqGk80Cd8PFhyckP4UdwJ83lZ4v%2BLNZ8SBidQbUhnhX3EYJdsJhcUs3%2Fox3ygxX1GV4RB13BEz7cYX8te0FozXdspbn9nKYzX2LWJE2aPp9F41W%2BgxYEaMkGdsEbWD7GlBbjpvw%2F65Im7Hdg8yyLDAELZMo1hZQqoy4ju48xtiEne4R71d4HiV8EVsKBI0Dj0ejnIusXyY6TmkEjDJLxTVbI6ToxiaxTfvtHoFqKQzE00gNY%2FiZSVMEi%2FkoBdxpktPQkmbeqOvhYpdn2NZZCroIcZ9oAdEGj%2F%2BP%2BQ%2FOaLf9HAHPC%2F%2FvDAtg4zxC83fTk95kQ8MfJ%2BPnoDxGdPKsp7LX4gPh8GbsF3hd3SMlRnEDTzIoNHZLWB25MJGEra2MPEtuQKu7vBJBaR6KC07Upl9SbI%2B%2BznbSfko4tA9V%2F82dUFGNQglL5JMTa0wFy118b96p52DBl4o4TyH%2F6ZNV2ahMcnANDQW5TMo%2B7YGNrgf19QJ%2BahoFoN%2Fw3qd%2BiPkjh3fkna2ryceJOwrOOpYFY7bMEZu3zCnIVf%2FBW8oeKybIb2UwhtzGyQY6pgHazpJNLwwy%2F%2BAhyFSWiqeNKxiDXy8KvmxOU7ql5Dh0z5UszVIwAiIkaDYmxOVEtmkBNFR3CXKRHwdWsLU6sA9qNAOZf%2BCOQhZDOiuko%2B6NHKWCenGI9OtKJ6i%2BQL7fQJUrwj8vI57UieS5MCGDlKq6PBfa6Naw5hYGS3umx3jNBCd2%2FrcAnjB07NYvsmNGKxaJNf2L2s3PptzLOJcQ0GEZX9LBqWmQ&X-Amz-Signature=f779506cdc4f3330e063d7d934b9eb8ada11ec3ba4a863bb2a0b74a82c7e6f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


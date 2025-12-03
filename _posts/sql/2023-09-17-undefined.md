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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJHCS7K%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC51JO6u6vynz%2FlhAPvSIuEzJ5ETpzJ2J4ZiyBMqVyQNwIgSWX8kTTvLFeC7wYIZcn0WQyKqJuLxHUzym7DfzeurFMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBqDobySkzV%2B4mUZZCrcA9PX%2FJS0uf9WFC%2B3bWYNy7Tc%2BdeiND5bVHypYf8Dx4jsNuYgm%2FgeyvBmfRl6f2NOVnfHET8%2BKd9m%2Fvh36tubrlNNDhIAALCnUYgHFjUMixheEF%2BNONVDZmn81Jx0A9VjOkNV2dIqT0MfTcIx6yH5BiY723GU3ozJoXIaMZ44%2Bcko0rTWoVdjVVmBgbnhACD%2BUQJyxMsrVhg%2Bh1kLK%2BPxFSkf4JAExBu%2BurluRHgWhhZib91Wbhy7PNI%2FzBXGcI5UqCqUGmkVztB9%2BFZkHdV8HoUs6pJyeuLGMlr%2Fk0aeooEAOEzPJQ%2FKaTLL4du16kIMJlNJpxTX0Th5dKrjB9tadMjRqrUda0ehqCJMwMdo0AymKDn7KDs2ZQinNZ3aUCEjk97Ymn6YWjBo1YAKjtrbUZtORMUwovmW7WytCYslPIRoI%2FVIiP8n8mLuW2R8lBK0VHqxS9ehUszL98MpQDAo7yHfX%2FpjOQRsSrzZexIM7z877zlFwYBKDAwV0brrvVdKimL3SHjL2gsbdpYR%2B6bwOVnsv9%2BmkHxYlzLT1lmci8YXXXNMoChjrN%2BOWwWdkGuwo5Or6urIWIjehNlWGASIYXiNFoPVog%2FEt4xcTmbBlUXNux7vuW5czncvpe0KMI%2BcvskGOqUBSkuUk87eOrXDiQ2Ib6SnlI83JYqKkVyQ8wVDvQBnTRfFtubMIZXAkr2DWYB9L4PjN9tIvci1wST0hiui3hhQARKozQ5u6G573Kii3PF0Kk%2BvpzCNC6VUEPN6Qqfec%2Fqj9fVFRptQz7nspWiFRKKlXv35EXhskuYN28OUuHsYkF1gOjnIsfmkjPc70DfF8HQ4%2FsJ1uJWk3hAruu7dyXOeX2%2Fr0QvA&X-Amz-Signature=2e9f4c459560243c857c0c0ccc21e580e8c27583c3d0b9b8328b4f9f50c96d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


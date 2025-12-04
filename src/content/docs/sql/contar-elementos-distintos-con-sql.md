---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5DEL2SV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD6wrUmXkt2Vv%2F%2BJ0y0pwzFGLIoyIw37m%2BIkGGxsQwF5wIgV5lPLJ%2Fjx9m4tiU5zVIIJ6PYkJANyJQm1Aw4o%2FmERZsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDqXFha%2FToCGlppz5SrcAwE8t1v1B37YWSnrO5nBRknGxgK%2FM3q2cRICahxqcW37yuSQ7eBhZ2dXD%2FAipT%2FqO5vdq2gWVVo9KbxHZsGd4YQt1gsG2joLZvK5ywx%2Fnpky1mpluKAtzQyYLh5qgeRMy3qlV%2FEksnS%2FJB6BC%2BSzCNkba4ox0dWPi49jhl5U1K%2FfTlOw4qntMAMkzWrHZRbYcRg38vg9GRPGR1pMVcsmvaViTGBK%2B272aQaFfHuflA44S%2Bq4qgihSP5FHwC3iRospDFwhUmrD%2BFLxarvczdafg4yr%2BESxEyeMBffggmB6%2FzI0jVW5IFecjnMmJLu389R6Bd%2BkT%2FIPqyjnjypiRVq5pU7W0dfz8%2B8JJHoGgsrlpmNp71hH61FppqyhPZV%2F0r34quGYuWwwbHrIU%2FPRLZ00OxuTrxn4eBWGaVYtyQbKZyKg4FiVjy1ceBGlr40uhLRyHLNoQhqQzsIFEvMaeYxqEGispgRNmvWvMExGLyO%2BZUpcD1%2F1Ll3qz1XBxQpxcWcwbd6UStZv1FRB5fXq%2BzfrYraHZ%2FSsF3BsyTx6O0RrK%2BwHLjcJfCZYyVwJAZbXffbsJB74k4XsBBZ1Jdab48UcBnRcYSHfe42V9654EvqxRGi5sMC3eHhohzNnH0OMJuFxckGOqUBFaQn%2BjE4Z4uZLrr%2F8fI7jY887C3LLZl%2BSdjb2pi%2Bb8ZvXCd93q3Ua6%2BJvGm82x1nLykBJB%2BXIuis7QGCmBt5y8k%2Byqzvfk3V%2FuHIXnGL5HOkYvMxSu2djpNN3HXsDGy0RVi7KBcmNbx8AdIfAdS9jAkdBpwXXYYCz33SdJIejKyPWA9ALi4UXakes74kCxjolVwtn%2FfbgxGYRwAS05RFdC6jP8pp&X-Amz-Signature=849a22a5f544f3d886b4f84b012bfca93c4540638a85304b5030f48c08d28ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


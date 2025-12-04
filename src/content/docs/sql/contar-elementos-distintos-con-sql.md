---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDBFB4BF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAE5%2Fo%2BVhA46iuue4x7HS75ZbRyxCtku9KlZXZE2HOI3AiEAq9b%2FYATXBnsxneikkSqnDZhbn8au0tKxeS%2FWrFAdzbUq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDH8%2BL3EmkrSoaKL4iircA%2BfFu9Dkw8hIWuZ8i21ATlXNtpqijT21v3NeqsBMv9q3rbRHAB1rcm7BRWlSiiBUwHFikjtxc7jZU2xI7qi%2BZ4%2FqqcUNn764udy%2BoMYKE%2FxtOg6WtJwJmvgHrUUzPB2VKV25ZOl%2BbGSvky4P53q6Xx3hovZWGtwfR1r%2BgXS8RC2vnNvYuNauswzVlRipPAGvtCrEFrCax95WSyIVPZc2iIfJJrs3sm7ZEKp9QKdG%2BlZsP2rXkUjeqyKkQAKvgZ9jlk4C9rUmxWZmymbXVHBbZDXwRDFnhjm0w194yOhCPpC6xTbC4Z%2BNpXDp2zobBWix8FNgA292maxIOWGLZ%2BDhG%2FCPaxQ6I64HmlCXLrAeK0DNzTYPQ%2BL7Q41bhkybUtWMHw%2BAqpzIbDqgEo8fDrFV0KetJNL56L2Ozk70fCXjVCSpo9f6Z2ddb68ElIWu3cMMGbpa6ZJzOxLQli5eoPvm35bxwPdjabPBFCJSvt7t0CsFbdJ5tlfyLYWCRT2ThmqChFmgvJPIlG9Ed40uwHbLwDEOsW7uG6X3CIoyOlJNh52zq%2FvXxFO5KF5K360z1iW92IndtigMqiiqf5IZ1BSjduzX6aYWWnQ5wouYrAKm5lQbiv5rbAZiEO7h35%2F2MPuhxskGOqUBchK8RfuqCh3AXRQ5Jk46cNvO3lx0oAtr9cYgck17HBtMFwTzxIdGXgxHDfW24T%2F8GOxCbO5X8968ucF2B59y%2B68kFyYMzNx8oWkyb75BVuv9Ur6LrlQYHjUyWeKRI1BCKHTi9VLLqEq2Aub9Kg4kWcA8HdhIt0Ner5Y%2FFP%2BwtQtCB%2FapuLuWMXcl3SM8Tz%2BQ1vigiVGBhmxY%2BuC3qsQCS1VrcnUE&X-Amz-Signature=0b2218e60c35c9658fd626eafbc67c8e4e63da1636d59f7a0b9824a257431a0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYXUSTZB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBz4r2XT%2BuMSwMbYcTMZVd9N0A0jYDZNfqixcpXMPiaGAiEAz1gyNiUFs3J8TOzWfeXmIHDJzfnc3dZB6L1mtl9HY7Yq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDC36nFeX%2B5WQXVhKHSrcAziRYHRz1sXtAxKcPn8uqiH45BvVg%2FIqIbL6%2Bv6eNtN5M75QHK06tkKs7g04%2BoF5UcZdpubK9ODB5tU1j1Nyx3amsr0nqrT99LdBrlMbMwjiGN7xDWOEmHn2QGjAnS8KQH8kD3vt8%2F1W6WZxnCD%2F%2BQv%2Fhyhg%2BskL2WOAjF%2BGlanuDA%2FvAal%2BvZo7iGxfkgn4uoDI2aS5Ka0LoWVxiYrS%2FJF7RUh6%2BxMLx3cYiJc1%2Fo9PoWskeGAdLKn%2FcjohzpFWfSHW%2BVrQkQD9b4TPxvWX%2BEgvyxPHXpZYCZaWSeWURGTLHR1seX8GZ922xcg5g%2FkGyjDCJiqA5kniHNy0UbT7W3CzYHSRJkUQud%2Fez2ya0GLOglrAYtRrxWmTE%2BWQRBhSe%2BhFrE5NrvZVyEbZAP%2FzX6gXY2aXrYnrS9ytdRhSahp1gRt119Jwi0kq6twwLRyu%2FOG%2FoNuotIWiJ6d6tDDJ7jDh27zJDrcVg203YI89eLqeJorgv2d2AKBe8VkmYxi7afaI6nsynqlDEnIEJZelnQS11gviDubLtF%2BgOgyMDY3zixlb97neXVj4jPAm9zezKQlM7fxalst1YnPaIse1MW4iwGydxjtdVBzWLhvyUNaHqjUcpotFY%2Fh9Q16uMNvoxMkGOqUBsdzFMOEXxIP7b%2FBd54BYRk4id5N2fzSFNNw4V%2FMe201XfD1LtW4CWrNmaHQIEW%2FB1RjwtqQ3xz5GrMQH907AB7kyweDaL7aamepejK1s8O5gkF1ZUBhoEiqDgw8fFIcZRBbE5%2B8iff2vmpqmYM4gSCfNY6CO7Nc60jnFtmnL14OSZtk060Xz%2FsQqMvl8p3ZFRjpwQ%2BmvCVKBUZ2l%2FCcwi9hUYXDS&X-Amz-Signature=b1b8d3f642af7773594a3cd1af0ab89925fcd433f84aec6f20c88d3ea95f6780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


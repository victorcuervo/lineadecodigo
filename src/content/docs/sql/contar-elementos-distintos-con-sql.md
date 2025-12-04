---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O27RXR6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDXs5YW672lACwy%2F1LTRjKM%2By3k3WJb1MnGIn2Mtn3tOwIgXwQZ%2F67ic23pZhNq4lHQZ28nioDQru2s9koDtqFmRUgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCvD6%2Fhw2S8xHRrcsyrcA2UCjF6aNgn4YAJe60YMD7TS6PXfzyqcSIm2KTtby6EDmCqP3hTlBIXJ%2BQdlvGetgJvGLgVBAt4lQKh44PQ5TMknG2BCG3iuTvOJzKf8jGIqJ5pwQEyBvPyPyD1WjwJGXQzoi127ffjfo6DiXnm4r3zG5dVMmQG6O2919YsTjM71lKdQeJYsYwwT26%2B6ckKvbehMbgc%2Feav2YcfVgcBINsq%2BAOT6M91hjaoBXHmL6U7i3wQ3lWuJrkX7mPk4zhsQcFAka%2Fl1%2FDbi1wlHOCCjs51hwFdFpvFrPB%2BaT%2FMF5LEO2jzmDSJd64uyoEuGa3unaTMD%2BW2gAehzHere2NrDn3LHNNpe%2FdldUYahSVTkjWB7NzIbq8gZW0Ub5XZSGInGodmdfPV%2FpIXZkmeKBbyh8q7iFKeqNFaxcB3AsubU6AeUcsH8kvNhFbjI3PBfJOOMx5eNp5%2FY66oNRifw4fY4F0SAoKhlHZpiMQ%2Fqf9RMqAI8CJRLAZmjWuOZP23V1HXO%2BoXDAFSUJ2QkUXEz6xFQ9SuKGhRktMqSQ8JBgSSYwRMUOQ7YP88MmwF98bRw6ltvGjMpXbkN3Z%2F46yG0jr7t0%2F5Fh89Ygwn5D3Zs98tj8vXOc4J6notfwlKgOxLtMIqQxMkGOqUBOPNrJ3RuZfMqhI0MvIPa86kkqZEGWnmbE8XePtnpR9mCF56UMdhXkqdsFZWyIgxk6Fghc4HwzeWRokwwkc5oEVvBnQy2xxQY8v5cYDn56mKlgyVJQfTwn5tonthjQlMgXWXjEuwzibQaJ7F304m9B6upDIvuSE6EXfgLbzR8e8SzgnyQZfcuistOyWAObdpOqLLnpe6t2uZdYjD9U5AykVo00qRb&X-Amz-Signature=c2ac6bd7c552e077e422c387927a0dfe4a6ae01a501b39b698bacf2d6ff16450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


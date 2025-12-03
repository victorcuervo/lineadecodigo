---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBSV5PXQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIA6QAhbsFQ8Iaf%2FxUgXBbli4qDmECBt2OQ30igdQ%2BQ80AiAXu6hnhXb6VK6AFBo7X80qQrIXPjy%2F46iYwoCZhRlqyyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMZ%2B%2BHcjK5DLcAODKsKtwDEOKpOGWwsJXXIasPXaPk4LGEHTbjoWvzgqUfMpvqHChxeOP82P6Et2emQUkgq2rn4rL%2BVJNy0eAwidVSu5gxlhzhcUpfjj9nIzuKPAuTfqp3jB3ORsJz%2BC%2FiTEtjxvEfV7MyqSCEy1%2B3t8UJ63jYeBN8D8Y80YAWhDssZjy24uN00V0S4CFwCXB19%2B9QI9WQIQ8yjeM6FRQ%2Fb1C3ua3ArG7QNpvPaKZ9oZDRaW6TS%2F2OCd8gX%2FP%2Bm8Pfn%2BxZ3JRoxEE9mIwgSbeUQYmLO69UQyUTDSD8Zs%2BkU31o%2FjBdqTZtQnAGr9a4%2FkrKzavBSqlQ6q7FUcOJCCZsDzwgkQSIs2D%2BCY6rhl0VqkY0eBYNKcpZk8H7xndu2vMDmUtkofFib9YXuF3uVEF9wI8HH4omvOjGmovCuvm2VBDGpIKfq%2Ft4SvAAXDi0S9TqWA48dIA6MsUs2Ird7N%2BOjUB2qjhQrrwfpyjpsfegfLdIdWyDLNhCheGWGa7UuTQDej%2FFa9tCqBZ96yeMP6bySg58GX761n6MJ8YlXaW%2FmRA6E2Ly%2F1kkYAS5UqAV6xZPac6UIU3deMq0vzizp2xMuXw9VCuaakMWj47fBRLIK%2B3eDkBokxjS%2BcdNauKcybL%2FVGYw4PfCyQY6pgHcYCvGgxbe0UQ97NqFwHmLajbkK6Imr4Aq8nd2pJSnwhV43nZJByovRhp9VeYRME%2BkYP1ITHZIwj6NG1jaROaG34QpwS%2BzwK7bc1NVE2MRi1MGgmMiOczWrxzbLm1wal0Ha0IjqqmCZaYEeMQe1NnZk9tJluY8H8kXzKKUFbTTRWqC4ebAC4ryRKJoyUHA%2FOBXZehxdN%2BQnOz%2BJL2qVkqdoZiJTqyd&X-Amz-Signature=9f0e6c4119f94338d5c9b6594cbe59c46ed96add7b36cf2d5d7ad4c3b8b2504d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHCQ3N6Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAxeVu9o4oLWrLXKXjAGOpF2Fpx39NyzJmsYSaeZWBWeAiEA3Q%2BM0gryUG1sP%2FfG%2BwtD84wcoixSKGsnSsV2I%2BVLkkAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNOPjBe4IpomA7T7yircA%2By30FZ%2FtQFXy3LAt9Bh4mN814ZYTfyezaSQPj6bBnPW2qx0T58a14TNFIOQMkaSx3bus0nOKx1B62%2BU67DJFKQcVmlXCeILpthS0foiXrs0iLfBQaNw5FpwcXaxs6sT0ddQVBZJeaUK1Od4zJT8YkO6E94teYSirM22oU8b90tDMcN7r5vKf8lmwrcjM%2FYXNyl7BhLfpr%2B%2FowNgJ0%2FFY3tkpYLlvX6KYbvaPOQ%2FnlNAHvMDkGC%2FavAYhsT3l5qmgu6wATkxDg6wBQx263fRHVYJLiZwsHLeRt5MVqraGyncQrtGJECXtuxFoLXGt6xXlMTpsActhDs6VdtJGHh4LSEWptrCw45XwVdz7NZJkBGsBgpQk96R7Y%2F3oKjuaQRf2IknsnX%2BUPkESkEGZX4Sn0uRTqFuvzETHiPvFCBNVnszWqzRtnxn90amVrWJLuAKkJQGYuEUd67GL56q4r3WDgrLeomUI7ODdIZ77SQU64aE0RZKjYg6jA%2BQETlGDI3mrPG%2FJuObz6H%2BD7wyfu5PTcg9EAYK%2B3N5R809m7PgVcyObGdFfQnl7q0LKYewO6RJgUaR0tOG0cGMDgHd0%2FULtYty6HgQ9%2F8iHbNPb2Md55c1ZBB1xOaneVGOTm7nMJ%2FdwskGOqUBNaK8vGn5vYjsNWRkQsaXOt58P4O1aQFs3yo2mv6v8G%2Br79ei0RltXp1fAZEJ9pRuH4T7NJkwfD28DF%2Bm7Nn4wdZPrgl4KbafU%2FA5Qkxu2RHvFOvQ80MYcZKw5ZwWA0Yevl4GChln%2F5DBD39O3vFTk%2Bmyy5tgII3e256BOAr2tJP4Fxtg31oDBsr%2BRAJcAstlUE2kCh4aNR5661hmhkN%2BtB6N3knm&X-Amz-Signature=52a8e2eaebc5af99dc5b68847a972f5177bd752ae094e1d5c3369bad79af8161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


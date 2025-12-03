---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF67I3E6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICGCo83pOmsN01vHAID6ec906kZCd7GaYT%2BRGgUzuGt8AiEAwxWtM%2FlzK7JE6dhPdbdXywOMOod9bktrIteFRV2utAAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBzP9tMnHchHQRH3YircAxBJTncXxa1EzyL2aEvilsP2yJdcZC1FtOmxuTVowpIzkEg3MEVgVpmAu%2FnIETssQENJlHbHy8xhlUlOoGD%2BWV1v327YQszhEcZNuCiW88rBv4z3rzoxiEAdc%2BrSajEA3rLaNQuIIw1tW%2FxcBlqLotuUJ0WpUtS1Su9XNGa7TyImaD%2BtPAUJM2Q6jSomTv8g6fJHqmiCVTbJdIWItTYKxcciRnq0B%2FgSus%2FXE2scGBw9qYDFHVVzqSBEV%2BXcMt4k81UG9aB9v6qTy5CJiBxfv0rvo1xbdsG2%2BeJbyhxFSkkH1l%2B9IAG%2BeDFZgaHW5PzzEXTHWzIksnMezw%2Bs%2FBVE%2FaTCu5FPkHTrq1HpbYArlAAHew48UTMtU3v%2BdVJFZarKiCeM3SXNFn8Vwsx4TgiPx0%2FkHY2fgPm%2F59XciyeRW6eSTRSMPXQhLXqlFLHoQN7YvgVZA53SJx384wZ4%2B8rwTStGcg0sWYWFYdQsQJuPBNhzMYbM%2BXS6kQmR56L%2BehlsBLAtnVG3DgTCmf14z1NuZZpsuzra0N3QMskfDXM3RucwxEwDz4LRwToG8TvCtsS52oVte192VtE4zXiuMkUbwMsfUIrnAtbkXF6Ui2dxponymf2gf%2BJB7NuOp1B7MJW9wskGOqUBt1WFTLdWm88Nz4wS8tWNqT4RR4tC780ET2Fg83PIO4Jeh2ZqhEYHTwkSALnLT73wSv6jZBhJ%2Bm9kKW7J1pyE%2FmTEKaBXANFHszG4qWZ2Um3aDhBlRFdhKrQTRcVNfaarRNc9dyp%2FzKos81xtpJTmNNLRAu%2FiPH3nVAAr%2BLvArZu31LJtpXVQFL7tBU28MiprDivSzrjLpireSTue8g%2Blv%2B4y8Qd9&X-Amz-Signature=8c349b096bceac8111469894d6d912d3e3d204f706367531e05bf2360271ad45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


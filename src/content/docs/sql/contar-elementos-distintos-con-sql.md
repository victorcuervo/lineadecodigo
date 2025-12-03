---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQW7XRY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCQ0TQDy1IAxqzKVZbvrucOa8kvUNG3Xaf78WrVNg0EoAIhAIFNZOBbHQjHTs09TSsD4%2FNu7t8eR%2FLKIKRqEZfrHksvKv8DCDYQABoMNjM3NDIzMTgzODA1IgxMWuIXE4SjiPdoEpUq3AOS59PiJAVyAJz%2Bo%2BQNXbNz3VECEFZ2T%2BzyHguCZhnRLD%2B1S6XrviyzIhTlZl7nFny4%2BUJIwnm2mMF0Ww1foc8CCvtgnI47qK3fYTgyjmc11%2F5rgbF3GGPKEFxV%2BoayUyf%2BfSZduGRTEH4j5TR9kOKkDwl4owVOeByG5Jr8bOfgn9eYVL50jXivlw35q3WbH1hc0%2BuNfawU8A1gYW%2B2I3aMJ9aqNE73Fu5DjECHowo6vpRoBgscrUZT7Kp5DsHZTbIVqzelyZXN8z%2FrOql%2BAUa%2BTbbp3v%2FoXo4xQn2rBrTR8aoUad8OB%2B%2B%2FgwaLR%2BLHUtXvtrDfQY%2Baiq7fXwerik8VWy10cSehywX5e40jAijzPD70p2gOCYmMuOvoY9xsFhD7ZDpN04bhd2fFMcpruWDVBTHagIxqq%2F3Gz1jhOUIw50gsQ0qBqCF0SgAL23Cn9ftPUn8NgVs9khS2lCKM5vBW9K%2B6cxpjA2Li166EDApgH27YnoSqsk%2F9E07t6M6D9eesNf3hjhw0CCk8kbHzgpQsk1ksRrz7HWczo7V2Seogk6%2BNomBObLni7qzKnI22o6y3SZUzXp43D4ofF1VG9dnb83NI8ILWGfNY%2BqbXidUamxRX9eiMZYrFtTRA0jD3vcLJBjqkAW4k0p80M%2BZKqqavWKtt6rwkG4AjssqvsvGKXup56jjUdudOCWMmWApCEpwAGJPEYlwYb%2Bf98ad6ySRhacyi9RH3kXuZCDE%2FabGn8%2BVpiEFyZKDQedUjHB5mjaCfYBXWLYR0D%2B2ki79%2FD22gEJeR2XWVgshYy9juBFttXAo%2B%2B37DiLtKnu6cC%2FxwJBI3ai6S0ysV1SAPtBdtE2jsAUT6rdLvD%2Baq&X-Amz-Signature=a2eb0fed655966c303aef86e9f1e1a8a0254c65dbdc3cf68b985a33d7678a15b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


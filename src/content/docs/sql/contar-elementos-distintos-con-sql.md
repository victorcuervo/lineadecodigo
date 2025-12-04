---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZVNPUUN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCAFLT3IEvbkbV0XG0fDlbgG%2FJNkS2eU%2FIRs1rXJPx2jQIgN89pDBbyZ3wJMvu3bQ4LyKeYJbCPEmPadjbM%2FJjsuMEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBFD9lFCccLW10aDXircAzm6OGOCW1SWMRcqpWrh%2BVzGcdQ9kWT5EPrRKeAdIuiT2%2BQNwtYl5dAqtQz3OF9w9vIvYgn80lowL0QEABEUTLrQmutUOcTBYghVGAcWeZnXZX2v28YYGQIABUB2eWpycQQO8kfX0Mu1NW%2FKmclfERYf9nRCazw5H8mmQQ5zlMXVrbNQPIXrl2UvXsoFQpDbEOG7wCNXNIZBQECWt6t%2FGyU9mwekEXE0Vxn6SpmAJhh5ZyKD0ljiMrQkvkQsoDqbypvqIIKyxl2FWoB3g8h2YyvxzDqBMGmYu68gc6wBrnbS2L%2BJSoJCDiAu2aucZ93%2FvYxETesqgCiVp%2BMULDkTi6RgFUNsb0BU13OqQ63WVnjLgvGalmDLW7X7JNJv1FfBgqX%2Bv9tfo4NzgDzprd42YfNRs3tPZLl1RfoXdCG3PE8aMtnQu61Tboc8E%2FdUUwrStIbrZwpBHZhazf0c7SPD8z9P1npoZClV3fYZ8A44H8E0cVDWR2TmIUO%2BblzkWbwV%2FCHaXEo%2FHYbnarXpzs9%2BvXsQclD3rHi81CfqlzwEahKBE6XIi6iUBrBWoZ0GF5656EU4V%2Bq9wcUkaolq1qYzaYdFNvv4w%2F3eD1cHz7FMUntBv%2B0IbzYn8EDE1Gu4MKPKxMkGOqUB6GzTPFU%2FB7llwwlSyFN7%2FpiXx20UvtKmMDNiiYBWD%2FEyopixDbjGmFHELziKzMHLTlPqo6ShvCf0uCy4q%2BKFarX4Dki8kI2R6zs%2Fq9FlYoohWE9442lhRYLB%2BITbEFABn1nE57%2F%2Bjf%2BSKLk%2BKyLXsEWguAdbp1ztLNKeGg%2BYBBio5Si13n0LUeeW0V%2Bmv7fgqTtZCAdwyGmvcNW2dD55kCPLwnTN&X-Amz-Signature=e95df834bbfb83f1369a40383f60c56fa450c052a7a223c55f8b60ed586a19b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


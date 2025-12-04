---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EJBESDH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC98avkXki1ck6aK01zrpwuVqvzpbzZMbUP89hRZpvXIAIgUq241mjBJHS1EG2OerjbRlF92GG42vXGypJB%2BtGwBNMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDICCWqe0R6XZpqqoTircAyDyZi1tCCV2So3x1aXD6H0gzqwRwAb77CBkmv1w2vZffNtOERTNktaGHiLWbX0EhoFUb74T050TvHQP%2B8%2BN0wtA2ucAFmZwSTRe5nj5EVzEiyvTEXkTlyHJd41%2FK7SWiK%2BzsvKXhSePsrg3S7pb%2FM72FlTHKi85yJJJgHDnNjn5epH5n0UJcP2hbkDbekDA1YymC%2FBgx9%2FE0WmP1TZ6duhkM3TkyNrXUXGhQo6E0YyISa5c4GhmL0ocB8mThV7GA%2FdUbJT8OZ%2BFX5zseEFtumHjMPKSZYAxxTCo4olc7NhEDQBKBWD3UZpiTpBa1u%2BvT0BSjQswTEGLKzMAuQMrrTUOJWDGXytMaCFdZhDib2KEGR069FxvQMsIXJUsQjbMMp76BDV1OoQLeGItjWTtDcI0WYGODrFkN71GJox8mwCJ%2Ftfp44lUE1tGFKLhXhk%2FWqY%2BQv4a3RLaO68G0TRsnwAyG8T%2BrNN0UfeQt69HK28KEJwIy67b5rPj8jIXUZcOFvbatsRbDIQSqOOryXoEaBFHr0pOwcffLkLK%2FciQNixpDa0Y5C8Iw0WlNX2D2hKBQukAMbsxaSzW9XV0lCPkjonRdqjRi9DrrP6e%2B48BnWVNIQH0kjvM7mn%2Fk%2FZMMOjoxMkGOqUBn8YwN%2BW9kaChPuYUwlPVzLsLnutBqdFxardb8ZxiH3EYR1NaZM8nI31KXE2sYL1hRje8fryWVgETZfSoKG%2BV2wV6AeC4POAeP1jv1f5T%2BvDKCBi6YIcRNFHJol5VX2OKRDVcYQaEhaiHCCbVo0WZEHgLPsuolxTZtLJZG7Y577dyyjOLi%2BJUIGSv8K068bWfgMUmysigIKweK8HBb4wDD7GqTSXL&X-Amz-Signature=b9d805bbbea5af464e2795f1377fa3093cd767bcb646ddb5d452248db3bf3b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFFPKGCL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHhS%2FhUqmUDG63Tnw96GGgbqWypSb5tnItbEw9olKMVWAiEAkEhdgne2HdNuqr6%2FliwS0SRro%2BCu57uFSQJupG3esLkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAIzM5hbLNUq7lC1hircA%2BDdpQ3YTjjkoDLSiD3yIit0%2FnemaKsPfdhtKrNAwtw6k7gw4lYnh8TekPqPSn8BIyMWVWa63MVp4SQlYOGaPhjysnV4dvCi4FzOjC%2BMAB5PXr5YnFvlw%2F5uVtRmEedWciIPIF5PPxbm%2FcWQUC71gWkb%2BJY5s5QNdRpsiyA%2FIYpLJuGBkjdrEbWT%2BuyOuvB5GTeQyUvASyBFvkf2hsAoqShT9hTs83peHC%2F4o1e61CSkmscgYgXhx5wk4zcS8mGRlD35p0YjBbJEQ7UNkNcL%2Bj3O%2FsW7oaGcYnQhM6jznl16yiPrsA06gHywNnRqND8Vx4puQ2I9JTcAKAh4fJzTpRvmT9UZPkzJwskZGJMSkplrQgd%2BnQ1jIBZrnJ1zdqRa66CCsiJUszaDHiJg2gGMOEL6KXN9UXXhWc0VClN461bXjdep9G08yKNR01ENIQGKTGWoHHyJ42m4ku03f75ZvAom6Qd19JI0UkMaQwJmtmdjXJscJIpjdHNsd8WXxgkd7fW1QzA6hjDo8%2FESAAGDkAa5FDieRqsAmU3RayaBN5PF4JAXxQpU%2FUskXo2Z333Kb5bbW06utmDuovC8My197vzm9jC7p15OyPIpxtU9rm6zKungmpsUnHOiae34MJHdwskGOqUBwONORxwnNHJsiftZrX1QM4C5E3aYi3jleVO%2BaRZrXU2GYBA4FImZHby3K6gYVpd7Hw7JMUHUfzBiNWsQdoWKZd59Btg3N1qciFRzjhY6cN5N%2FFHmOXaPrdQQnlfI3r2lOjmnz%2B%2BFftIT7ASYsTLBAcHPNMh4vvpWl44VLqSBOTxgGlTwnAQmTOTM6O7PS9gNGi3KGmc06hDvzhScY4OlH0229KcC&X-Amz-Signature=dd994b128afdce1fc78950b217ba119a821b6d370aed53df88825ad57ce6a579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


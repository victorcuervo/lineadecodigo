---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U73EOUFO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBYcHFJ1uvTFHsGypvkhzWJLmpwEBU8v4KnKRNhweR2PAiEA%2F2KI2O1MSo3r6H49cPnXOznkwwJoRNsQlyAV7W0Xo%2BAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNA4Jrh6rBw8ZS7amyrcA9h%2BRgwSlppKJhXJiNfObJxaxQfc%2F1Gf3pZqeEMB%2BDQZhjYR69lNIMi9GfiZRv%2F0UIy%2F1XF%2FAtf022b9pXxXWnQOAaP2K73cLbACE7nkdySQ%2F1pVHbXmrIHB%2FbgPnSS16F893FuLl6JJ3AJApDi4SNOhdSPIUdB3HevlqkDrKfw%2Bnsd7n0q8mBS9OXSv1tCW%2BishtwrwjBtTJtKuhE4%2BkQmxNXWYyOr9t0p0y3pIA4QWbZISgy%2BgKL43k%2F3v0QhW3dvYjqZy32DeJBaH2fw%2BV%2FebrnU0RZS0Ka0G%2BVGfKcnOmsaauRdy6Br138d9fiGyIOp2PhWlqhiWVY9As2XQh1ZZT0yxjjo3Ec1e52sV6dM2W1CQSR0St%2F5XM%2BPiYNtLJT%2FnjOxPJSB9nznq2iDUbj6Dbn1md3cc7jYNq57Mevf2QH0e0LPECLYqQbdy%2FvrVGlR2IvYzUFpBc4WnrJgAowwcHe0wPXSDAukovTmSZKM0ES4jDWX6VDMLyeRwnBCxbacs6Kpo%2BKrcS%2F%2B%2BKn6lNOqPo%2BGaUtdPq34ER4s3qh%2BOoLqzUz2Ov7lU7fDdqd1UmpdGEQ6an4qlxsSJS9LgHylJqNamNW5TMU1a5xKKwqXo%2BFR53x4kYvf5aFgLMIKRwskGOqUBBCuhWwmfLxyn0mQjsXBx8qh7xQmuPyLvt0VUZZuv8ZiQp3360nTI%2FEV7m7BZbFF4S6RumNanhpxaFOafus%2BdDe7%2BMgyS6byxxFqwTkmfr1pGxoq6Yjb%2BrO9wzJCbc34F49mFRQ9w18SSIxXTQilKj8Vi0UKd8qKBxA%2FAoxF1LmcbOKcS7ZWSmdF0rK8YzrJr0GoEa4HVeBKy9Jkd3GKXVAGktBMB&X-Amz-Signature=3ad2af3e93578e92b11a6959388f61f538aef1389d938ca3efbf55af1a1eb748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


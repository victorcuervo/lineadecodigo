---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNGFFNOR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVh7vUkFk3EVgXyu01JIptEbPmY07rEjyrgJyQ0p2QiAiEApFnQ9yElDYD%2B4akBcqiUGH5lF7S3eeiWEErOInzWdAwq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDLfCO0vAUPY9g9tT5yrcA3KvUWcnUvBxfofrzAUOs5yaoLdat1ZsoTSeDUXgbe4ogFfYeJwa3iNM%2BShbIjtMzQIuVLn5YiBnXjKs%2BZ47VQA7PyN7IWlhapMk%2FemjhOhMquYe1KgkYsA1C8k%2FqA91JB0WMigCmtrghSV0Nc9arRf3g1bK9WN7cQ3dUVTJ1DQjtqn%2FYpKgdDEM%2B98z1F%2FDxw%2F1hrq996WwucUtHT3kAHyZNJlJ1n0ICCzF92PBPwAtxsZ5yU6mXTaZkLlrh117qwVOIxqpaCRXr2pZnSd7YZELcN7BrWl0ExPeIbVGHHQA8ZwacxIxGmtYjQ2sbogfJJcQnJoWyhCjNDdPML46LZQ5kylsCTvidXUikOKTDhCiGMPsAAYgxfmf1Op%2FjXzSz8qS1%2Fc3bs1RPxW0wfbM39bwe2rOlKgwk4g5S%2FAnsrYFloKat6qh1YWq3WVQLc2ZNggDWjY9iA6lhWLdT4hL4Bxee2Azjk3X4sj7p3coDP8Qnhm2sNJXfgriJVV16JoCjIb%2BqyZ7MXvo1mgZpFyZ7PMyEmLZp5z8KY1Mh3DjDmrMbTzRN%2F2vxwWjyIzwWEc18ddf8Fq99i%2B4upCtnWogsAU3D2A%2B4gWdv8rKH%2FIjagvQ2%2F1rQcMd%2FLaPMlpiMJ7cxskGOqUB%2FcI0DIF1xGMyfLcrreTp2HCivHZYPw05DpKTtZ1WgnTrl9hgwuGhmnv2VwYGPhc2xAyT4ARUrZpZNBO%2BtR94Quza3szV0BfrmejkFmpD0E%2BW9Sxt%2Fk1M6JHxoQaMawag5gdpXAuiZr%2F4K6b%2BB3TITGVi%2FtpAvOj29XmaxMXT%2BRnd7a2va0exrn8RqjnFGGNHtefQet%2BxgtIdEOoZPE5prqaXWyZO&X-Amz-Signature=307b6b2d2064241a49c1b5a1580ce22fed9fdf9ff4e08dcd33cbf7f0be46a4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


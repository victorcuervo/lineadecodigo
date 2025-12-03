---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYI7TVDH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDX2VH%2BbYzCNO5hrPZlnxtmHTTUstZo7nktt8aHn87pwQIhAPB890fidSt4zDoruYb95jZFYag9ESMrXSbSC3uOE%2BPgKv8DCDkQABoMNjM3NDIzMTgzODA1IgxarFsCgiyk42f7RBIq3APiZbeXrJ0Z%2B%2BgyzzQ4KY0qK%2Bdmr0Di2sIhFevkT7LzHZ2p5dK%2BKRkhr8GqJn6fJgp7TQvHC89ZWqbT41H1aSHjhbb4%2BUlUxR9Vp3yAzWFPIpDwACTEyAIb84tzb9RKogBP%2BsHqhXnoDS2ecOj9Wb0p0QC4hYKrb43wKj%2FTk%2Bua0%2FK6lDtNjjSqwb4ET0kGETmb83pRZ4RdJlKjFmJXx5zOchqDhYEUnBaL6h2l8ggWPMjRtle5WD7bsSluSfxrc6YKskcS2bRH0dYtUorInf%2FERxCVqeUTYYjOJLMCrXNjnvqtzJ%2BosOMlgLz8hJjGqMDFGZicTjvlUn9qxSUtwa9enEOgK6gJ40F%2BCkGsD%2FKeVEQ9k9%2FmnN%2FC7IBYakuzmDq%2FGZiCJw12E%2FJVDtJXhY%2B%2Bv8IaFEg%2FQbljiAQs0mrMz9EcC%2FOFvp0Y4roRDS5hUR7uZ5PHb9j%2BVHBrWl6%2BDwOyCNEg%2B7P%2B%2FARHCzdwXLykeXVvOzWBDRTm5cP9R%2Bsd7lJo%2Bx4%2BkwiywPllyFs4hHbdqejPCKu5SItS9DkWYRLXpeOi%2BHkZe4CrOSTkDV8hlEANzr9wb5QQozd4xYnM81vR0%2FR2lRYiqsoW9kKzwXKSDH7NIknoMFc7k%2Bh0JzCHlcPJBjqkAeRzBJys7uxiQJHLSUigYjMqg9vG4aJcFUTp2lDvPz%2FpDQx7xQBuIHmhsWkwy0Q%2B95EMDrOXrWxrQTLIGFsH5TbpjYLNyQm5L6xbRPhXs2lID9r6IBdLM%2FJWcOwu0Hbot%2BOfUfeieykVRLt5G7A%2Fh8yQ8gGewMO2oFHFvD%2Bdp7bIYk2ytJph3f1f8ON81YKvmdWVRKXxw95WqULqQY9bVfrl6KFJ&X-Amz-Signature=736f90d40f2be3b35b9c7cabb54cfd111d60dabc9c97a73c3004477197eb1e7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


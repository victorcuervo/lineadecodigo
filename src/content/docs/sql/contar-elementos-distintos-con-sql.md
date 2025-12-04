---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5XTNYLO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDLsXd%2BODghvNaj8eUVid9qJz5O%2B6dwQu5Z9MraPPDwlgIhAIRHv2%2FGAYmm6HqcYnZiYVUBwfuqgj9TGQSsGfJiRWpmKv8DCDsQABoMNjM3NDIzMTgzODA1IgywTZ1H%2BQbFC3bX01Uq3ANsqOye9tlUnoKpL8egBoJ5XYpEqxGWrJiBmfZOL1J3JjqeGv%2FGtvBtdGtWufUQw%2FpbZ8qPuyY4WA8LWUQKlFOgQvTFa2NlxbGBR2NLeIB3iIKa8MNrb5x%2Bddou%2BoMfgzD3eblT%2FL%2FiTFOssxALZSCpk8vjUwBGYmXO12TzjmmPie3J4a47qGMZF01L1dUcUaNGvpNrayWEesGkAFEuMoCYFBT2Vf4t0KsnEH3jXNrL9x6ez6sGyMbYNMmvI9DyYnDBloiQs5opJNK9NUA7mKaLk3ChvSLbO0gBM6G%2FZ%2BA%2FUIQxJ9G1Royz7j5mJxLqwcxIq2PjD1GEDbcQwNBSyD0Qw4OG0tHUwp71cUSGbzF1XgBsfPKHITJ8660zucd5zTAZA5gBzhwZOfMRlViScX3lzsLDHxAOS3bm86ir60gcZZDtPkgbsShkAyJFICVa2badLeCyBYQjGxthvz%2Bx8vEWaBlKBIpyyrA9t1Zb618SCFtCoSUBiDPunxFWmlk35%2F23zp6sQvsrh1dgmt4Bt8%2FK%2BPvGRkfvjYmgSQeNjOjDORpmHP3R8xXsJSyhP2zYZ4shvZro%2B9zhHu6NIK8mBn%2FPLy6ymqRtSgaA6D77B%2B41kfL9LeHtbbgO8EIj2jC11MPJBjqkATCGaZOfpcX7X4pmHG%2BKhsQv%2Fesl3TngHXQVVB2xlrHUiKcos14YehSGDLSC84c%2FbGn5cS%2FNZ8UbaGCbli%2BMphEhWTdhzWcvoopw4C0KLZk02DG4EAKVW71jcfjsNqLbl0caezvDi%2FzmcQnPzSwJ3cO1%2BEgDt%2BQGQ44t72Dp8IRqTJrN1oYyu85gHUOFybvWrP6nCeHViU5v4GFpXNmm8c830WC2&X-Amz-Signature=c51e9bd5d4d60c1da6e7bb62beeefa3e5bc2e7d13424f9470fa0d2b691c60a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


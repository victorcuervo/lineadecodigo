---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKBNUEOT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDWvrSN59FOhpWf5xkFyVRvSS9xmUQEkN15blqZaiONGQIhAL%2BH5Hk%2BlKLR72CZrXpLv6Z%2FYnqId8vGjQJjmkvrXI0pKv8DCEgQABoMNjM3NDIzMTgzODA1IgzNvh56C1Pp1L%2Fhd%2FEq3ANGnqvLM9ONBxj3CShoAoxyokhkIlL9x44O%2BuBDA11Di7inusohRQv8zdLvfvC7W5KAzo2n04LhYqR7CINfFRsP2wiinYhaf0xoFQEoK9PeJqrCxcYnpHbcW47DsfJZ2JYp2Q9RM%2BU3NxlUxkn3GlveHsYFPoMqh45p5222g3QanjMDfqvVPH%2F%2FCd%2BWhre6i%2Bq9FbgrtlG4yjlfUurSoCvm2NSY4TzX185uhtZP5tQOCoT0WdgaUCUZf4xAAU7CN4R0op9ojcfPzqZvDjVvl4n7LY1neAZ6RVpdAMWGedwJSwydinLjFrpxSA08ru0jIIspXIYdiI6MH434ByCxElnA8G7ZgnODFsHJ%2BgM%2BTzCX4qbSuwFooDb8t5LTKUo2oWR5zf29E0egsmW%2B1YYVy0g5Q7%2Br0RNwfc77DPmSSR6wpH8PvBjrMmzu%2FJyinUsaxuoP3gI2xvTsyEmX9JRAv6kUiIkLYFHG82fTtMryr6D9Oj7CoFYq1MLpmcDT87hdz6X6E8qBnWHgMs9PZhvaMek9Yc3T1mpJL73vt%2BJRL29K8aONlfvfpT9xY2zAw%2Fdl2hyaqJZ%2BxS%2Bm%2BbCjEfcEX5CBDVw1U0W6wIQnWqySG%2BC%2BygDftz1kUduZ%2Fp7f2DCqv8bJBjqkAd%2FqvSOIo60MIgUhMmk0PRAnSqkfy6IjCTAEl5vmeIrv2FP6exLUsxv6QYKfECrcobyBv4onthQ5mbktcFAXeS3fURpJQbcyOKzsBqHFpCyy%2FE0RPAymA49cFaOH2oihYBpRSoF2EeOjL6cEoSyXWE10ijmmCgPO%2F5C9z6KwVsETJ3jBo6JQKF3%2FVth5wonh8vdJViqm1s0Ib85q9RUnmr6KiW3m&X-Amz-Signature=6f8d33d2f752d46b64ea4f581b3372f850b21c3d700034887f030da9bf47c1fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


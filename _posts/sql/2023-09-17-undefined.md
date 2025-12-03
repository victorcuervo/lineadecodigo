---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLLYINR2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T020140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHwPgX3phkQPN2%2B0WcKHQ7qN9JKGolhdNhw4rejlPQEjAiAc%2F928CzJJ2MYwr%2F7i8w6xrFpHGO02SAxjwtyy%2BKKywyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMniJSLkoxU34vNBMMKtwDdkkJymVBb0F%2F80AfadiBVRq6QU9sexVb6xqkCcybFdDO58zflH9u%2BjIzzrLq4qmiQRiVC%2Fc7BdCNfaoX9gq647EaXVyDxsXJZVQeMez3GyIzjVhETYvRe2IEA2HbA8pjSLtcCXiJ8Nk4al8Bvef6h77m3wqaxK5wpojmJ4TgJ2t062t4%2BlAlnHnwfS0B8vQKj6r7156AZObOUscn1xa55%2FPoMHdLhPOuLFwnE4C%2FeAHRtSQauY8Acf2xWELQeiL%2F06%2F1c0EQ%2BbNjhiA0sR9%2B6pXvbflcXCaqihIbwzc67bJYzC%2B3evbb1%2FeWmyWFc1oKWOifNdh%2BONnU0nEz4zBkIDF1OlWxua7G2Pz1Cs40%2BNta3dfukj2oLxfAuHubKXsrRq78G78fvJS90JJQmtycJ%2BfedAmhm5nl%2BItRPIOTCdTyaYMUdl%2Ftxa5LS1nQ43BR9lwA1o7EQkFCNJxUS%2FMRcOq39tuAWNGYe%2BnM2VZGviALfSyfB2ET1Gq6a2%2BptnrsR9vI4BlUhw6ZlfqPg%2FdlLNMh3mGnDcmAWeSFiUtfKHFo9hlUzrvbeh964LwKt2RYW%2B3w8I269NDc4xCaG8focqCQOEYF%2BgBT4YvMRopH3ooICBuiYj%2B0IGFK8j4wxpS%2ByQY6pgHcto5UlIjukU9ATPZUVtH8k7ZkkFBI6KQE4oKUgZleaAIHFOu8BDXYuvB8Pybx4wMT6vLlNj9VDNvhN93Gpsf%2Bwk7BbF6uk255F7CHoOHrL5tfJ1aKasUeH7IqasdxKLiPimm1FgUsgOOG8w2Be3%2BRwF5cA%2B5Pp%2F2MhaC9W%2Bh2kqOJ1UPzM1YheH9iD%2BU2blI9YbFFxJf7W3VElnvg4Q9OfqOnNTVO&X-Amz-Signature=90f31610ceb3b030181caa5bb474c18abec5da8f868fc529258d5ca1668cb255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


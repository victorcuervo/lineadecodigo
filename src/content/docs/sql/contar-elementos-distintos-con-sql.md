---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW2UBS3H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIHvJfs6wToFGppgLSS4SuCC8avK%2BxkdUUj7nCpdKdjzEAiEAlqpbVcB3j1dZYkdlLYy3AnEfpsft1RiVe%2B3ewL8MWGgq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDO7FpjE9ax2Hxon%2FIyrcAxOBwFNfEqP1sbZg2VOD8FpUxBsGhgkJu3R3LFcp3a1BpwK2iVu4eHMG4SBIuHnFHoSgBy43fJ%2FAy2cc8Sqem1GasPLbFBi8sW1B0O8Phx7dVutcbjtZ2L%2BYnr4vsqGtwU9l%2BOBsIb5Tmg71S%2FGBt7qQhDzdbJBSG3kOAIs0VHAOyri%2FTtkaYID4C%2FVfvTj%2F3cSXeOO4KodBz33zV%2FBLlBcOTrvCWYQCFzRpAZw9YBWE3SuhuRu7Yas55Nu9NmN%2FvLwbG9oXuK8oj0eJpOb5kMp4hXkE4sS2nrMnSOdovqlRSQbDHRzxenK%2FO4fSprBzsmfdHgI3IMPKZ50zIFIcJ%2Bj2lWyh4GK45kHaEJGOhLMugqzaNbVxJ28GvFQ8h%2FwvuqKNpcs5Ffxb%2FFHF%2F2ze6XgCV4I0jgvZ4%2FWbfWI4hLNJlnlwS79BqDfJIZriDwRhV5CB8GeFYXVwz8ZUTrQnSgsqR269M0nPq2m1Tx6GhEb5t09GqKSitZPv71o4YXNWfxNDbq1BJkkGuvoTHVGt6gzJXeKpVhJdQO6uG6hUh6%2F6ypkIe1SqYEj%2Byvz9zpJxRi15DSA%2Fq7K5792yPIu3AzXTauNqamhw8W9Gy%2F3xwAaiHm1zED4Mj0D6zOCcMOT3wskGOqUB0hR%2BxgcqPhT7gu8Wa5eUu%2FXCsaizSKAQis5hbbp6aTlQ6o%2FGwfwWmB3BgMh4gmxFQ9ggZAzqMnE6%2FuMwBGZUiZCUilbiHSbNECK4eF35IP5c1M8H7N23qjwhB%2FxDRkkfWgAz36Hi%2BXyieZSmgDcwkI0fGfskGPeGqttuDy82hGSYqNqDKHjUzUViaymAquQdYldDV8GLrrmOPCwrqyKmcVr8IFBg&X-Amz-Signature=3c97998d388a818c4abd0b9d22c720049a68e352face457237214df9ce3c0117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QQTRPQR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFMl0J%2BW2EqiJ6yA0omPnNJFV6mKLND7tT5p2t7%2B022PAiEAgvH7MZ5eeqwKkKz6pOQ62WvKPrsc63x3uuJUT%2Brslwoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEGiqtBhGmO4YcyQMCrcA0pAH62wSj3I2IROXynnDY0%2BY7HnU8xRpqNhBddCXp0%2FZx%2FF7AgV2EKBHlF2lmcqyqj4lv9l%2BF0wjyfT8a0RWN4Xkwk14PNtsCi14Yb89%2B6rDzgJflH56sfQjvfEj3gaEgS1kNhdnjK19MOzpfjmWcw9XnCQ040RZDbNrgRXYhmQWGN%2BhTZ9t24yY8hn2aRYQT0pzSjHR7ly%2B555Jxag3K1p%2B5sUfrDFEYJlFnoFHgg%2FJrxgyo0OZF7rVZiKDKOwsdFqBH6SlmNb2NcEv0FNwUk%2BzwaXXPru7nR9UTFkP3YVpI7gP8p8VoRbtRJfG6%2BcbekXkFnW%2FJCRWvO8Ziru64O7SKsM8FeUNMzJ1HtPM0UEgNPmzMq5c2GSbcMrZcbfBJDbUYM2IVDqJlXfoschNjQ5XO2lcMGtdpEKPTKpYonWICsau8c4PNPyxMn0OmFo9jgSCHaIqLSZX4S2Kdb5MQKwk31%2FvZ0puOBcR1R3t3jB5nyf64cRKjpe8mVoJGDGA02LAMa%2B%2BW5g5geFGsQS6SVv%2F9vRs0Sj5faY7azmmnHa7JqVnaMbDut8eNs3GxdF2buI1kdPBMbMr4ax3dIEvwP8EK%2F4KXUSo3epHfPx9%2BbGhc1wD8zVWENLJ%2FhvMOiRxMkGOqUBmUZVvKxbqA0my5HjcbvKBarGDinDDGLj6WRwl%2Bn4qkuwBIJiOYTZuhIfmzF%2FGfzxrgoJBHqTrKLNp8njwRfWqpDRq8KRou%2FOpH%2BY1xGoDsNPC1qk0s9puWee9wvBJ1HEiDtAvO8Txe2xlbpDjSOLY4u%2FQEdM%2BxMZC5c7eetfWPgXYiz5YbYybcE3l0DtFyLgJ0e9VtpZXN4A24vU5U8YbEwSfHjM&X-Amz-Signature=8a3c68a1de8e62396fbd88bb638af1ef9c190e2b2a63d38c764fad569002b4a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


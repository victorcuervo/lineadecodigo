---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXOQLJB3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCICUjUh5WDrrA1%2F3aF3wuHeCY6wq3FBlzZguZrJk9gwBoAiEAkWMeLFARairNTWQI9eaXyemZ7%2B5U4Y6CoqqL5FmRUucq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFc%2FobbOMaEi1kmD8ircA%2BfYMKxWYzQ06QlelmSVWeOy2Y43XM9dYZfNEuczHEijaIGtUiUsMuPKk%2FpTbrKRle0LoSCM%2FKnHQRMNjFXfUJiCIZ10vtKduQAbVHQJrertv574IT51d7q6jC3cshdyvlWGrmeCrZu3oD5lhCGbDnZwx3rcUj%2BpEsNZqZ2MdHFlOJ1%2Ff573uk9frN592vPEfSG5UXeLItLYbXQnjg4nW8X0LNiuYlm4ll6L7GWCMk5dDl4pdCVArq%2BGQdB9OHAXrAbr0uRZ0Src%2B7cpWV2Vt56Glhf6YfhDD0J4xJUNCXqRBhvX2t3%2B88BgtPpZ3K5%2FiEuqOzJnZ6B8nod1Jn4QmT7UfJaHnDoqvzs8x%2BgmmImyL13ArUP4uAI5OmFy2RsCqWDdQi5ayG2gxlyWf82e8zcPWLJimeJnwXFGvjXQsXHIHE9IN2H4Ctv%2Bw%2FNHqZmT5ET690A2kPgjAnlEhq03%2Bo5lI7gOM76KtJ2cBpYmhWR1%2FDqm28k5CaiX9oBqB7vNoPFxjI2u8EVqDVBXdBxpTPJpWju%2F%2FFXOP7wcQy9cre1QSjHXBai2Xi7YUrK4j24%2BV3fHuAxT1Acb8lRR60VjMJsKwfvr5%2BAn8aFkkweKatVFI73NTJJlybrFwUyVMKzdwskGOqUBvn%2Fgf43SQQroYEfVczvFmeRAXXK9C6Zsx%2FhEkmEUrnzC1ldkMaHr7jlR4lMoR2NifrnjuB9dM7CWhAH7Jlq0dYlkwaHo24jfTdqw8%2FuZ%2FoDyO1QFXwjnoEE%2BWEVYdHB%2FG63iGdgjDBwMr7bdn8KN%2BBT1qYrodmM3Se5ftMpCeSCYPJgHtHSXZyLrxgYrKdhCH1YHEN%2BK2PJb1Amh%2Bhtc1LzgaAPU&X-Amz-Signature=dd4e68d51513b1807d4738264ed207787f3cf16aaffb521c1746067d37818379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


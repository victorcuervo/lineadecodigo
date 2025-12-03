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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH2UHUIO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFJyf9nIcGeR3VUrjhCgkSjVbdwFesEUm56TpHf5JkaeAiEAwR%2F3jr74M0SGPCNosWGPTdmSMrY1jmhtFre5%2FT2mAHkq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIk0ofjRhzEpvkc%2FhyrcA2ZANKQ12oURjZyK6vve9v8TCVTcY4EIasxKrD14TVVfzSWlmD9ipV3rIEZGoAM0%2F4vZuloVjuDGdTVqHGdG5vwnAMlrszRZAfkJJcLJdgLCUoI%2Fog5dY2k0yl5DeVxXsqbwHj8ZTZ4zFfdA1RqCmlBP4Gx8%2FKa8eNjDE0uhbiIAQPRdVz4TwDPu7q4dCrg3nL2zvJYmmZU4z3ZCGsg8v1eh%2FFU2Q8Oi4ETtqL1JCAqJylrYnOgu7pCzHU2dmS8m9SqqLQEsgPVjw5PAqTc7VF0UMiLvNKvLNyP4qp%2Bjimn0%2BnJrCLlEvmWPVEAAozf7oWm5rUoNgK959%2FJWkv0Va2DQcI7lkqh6Y%2F4BTLM5RfG7YmNCg3RXt7b9vOu4YGb0yXU2oXMvuEtRxx6oIU7NU1f6CwIjrrf8O2Dku6z89i%2FO1tO1IFD65UIro0qtLQXS8t%2BWuI10j%2BRXSUTYG4Z01Rxmap2DLmgf%2BDPT4wZ145EFtR6KVPz%2B84vRmHsyNE1AbgjZH5TY6GLGX%2Bqe7RTaOPNsdDNW0S1cQfRvRxKeVY0k67ks6F2YOjot5xkbjW6ZYmgsMp2arwO2qf%2FEsOU2l8pkL6LAow0dfIgPjyKNpWSsICKPg9S0pbjNocXWMMa5v8kGOqUBB5Mrm4NCMOkTb6EnGYt6xC2KfIHw0RFnXiHzCITHwNE1Y3rpCgzh0%2BpaSOEaj0WXKole6H7YKRcWP2L4%2Bdxt3HlRXYVfyS797vGoUL2Wi9Vbsw4EYmYlsQmZnApUfyztNT8A2YJtqDWcst9tnAY5Yq5wkuIaC8X8qp4TPWadEDtVqe7zFRwRI1mzdKJo62qhWtNWe4qDmBzeeyCaVSZVcNMrWDJX&X-Amz-Signature=10094ebe76bca9de006fa97dda5c76f91aa694c7add2100905cc48a4d1e85fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


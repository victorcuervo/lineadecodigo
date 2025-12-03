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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QELLXYSZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDCQ64%2FekYHkzxnme4QQZeC8fgP8otv5cyLTznGQhjUdAiBP%2FYh%2BrcC8i5SBD60Ck%2F1sB85we2Jt082hOJjihgHH7yr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM2hbFTXYSV9%2BnKl6fKtwD%2BVXisB%2FlrqUXX%2FXGTz%2FGxCcfCe5ODXRmkcfTCUf70RqfUHaCoEabrNYT4AZ6TzpkAZYqNLSxuHNhavgdCzAcb2j5hivVhojrbT0KEBnJgLG420p62AGxFgPncWzStzxxJq%2FPK5nVg4YzL%2FpkbDwnveYmRMqI%2BHHjgfL2AIbT7urZ7uJ%2Fu3nflmX5SKfCx0%2FP6ZzywwjoJZuRkJXrnHUBxGWYWdSw5sqVYLmNEcx7Z1aWZlf0CdO7H1ZVUwjcqIQT%2FihazyWTrMbLk8kCj2AAYNob8bcowJdi4z13CS0RjQzQSJo3xM8z50WHNEWIfyk8rv1c%2FLLcX3MGO2OQF0DJsgRWlJmDUDgS3Z4%2Bt2A8WoEAqQm6%2F%2BWliX1ZCv7WG0uJIS%2FrYAOmR1oyamDaI0FlsdmgOju8h0HjRGo8DyHlnifEXzEbiePAHDxduBozmxGKpnj1T83jVC99JWiq%2BFCDBhiR94Omm%2B17NT0IfkD9ecs4OZMegtKml7wXETYl%2FoMDRxdxIWtLscEUWEpbmwlY9USTbLbE75EFyfa07bD18q7eEO6QcbsLji8zW6ox6SXbnduWT%2FOMiolYyeKFsELJkOiK%2FA2eVOooLPgmr8VbbowpgElEMUyf%2B7gPL5EwuIfByQY6pgHPCwRCdlXhkqrIN9J9ZoNeqZIT%2F%2F0%2BjitN6v%2F6JH%2FKgp8av7BF5zMZQmAlG4Qxhhawa9er7M6WkFUnnfvgDVcnGjbBp459TaQE3Z860hwOfqTkqzq3FbG2QCl12efzbyscKfju%2FFHrcGfvhLdf6%2BQFpnzsx%2B6NaQJXcDhCg8cHG7OWXRCyYY3hi267Lj%2FG2EW%2Bx%2B0OrsbFxMRIqwD2zrs5mGgV20uZ&X-Amz-Signature=839288983248ac961445566a13a4edfaff93241baa02f4f95e42c843caa598b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


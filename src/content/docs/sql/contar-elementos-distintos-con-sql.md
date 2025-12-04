---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5PZ6SV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIANmTnDpcqondHOzI15RoQdQLCugi6rjPyoivzP4%2BMIaAiEAgDPRkePGeS9txhf7BunrQRbknJZsjo8lae05VkP8JDEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDDRQVy3BWD6IR5jEyrcA90uK5%2FOl7uoaAgggPowtc4Sohwv50cnBQLPMad6K5Y3H0iU%2FDICXPIEdSKujSbathkBfvmSJUQclZCyyJu8odNiTyYbdPn8RYUJoVeMEPsfX6aPSXs79A7pARCuSmItb8vMuxEpBLK1uJvPqvEo3YmO5ltBUuqJ90%2By2vb2eykvjPxze0OaAWbPwwV8aABSBDQsVL50qN76UJe%2FrpwW6EoiBKfH59LaNeXx1SMF5qbwh6sojpF%2FFyL55uH6FaPZDe0Qyf4opY5hKCJDsR%2Fd%2FFGyEuDFg1E%2FK1U0pLqtmCvLbove4MrPLsjGiooFmeG4rNtbqwKzbNdpodbrs8PUCr62G6YIMBizIbT2RYKw%2FHpUyGDOcrBvCJH7kIfBsxIQNAyIXcX29pbJCXAjhySjlHFkUESc6RtvuHKHoT%2Bk8uoOC%2FEaCmwJCbrYFV1axfaG%2FnquKIdNGiW4oWQUx3n6%2BrXuoJjsTnKDXJe2dNSZjRqJoYsNIuCWaJJabpDzjiQzWo8SjWRfnz9RY7b7XuiGTxN%2BgXOWkOczTmGtFUaTHlFHy2LtzFFhojjtBrVcPzfzEOKjJE3veX1d%2BUI6xN4jNMm8LeAyTFJOcnLeWKbHKptPHnj2VI6N3ZKzNlRpMNPUw8kGOqUBw8kPgO4XjH5rpiEOMiGPtu7qZ%2FvBWXTzDgFngYbd7B6jwYuZietCRPyNukNOt5TjTghDDQ4GXQRkjwn9S%2BhX8JiDLkB5cVQwlG6iSBavv0T80SErENOYduUoLidgGV3p2DwuXS6NsEIuLjMVtVSr5HwJsfG01wCiZYJPR9t2lNXXIsRESEQKrA6NnQ5ti%2BnXNrLl9%2Fac%2BNWYzQMe163%2FD4uItNMy&X-Amz-Signature=afa30a084457414d9a550e949b7b2d29d7df83242eb7b286227b7f3b5f71a799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


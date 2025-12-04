---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QEKIL2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICnrNlP1jOCHCtAJlF%2BQ%2B3PmnezaNv5oxBrXGi7rAJrTAiAY7PVy3mk%2BoUnwkaka5uwOX6GuVFfVH3lyh8RZZea7KCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMTyq74CDZfe4xZ9kMKtwDSHuTehm0BFWmXNiKMr%2Fffa4MlfpOuooEZCP3ybvmD6fvRTFTSgXrAPshYq3sUmSfw6z%2BRqA2xYjic%2Bx%2BaRIld7H6nHvNgzaAExqQQciMtgMNrvUXDTHf5PbZIRrzllnUowNNOaXswJJxHwkPFrD2T6gT5TOoTAMvYa7Qtl6NoCzwMeiFUwaiWrR79rdFCsurDc%2Fpn59uRWYTJsXxtRRJT7KSVg%2FkwFkSfesrwGePAudObRvlIqbnT6bDvj%2F5cqbYNvnLB0TWGfYpRKegUqVCuydd4AugnwnfoyJS7M5E1xarOzfSpzBz8I2CtasEZqsdjLCBbsfSizvgh5VCORMD77uL4URXvihtPisUq9U2NH1RUmEF4NJz4D1ubTuzdqg%2F%2BYmFZc7oOhVt%2BU%2BynFnrrFadOPC%2BIINMlAIvn%2B0X7pWTWCKCClqylUeF%2BbydYPIo3AHJkeNT6NzAk%2FSBdtNv8aAUlAlPRGEtjHHM%2F9hrfUcDOmcIp5UutV7FjaLRaWYqruS%2FcP25i3fWgT9vri16zbtmxBhR7ra6o7TJkk2MyXfN%2BnSaxXfcw7yrhWy23VFKw0T6DS%2FA38yUTW73iJefMUcyHNzt4WnyX8t1enlAbxqmnUFm09%2FklUm%2F1k8w6KHGyQY6pgGMJ7WpxnqraTblb3q7QnJfP3FRBkhh0C3RA5ZrXEcfcb8x69pdkA1EJrzfMYU5uVcBImGxqJTkJVVdXyRxo3Fa%2BQJUwQEd9UPQIaLPKTnlHXqUHfJFo9md3DeEYO4TUR8jWQYPTBks7CSPgNa90ExM9qsdNkLZyGO4JktwppF4PZ6HBFK5VVux8r912Bc2Mz4QYvMUqjp0jvKWYVmO08sI5Lc4FjfH&X-Amz-Signature=600f4cfbedf1b4fe9a0dc7e619c919b87805821c03aa5b2ed7c02009b96d9e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


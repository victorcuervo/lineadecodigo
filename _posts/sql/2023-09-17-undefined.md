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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ATFDM3G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDWzRTW6NvCAqHQr1wHDK4Z%2Ba1ur9Yxfv1FEuN66WaT7wIgZoLIp5PeimrOXEtwLPJLRt93hZ%2FN48RXEG5jAOmIXkgq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOAHqr6mHD%2BTWamB9ircA4qWiKuHG5GWIwNHycW0S%2F2B73YVuEuSI2yTctCqTLpdvL5XxabAq1T1vukxkzUuxeIwi6Ik%2FQdbYRRVvCuDSWwkZvQ%2BW1CuIHt8ywEStlrFwp8BQ5k1QK7Abq1%2Bf%2F0WT%2FvHhsKGv%2BhIsr3FUeX1ReGZysrkPuY409H7bMkMDkI1RNJFNNeAby4o9WSYhU3eZQrgLuFKAQ7kNSDHZBeGlEvAuPk78ehplrtWstt9XFNcvYRbnSOgUDLvmjMUSdJiT6CXjpRkLQNlLusu6mO%2BIL0EGgxcxMmTXkHYJxyE45UWbkLt42XTq%2F8VWvPguCW7LGYLmpirkl3bLcY6%2B9JI3v3hvQcAGYeafNSuRu7jb%2F9PS%2FHemihZ6k6qdW74c6BO%2FPfcIgO59PP2%2FYn4qWEpCfzSzB9qXV6HJWte8v8VyyiSqnHdkBqbUrOxmONr7BkqRw1wNiluaM5H1RZ8RCZoYaImkAxXBghZwbD5BchZCxg3jSHEToIu%2FSBxObuJEFY82TxjTjMWMgnpiRh6RkGOem6yDQZF2yfynCxwkm6sWRHv2BCJOI89F%2BY%2FV1gLXyArwfkpRBlsqaygMomYsnb%2BORBG%2B9kb9LO%2BlRg9%2BdYwe313BV0yoK%2BcwNP7UF8nMLSUvskGOqUB6U745hnJl7htTwLrn6jLw5Mj03fvy2Me1SBqsNeUkC6cYYemZ%2BWnoXv5%2Bu15LNxfIUKUnnRhzG%2F2dbNG7L4i0ePZ7mdAshcqt76OKtII1fHJNCbeQe4p8KtzEdgmxv5ejB8PQSg%2F8PD%2FySvvEzAGGTqOj4kFDTnd9ELJz9J%2BXn%2FAu3eGkP7J7clfGfQmkGZAiWoziSU0KM%2FjTQSm8a0nvw3Z7JZT&X-Amz-Signature=0c8d9ef6fc4fb5e571bd4559905f786c405698d4e051eb8d721d0f733de123d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


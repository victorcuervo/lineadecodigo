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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E5LHUFT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCWe6nFvoETdXQQ8khc%2FHiQinmnf49N0AMYBtHGJbFRWQIhAPFJfqfYye9RURvuxwm85ylcyMfUh%2BLjIvCHpzBSipy6Kv8DCCIQABoMNjM3NDIzMTgzODA1IgwV6X7aFk2UJM8h7l0q3ANGcfCNrWD0nT8iOCiFly%2F2jtlS7RDOmepdTad6FkmjGPllLeh92ZHexi0e1OCIcrD9yb9Eb6XYmvu6LN9GmhtM29sO8tHd%2Bw6qXhs%2BN1DK4ItQVFwALzBKbRp9PWU8WRFc%2B5%2BkOCk30FMJHLBd7DpKvKavK2VM08WY7y8iE4HJF0gDMUc%2BNr%2B9kZPR%2BbusPW2TKO9ItY4VWx8EqO4UZLrSmbIVVlk1i5XYa5PIQul2JTw5rFw0KK3%2BzidIZ04y6Ws2HtJ%2FzBimlnlWNcJQ0YiIsa%2BPQysOKUs5TWyXCzaC2tNKtK8V4INPLDhEGAefXePx42m1c4js3SARueJk59d9dLarhzPr5y4Gfn%2FF2dWYdbX196c6fXOUtLf1tze9pwBTBcBRt8m%2FesGvKs5C0v2sqjVK1QUpvG26J%2B7%2BRgrzVMQSFn5IVSI1foiq9r5m%2BzFFQNrwYvIqEw%2BuogJ7pr9BFQ0AhWLJSkx%2FsxgTQeXgPEOPO%2F0ig0vbNP9pCnEkcCMjRjSOZmIGnG4q3PeVuxDbfgjaYiSwTJZdJKUUVIaqx27NYPIlhv%2BVnDfjBaCZEe7%2F5rFKjaBJ12fQK7ae8qVwbMmyL%2BY0FDq%2Bz7qcuIy7hAwAiLpPEouu2RwaRTCTnL7JBjqkAVXucVisRWN6PIestddhbcjatDwUcPcI8L0er88KjfSbbJk1poT32plBAVfMZZXz64s8Yyi%2Bi1xB%2BrAGwQtEKQ7S%2BdApvRt%2FlooB%2FDwnA%2FjPNAXjJWiMjiaO4cIWWLt7%2FpNd6u6LC%2BALkmkw%2BTmvnHvRQxB5c5P%2B5EYy1FBb4%2FXjlusTK2JoquN2%2FDs9c3QOyVuQceNPNZjVG8he1wEGAhF8xj87&X-Amz-Signature=67e7e864b9d191901ea11c2f7d9338a79c9f68563e3c59b7c970842e3176cf58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


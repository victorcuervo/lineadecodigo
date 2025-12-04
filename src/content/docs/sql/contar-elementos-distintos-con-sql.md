---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGK4RXZJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX%2F0%2BiwT8ulWe96KmB8D9Zy%2B9kl6FdfuMfxVBLHFStKQIhAIAftRbYd9PjLOQaPO3EgDLygcrl5QmOOq%2FvvlW1vZ2jKv8DCEkQABoMNjM3NDIzMTgzODA1IgzfQus6p5xTxCrvNssq3AMcNomCYVCME9RGSJ6tzDMwI5eEvZa6ei%2FlMmDTcxxOqS6oQK2bnxHOhIj6T6ACTd%2B8ESZRgYyblgrdc3xb4i8ga6UPhP92Oks6EeUksGjOlMFCoSAPTNu7IiRtpPgingdqYp%2BSvUwaWozh50aRiuhEl5cMMmIgcUbY99sjYcKUwJ07XJmSN4xNL4BRZFjxjW8hSVVr9BQjXFf4kmuo1fXOV93fPaLgKr2bnX8JIG9GZTNenOLIpWn%2FrK7QCQJI%2BDQVBbv000SHV0n%2FEDNck12bQ%2BvMo%2Fuy7BVICtxRzrAKXrXLeCuZxFoAoCILDhZPV3ZQyBgmaU%2FOk%2Bj9ok25hfjDuBd22Ge%2BLEsy72fjY0mp9wcj613Arr1SMMUgk%2FNboEkYQXtjr9ktS0jy0bHvt1B7xneN46RTuptl41nl90ORiXNkFBz12eLBMGOiUnyv%2F8cY62xNbjagb4jJWdCiFOOcno0ed6V13khORRry3EPgJgt8gK9lrmcpJzFBu3ACvJzdTkhw4N4g8zEIXgO7tU5LxN6Thcj%2BwSUzh1eSbn%2Fby4LT3TDtJKNsU3zvNoAUj09uIC91cCR%2BxhxDhJFYG1zMagKzc3a8347%2Bfm8a5PCWU1a%2F4xjp%2BJlU1%2B22WTD328bJBjqkAQDIe%2BhykCfv5KGTWn%2FqU9rREkfV6yJ1UbpNLY5i8K3WrPQOZCHKBU1RLHS3JdmFPOE%2Fo7otoxddKzDQyyREEJtqp5OVv2KvIWd2yKZ0e%2BcXTJ%2B1S7sgcNRClV6S3iB%2BnFNdn0m2AGuJSI5USqgI7dkD4A4DpVn3qbkEDbTckyQ9nLpynv98CN5Jr8nzIHkedAWSxrhrbNnbEusZiSLx4%2F8MZhAq&X-Amz-Signature=8b75e45a30679ef1d33055fe1a0b54a0086f9de3618c6b93a439e3e63ff0dabb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


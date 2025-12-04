---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUVYQN6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd0mil7sivpOvvniWhCndupEZlDJd327krXvHVk72fBQIhALgvrHY%2FXkK6nhhpgVCyiEg4aRZnK9nUi40MQfDTNnstKv8DCEkQABoMNjM3NDIzMTgzODA1IgytCRWKFXgoOXg4dGEq3APMMcnOjjZpSsSQn%2Fwxc9dDPelAXIBAcZfe08WmLxXbWrs2VZi%2BsyJsc9%2FTOQRbmUn03T65MD1BOlVvHjiHVSlydu9XlUJlAWqO37Pf54zgZhKH6gP0mwya2u9lNe46gLJH8pTPtzqibAJ%2BURoJ7I5f3yNPkZPL%2Bo5btSC0U488IwMKYD2u31G9rKsEAerphCb0e5EKW2WXNbqg4HHEgv7NMajVSS9it2iph%2Bygp%2B08ttlRK2ctDHU%2FWv%2BNNL%2FRY2CftyMNGhFdCNlTNDqy9Ub7D0%2Fce0Bqdsod8o%2FESPgQk1xIfbz4Wv0tWE%2B%2FfKELzu%2BIZ3IwNzgg%2BHhvDu3uow9iorxRBGfUTWDdx7fwDshr1n3FuCLPvLHBmYkQFsG2yyGayz7zZuiOR6mHkCaz5EcJIe9p0dMXzWicCSdJfk3T428BQxudig%2B7%2FECrMIFJX%2FC0N9ojoECAbFQRDglR8tlfcLg6g9wTUl22PJOaiS4C1NESFQF1gnw0xTZDAcz6nT%2BI9iNL0Y91ErU6LB3BTU4CPYxOex9ZlqZGGa7YJa%2BEORDgQ%2FBAaY8s5aeChEzH1lmSkeTjpRpgeL%2FONR1TFI3TovaQoqRCNN6OuCN1RHdKAIQTsELUKaPk4Nsm2DDM3MbJBjqkAVwztXXjXuzDHrvcIqSv4jN1KiQ%2BcbRsJ6iny%2BR%2FlmYsI7XaZxzblq8N9O2SSpzGaAJsb9uFp6aaDQNRwZp5dAQcVY%2F4XXUbnH5JeSu8%2BoxNfePJCQ3HPLlRo7dLDpedTzClmqplPbT%2BV%2FU3ftmSG5WSiUShtREdt%2BrJ9a6eO4Dw%2Fkv3KiFoUg5fXM05AT3Fp2b79%2BQLq5mLrPzqDxHjdX2gLtzF&X-Amz-Signature=ae941252b16dcb4f0f9314d7802fd4e01692cc0e33aa0d5c594a88bbf232cd7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


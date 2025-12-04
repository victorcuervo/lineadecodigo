---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YWDVQZN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIFN%2FetkRX7mfbvhM6vg11lBTK%2Fj5%2BhZS%2Bqm0fhuol6ieAiEAvLVk40kYX%2FaKVUFfw7AzzzX9oLJfAK%2FwEqiQliL1Oocq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDP0S3opXdSVUOi%2BaNyrcA29lQEB%2FIfbfFY3OAaUezsqXfFpRqrPCQM5C30BtsRjWFkJ7JpQgrnbz5Ss7SLAUmEOyhDNjXL%2F7BIjk6SVBT9Cd37%2BnapifIpzOyLz3DDCYQr3nQbG893jXpA%2BfY99rOntKGJwdfNej%2BDG2eAsGe8ZcS5ztRpIY7AvWdSatCaeqIuJ9s%2FfutSIXYLVhGNFJtTGXMH3rtR%2BEFfzH0TAMx68zucXg5GRdVjSW%2BXk6rtEVsu946NDscJubRtWp3SI3r561IcNRpx2%2B5%2F%2BAPapAZJvATK%2B9kDEb57z3xmmkgbfnnkg19EKrNrtUhLTwDwbFXzrVO6Ihn3NXqael8zfJ7YVXHaIy1%2FGpdwLIT8CmyxbZg52QbNJh7sRGw9fUecduxECjceDdFUAZCoN156yK2Xo%2FS%2BgTrtW9cy%2Bd7DEBqel066n0VK78Q7%2BBc%2BIQKTbzkJFsL5jCdPxSQBpEMS2wfEmAYhRbYh5oXeivn7WUpoZNenhCD2lkrYCNVMiUdlNrApuEw9vSOIUwzkHJgy6WBNHpEuFqVp0FQrA0CpHLsxce9drFKDe5alRkMASrE5odds58QQkJWA9%2BBDg4NZ5JajMpc%2FJFpyCiWDFsAMeUkBEAesBHKLq9SCLdIBtCMLe%2FxskGOqUBeWxPrjNEUds26GMIuO50Wvgb%2B2y3FCSwViOMf1CG7uE17gvGc%2BfdT3WHNlAwwIcWjqb4ZNnQHosocMeHS1QbW3prl%2BnEZqZDrT7rBSv%2FjSWKuu2U5xO3ia9WwChzAoQNQ%2B9%2FVESEt6BzdqEKTKHbPAX0M1MT36cuui2LZ%2FE1naGrs77Q1l8%2BzwvbwjP7E6ey1W%2F1YQAn13kNOW6XPojqHjuenyfe&X-Amz-Signature=13497b5473f33a6407aaaf03261d516c946a031939b8bd6f555e95f1cb0052e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


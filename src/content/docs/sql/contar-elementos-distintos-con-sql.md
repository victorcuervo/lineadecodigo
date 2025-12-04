---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQBIIBHS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDjjZUJYjawC15RSqP78Ms0R38o2nJIyvxFkpKmU1lXeAIhAPrAwHpNPxOI9Hap8x%2FrLGUqNTKr4lM4fos8NWivoUWyKv8DCEEQABoMNjM3NDIzMTgzODA1IgxzEZ21DJ2BmRvJhskq3AOXXNeZ%2Fds0iKwQHBw%2Bi4P6EKqGYgmxxTQeQWQcG4TpYw7ZeTFc85nxQjF5vJ33o18h6DoTzdeMW8QHqYU2DPXNhwtnFPuO28oGrpfKPe2fEeQj9D2FLbAuX5XmKaTfXcAX%2FRB5BZ4rV6EY3ynK7TRhFw%2BIg2yDIOyKnIBWesUmRmBsFHMmJi69F7H%2B44EtMXQvimK%2FuvnpW2XuoKL66fBosirchSxXfnbc6rHyuY7RFbvLQ6AcCxBCylJkrxb9shoyksYD%2BpsdZF0kV2innj4H2WhKH9bv1ihD9OhjsfmRER2vYbYCyAHx%2BEWj1QXD2ZXG74F91Bop%2BZRvZgGAfZAnr5TdGiqoVmAC6gPthdJqP86oGiTkjoTw4GqyFEpTNw4xLyA3mJKyyvw%2B07QFnkkRmfvzsrXZEP4YgHjzi6MZ5pH%2BFi7lPHiONm8N86EyDKFLGBA6PN%2BpONGFv%2BJL%2BCssh46Ibu8smW6TrncWzP7yenSlvVSlMrBbB3z%2B3U9gFjphfYWtqgyE4Kj4ZXLnGHi05hOoTXm78fw8UCRFp8UUQLfoZ41iUx3KWpw1of1%2BXsvnU4U3H5yQ8MvH0o1iQQBQzja6d1KLRYbPqMe8pgbXSDF32DHZ72BI2yjfqTCQhsXJBjqkAQV5EYvD%2FKyC9TFQuaCTmwIoi3djoWCarum5xTVAjud4CdsAeNMewhopZ2QKKne4J5Xb8tfcQHilKTpJAun%2FpRbjyzchm3YFr1kPLSofIn99a%2BzjkCo%2BzVohZJK7btQlZXFXX8LnXAEuHk56GbS0xLqpmecsDfwtpwTziuale6aPVRyO3lyRngjTDJmsIMXvLfV6sScUD2QTp0Q7N21S%2FoXMZJ1Y&X-Amz-Signature=99b1a276da5e4a376722785185dbf4f19394ea2de79c45cea69aa8574b36dc2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


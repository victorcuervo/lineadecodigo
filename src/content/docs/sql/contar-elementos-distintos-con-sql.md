---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
slug: /sql/contar-elementos-distintos-con-sql/
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMDOMG7N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfAlw9UEDxUne4MXi8MDDcDZ2Fu3tJJRgQbvd9s2qJiQIhAOnSx3EyWTC219r%2BFtN1sxpxPKOhhUpYGiy5mG5Qu2tZKv8DCE8QABoMNjM3NDIzMTgzODA1IgyZNiuzmM%2FASJhZt7gq3AMFX9Gh4pbtiB6qRZRl71ToKwDcXcxNlOj0FGUgDsBq2kiXpwA0zuTuTxY79nnPkqfr3YpTH%2BvjgFdDXI0vumg7DIctrP0yTTUYLslu07n7s7GNaLspRFz7yR6cCy5LQLg86tO8flnqxh%2FBwK2dlTMFEzYhWGKvvOhQWL0bVVquso%2BEJ9mBdKDX2gEXJ%2BQQ01UlOOkrnZk5XxfGst4YusUdVrpYmdGbSWjYGyE3DWJzLYfbZSprrCNaGgUwn8CiLSCQWPT7GeJZfXTyYh2YRyP6macvDMWgSUY92eZNIrOSJotDwpje%2FMwOysQV2HpaXX7%2FM8iHxVkjpvxSMS7wg0MSRBVZFPwGTqsgcvtYvcILBJx%2BXDCgLVdahxu1VhIrSFkCEoS9HZQGVlFIsRX8jlZayh4EQys49h8n1IpKp2Yibvf6WbT%2BX%2FKzxTMvlOHkuP3edu5emFDCbuxqnp%2FuntESWYJX4fMPj4eHQo1%2B70davYVhaScDlNbKPF5ICynqZF%2FeRH7uNWdk33VKoWBADANX8riQCM5pQaaaCl78gCb9C5%2Ba%2BadEJ1ATzNztMGWnhr%2Bw1TSKAOP7FR2DNI7z3G%2FaHc%2F37P6YSWfIoR4GjkufluOOgr6VeOPigTwFNTDVjMjJBjqkASI%2BsZ4KK%2BsgEWTzkW%2FL%2B2G0v1ubHhUudebZMadar9aR8y5aVTUy8df8nn7W%2B2VU4Lva1%2Fw5s1P%2BtAns%2FVkVfkzwTLFuHVAza%2F2jyc7%2FK2szaPEgi4UiZ5s65cdqEE8RKu3cYsagTMWyFyKGO5xT%2Fc1HnhFQHk4KLrTxub7lvUjkAtd%2FpbWR5qrgu3EnZNDCg%2BO%2FT8Gj0flx7BWkFgo8upH2iTfh&X-Amz-Signature=5f19d5777bcc20f410ac400fdf57c4834205ef06699288887a77c74eafe2d79f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


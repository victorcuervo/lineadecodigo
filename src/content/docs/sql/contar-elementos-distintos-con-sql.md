---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR2FJM6C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCMZ45KsMmNcRTA9mUDBlkbNJBReeCIfdMSCLYqoo%2BxOgIgfWzJNabazbA1iYsKlOfK2sV7clwKuYCq4Qi7BFmdOroq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIfkB5liB9DnOhkeQircAwTqYn6gKA6iVT%2BYyXCSo%2Fyqd84Sm1XAyORgX4G8X%2FhgxyRWpezA6OZX03YCZRiJrLZKCLdUYOejm0ZUZk7jZZfbjmtOyi70Ji0oBMRNasGKXCCJL5QauYx%2FYO0zH7FYsVzcnyv9Bs%2FLqwgLWcEKoEZrQkJgpmJJqnRQHqmYUjhlJ4y3rAoU5zxygN8Zcd6CIKKx6yCQ0xRPJVv0a3CUaySIQbgW9zNeTngOIAVRC3uqD0Ka5zu0AYq3uplC6zFKFmh0KVg9TMN3cH1nLX%2F%2B1W1KiVOIe%2F4WA7nfI65nIepotEAVKrBsNj%2BH3NRxPFYjjYoldepTTpQsuLrEnkZJ6KNKEHKqE%2FUShMZo4YMe2vNNw2XEqT8Xn6ihSgmEEpv%2F0k6NpCBxqeaiRWt85MypLXzfl%2FrrigvpZg9422asDIM95NSJLhmbTw1V6KV%2FitXlohXsyRa5u%2Fo1DWYz0y%2Fw0Dv%2FhE%2B%2Byga5pfYCK4%2FisGz%2F3rF%2FIRIFhTQ%2FNeEHpmS3%2FQKjIVaDXpBBEBrXO2FO8UrWBNoHtbaNDjUlp07i4GzSg3gzxEZXvZZh61labdW0HtCZkFD9gDmOMBrW60Ki4JJVHLFXD0BfOO4OLEC98%2FctSUO0eAA4%2FofDWxwcMM%2BQxMkGOqUB1u5NAAn%2BIl9YTvIOkmzM%2BX9HLNQtN4KBFZzPxeEs7kOGgslNT1knQ42e8SoWD0%2F2Gr0S8a1S8LD0pvtwr%2BHrD%2BOwoWOj6AISMfRrs0%2F0%2F%2BRYvKR3puBd2rT40Eu6hI5MgEzATU2PrIzUzyA8WL0FFzl5Swv9VU35FponFeu973JXJbYRqHqbUvx1IZe9N0v1NnFFjnO9M4WprPFWq2GM9fA%2Foui3&X-Amz-Signature=06129a2bc125b97ffa50841ecc5e4a0403378f3c267409c0c62c5c8e273adcb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


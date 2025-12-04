---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHXYNC3T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFu0SHQo7VH%2FzwyWydjQ00FfEACVB8pfcHD7PKubf9oLAiEAnJoTAWY6QaNcRAKilTE4N6PJ6RvOAk2qt%2FGRLZhwt58q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDSlfsNi76zcsBtDQircA0q8i4aLZv31hcIixdUHHT73t6RhUbb8MEUkGaaTPNkvY30WzPmNJnmDUI%2BJxKxjveO7JsKN1Tn8TZHmSSyB%2FUKcRecFP1jNhqmIr2rg6bfu%2Bd7FS4KkfVkxPXHcqKGKjhjjn8BXyEhyl9SpIWHJwIEvwA0DDXvOpvveWYuMw9im7Q4UkN2TaixqpqW7tUuQ0z96US6HiTIaQBUd7bj7kEmn2t4hbSD%2BiZAEJc%2Fs9z9AS1tSmuZszzCSFhxpHR7%2BtalDJTqsJqBiwaFedBvNZPwGQbGH8NQhGltQawbLW%2BLUJrDynHZrJRxdTm8IDgAyQjNhLmVkibUZC4fXn3OyVAZgWIVslRkxoLyjd4JzafA%2BzlHnZMWAgNfVPtDG71sdr6AujS6b2FaIQoAyeUnRgJXMW0oXOIi3kezeDOrV3mhq6MwvSYwIvTkVAE7eDoKYUS0agMnKeNwpxia1BnKyfsgVnkVJj9ioe0yMgNEWgMLsnIhoB9Qi%2BLTQjygyd0hsoZv0JyK0z28cpNelCedXsQv%2BK7AafZlBSP32IGo6j8C%2BzhmsWFl7zZ33o3zy3B1ZaCRnyadxds6lZBtJvBvMU1kL51SjhqeoZpGkk7ShqZrLKu5pRxUxPnOq3nzmMIC1w8kGOqUBsoHgrfY%2FX6nWME0fbVQTTsTU6awDh0PBox15rn89v7H%2FFK%2FQiaQs66%2FWjC0fDfUu0GvoRlFBXxg7V2HzT6J6tLgWXHiUlHgpINR3o2WBjWOMGIZNZpHo67ltsvDM9NzTDoL8YNkGZAD6Dl%2B%2Fk07dsg8BQOHU2wft8FOqN843IVQg7th2BzyqPlckxSbmBaA39mut4wI40ZoXpS760k96GOIYjA7N&X-Amz-Signature=a112f6886f6c09eca27aec257a65160ba56c3ea226b87c8106204544069791cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


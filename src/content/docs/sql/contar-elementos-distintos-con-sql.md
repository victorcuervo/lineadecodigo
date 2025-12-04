---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DKSQG3L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUd9QrFp%2Fkm5Nf8mhXy0um90b0Rit%2BblDSTetx3nO3NAiAGvnPBWtmE1cojmhgRMNdpkvhf6OQj6D9Ted4eH%2B1ltSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMqN7lfCOVYb448b6eKtwDe4oe8X%2FbNRU1tIAQXmUemqOAVg1AScTea79N9JpS1%2FMpk%2BwP0Oz0R1zjl4uUMkNdK2gBkIWScdS0OBP2yOwvI0Uk2JNlELuvbHaDBz3RXmUdgNu9Og2x83ml%2FCKoKiXA3iyUa8Lca9YqFhxEYYtZqOm5hfY9a7vqqLnhBS04Fa62GXIxK237%2F48vAynwQA26zwefdxRVSd0ETw4lFnl3DMZzb%2F%2B1vI3DRmAewgyD%2F1I5dWpUOFQxXczjuX2b8fjAJLHGhEztvEqN5WWU3oyMgCqBkYgjFzi%2BoOPgzz8s8Z2Cmy%2BlLj6eYfdfnzTHZqNhK6gPhkhMMGn2UsBqkipFjtaehbXY0o8qiJlZEtL9vO9t%2F2dnxhYYquHxW74LdxqXp6duZ3p%2FQhp8NKHkb%2F39IDJ49drmSN9QkZ8Xa1KMRtRYJYwf6e0PjsjqbAozM%2Bdn9jy0AP981BWy5agbGyqDERv82aYcn045N7sk4WkBopFc0fkiY6Wa%2FxORGAwAxzXQAh3hx5HypGfhjDEZaMeke3%2BbvIvMR9F76CQ6fqV9T%2B4phsDFafbCXznxa8ARmwL425KjEMzL576WJS6x%2FQrmhngRkLWKzrhnjebyhltDJ9LiMQOmdjbA4Uat9TIw99vGyQY6pgGRq53ZK7bjOYvNljAKO0VbGra1ECx4swkrDDxhEseDmTFusOJUiM0Iy9SlqwDIODDxC02zQqqDjbKRp7J7O2vsGxUQgdXtINWgzS2x4i1eqXSRLxpiFKf2EXRyND1x3a3mGy8fagm6rvk85zP4jBBuoB615GkbZ0Eu2Lea7Cp1BU5jy2wAJDXOjgSIPYSLdDlPq9a7Z5YOuakL2JMd7ZZjrQHiSZx5&X-Amz-Signature=1c8e75e22cebb8c940b1250bfe73e5482f4a82a9006166c9009dbeb374c303ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


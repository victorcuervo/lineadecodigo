---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4FGICI7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDZvfQlPpb6qPl7Nsu7klXH0tEob7VConBDQ0wpG9CyJQIhAKnoMWM4t6XoeqmsrGzfMvuKVtrgr7NU%2FPDjeptokNJHKv8DCDgQABoMNjM3NDIzMTgzODA1IgzVWI4gx4Pd381aeR0q3APEhPfatgGWIpe4zws6AB20LpczwYwrXqHY5sy77BMZ%2BrYwmKQGQaBR64kxuOTDsMf8HG3VU%2B5MUlsUfc5Sl9c9SZv%2BRMn9lgylvl0FSIbqTu81DF3ynFjyepI6cT4uk9ZNen9jZ9T4lJZSTm6MNYhafbRI4lFpSYF84KMTtqHPQ8UNxmgneE6XQJEHlcU%2B7SAUvVn%2BbwvbNOCqHiQ%2F7UZGpBi6IV6%2FLtssqZpXsnIlh7QSj5Tcu3zlM4r7TZrWtW2hayVqgxb5Y3TIsP6fYVwEVS2NNmWJRfKkzMSjG5eieCmPTiA04Q4b6WzYbUAX9slVt6EbZnLD9ezLDecgDI7LAGXcE6Fp3T%2Btlwk9IoLy8usTYFIFywCAXemD0Zc2KyfjgQ6MWCpBTztKyEiMPaxKVfD3BmJIuyIwODXAaGDUEdmdFOEHP1flJqLiiV7Gk8h4V0yN%2Fd%2Fq7By046XxX27ox7ylnHvYMaCowLOwtob8rlPOls0vjvet7MWwYn3Gizn0xNZqJuCfQEdSfpTHBPVy5QbDcoOg5M9B0mEgpEA1bBJ76vlKQ8MWIIqUHCjiF06FPVpXiJ9WcKDo3PQUz819Cic1GjtnzxScl3laqpSBXzOFF73621m%2FwrXnKjD4%2BMLJBjqkATYwXU%2BbQQUwYyuk1DI0uqgeKXU6qBxum5NZBuYkWrLit3497PeO%2FfVsRg6Oy5Cc7gg48DI0TAaCG4pPhhD%2B90ZExhFTmuFrN06J2zj1EEM9pFAfn%2Fcbn%2FZgCjsohf4dBUEStKUl9CbuCQiWUW3%2F8OxEEoAgLucdSmz1CW5mAAE%2B9I3GV1hEdR23VG1jasIR9enGnPvhhO8KxEJfamODFxHECdM2&X-Amz-Signature=14e1aeb9f4dd13dea5e19df6aa6276b635200b99b81365224d511f34da0f5a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


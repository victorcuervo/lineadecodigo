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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJ6VD7E%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDCKcL6KpJqPTQNdHXJi76s6y24Ad%2ByGymXYLWIJQtH6AiEAjhV8vyNas7Yv17HfGGaMYsmEeNWpqHlVituxx97cXSgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE3Twgll6uj4QKsrYSrcA52rtnaO26pSuU%2B%2B4eCJWnFqS2LUZyO%2BIoVu3mbmlbJosUVWGufJxr3yDp%2BI6ESy9qi8yQx%2B%2F1S33Qlpgiz9AvqF%2F3l3BijcifOhIwB2Npe9fXnpqp2KcZA9nClkAy5VTb5aY%2F%2B4pEjHu24gHcc48OkE36bcQ3%2B4YaZJpRtmRCwJrP7AYINnIkrV7P2MlC7pVHmLGjj9p3IVwZOAqA2%2B5dELm7VyUIPisj93lQ0KBYBi6Z5IenF%2B2lgm3VhYq1sg8SNj0shD584LOJ7S%2BoaUhA0%2F1eCmcxFY3bzTD9ndcQWileOKGBsN6RYKTGPzxItZ2LsJPNcV0uRkItUd9330q4buTOZyoFZWpEBfKC8QMd1sC86IOBFB1N1LCDvotAsy8HzV4OtMsXmShw5VOwjQcDFn3P4JqViApqklJ4g7fMLqEiafyS%2BOrw%2BCkXK9f3YyvD0MuUrdTuMk98EE2nrZACcg8YGl%2BtKbxI%2Fh07n56dHpsUg2NkpyVJK2P6jULNoIUjE7DpdPYz0NiPNt6Q849RFXnFK6kEWTjNBkF6XdcZ2nwdxvzTbgO6cncYXreYXEmLOzsCcJ9a9YDL2BYI%2FktHtVr15t9seVL%2FgnUZYg4zVqZ%2FsjRxVHxTvJP6LkMJ32v8kGOqUBN7LE8A5BpA4AlsIhdPQk94V69dGhkkMz5mYsssaJmM%2FOdBBXWeM56w5b1SomB9tG7JMQOjkT55cMYyJDWE38whq6iTPmjO6pOsQMlSa3OSRgBwwuiv75AcMm4p4%2Fd2u%2B4qiMhMctMvERPckv3Vhy4tvAw7pOTBqUlom7Cj6dLkZZ%2BWR6z1d3Lo9ezz5Za0W5OxiBGTqOrQf5HUKdg6w9Bir1ire1&X-Amz-Signature=c6014caa89fb9240aa0bcd39adee438b58fc9f1cd926274a035794e90ad91b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

